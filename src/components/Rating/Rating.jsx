import Star from '../Star/Star';

function Rating({ rate }) {
  const fullStars = Math.floor(rate);
  const stars = Array.from({ length: 5 }, (_, i) => i < fullStars);

  return (
    <div>
      {stars.map((filled, i) => (
        <Star key={i} filled={filled} />
      ))}
    </div>
  );
}

export default Rating;
