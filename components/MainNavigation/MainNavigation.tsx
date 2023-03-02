import Link from 'next/link'
import styles from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link className="text-center" href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}   