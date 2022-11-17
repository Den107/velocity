import React, {Fragment} from 'react';

import '../assets/css/fonts.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <section className="banner-section page-section">
                <div className="container">
                    <div className="banner-section__inner">
                        <div className="banner-section__slider">
                            <a className="banner-section__slider-item" href="#">
                                <img className="banner-section__slider-img" src="assets/images/slider-banner1.webp"
                                     alt="banner-slider"/>
                            </a>
                            <a className="banner-section__slider-item" href="#">
                                <img className="banner-section__slider-img" src="assets/images/slider-banner2.webp"
                                     alt="banner-slider"/>
                            </a>
                            <a className="banner-section__slider-item" href="#">
                                <img className="banner-section__slider-img" src="assets/images/slider-banner3.webp"
                                     alt="banner-slider"/>
                            </a>
                            <a className="banner-section__slider-item" href="#">
                                <img className="banner-section__slider-img" src="assets/images/slider-banner4.webp"
                                     alt="banner-slider"/>
                            </a>
                            <a className="banner-section__slider-item" href="#">
                                <img className="banner-section__slider-img" src="assets/images/slider-banner5.webp"
                                     alt="banner-slider"/>
                            </a>
                            <a className="banner-section__slider-item" href="#">
                                <img className="banner-section__slider-img" src="assets/images/slider-banner6.webp"
                                     alt="banner-slider"/>
                            </a>
                        </div>
                        <a className="banner-section__item sale-item" href="#">
                            <div className="sale-item__top">
                                <p className="sale-item__info">акция</p>
                                <div className="sale-item__price">
                                    <div className="price sale-item__price-new">190 000</div>
                                    <div className="price sale-item__price-old">225 000</div>
                                </div>
                            </div>
                            <img className="sale-item__img" src="assets/images/content/sale.webp" alt="sale-item-img"/>
                            <h5 className="sale-item__title">
                                Велосипед STINGER 29" VEGA STD 2022 зеленый, алюминий, размер 19"
                            </h5>
                            <p className="sale-item__footer">
                                Акция действует до <span>31.08.2023</span>
                            </p>
                        </a>
                    </div>
                </div>
            </section>

            <div className="search page-section">
                <div className="container">
                    <div className="search__inner">
                        <div className="search__tabs tabs-wrapper">
                            <div className="mobile-overflow">
                                <a className="tab search__tabs-item tab--active" href="#tab-1">Поиск по номеру</a>
                                <a className="tab search__tabs-item" href="#tab-2">Поиск по марке</a>
                                <a className="tab search__tabs-item" href="#tab-3">Поиск по названию товара</a>
                            </div>
                        </div>
                        <div className="search__content">
                            <div id="tab-1" className="tabs-content search__content-item tabs-content--active">
                                <form className="search__content-form">
                                    <input className="search__content-input" type="text" placeholder="Введите номер"/>
                                    <button className="search__content-btn" type="submit">искать</button>
                                </form>
                            </div>
                            <div id="tab-2" className="tabs-content search__content-item">
                                <form className="search__content-form">
                                    <input className="search__content-input" type="text" placeholder="Введите марку"/>
                                    <button className="search__content-btn" type="submit">искать</button>
                                </form>
                            </div>
                            <div id="tab-3" className="tabs-content search__content-item">
                                <form className="search__content-form">
                                    <input className="search__content-input" type="text"
                                           placeholder="Введите название"/>
                                    <button className="search__content-btn" type="submit">искать</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="categories page-section">
                <div className="container">
                    <div className="categories__inner">
                        <a className="categories__item" href="#">
                            <div className="categories__item-info">
                                <h4 className="categories__item-title">
                                    Велосипеды
                                </h4>
                                <p className="categories__item-text">
                                    Подробнее
                                </p>
                            </div>
                            <div className="categories__item-img">
                                <img src="assets/images/cat-1.png" alt="cat"/>
                            </div>
                        </a>
                        <a className="categories__item" href="#">
                            <div className="categories__item-info">
                                <h4 className="categories__item-title">
                                    Аксессуары
                                </h4>
                                <p className="categories__item-text">
                                    Подробнее
                                </p>
                            </div>
                            <div className="categories__item-img">
                                <img src="assets/images/cat-2.png" alt="cat"/>
                            </div>
                        </a>
                        <a className="categories__item" href="#">
                            <div className="categories__item-info">
                                <h4 className="categories__item-title">
                                    Запчасти
                                </h4>
                                <p className="categories__item-text">
                                    Подробнее
                                </p>
                            </div>
                            <div className="categories__item-img">
                                <img src="assets/images/cat-3.png" alt="cat"/>
                            </div>
                        </a>
                        <a className="categories__item" href="#">
                            <div className="categories__item-info">
                                <h4 className="categories__item-title">
                                    Иструменты
                                </h4>
                                <p className="categories__item-text">
                                    Подробнее
                                </p>
                            </div>
                            <div className="categories__item-img">
                                <img src="assets/images/cat-4.webp" alt="cat"/>
                            </div>
                        </a>
                        <a className="categories__item" href="#">
                            <div className="categories__item-info">
                                <h4 className="categories__item-title">
                                    Электроника
                                </h4>
                                <p className="categories__item-text">
                                    Подробнее
                                </p>
                            </div>
                            <div className="categories__item-img">
                                <img src="assets/images/cat-5.webp" alt="cat"/>
                            </div>
                        </a>
                        <a className="categories__item" href="#">
                            <div className="categories__item-info">
                                <h4 className="categories__item-title">
                                    Экипировка
                                </h4>
                                <p className="categories__item-text">
                                    Подробнее
                                </p>
                            </div>
                            <div className="categories__item-img">
                                <img src="assets/images/cat-6.png" alt="cat"/>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section className="products">
                <div className="container">
                    <div className="products__inner">
                        <h3 className="product__title">Популярные товары</h3>
                        <div className="tabs-wrapper">
                            <div className="tabs products__tabs mobile-overflow">
                                <a className="tab tab--active products__tab" href="#product-tab-1">Велосипеды</a>
                                <a className="tab products__tab" href="#product-tab-2">Аксессуары</a>
                                <a className="tab products__tab" href="#product-tab-3">Запчасти</a>
                                <a className="tab products__tab" href="#product-tab-4">Инструменты</a>
                                <a className="tab products__tab" href="#product-tab-5">Электроника</a>
                                <a className="tab products__tab" href="#product-tab-6">Экипировка</a>
                            </div>
                        </div>
                        <div className="tabs-container products__container">
                            <div id="product-tab-1"
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
                            <div id="product-tab-2" className="tabs-content products__content tabs">
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
                            <div id="product-tab-3" className="tabs-content products__content tabs">
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
                            <div id="product-tab-4" className="tabs-content products__content tabs">
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
                            <div id="product-tab-5" className="tabs-content products__content tabs">
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
                            <div id="product-tab-6" className="tabs-content products__content tabs">
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

                        <div className="product__more">
                            <a className="product__more-link" href="#">Показать ещё</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="banner">
                <div className="container">
                    <a className="banner__link" href="#">
                        <img src="assets/images/content/banner.jpg" alt="banner"/>
                    </a>
                </div>
            </div>

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
            <Footer/>
        </Fragment>
    );
};

export default Home;