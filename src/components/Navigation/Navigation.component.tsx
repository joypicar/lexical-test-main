import { Link } from 'react-router-dom'
import styles from './Navigation.module.scss'

export function Navigation() {
  return (
    <nav className={styles.Navigation}>
      <ul>
        <li>
          <Link to="/">Playground</Link>
        </li>
        <li>
          <Link to="/auto-focus">Auto Focus</Link>
        </li>
      </ul>
    </nav>
  )
}
