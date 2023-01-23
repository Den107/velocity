import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import '../index.css'
import axios from "axios";


const Item = ({title, price, imageUrl, deleteIns, _id, updateIns}) => {



    return (
        <div className="product-item__wrapper ">
            <button className="product-item__favorite">
            </button>
            <button onClick={()=>deleteIns(_id)} className="product-item__bascket  bg-white rounded-none bottom-1 right-1">
                <img className={'h-full'} src="assets/images/trash.svg" alt="bascket"/>
            </button>
            <button onClick={()=>updateIns(_id)} className="product-item__bascket   rounded-none bg-white bottom-1 left-1">
                <img className={'h-full'} src="assets/images/edit.svg" alt="bascket"/>
            </button>
            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
            </a>
            <div className="product-item">
                {/*<p className="product-item__hover-text">посмотреть товар</p>*/}
                <img className="product-item__img" src={imageUrl} alt="prod"/>
                <h4 className="product-item__title">{title}
                </h4>
                <p className="price product-item__price">{price} ₽</p>
                <p className="product-item__notify-text">нет в наличии</p>
            </div>
        </div>
    );
};

export default Item;