import { useState } from 'react';
import productData from './Product'; // assuming product data is exported as productData
import './Productscard.css';

const Productcard= () => {
  const [products, setProducts] = useState(productData);

  const handleAdd = (product) => {
    const updatedProducts = products.map(p => {
      if (p.id === product.id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
    setProducts(updatedProducts);
  };

  const handleRemove = (productId) => {
    const updatedProducts = products.map(p => {
      if (p.id === productId && p.quantity > 0) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    setProducts(updatedProducts);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    const updatedProducts = products.map(p => {
      if (p.id === productId) {
        return { ...p, quantity: parseInt(newQuantity, 10) || 0 };
      }
      return p;
    });
    setProducts(updatedProducts);
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <button onClick={() => handleAdd(product)}>Add</button>
          <button onClick={() => handleRemove(product.id)}>Remove</button>
          <input
            type="number"
            value={product.quantity}
            onChange={(e) => handleUpdateQuantity(product.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default Productcard;
