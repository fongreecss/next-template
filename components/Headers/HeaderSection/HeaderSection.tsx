import Image from 'next/image'
import Link from 'next/link'
import PopupMenu from '../../Popups/PopupMenu'
import ApplicationLogo from '../../Utils/ApplicationLogo'
import PlainCard from '../../Cards/PlainCard'



const cards = [ 
  {
    id : 1,
    title: 'Docs',
    description: 'Find in-depth information about Next.js features and API.',
    href: 'https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
  },
  {
    id : 2,
    title: 'Templates',
    description: 'Explore the Next.js 13 playground.',
    href: 'https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app',
  },
  {
    id : 3,
    title: 'Deploy',
    description: 'Instantly deploy your Next.js site to a shareable URL with Vercel.',
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
  },
]


const HeaderSection:React.FC = () => {
  return (
    <section className="flex flex-col justify-between items-center py-[6rem] px-8 max-w-7xl mx-auto">
      <div className="flex justify-between w-full align-middle text-base">
        <p className="font-bold">
          <PopupMenu />
        </p>
        <div>
          <Link
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
          <ApplicationLogo size="10px" alt="Vercel Logo" />
          </Link>
        </div>
      </div>

      <div className="py-48">
        <Image
          className={`h-auto w-50`}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-y-3 md:gap-y-0 md:gap-x-3">
        {cards.map((card) => (
          <PlainCard key={card.id} title={card.title} description={card.description} href={card.href} />
        ))}
      </div>
    </section>
  )
}

export default HeaderSection;