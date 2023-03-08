import React, { ReactNode, useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {Button} from "react-bootstrap";
import './Custom.css';
import { ProductAPI } from '../App';

type CardProps = {setItems : Function, product : ProductAPI, index : number}

export const Card = (props: CardProps) => {
  const product = props.product;
  const changeQty = (value: number) => {
    props.setItems((prevState : ProductAPI[]) => {
      prevState[props.index].quantity = Math.max(prevState[props.index].quantity! + value, 0);
      return [...prevState];
    })
  }

    return (
    <div className="card flex-center" style={{width: '18rem'}}>
    
    <img src={product.image} />
    <div className="card-body flex-center">
        <h5 className="card-title">{product.title} {props.index}</h5>
        <p className="card-text">{product.description}</p>
        <a href="#" className="btn btn-primary price">{product.price}</a>
        <hr></hr>
        <div>
        <button className='btn btn-primary space-button' onClick={() => changeQty(1)}>+</button>
        <span>{product.quantity}</span>
        <button className='btn btn-primary' onClick={() => changeQty(-1)}>-</button>
        </div>
    </div>
    </div>
    )
}
