import React , {useState , useEffect} from "react";
import { BrowserRouter as Router , Route ,  Routes } from "react-router-dom";
import HomePage from "./components/Homepage";
import UploadProductPage from "./components/uploadProductPage";



const App = () => {
  const [products , setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  },[]);

  const addProduct = async (product) => {
    const response = await fetch('http://localhost:5000/api/products', {
      method : 'POST',
      headers : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(product),
    });
    const newProduct = await response.json();
    setProducts([...products , newProduct]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/upload" element={<UploadProductPage addProduct={addProduct} />} />
      </Routes>
    </Router>
  )
}

export default App;