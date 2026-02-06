import { useEffect, useState } from 'react'
import { EventObject } from '../components/Event'
import { API_BASE } from './api'

export type GeminiResult = {
  provided: string[]
  location: string
  date: { year: number; month: number; date: number }
  start: { hour: number; minute: number }
  end?: { hour: number; minute: number }
}
type ScrapedEvent = Omit<GeminiResult, 'provided'> & {
  _id: string
  freeFood: string[]
  postTimestamp?: string
  caption?: string
  sourceId: string
  url: string | null
}

export function useEvents (onOrAfter?: string): EventObject[] {
  const [events, setEvents] = useState<EventObject[]>([])

  useEffect(() => {
    fetch(`${API_BASE}/${onOrAfter ? '?onOrAfter=' + onOrAfter : ''}`)
      .then(r => r.json())
      .then((rawEvents: ScrapedEvent[]) => {
        setEvents(
          rawEvents.flatMap((event): EventObject[] => {
            event.start ??= { hour: 0, minute: 0 }
            return [
              {
                mongoDbId: event._id.toString(),
                postId: event.sourceId,
                /**
                 * URL of referenced post (if available), otherwise URL of story. `null`
                 * means it was a story but was scraped a while ago
                 */
                referencedUrl: event.url,
                freeStuff: event.freeFood.map(item =>
                  item.replace(/^free\s+/i, '')
                ),
                location: event.location,
                start: new Date(
                  Date.UTC(
                    event.date.year,
                    event.date.month - 1,
                    event.date.date,
                    event.start.hour,
                    event.start.minute
                  )
                ),
                end: event.end
                  ? new Date(
                    Date.UTC(
                      event.date.year,
                      event.date.month - 1,
                      event.date.date,
                      event.end.hour,
                      event.end.minute
                    )
                  )
                  : null,
                postTimestamp: event.postTimestamp
                  ? new Date(event.postTimestamp)
                  : null,
                caption: event.caption ?? ''
              }
            ]
          })
        )
      })
  }, [onOrAfter])

  return events
}
