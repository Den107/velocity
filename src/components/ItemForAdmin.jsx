import React from 'react';
import {Link} from 'react-router-dom'
import '../index.css'

const Item = ({title, price, imageUrl}) => {
    return (
        <div className="product-item__wrapper">
            <button className="product-item__favorite">
            </button>
            <button className="product-item__bascket bottom-0 bg-red-700 rounded-none">
                <img className={'h-full'} src="assets/images/trash.svg" alt="bascket"/>
            </button>
            <button className="product-item__bascket left-0 bottom-0 bg-green-700 rounded-none">
                <img className={'h-full'} src="assets/images/edit.svg" alt="bascket"/>
            </button>
            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
            </a>
            <Link className="product-item" to="/product">
                <p className="product-item__hover-text">посмотреть товар</p>
                <img className="product-item__img" src={imageUrl} alt="prod"/>
                <h4 className="product-item__title">{title}
                </h4>
                <p className="price product-item__price">{price} ₽</p>
                <p className="product-item__notify-text">нет в наличии</p>
            </Link>
        </div>
    );
};

export default Item;