import React, {Fragment, useEffect, useState} from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import BuyWithThis from "../components/BuyWithThis";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import '../assets/css/fonts.css'
import '../assets/css/ion.rangeSlider.min.css'
import '../assets/css/media.css'
import '../assets/css/jquery.formstyler.theme.css'
import '../assets/css/normalize.css'
import '../assets/css/jquery.formstyler.css'
import '../assets/css/jquery.rateyo.min.css'
import '../assets/css/slick.css'
import '../assets/css/style.css'

const ProductPage = () => {
    const params = useParams()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    useEffect(()=>{
        const id = params.id
        axios.get(`http://localhost:4444/ins/${id}`)
            .then(resp=>{
                setTitle(resp.data.title)
                setPrice(resp.data.price)
                setImageUrl(resp.data.imageUrl)
            })
    }, [])

    return (
        <Fragment>
            <Header/>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbs__inner">
                        <ul className="breadcrumbs__list mobile-overflow">
                            <li className="breadcrumbs__list-item"><Link to="/">Главная</Link></li>
                            <li className="breadcrumbs__list-item"><Link to="/catalog">Велосипеды</Link></li>
                            <li className="breadcrumbs__list-item"><span>Велосипед GT</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <section className="product-card">
                <div className="container">
                    <div className="product-card__inner">
                        <div className="product-card__img-box product-item--sale">
                            <img className="product-card__img" src={imageUrl} alt="product-card"/>
                                <p className="product-card__price-old">50 000 ₽</p>
                                <p className="product-card__price-new">{price} ₽</p>
                                <a className="product-card__link" href="#">Нашли дешевле? Снизим цену!</a>
                                <div className="product-card__btn product-card__btn-mobile">
                                    <button>Купить</button>
                                </div>
                        </div>
                        <div className="product-card__content">
                            <h1 className="product-card__title">{title}</h1>
                            <p className="product-card__code">Код товара: 366666-2 </p>
                            <div className="product-card__buttons">
                                {/*<a className="product-card__icon-favorite" href="#">*/}
                                {/*    <img src="assets/images/favorite.svg" alt="favorite"/>*/}
                                {/*</a>*/}
                                {/*<a className="product-card__icon-comparsion" href="#">*/}
                                {/*    <img src="assets/images/comperson.svg" alt="comp"/>*/}
                                {/*</a>*/}
                                <a className="rate" href="#">
                                    <div className="rate-yo" data-rateyo-rating="4"></div>
                                </a>
                            </div>
                            <div className="tabs-wrapper product-card__tabs">
                                <div className="tabs">
                                    <a className="tab product-card__tab tab--active"
                                       href="#product-1">Характеристики</a>
                                    {/*<a className="tab product-card__tab" href="#product-2">Наличие в магазине</a>*/}
                                </div>
                                <div className="tabs-container">
                                    <div id="product-1"
                                         className="tabs-content product-card__tab-content tabs-content--active">
                                        <ul className="product-card__list">
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Производитель</div>
                                                <div className="product-card__item-right">Северная Америка</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Ростовка:</div>
                                                <div className="product-card__item-right">M, L, XL</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Диаметр колеса:</div>
                                                <div className="product-card__item-right">29"</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Рама:</div>
                                                <div className="product-card__item-right">Alpha Silver Aluminum</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Год выпуска:</div>
                                                <div className="product-card__item-right">2018</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Педали:</div>
                                                <div className="product-card__item-right">Wellgo, nylon platform</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Передний тормоз:</div>
                                                <div className="product-card__item-right">Tektro MD-M280</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Задний тормоз:</div>
                                                <div className="product-card__item-right">Tektro MD-M280</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Количество передач:</div>
                                                <div className="product-card__item-right">21</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Задний переключатель:</div>
                                                <div className="product-card__item-right">Shimano Tourney TY300, long cage, 34T</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Передний переключатель:</div>
                                                <div className="product-card__item-right">Shimano Tourney TY500, 34,9 мм clamp, top swing, dual pull</div>
                                            </li>
                                        </ul>
                                        <a className="product-card__more" href="#">Показать еще</a>
                                        <div className="product-card__btn">
                                            <button>Купить</button>
                                        </div>
                                    </div>
                                    <div id="product-2" className="tabs-content product-card__tab-content">
                                        content-2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="card__tabs">
                <div className="container">
                    <div className="tabs-wrapper">
                        <div className="tabs card__tab-box mobile-overflow">
                            <a className="tab card__tab" href="#product-card__tabs-1">О товаре</a>
                            <a className="tab card__tab" href="#product-card__tabs-2">Характеристики</a>
                            <a className="tab card__tab" href="#product-card__tabs-3">Отзывы</a>
                            <a className="tab card__tab tab--active" href="#product-card__tabs-4">Самовывоз</a>
                            <a className="tab card__tab" href="#product-card__tabs-5">Доставка</a>
                            <a className="tab card__tab" href="#product-card__tabs-6">Cервис</a>
                            <a className="tab card__tab" href="#product-card__tabs-7">Гарантия</a>
                        </div>
                    </div>
                    <div className="tabs-container">
                        <div id="product-card__tabs-1" className="card-tab-content tabs-content">content-1</div>
                        <div id="product-card__tabs-2" className="card-tab-content tabs-content">
                            <ul className="product-card__list">
                                <li className="product-card__item">
                                    <div className="product-card__item-left">Производитель</div>
                                    <div className="product-card__item-right">Северная Америка</div>
                                </li>
                                <li className="product-card__item">
                                    <div className="product-card__item-left">Ростовка:</div>
                                    <div className="product-card__item-right">M, L, XL</div>
                                </li>
                                <li className="product-card__item">
                                    <div className="product-card__item-left">Диаметр колеса:</div>
                                    <div className="product-card__item-right">29"</div>
                                </li>
                                <li className="product-card__item">
                                    <div className="product-card__item-left">Рама:</div>
                                    <div className="product-card__item-right">Alpha Silver Aluminum</div>
                                </li>
                                <li className="product-card__item">
                                    <div className="product-card__item-left">Год выпуска:</div>
                                    <div className="product-card__item-right">2018</div>
                                </li>
                                <li className="product-card__item">
                                    <div className="product-card__item-left">Педали:</div>
                                    <div className="product-card__item-right">Wellgo, nylon platform</div>
                                </li>
                                <li className="product-card__item">
                                    <div className="product-card__item-left">Передний тормоз:</div>
                                    <div className="product-card__item-right">Tektro MD-M280</div>
                                </li>
                                <li className="product-card__item">
                                    <div className="product-card__item-left">Задний тормоз:</div>
                                    <div className="product-card__item-right">Tektro MD-M280</div>
                                </li>
                                <li className="product-card__item">
                                    <div className="product-card__item-left">Количество передач:</div>
                                    <div className="product-card__item-right">21</div>
                                </li>
                                <li className="product-card__item">
                                    <div className="product-card__item-left">Задний переключатель:</div>
                                    <div className="product-card__item-right">Shimano Tourney TY300, long cage, 34T</div>
                                </li>
                                <li className="product-card__item">
                                    <div className="product-card__item-left">Передний переключатель:</div>
                                    <div className="product-card__item-right">Shimano Tourney TY500, 34,9 мм clamp, top swing, dual pull</div>
                                </li>
                            </ul>
                        </div>
                        <div id="product-card__tabs-3" className="card-tab-content tabs-content">content-3</div>
                        <div id="product-card__tabs-4" className="card-tab-content tabs-content tabs-content--active">
                            <form>
                                <div className="card__top-line">
                                    <label className="card__label-search">Магазин
                                        <input className="card__input-search" type="text"/>
                                    </label>
                                    <label className="card__label-pickup"><input className="filter-style" type="radio"
                                                                                 name="pickup"/>Забрать
                                        сегодня</label>
                                    <label className="card__label-pickup"><input className="filter-style" type="radio"
                                                                                 name="pickup" checked/>Забрать
                                        в течение
                                        недели</label>
                                </div>
                                <ul className="card__list">
                                    <li className="card__list-item card__list-itemtitle">
                                        <div className="card__list-address ">Адрес</div>
                                        <div className="card__list-workhours ">Режим работы</div>
                                        <div className="card__list-avialable ">Доступно</div>
                                        <div className="card__list-num ">Количество</div>
                                        <div className="card__list-btn "></div>
                                    </li>
                                    <li className="card__list-item">
                                        <div className="card__list-address">Москва, ул. Науки 25</div>
                                        <div className="card__list-workhours">
                                            <div className="workhours"><span>пн-сб:</span> <span>08:00-19:00</span>
                                            </div>
                                            <div className="workhours"><span>вс:</span> <span>09:00-17:00</span></div>
                                        </div>
                                        <div className="card__list-avialable">В наличии</div>
                                        <div className="card__list-num">1</div>
                                        <div className="card__list-btn">
                                            <button type="submit">КУПИТЬ</button>
                                        </div>
                                    </li>
                                    <li className="card__list-item">
                                        <div className="card__list-address">Москва, ул. Южная 134</div>
                                        <div className="card__list-workhours">
                                            <div className="workhours"><span>пн-сб:</span> <span>08:00-19:00</span>
                                            </div>
                                            <div className="workhours"><span>вс:</span> <span>09:00-17:00</span></div>
                                        </div>
                                        <div className="card__list-avialable">В наличии</div>
                                        <div className="card__list-num">2</div>
                                        <div className="card__list-btn">
                                            <button type="submit">КУПИТЬ</button>
                                        </div>
                                    </li>
                                    <li className="card__list-item">
                                        <div className="card__list-address">Санкт-Петербург,<br/>
                                            ул. Красная 19</div>
                                        <div className="card__list-workhours">
                                            <div className="workhours"><span>пн-сб:</span> <span>08:00-19:00</span>
                                            </div>
                                            <div className="workhours"><span>вс:</span> <span>09:00-17:00</span></div>
                                        </div>
                                        <div className="card__list-avialable">Нет в наличии</div>
                                        <div className="card__list-num">0</div>
                                        <div className="card__list-btn">
                                            <button type="submit">КУПИТЬ</button>
                                        </div>
                                    </li>
                                    <li className="card__list-item">
                                        <div className="card__list-address">Киев, ул Шевченко 167</div>
                                        <div className="card__list-workhours">
                                            <div className="workhours"><span>пн-сб:</span> <span>08:00-19:00</span>
                                            </div>
                                            <div className="workhours"><span>вс:</span> <span>09:00-17:00</span></div>
                                        </div>
                                        <div className="card__list-avialable">Нет в наличии</div>
                                        <div className="card__list-num">0</div>
                                        <div className="card__list-btn">
                                            <button type="submit">КУПИТЬ</button>
                                        </div>
                                    </li>

                                </ul>
                            </form>
                        </div>
                        <div id="product-card__tabs-5" className="card-tab-content tabs-content">content-4</div>
                        <div id="product-card__tabs-6" className="card-tab-content tabs-content">content-5</div>
                        <div id="product-card__tabs-7" className="card-tab-content tabs-content">content-6</div>

                    </div>
                </div>
            </section>

           <BuyWithThis/>
            <Footer/>
        </Fragment>
    );
};

export default ProductPage;