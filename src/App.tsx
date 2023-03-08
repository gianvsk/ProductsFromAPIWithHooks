import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import {Container} from './components/Box';
import {Card} from './components/Card';
import './App.css';

export type ProductAPI = {
  id: string,
  title : string,
  price : number,
  description : string,
  category: string,
  image : string,
  quantity? : number,
  rating : {
    rate : number,
    count: number;
  }

}

function App() {
  const [tot, setTot] = useState(0);
  const [items, setItems] = useState<ProductAPI[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          data = [...data].map(el => {return {...el, quantity:0}})
          setItems(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  useEffect(() => setTot(items.reduce((acc, {price,quantity}) => acc + price * quantity!, 0)), [items] )

  return (
    <>
      <h1>{tot}</h1>
      {items.map((item, index) => 
        <Container key={index}>
          <Card key={index} setItems={setItems} product={item} index={index}></Card>
        </Container>
      )}
      
    </>
  )
}

export default App;
