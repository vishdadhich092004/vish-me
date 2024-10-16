/* eslint-disable react/prop-types */
import { cn } from "../../lib/utils";

// Card component that accepts props for customization
const Card = ({ title, description, backgroundImage, hoverImage }) => {
  return (
    <div
      className={cn(
        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
        "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
        // Preload hover image by setting it in a pseudo-element
        "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
        "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
        "transition-all duration-500"
      )}
    >
      <div className="text relative z-50">
        <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
          {title}
        </h1>
        <p className="font-normal text-base text-gray-50 relative my-4">
          {description}
        </p>
      </div>
    </div>
  );
};

// Main grid component
const CardGrid = () => {
  // Sample card data
  const cards = [
    {
      title: "Mountain Sunrise",
      description:
        "Witness the breathtaking view of sunrise over mountain peaks",
      backgroundImage: "/api/placeholder/800/600",
      hoverImage: "/api/placeholder/800/600",
    },
    {
      title: "Ocean Waves",
      description: "Experience the calming motion of ocean waves",
      backgroundImage: "/api/placeholder/800/600",
      hoverImage: "/api/placeholder/800/600",
    },
    {
      title: "Forest Trail",
      description: "Explore the mystical paths through ancient forests",
      backgroundImage: "/api/placeholder/800/600",
      hoverImage: "/api/placeholder/800/600",
    },
    {
      title: "Desert Sunset",
      description: "Marvel at the golden hues of a desert sunset",
      backgroundImage: "/api/placeholder/800/600",
      hoverImage: "/api/placeholder/800/600",
    },
    {
      title: "Northern Lights",
      description: "Watch the magical dance of aurora borealis",
      backgroundImage: "/api/placeholder/800/600",
      hoverImage: "/api/placeholder/800/600",
    },
    {
      title: "City Lights",
      description: "Immerse yourself in the vibrant urban nightlife",
      backgroundImage: "/api/placeholder/800/600",
      hoverImage: "/api/placeholder/800/600",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            backgroundImage={card.backgroundImage}
            hoverImage={card.hoverImage}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
