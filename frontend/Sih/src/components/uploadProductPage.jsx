import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadProductPage = ({ addProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    type: '',
    price: '',
    details: {
      manufactureDate: '',
      expiryDate: '',
    },
    image: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'manufactureDate' || name === 'expiryDate') {
      setProduct({
        ...product,
        details: { ...product.details, [name]: value },
      });
    } else {
      setProduct({
        ...product,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    await addProduct(product); // Call the addProduct prop passed from the parent component
    navigate('/'); // Navigate back to the home page
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProduct({ ...product, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="container  mx-auto p-6 ">
      <h1 className="text-4xl font-bold text-center mb-6 " >Upload Product</h1>
      <form className="max-w-lg mx-auto bg-gray-200 shadow-xl p-6 rounded-lg space-y-4 " onSubmit={handleSubmit}>
        <div className='flex flex-col '>
          <label className='font-bold mb-1'>Crop Name</label>
          <input
            type="text"
            name="name"
            placeholder="Crop Name"
            value={product.name}
            onChange={handleChange}
             className="border rounded p-2"
            required
        />
        </div>
        
        <div className='flex flex-col'>
          <label className='font-bold mb-1'>Crop Type</label>
          <input
            type="text"
            name="type"
            placeholder="Crop Type"
            value={product.type}
            onChange={handleChange}
             className="border rounded p-2"
            required
        />
        </div>
        
        <div className='flex flex-col'>
          <label className='font-bold mb-1'>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Crop Price"
            value={product.price}
            onChange={handleChange}
             className="border rounded p-2"
            required
        />
        </div>
        
        <div className='flex flex-col'>
          <label className='font-bold mb-1'>Manufacture Date</label>
          <input
            type="date"
            name="manufactureDate"
            placeholder="Manufacture Date"
            value={product.details.manufactureDate}
            onChange={handleChange}
             className="border rounded p-2"
            required
        />
        </div>
        
        <div className='flex flex-col'>
          <label className='font-bold mb-1'>Expiry Date</label>
          <input
            type="date"
            name="expiryDate"
            placeholder="Expiry Date"
            value={product.details.expiryDate}
            onChange={handleChange}
            className="border rounded p-2"
            required
        />
        </div>

        <div className='flex flex-col'>
          <label className='font-bold mb-1'>Image URL</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="border rounded p-2" />
        </div>
        
        
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition" type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default UploadProductPage;
