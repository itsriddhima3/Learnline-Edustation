import { useState } from 'react';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

const initialProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1200 },
  { id: 2, name: 'T-Shirt', category: 'Clothing', price: 25 },
  { id: 3, name: 'The Great Gatsby', category: 'Books', price: 15 },
  { id: 4, name: 'Smartphone', category: 'Electronics', price: 800 },
  { id: 5, name: 'Jeans', category: 'Clothing', price: 50 },
  { id: 6, name: 'Sapiens', category: 'Books', price: 20 },
 
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);

  const categories = ['All', 'Electronics', 'Books', 'Clothing'];

 
  const filteredProducts = selectedCategory === 'All'
    ? initialProducts
    : initialProducts.filter(p => p.category === selectedCategory);

  
  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <header className="bg-blue-600 text-white p-6 shadow-lg">
        <h1 className="text-3xl font-bold text-center">Product Store</h1>
      </header>

     
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         
          <div className="lg:col-span-2">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
            />
          </div>

          
          <div className="lg:col-span-1">
            <ShoppingCart
              cart={cart}
              removeFromCart={removeFromCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
