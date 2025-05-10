import { Link } from 'react-router-dom';
import Rating from '../Rating/Rating';
import './ProductCard.css';
import Button from '../Button/Button';

function ProductCard({ id, title, image, price, category, rating }) {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className="product-img" />
        <h3>{title}</h3>
      </Link>
      <p>{category}</p>
      <Rating rate={rating.rate} />
      <p><strong>${price}</strong></p>
      <Button />
    </div>
  );
}

export default ProductCard;