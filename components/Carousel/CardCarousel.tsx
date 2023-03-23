import { useState } from "react";

type CardCarouselProps = {
  cards: {
    id: number;
    title: string;
    imageUrl: string;
  }[];
};

const CardCarousel = ({ cards }: CardCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevCard = () => {
    setActiveIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="flex justify-center">
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 rounded-full p-2"
          onClick={prevCard}
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 rounded-full p-2"
          onClick={nextCard}
        >
          &gt;
        </button>
      </div>
      <div className="flex overflow-x-auto">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`w-72 h-96 rounded-lg p-4 ${
              index === activeIndex ? "bg-blue-200" : "bg-gray-200"
            }`}
          >
            <img src={card.imageUrl} alt={card.title} className="h-52" />
            <h2 className="text-lg font-bold">{card.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
