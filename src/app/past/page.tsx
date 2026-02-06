import { EventList } from '../../components/EventList'
import { useEvents } from '../../lib/useEvents'
import styles from '../page.module.css'

export default function Home () {
  const events = useEvents('2050-01-01')

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
