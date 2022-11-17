import React, {Fragment} from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";

const ProductPage = () => {
    return (
        <Fragment>
            <Header/>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="breadcrumbs__inner">
                        <ul className="breadcrumbs__list mobile-overflow">
                            <li className="breadcrumbs__list-item"><a href="index.html">Главная</a></li>
                            <li className="breadcrumbs__list-item"><a href="catalog.html">Гидроциклы</a></li>
                            <li className="breadcrumbs__list-item"><span>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <section className="product-card">
                <div className="container">
                    <div className="product-card__inner">
                        <div className="product-card__img-box product-item--sale">
                            <img className="product-card__img" src="assets/images/content/gydro-large.png" alt="product-card"/>
                                <p className="product-card__price-old">1 200 475 ₽</p>
                                <p className="product-card__price-new">1 100 475 ₽</p>
                                <a className="product-card__link" href="#">Нашли дешевле? Снизим цену!</a>
                                <div className="product-card__btn product-card__btn-mobile">
                                    <button>Купить</button>
                                </div>
                        </div>
                        <div className="product-card__content">
                            <h1 className="product-card__title">Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue
                                Metallic</h1>
                            <p className="product-card__code">Код товара: 366666-2 </p>
                            <div className="product-card__buttons">
                                <a className="product-card__icon-favorite" href="#">
                                    <img src="assets/images/favorite.svg" alt="favorite"/>
                                </a>
                                <a className="product-card__icon-comparsion" href="#">
                                    <img src="assets/images/comperson.svg" alt="comp"/>
                                </a>
                                <a className="rate" href="#">
                                    <div className="rate-yo" data-rateyo-rating="4"></div>
                                </a>
                            </div>
                            <div className="tabs-wrapper product-card__tabs">
                                <div className="tabs">
                                    <a className="tab product-card__tab tab--active"
                                       href="#product-1">Характеристики</a>
                                    <a className="tab product-card__tab" href="#product-2">Наличие в магазине</a>
                                </div>
                                <div className="tabs-container">
                                    <div id="product-1"
                                         className="tabs-content product-card__tab-content tabs-content--active">
                                        <ul className="product-card__list">
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Производитель</div>
                                                <div className="product-card__item-right">Канада</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Количество мест, шт:</div>
                                                <div className="product-card__item-right">3</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Мощность, л.с.</div>
                                                <div className="product-card__item-right">155</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Тип двигателя</div>
                                                <div className="product-card__item-right">Бензиновый</div>
                                            </li>
                                            <li className="product-card__item">
                                                <div className="product-card__item-left">Год выпуска</div>
                                                <div className="product-card__item-right">2018</div>
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
                        <div id="product-card__tabs-2" className="card-tab-content tabs-content">content-2</div>
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

            <section className="products">
                <div className="container">
                    <div className="products__inner">
                        <h3 className="product__title">С этим товаром покупают</h3>
                        <div className="tabs-wrapper">
                            <div className="tabs products__tabs mobile-overflow">
                                <a className="tab tab--active products__tab" href="#popular-tab-1">запчасти</a>
                                <a className="tab products__tab" href="#popular-tab-2">моторы</a>
                                <a className="tab products__tab" href="#popular-tab-3">шины</a>
                                <a className="tab products__tab" href="#popular-tab-4">электроника</a>
                                <a className="tab products__tab" href="#popular-tab-5">инструменты</a>
                                <a className="tab products__tab" href="#popular-tab-6">аксессуары</a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/pop-1.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">BRP Audio-портативная
                                                        система</h4>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/pop-4.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">Мужской костюм
                                                        3мм</h4>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/pop-1.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">BRP Audio-портативная
                                                        система</h4>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/pop-1.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">BRP Audio-портативная
                                                        система</h4>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/pop-4.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">Мужской костюм
                                                        3мм</h4>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/pop-1.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">BRP Audio-портативная
                                                        система</h4>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/prod-2.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">Спасательный жилет BRP Men's
                                                        Airflow PFD
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/prod-2.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">Спасательный жилет BRP Men's
                                                        Airflow PFD
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/prod-2.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">Спасательный жилет BRP Men's
                                                        Airflow PFD
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/prod-2.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">Спасательный жилет BRP Men's
                                                        Airflow PFD
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/prod-2.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">Спасательный жилет BRP Men's
                                                        Airflow PFD
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/prod-2.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">Спасательный жилет BRP Men's
                                                        Airflow PFD
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/prod-2.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">Спасательный жилет BRP Men's
                                                        Airflow PFD
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/prod-2.png"
                                                     alt="prod"/>
                                                    <h4 className="product-item__title">Спасательный жилет BRP Men's
                                                        Airflow PFD
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
                                            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
                                            </a>
                                            <a className="product-item" href="#">
                                                <p className="product-item__hover-text">посмотреть товар</p>
                                                <img className="product-item__img" src="assets/images/content/prod-3.png"
                                                     alt="prod/"/>
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

export default ProductPage;