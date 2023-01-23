import React from 'react';
import {Link} from 'react-router-dom'

const Item = ({title, price, imageUrl, _id}) => {
    return (
        <div className="product-item__wrapper">
            <button className="product-item__favorite">
            </button>
            <button className="product-item__bascket">
                <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
            </button>
            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
            </a>
            <Link className="product-item" to={`/productSpares/${_id}`}>
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