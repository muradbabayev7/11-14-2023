import './App.css';
// import Card from './components/card';
import Cards from './components/Cards';
import Header from './components/Header';
import { useState } from 'react';

const myProducts=[
  {
    "id": 1,
    "title": "Fjallraven - Foldsack No.",
    "price": 109.95,
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
    "id": 2,
    "title": "Mens Casual Premium  ",
    "price": 22.3,
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    },
    {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    },
    {
    "id": 4,
    "title": "Mens Casual Slim",
    "price": 15.99,
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
    "id": 5,
    "title": "John Hardy Women's",
    "price": 695,
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    },
    // {
    // "id": 6,
    // "title": "Solid Gold Petite Micropave ",
    // "price": 168,
    // "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    // "category": "jewelery",
    // "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    // }
]

function App() {
  const [products, setProducts] = useState(myProducts)
  return (
    <div className="App">
      <Header Fidan={products}/>
      <Cards Murad={products} />+
    </div>
  );
}

export default App;
