import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>E-commerce Website</h1>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

**Database**

This code assumes a MongoDB database running on localhost. You'll need to install MongoDB and create a database named "ecommerce" for this code to work.

This is a basic e-commerce website with a backend API that allows you to retrieve a list of products and create new products. The frontend is a simple React app that displays the list of products. Note that this is just a starting point, and you'll need to add more features and functionality to create a fully-fledged e-commerce website.