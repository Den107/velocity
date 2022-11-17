import React, {Fragment} from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";

const Catalog = () => {
    return (
        <Fragment>
            <Header/>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbs__inner">
                        <ul className="breadcrumbs__list mobile-overflow">
                            <li className="breadcrumbs__list-item"><a href="index.html">Главная</a></li>
                            <li className="breadcrumbs__list-item"><span>Гидроциклы</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="catalog">
                <div className="container">
                    <h2 className="catalog__title">Гидроциклы</h2>
                    <div className="catalog__filter">
                        <div className="catalog__filter-itemsinner">
                            <div className="catalog__filter-items mobile-overflow">
                                <button>Полноприводные</button>
                                <button>от 5000</button>
                                <button>BRP</button>
                                <button>еще</button>
                            </div>
                        </div>

                        <div className="catalog__filter-btn">
                            <select className="filter-style select-item">
                                <option>По полулярности</option>
                                <option>По названию</option>
                                <option>По цене</option>
                            </select>
                            <button
                                className="catalog__filter-btngrid catalog__filter-button catalog__filter-button--active">
                                <svg width="23" height="21" viewBox="0 0 23 21" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="21" height="19" stroke="#2F3035" stroke-width="2"/>
                                    <rect x="7" y="6" width="2" height="2" fill="#2F3035" stroke="#2F3035"
                                          stroke-width="2"/>
                                    <rect x="7" y="13" width="2" height="2" fill="#2F3035" stroke="#2F3035"
                                          stroke-width="2"/>
                                    <rect x="14" y="6" width="2" height="2" fill="#2F3035" stroke="#2F3035"
                                          stroke-width="2"/>
                                    <rect x="14" y="13" width="2" height="2" fill="#2F3035" stroke="#2F3035"
                                          stroke-width="2"/>
                                </svg>

                            </button>
                            <button className="catalog__filter-btnline catalog__filter-button">
                                <svg width="25" height="19" viewBox="0 0 25 19" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="1">
                                        <rect x="6" width="19" height="3" rx="1.5" fill="#2F3035"/>
                                        <rect x="6" y="8" width="19" height="3" rx="1.5" fill="#2F3035"/>
                                        <rect x="6" y="16" width="19" height="3" rx="1.5" fill="#2F3035"/>
                                        <rect width="3" height="3" rx="1.5" fill="#2F3035"/>
                                        <rect y="8" width="3" height="3" rx="1.5" fill="#2F3035"/>
                                        <rect y="16" width="3" height="3" rx="1.5" fill="#2F3035"/>
                                    </g>
                                </svg>

                            </button>
                        </div>
                    </div>
                    <div className="catalog__inner">
                        <div className="aside__btn">
                            Фильтр
                        </div>
                        <aside className="catalog__inner-aside aside-filter">
                            <div className="tabs-wrapper tabs-wrapper--no-scroll">
                                <div className="tabs aside-filter__tabs">
                                    <a className="tab aside-filter__tab tab--active"
                                       href="#filter-1"><span>Параметры</span></a>
                                    <a className="tab aside-filter__tab" href="#filter-2"><span>по марке</span></a>
                                </div>
                            </div>
                            <div className="tabs-container">
                                <div id="filter-1"
                                     className="tabs-content aside-filter__tabs-content tabs-content--active">
                                    <form className="aside-filter__form">
                                        <ul className="aside-filter__list">
                                            <li className="aside-filter__item-drop">
                                                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">Наличие</p>
                                                <div className="aside-filter__content">
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            В наличии
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            Под заказ
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="aside-filter__item-drop">
                                                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">Новинки</p>
                                                <div className="aside-filter__content aside-filter__content-radio">
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" name="radio" type="radio"
                                                                   checked/>
                                                            Все
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" name="radio" type="radio"/>
                                                            Новинки
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" name="radio" type="radio"/>
                                                            Акции
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="aside-filter__item-drop">
                                                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">Цена</p>
                                                <div className="aside-filter__content">
                                                    <input type="text" className="js-range-slider" name="my_range"
                                                           value="" data-min="100000"
                                                           data-max="500000" data-from="150000" data-to="275000"/>
                                                </div>
                                            </li>
                                            <li className="aside-filter__item-list">
                                                <div className="filter__item-list">
                                                    <p className="filter__item-listtitle">
                                                        Мощность, л.с.
                                                    </p>
                                                    <select className="filter-style filter__item-listselect">
                                                        <option>130</option>
                                                        <option>180</option>
                                                        <option>230</option>
                                                        <option>300</option>
                                                    </select>
                                                </div>
                                                <div className="filter__item-list">
                                                    <p className="filter__item-listtitle">
                                                        Мощность двигателя, л.с.
                                                    </p>
                                                    <select className="filter-style filter__item-listselect">
                                                        <option>130</option>
                                                        <option>180</option>
                                                        <option>230</option>
                                                        <option>300</option>
                                                    </select>
                                                </div>
                                                <div className="filter__item-list">
                                                    <p className="filter__item-listtitle">
                                                        Макс. скорость
                                                    </p>
                                                    <select className="filter-style filter__item-listselect">
                                                        <option>130</option>
                                                        <option>180</option>
                                                        <option>230</option>
                                                        <option>300</option>
                                                    </select>
                                                </div>

                                            </li>

                                            <li className="aside-filter__item-drop">
                                                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">Бренд</p>
                                                <div className="aside-filter__content">
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox" checked/>
                                                            BRP
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox" checked/>
                                                            Spark 2
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            Spark 3
                                                        </label>
                                                    </div>
                                                    <div className="filter-more">
                                                        <button className="filter-more__btn">Показать ещё</button>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="aside-filter__item-drop">
                                                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">Модель</p>
                                                <div className="aside-filter__content">
                                                    <input className="filter-search" type="text"
                                                           placeholder="Введите модель "/>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox" checked/>
                                                            Sea-doo Spark 2
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox" checked/>
                                                            SeaDoo Spark 90
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            SeaDoo GTI 155
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            SeaDoo GTR 230
                                                        </label>
                                                    </div>
                                                    <div className="filter-more">
                                                        <button className="filter-more__btn">Показать ещё</button>
                                                    </div>
                                                </div>
                                            </li>

                                            <li className="aside-filter__item-drop btn-checked">
                                                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">Акции</p>
                                                <div className="aside-filter__content">
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            <span className="btn-checked__text">SALE</span>
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            <span className="btn-checked__text">NEW</span>
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            <span className="btn-checked__text">HIT</span>
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            <span className="btn-checked__text">ДИЛЕР</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>


                                            <li className="aside-filter__item-drop">
                                                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">Страны</p>
                                                <div className="aside-filter__content">
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox" checked/>
                                                            Россия
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox" checked/>
                                                            Германия
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            Китай
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            CША
                                                        </label>
                                                    </div>
                                                    <div className="filter-more">
                                                        <button className="filter-more__btn">Показать ещё</button>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="aside-filter__item-drop aside-filter__item-btn">
                                                <button className="filter-btn__send filter-btn__send--active"
                                                        type="submit">ВЫБРАТЬ
                                                </button>
                                                <p className="filter__extra">Дополнительные параметры</p>
                                                <div className="filter__extra-content">more</div>
                                                <button className="filter-btn__reset" type="reset">Сбросить фильтр
                                                </button>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                                <div id="filter-2" className="tabs-content aside-filter__tabs-content">content-2</div>

                            </div>
                        </aside>
                        <div className="catalog__inner-list">
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
                                    <img className="product-item__img" src="assets/images/content/gydro-1.png" alt="prod"/>
                                    <h4 className="product-item__title">Гидроцикл BRP SeaDoo GTI 130hp SE
                                        Black\Mango
                                    </h4>
                                    <p className="price product-item__price">1 049 500 ₽</p>
                                    <p className="product-item__notify-text">нет в наличии</p>
                                </a>
                            </div>
                            <div className="product-item__wrapper">
                                <button className="product-item__favorite">
                                </button>
                                <button className="product-item__bascket">
                                    <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                </button>
                                <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                </a>
                                <a className="product-item product-item--sale" href="#">
                                    <p className="product-item__hover-text">посмотреть товар</p>
                                    <img className="product-item__img" src="assets/images/content/gydro-2.png" alt="prod"/>
                                    <h4 className="product-item__title">Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue
                                        Metallic
                                    </h4>
                                    <p className="price product-item__price">1 100 475 ₽</p>
                                    <p className="product-item__notify-text">нет в наличии</p>
                                </a>
                            </div>
                            <div className="product-item__wrapper">
                                <button className="product-item__favorite">
                                </button>
                                <button className="product-item__bascket">
                                    <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                </button>
                                <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                </a>
                                <a className="product-item" href="#">
                                    <p className="product-item__hover-text">посмотреть товар</p>
                                    <img className="product-item__img" src="assets/images/content/gydro-3.png" alt="prod"/>
                                    <h4 className="product-item__title">Гидроцикл BRP SeaDoo GTR 230hp X California
                                        green
                                    </h4>
                                    <p className="price product-item__price">1 323 700 ₽</p>
                                    <p className="product-item__notify-text">нет в наличии</p>
                                </a>
                            </div>
                            <div className="product-item__wrapper product-item__not-available">
                                <button className="product-item__favorite">
                                </button>
                                <button className="product-item__bascket">
                                    <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                </button>
                                <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                </a>
                                <a className="product-item product-item--sale" href="#">
                                    <p className="product-item__hover-text">посмотреть товар</p>
                                    <img className="product-item__img" src="assets/images/content/gydro-4.png" alt="prod"/>
                                    <h4 className="product-item__title">Гидроцикл BRP SeaDoo GTR 230hp STD Black /
                                        Gulfstream
                                    </h4>
                                    <p className="price product-item__price">1 049 500 ₽</p>
                                    <p className="product-item__notify-text">нет в наличии</p>
                                </a>
                            </div>
                            <div className="product-item__wrapper">
                                <button className="product-item__favorite">
                                </button>
                                <button className="product-item__bascket">
                                    <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                </button>
                                <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                </a>
                                <a className="product-item" href="#">
                                    <p className="product-item__hover-text">посмотреть товар</p>
                                    <img className="product-item__img" src="assets/images/content/gydro-5.png" alt="prod"/>
                                    <h4 className="product-item__title">Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid
                                        Metal
                                    </h4>
                                    <p className="price product-item__price">1 543 000 ₽</p>
                                    <p className="product-item__notify-text">нет в наличии</p>
                                </a>
                            </div>
                            <div className="product-item__wrapper">
                                <button className="product-item__favorite">
                                </button>
                                <button className="product-item__bascket">
                                    <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                </button>
                                <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                </a>
                                <a className="product-item product-item--sale" href="#">
                                    <p className="product-item__hover-text">посмотреть товар</p>
                                    <img className="product-item__img" src="assets/images/content/gydro-6.png" alt="prod"/>
                                    <h4 className="product-item__title">Гидроцикл BRP SeaDoo Spark 60hp 2 up
                                    </h4>
                                    <p className="price product-item__price">732 345 ₽</p>
                                    <p className="product-item__notify-text">нет в наличии</p>
                                </a>
                            </div>
                            <div className="product-item__wrapper">
                                <button className="product-item__favorite">
                                </button>
                                <button className="product-item__bascket">
                                    <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                </button>
                                <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                </a>
                                <a className="product-item" href="#">
                                    <p className="product-item__hover-text">посмотреть товар</p>
                                    <img className="product-item__img" src="assets/images/content/gydro-7.png" alt="prod"/>
                                    <h4 className="product-item__title">Гидроцикл BRP SeaDoo Spark GTS 90hp Rental
                                    </h4>
                                    <p className="price product-item__price">857 666 ₽</p>
                                    <p className="product-item__notify-text">нет в наличии</p>
                                </a>
                            </div>
                            <div className="product-item__wrapper">
                                <button className="product-item__favorite">
                                </button>
                                <button className="product-item__bascket">
                                    <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                </button>
                                <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                </a>
                                <a className="product-item product-item--sale" href="#">
                                    <p className="product-item__hover-text">посмотреть товар</p>
                                    <img className="product-item__img" src="assets/images/content/gydro-8.png" alt="prod"/>
                                    <h4 className="product-item__title">Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal
                                        blue
                                    </h4>
                                    <p className="price product-item__price">1 229 711 ₽</p>
                                    <p className="product-item__notify-text">нет в наличии</p>
                                </a>
                            </div>
                            <div className="product-item__wrapper">
                                <button className="product-item__favorite">
                                </button>
                                <button className="product-item__bascket">
                                    <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                </button>
                                <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                </a>
                                <a className="product-item" href="#">
                                    <p className="product-item__hover-text">посмотреть товар</p>
                                    <img className="product-item__img" src="assets/images/content/gydro-9.png" alt="prod"/>
                                    <h4 className="product-item__title">Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper
                                    </h4>
                                    <p className="price product-item__price">587 440 ₽</p>
                                    <p className="product-item__notify-text">нет в наличии</p>
                                </a>
                            </div>
                            <div className="product-item__wrapper">
                                <button className="product-item__favorite">
                                </button>
                                <button className="product-item__bascket">
                                    <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                </button>
                                <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                </a>
                                <a className="product-item product-item--sale" href="#">
                                    <p className="product-item__hover-text">посмотреть товар</p>
                                    <img className="product-item__img" src="assets/images/content/gydro-10.png" alt="prod"/>
                                    <h4 className="product-item__title">Гидроцикл Spark 2-UP 900 Ho Ace Pineapple
                                    </h4>
                                    <p className="price product-item__price">587 440 ₽</p>
                                    <p className="product-item__notify-text">нет в наличии</p>
                                </a>
                            </div>
                            <div className="product-item__wrapper product-item__not-available">
                                <button className="product-item__favorite">
                                </button>
                                <button className="product-item__bascket">
                                    <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                </button>
                                <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                </a>
                                <a className="product-item" href="#">
                                    <p className="product-item__hover-text">посмотреть товар</p>
                                    <img className="product-item__img" src="assets/images/content/gydro-11.png" alt="prod"/>
                                    <h4 className="product-item__title">Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace
                                        Vanilla
                                    </h4>
                                    <p className="price product-item__price">1 049 500 ₽</p>
                                    <p className="product-item__notify-text">нет в наличии</p>
                                </a>
                            </div>
                            <div className="product-item__wrapper product-item__not-available">
                                <button className="product-item__favorite">
                                </button>
                                <button className="product-item__bascket">
                                    <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
                                </button>
                                <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                </a>
                                <a className="product-item product-item--sale" href="#">
                                    <p className="product-item__hover-text">посмотреть товар</p>
                                    <img className="product-item__img" src="assets/images/content/gydro-12.png" alt="prod"/>
                                    <h4 className="product-item__title">Гидроцикл Spark 3-UP 900 HO Ace IBR
                                        Blueberry
                                    </h4>
                                    <p className="price product-item__price">1 049 500 ₽</p>
                                    <p className="product-item__notify-text">нет в наличии</p>
                                </a>
                            </div>
                            <div className="pagination">
                                <ul className="pagination-list">
                                    <li className="pagination-list__item active"><a href="#">1</a></li>
                                    <li className="pagination-list__item"><a href="#">2</a></li>
                                    <li className="pagination-list__item"><a href="#">3</a></li>
                                    <li className="pagination-list__item"><a href="#">4</a></li>
                                    <li className="pagination-list__item"><a href="#">5</a></li>
                                    <li className="pagination-list__item pagination-list__item--dots"><a
                                        href="#"><span>...</span></a></li>
                                    <li className="pagination-list__item"><a href="#">11</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </Fragment>
    );
};

export default Catalog;