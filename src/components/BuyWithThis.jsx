import React from 'react';

const BuyWithThis = () => {
    return (
        <section className="products">
            <div className="container">
                <div className="products__inner">
                    <h3 className="product__title">С этим товаром покупают</h3>
                    <div className="tabs-wrapper">
                        <div className="tabs products__tabs mobile-overflow">
                            <a className="tab tab--active products__tab" href="#popular-tab-1">Велосипеды</a>
                            <a className="tab products__tab" href="#popular-tab-2">Аксессуары</a>
                            <a className="tab products__tab" href="#popular-tab-3">Запчасти</a>
                            <a className="tab products__tab" href="#popular-tab-4">Инструменты</a>
                            <a className="tab products__tab" href="#popular-tab-5">Электроника</a>
                            <a className="tab products__tab" href="#popular-tab-6">Экипировка</a>
                        </div>
                    </div>
                    <div className="tabs-container products__container">
                        <div id="popular-tab-1"
                             className="tabs-content products__content tabs tabs-content--active">
                            <div className="product-slider">
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/pop-1.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">BRP Audio-портативная система</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper product-item__not-available">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/pop-2.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Garmin Echomap Plus 62cv
                                            </h4>
                                            <p className="price product-item__price">45 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item product-item--sale" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/pop-3.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">
                                                RF D.E.S.S.TM Key</h4>
                                            <p className="price product-item__price">5 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper product-item__not-available">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/pop-4.webp"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Велошлем</h4>
                                            <p className="price product-item__price">7 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/pop-1.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">BRP Audio-портативная система</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/pop-2.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Garmin Echomap Plus 62cv
                                            </h4>
                                            <p className="price product-item__price">45 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/pop-3.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">
                                                RF D.E.S.S.TM Key</h4>
                                            <p className="price product-item__price">5 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="popular-tab-2" className="tabs-content products__content tabs">
                            <div className="product-slider">
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/pop-1.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">BRP Audio-портативная система</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper product-item__not-available">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/pop-2.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Garmin Echomap Plus 62cv
                                            </h4>
                                            <p className="price product-item__price">45 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item product-item--sale" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/pop-3.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">
                                                RF D.E.S.S.TM Key</h4>
                                            <p className="price product-item__price">68 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper product-item__not-available">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/pop-4.webp"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Велошлем</h4>
                                            <p className="price product-item__price">7 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/pop-1.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">BRP Audio-портативная система</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/pop-2.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Garmin Echomap Plus 62cv
                                            </h4>
                                            <p className="price product-item__price">45 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-3.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">
                                                BRP Audio-Premium System</h4>
                                            <p className="price product-item__price">68 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="popular-tab-3" className="tabs-content products__content tabs">
                            <div className="product-slider">
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-1.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Водонепроницаемый
                                                Рюкзак</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper product-item__not-available">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-2.webp"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Велоперчатки Polednik RASTER
                                            </h4>
                                            <p className="price product-item__price">6 900 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item product-item--sale" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-3.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">
                                                BRP Audio-Premium System</h4>
                                            <p className="price product-item__price">68 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper product-item__not-available">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-4.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Спасательное
                                                снаряжение</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-1.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Водонепроницаемый
                                                Рюкзак</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-2.webp"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Велоперчатки Polednik RASTER
                                            </h4>
                                            <p className="price product-item__price">6 900 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-3.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">
                                                BRP Audio-Premium System</h4>
                                            <p className="price product-item__price">68 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="popular-tab-4" className="tabs-content products__content tabs">
                            <div className="product-slider">
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-1.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Водонепроницаемый
                                                Рюкзак</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper product-item__not-available">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-2.webp"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Велоперчатки Polednik RASTER
                                            </h4>
                                            <p className="price product-item__price">6 900 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item product-item--sale" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-3.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">
                                                BRP Audio-Premium System</h4>
                                            <p className="price product-item__price">68 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper product-item__not-available">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-4.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Спасательное
                                                снаряжение</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-1.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Водонепроницаемый
                                                Рюкзак</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-2.webp"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Велоперчатки Polednik RASTER
                                            </h4>
                                            <p className="price product-item__price">6 900 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-3.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">
                                                BRP Audio-Premium System</h4>
                                            <p className="price product-item__price">68 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="popular-tab-5" className="tabs-content products__content tabs">
                            <div className="product-slider">
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-1.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Водонепроницаемый
                                                Рюкзак</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper product-item__not-available">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-2.webp"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Велоперчатки Polednik RASTER
                                            </h4>
                                            <p className="price product-item__price">6 900 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item product-item--sale" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-3.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">
                                                BRP Audio-Premium System</h4>
                                            <p className="price product-item__price">68 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper product-item__not-available">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-4.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Спасательное
                                                снаряжение</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-1.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Водонепроницаемый
                                                Рюкзак</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-2.webp"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Велоперчатки Polednik RASTER
                                            </h4>
                                            <p className="price product-item__price">6 900 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-3.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">
                                                BRP Audio-Premium System</h4>
                                            <p className="price product-item__price">68 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="popular-tab-6" className="tabs-content products__content tabs">
                            <div className="product-slider">
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-1.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Водонепроницаемый
                                                Рюкзак</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper product-item__not-available">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-2.webp"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Велоперчатки Polednik RASTER
                                            </h4>
                                            <p className="price product-item__price">6 900 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item product-item--sale" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-3.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">
                                                BRP Audio-Premium System</h4>
                                            <p className="price product-item__price">68 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper product-item__not-available">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-4.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Спасательное
                                                снаряжение</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-1.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Водонепроницаемый
                                                Рюкзак</h4>
                                            <p className="price product-item__price">9 800 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-2.webp"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">Велоперчатки Polednik RASTER
                                            </h4>
                                            <p className="price product-item__price">6 900 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-slider__item">
                                    <div className="product-item__wrapper">
                                        <button className="product-item__favorite">
                                        </button>
                                        <button className="product-item__bascket">
                                            <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                        </button>
                                        <a className="product-item__notify-link" href="#">
                                            <span>Сообщить о поступлении</span> </a>
                                        <a className="product-item" href="#">
                                            <p className="product-item__hover-text">посмотреть товар</p>
                                            <img className="product-item__img" src="assets/images/content/prod-3.png"
                                                 alt="prod"/>
                                            <h4 className="product-item__title">
                                                BRP Audio-Premium System</h4>
                                            <p className="price product-item__price">68 000 ₽</p>
                                            <p className="product-item__notify-text">нет в наличии</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuyWithThis;