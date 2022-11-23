import React from 'react';

const Item = () => {
    return (
        <div className="product-item__wrapper">
            <button className="product-item__favorite">
            </button>
            <button className="product-item__bascket">
                <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
            </button>
            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
            </a>
            <a className="product-item" href="product-page.html">
                <p className="product-item__hover-text">посмотреть товар</p>
                <img className="product-item__img" src="assets/images/content/Bicycle1.png" alt="prod"/>
                <h4 className="product-item__title">Велосипед GT
                </h4>
                <p className="price product-item__price">49 500 ₽</p>
                <p className="product-item__notify-text">нет в наличии</p>
            </a>
        </div>
    );
};

export default Item;