import Link from 'next/link'
import styles from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link className="" href="/">Home</Link>
        </li>
        <li>
          <Link className="" href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}   