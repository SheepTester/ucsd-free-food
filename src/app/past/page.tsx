import { EventList } from '../../components/EventList'
import { like30DaysAgo, today } from '../../lib/api'
import { useEvents } from '../../lib/useEvents'
import styles from '../page.module.css'

export default function Home () {
  const events = useEvents({ onOrBefore: today, onOrAfter: like30DaysAgo })

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
        <a href='../'>See upcoming events.</a>
      </p>
      <EventList events={events} mode='past' />
    </>
  )
}
