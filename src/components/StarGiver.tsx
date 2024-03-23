

interface StarGiverProps {
    rating: number
}


const StarGiver = ({ rating }: StarGiverProps) => {
  const maxStars = 5;
  const filledStars = Math.min(Math.max(1, rating), maxStars); // Ensure rating is between 1 and 5

  return (
    <div className="flex">
      {[...Array(maxStars)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={index < filledStars ? "gold" : "none"}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M10 0l2.754 6.742L20 7.741l-5.26 4.562L16.46 20 10 16.383 3.54 20l1.72-7.697L0 7.741l6.246-.999L10 0z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarGiver;