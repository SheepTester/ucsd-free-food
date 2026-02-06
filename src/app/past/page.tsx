import { EventList } from '../../components/EventList'
import { LoadStatus } from '../../components/LoadStatus'
import { like30DaysAgo, today } from '../../lib/api'
import { useEvents } from '../../lib/useEvents'
import styles from '../page.module.css'

export default function Home () {
  const { events, state } = useEvents({
    onOrBefore: today,
    onOrAfter: like30DaysAgo
  })

  return (
    <>
      <h1 className={styles.heading}>
        Past <em className={styles.title}>Free Food Events</em>{' '}
        <span className={styles.atUcsd}>
          at UC San Diego
          <sub>TM</sub>
        </span>
      </h1>
      <p className={styles.description}>
        This list only shows events from the past 30 days because I'm worried
        listing the entire scraped event history will strain my server.{' '}
        <a href='../'>See upcoming events.</a>
      </p>
      <LoadStatus state={state} />
      <EventList events={events} mode='past' />
    </>
  )
}
