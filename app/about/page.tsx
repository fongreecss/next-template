import Image from 'next/image'
import styles from './about.module.css'

export const metadata = {
  title: 'About Page',
  description: 'About Page description',
}

export default function AboutPage() {
  return (
    <section className="flex flex-col justify-between py-[6rem] px-8 max-w-7xl mx-auto">
      <h2 className="">About Page</h2>
    </section>
  )
}
