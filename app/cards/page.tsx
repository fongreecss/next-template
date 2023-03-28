import Image from 'next/image'
import CardCarousel from '@/components/components/Carousel/CardCarousel'

export const metadata = {
  title: 'Cards Page',
  description: 'Cards description',
}

export default function CardsPage() {

  const cards = [
  {
    id: 1,
    title: 'Card 1',
    imageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 2,
    title: 'Card 2',
    imageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 3,
    title: 'Card 3',
    imageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 4,
    title: 'Card 4',
    imageUrl: 'https://picsum.photos/200/300',
  },
  {
    id: 5,
    title: 'Card 5',
    imageUrl: 'https://picsum.photos/200/300',
  },
];

  return (
    <section className="flex flex-col justify-between py-[6rem] px-8 max-w-7xl mx-auto">
      <h2 className="">Cards</h2>
        <CardCarousel cards={cards} />
    </section>
  )
}
