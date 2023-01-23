import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="header__top-inner">
                        <nav className="menu">
                            <button className="menu__btn">
                                <div className="menu__btn-line"></div>
                                <div className="menu__btn-line"></div>
                                <div className="menu__btn-line"></div>
                            </button>
                            <ul className="menu__list">
                                <li className="menu__item"><a href="#" className="menu__link">Магазины</a></li>
                                <li className="menu__item"><a className="menu__link" href="#">Акции</a></li>
                                <li className="menu__item"><a className="menu__link" href="#">Доставка и оплата</a></li>
                            </ul>
                        </nav>
                        <Link className="logo" to="/">
                            <img className="logo__img" src="assets/images/logo.png" alt="logo"/>
                        </Link>
                        <div className="header__box">
                            <p className="header__adress">Москва, ул. Науки 25</p>
                            <ul className="user-list">
                                <li className="user-list__item">
                                    <a className="user-list__link" href="#"><img src="assets/images/favorite-icon.svg"
                                                                                 alt="fav"/></a>
                                </li>
                                <li className="user-list__item">
                                    <Link className="user-list__link" to={'/login'}><img src="assets/images/user-icon.svg" alt="user"/></Link>
                                </li>
                                <li className="user-list__item">
                                    <Link className="user-list__link bascket" to={'/cart'}><img src="assets/images/bascket-icon.svg"
                                                                                         alt="bascket"/>
                                        <p className="bascket__num">1</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="menu-mobile__list">
                <li className="menu-mobile__item">
                    <a className="menu-mobile__link" href="#">
                        <img className="menu-mobile__img" src="assets/images/user-icon.svg" alt="login"/>
                        <p>Войти</p>
                    </a>
                </li>
                <li className="menu-mobile__item">
                    <a className="menu-mobile__link" href="#">
                        <img className="menu-mobile__img" src="assets/images/user-icon.svg" alt="reg"/>
                        <p>Регистрация</p>
                    </a>
                </li>
                <li className="menu-mobile__item">
                    <a className="menu-mobile__link" href="#">
                        <img className="menu-mobile__img" src="assets/images/favorite.svg" alt="fav"/>
                        <p>Избранное</p>
                    </a>
                </li>
                <li className="menu-mobile__item">
                    <a className="menu-mobile__link" href="#">
                        <img className="menu-mobile__img" src="assets/images/bascket-icon.svg" alt="card"/>
                        <p>Корзина</p>
                    </a>
                </li>
                <li className="menu-mobile__item">
                    <a className="menu-mobile__link" href="#">
                        <img className="menu-mobile__img" src="assets/images/house-icon.svg" alt="shops"/>
                        <p>Магазины</p>
                    </a>
                </li>
                <li className="menu-mobile__item">
                    <a className="menu-mobile__link" href="#">
                        <img className="menu-mobile__img" src="assets/images/percent-icon.svg" alt="actions"/>
                        <p>Акции</p>
                    </a>
                </li>
                <li className="menu-mobile__item">
                    <a className="menu-mobile__link" href="#">
                        <img className="menu-mobile__img" src="assets/images/delivery-icon.svg" alt="delivery"/>
                        <p>Доставка и оплата</p>
                    </a>
                </li>
                <li className="menu-mobile__item">
                    <Link className="menu-mobile__link" to="/catalog">
                        <p>Велосипеды</p>
                    </Link>
                </li>
                <li className="menu-mobile__item">
                    <Link className="menu-mobile__link" to="/catalog2">
                        <p>Аксессуары</p>
                    </Link>
                </li>
                <li className="menu-mobile__item">
                    <Link className="menu-mobile__link" to="/catalog3">
                        <p>Запчасти</p>
                    </Link>
                </li>
                <li className="menu-mobile__item">
                    <Link className="menu-mobile__link" to="/catalog4">
                        <p>Иструменты</p>
                    </Link>
                </li>
                <li className="menu-mobile__item">
                    <Link className="menu-mobile__link" to="/catalog5">
                        <p>Электроника</p>
                    </Link>
                </li>
                <li className="menu-mobile__item">
                    <Link className="menu-mobile__link" to="/catalog6">
                        <p>Экипировка</p>
                    </Link>
                </li>
                {/*<li className="menu-mobile__item">*/}
                {/*    <Link className="menu-mobile__link" href="#">*/}
                {/*        <p>Косметика</p>*/}
                {/*    </Link>*/}
                {/*</li>*/}
            </ul>
            <div className="menu__mobile-linewrapper">
                <ul className="menu__mobile-line">
                    <li className="menu__item"><a href="#" className="menu__link">Магазины</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Акции</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Доставка и оплата</a></li>
                </ul>
            </div>

            <div className="header__bottom">
                <div className="container">
                    <div className="header__bottom-inner">
                        <ul className="menu-categories">
                            <li className="menu-categories__item"><Link className="menu-categories__link"
                                                                     to="/catalog">Велосипеды</Link></li>
                            <li className="menu-categories__item"><Link className="menu-categories__link"
                                                                     to="/catalog2">Аксессуары</Link></li>
                            <li className="menu-categories__item"><Link className="menu-categories__link"
                                                                     to="/catalog3">Запчасти</Link></li>
                            <li className="menu-categories__item"><Link className="menu-categories__link"
                                                                     to="/catalog4">Иструменты</Link></li>
                            <li className="menu-categories__item"><Link className="menu-categories__link"
                                                                     to="/catalog5">Электроника</Link></li>
                            <li className="menu-categories__item"><Link className="menu-categories__link"
                                                                     to="/catalog6">Экипировка</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

    );
};

export default Header;