import { EventList } from '../components/EventList'
import { LoadStatus } from '../components/LoadStatus'
import { today } from '../lib/api'
import { useEvents } from '../lib/useEvents'
import styles from './page.module.css'

export default function Home () {
  const { events, state } = useEvents({ onOrAfter: today })

  return (
    <>
      <h1 className={styles.heading}>
        Upcoming <em className={styles.title}>Free Food Events</em>{' '}
        <span className={styles.atUcsd}>
          at UC San Diego
          <sub>TM</sub>
        </span>
      </h1>
      <p className={styles.description}>
        Every day, I scroll through posts and stories posted by UCSD orgs on
        Instagram. I scan them with an LLM to get event information, but it's
        wrong like more than half the time (a.k.a. correct some of the time :D),
        so{' '}
        <a href='https://github.com/SheepTester/ucsd-free-food/issues'>
          prompt engineering ideas
        </a>{' '}
        would be appreciated. If you don't trust AI (which is fair), I also have
        an{' '}
        <a href='https://sheep.thingkingland.app/as-finance/'>
          <strong>alternate list of free food</strong>
        </a>{' '}
        that clubs are ordering using your tuition, pulled directly from
        Associated Students. Let's get your tuition's worth!
      </p>
      <p className={styles.description}>
        Message{' '}
        <a href='https://www.instagram.com/eventcollatorucsd/'>
          @eventcollatorucsd
        </a>{' '}
        if I'm missing any events. Check out the code on{' '}
        <a href='https://github.com/SheepTester/ucsd-free-food/'>GitHub</a>.
        Made by Chaitya and <a href='https://sheeptester.github.io/'>Sean</a>.{' '}
        <a href='./past/'>See past events.</a>
      </p>
      <LoadStatus state={state} />
      <EventList events={events} mode='upcoming' />
    </>
  )
}
