import React, {Fragment, useEffect, useState} from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Item from "../components/Item";
import {Link} from "react-router-dom";
import CatalogFilter from "../components/CatalogFilter";
import AsideFilter from "../components/AsideFilter";
import ItemElec from "../components/ItemElec";

const Catalog = () => {

    const [items, setItems]=useState([])

    useEffect(()=>{
        fetch('http://localhost:4444/elec')
            .then(data=>data.json())
            // .then(data=>console.log(data))
            .then(items=>setItems(items))
    }, [])


    return (
        <Fragment>
            <Header/>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbs__inner">
                        <ul className="breadcrumbs__list mobile-overflow">
                            <li className="breadcrumbs__list-item"><Link to="/">Главная</Link></li>
                            <li className="breadcrumbs__list-item"><span>Велосипеды</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="catalog">
                <div className="container">
                    <h2 className="catalog__title">Велосипеды</h2>
                   <CatalogFilter/>
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
                                            {/*<li className="aside-filter__item-list">*/}
                                            {/*    <div className="filter__item-list">*/}
                                            {/*        <p className="filter__item-listtitle">*/}
                                            {/*            Мощность, л.с.*/}
                                            {/*        </p>*/}
                                            {/*        <select className="filter-style filter__item-listselect">*/}
                                            {/*            <option>130</option>*/}
                                            {/*            <option>180</option>*/}
                                            {/*            <option>230</option>*/}
                                            {/*            <option>300</option>*/}
                                            {/*        </select>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="filter__item-list">*/}
                                            {/*        <p className="filter__item-listtitle">*/}
                                            {/*            Мощность двигателя, л.с.*/}
                                            {/*        </p>*/}
                                            {/*        <select className="filter-style filter__item-listselect">*/}
                                            {/*            <option>130</option>*/}
                                            {/*            <option>180</option>*/}
                                            {/*            <option>230</option>*/}
                                            {/*            <option>300</option>*/}
                                            {/*        </select>*/}
                                            {/*    </div>*/}
                                            {/*    <div className="filter__item-list">*/}
                                            {/*        <p className="filter__item-listtitle">*/}
                                            {/*            Макс. скорость*/}
                                            {/*        </p>*/}
                                            {/*        <select className="filter-style filter__item-listselect">*/}
                                            {/*            <option>130</option>*/}
                                            {/*            <option>180</option>*/}
                                            {/*            <option>230</option>*/}
                                            {/*            <option>300</option>*/}
                                            {/*        </select>*/}
                                            {/*    </div>*/}

                                            {/*</li>*/}
<br/>
                                            <li className="aside-filter__item-drop">
                                                <p className="aside-filter__item-title filter__item-drop filter__item-drop--active">Бренд</p>
                                                <div className="aside-filter__content">
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox" checked/>
                                                            GT
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox" checked/>
                                                            Stels
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            Cannondale
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
                                                            GT Avalanche 3.0
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox" checked/>
                                                            GT Avalanche 2.0
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            Merida Big Nine 100
                                                        </label>
                                                    </div>
                                                    <div className="aside-filter__content-box">
                                                        <label className="aside-filter__content-label">
                                                            <input className="filter-style" type="checkbox"/>
                                                            Merida Big Nine 200
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
                            {/*<Item/>*/}
                            {/*<Item/>*/}
                            {/*<Item/>*/}
                            {/*<Item/>*/}
                            {/*<Item/>*/}
                            {/*<Item/>*/}
                            {/*<Item/>*/}
                            {/*<Item/>*/}
                            {/*<Item/>*/}
                            {items.map((item)=><ItemElec key={item._id} {...item}/>)}
                            {/*<div className="product-item__wrapper product-item__not-available">*/}
                            {/*    <button className="product-item__favorite">*/}
                            {/*    </button>*/}
                            {/*    <button className="product-item__bascket">*/}
                            {/*        <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>*/}
                            {/*    </button>*/}
                            {/*    <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>*/}
                            {/*    </a>*/}
                            {/*    <a className="product-item" href="#">*/}
                            {/*        <p className="product-item__hover-text">посмотреть товар</p>*/}
                            {/*        <img className="product-item__img" src="assets/images/content/gydro-11.png" alt="prod"/>*/}
                            {/*        <h4 className="product-item__title">Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace*/}
                            {/*            Vanilla*/}
                            {/*        </h4>*/}
                            {/*        <p className="price product-item__price">1 049 500 ₽</p>*/}
                            {/*        <p className="product-item__notify-text">нет в наличии</p>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                            {/*<div className="product-item__wrapper product-item__not-available">*/}
                            {/*    <button className="product-item__favorite">*/}
                            {/*    </button>*/}
                            {/*    <button className="product-item__bascket">*/}
                            {/*        <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>*/}
                            {/*    </button>*/}
                            {/*    <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>*/}
                            {/*    </a>*/}
                            {/*    <a className="product-item product-item--sale" href="#">*/}
                            {/*        <p className="product-item__hover-text">посмотреть товар</p>*/}
                            {/*        <img className="product-item__img" src="assets/images/content/gydro-12.png" alt="prod"/>*/}
                            {/*        <h4 className="product-item__title">Гидроцикл Spark 3-UP 900 HO Ace IBR*/}
                            {/*            Blueberry*/}
                            {/*        </h4>*/}
                            {/*        <p className="price product-item__price">1 049 500 ₽</p>*/}
                            {/*        <p className="product-item__notify-text">нет в наличии</p>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
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