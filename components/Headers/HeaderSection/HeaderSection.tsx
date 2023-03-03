import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import styles from './HeaderSection.module.css'

const roboto = Roboto({ subsets: ['latin'] })
/*

.description {
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    font-size: 0.85rem;
    max-width: var(--max-width);
    width: 100%;
    z-index: 2;
    font-family: var(--font-mono);
}

.description a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.description p {
    position: relative;
    margin: 0;
    padding: 1rem;
    background-color: rgba(var(--callout-rgb), 0.5);
    border: 1px solid rgba(var(--callout-border-rgb), 0.3);
    border-radius: var(--border-radius);
}
*/
export default function HeaderSection() {
  return (
    <section className="flex flex-col justify-between items-center p-[6rem]">
      <div className="flex justify-between w-full align-middle text-base">
        <p className="font-bold">Get started by editing</p>
        <div>
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
          />
          </Link>
        </div>
      </div>

      <div className="py-48">
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="grid grid-cols-3 w-full gap-x-3">
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`${roboto.className} font-sans`}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={roboto.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={roboto.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={roboto.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={roboto.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={roboto.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </section>
  )
}
