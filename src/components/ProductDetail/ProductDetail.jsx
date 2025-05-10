import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rating from '../Rating/Rating';
import Button from '../Button/Button';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <img src={product.image} alt={product.title} width="200" />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>{product.category}</p>
      <Rating rate={product.rating.rate} />
      <h3>${product.price}</h3>
      <Button />
    </div>
  );
}

export default ProductDetail;
