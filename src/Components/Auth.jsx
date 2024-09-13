// src/components/AuthProduct.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthProduct = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8704/authRouter/register', {
        email,
        password,
      });
      toast.success('Registration successful!');
      console.log('Registration data:', response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed!');
      console.error('Registration error:', error.response?.data || error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8704/authRouter/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful!');
      console.log('Login data:', response.data);
      navigate('/products');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed!');
      console.error('Login error:', error.response?.data || error);
    }
  };

  const handleAddProduct = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('You need to log in first!');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8704/authRouter/products',
        { name: productName, price: productPrice },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('Product added successfully!');
      console.log('Product data:', response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to add product!');
      console.error('Add product error:', error.response?.data || error);
    }
  };

  return (
    <div>
      <h1>Auth Product Component</h1>

      <div>
        <h2>Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleRegister}>Register</button>
      </div>

      <div>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>

      <div>
        <h2>Add Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      {/* Toast Container for displaying notifications */}
      <ToastContainer />
    </div>
  );
};

export default AuthProduct;
