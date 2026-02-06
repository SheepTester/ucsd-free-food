import { useEffect, useState } from 'react'
import { LoadState } from '../../lib/useEvents'
import styles from './styles.module.css'

export type LoadStatusProps = { state: LoadState }
export function LoadStatus ({ state }: LoadStatusProps) {
  const [dots, setDots] = useState(3)

  useEffect(() => {
    if (state !== 'loading') {
      return
    }
    const intervalId = setInterval(() => setDots(dots => (dots % 3) + 1), 500)
    return () => clearInterval(intervalId)
  }, [state])

  switch (state) {
    case 'done': {
      return null
    }
    case 'loading': {
      return (
        <div className={`${styles.status} ${styles.loading}`}>
          <p>Loading{'.'.repeat(dots)}</p>
        </div>
      )
    }
    case 'error': {
      return (
        <div className={`${styles.status} ${styles.error}`}>
          <p>
            I couldn't get the list of events. My server is probably down; maybe
            my house briefly lost power. If you see this, try reaching out to me
            so I can turn it back on.
          </p>
        </div>
      )
    }
  }
}
