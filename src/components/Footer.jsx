import React, {Fragment} from 'react';

const Footer = () => {
    return (

        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__top-inner">
                        <div className="footer__top-item footer__top-newslatter">
                            <h6 className="footer__top-title">Подпишитесь на нашу рассылку
                                и узнавайте об акциях быстрее</h6>
                            <form className="footer-form">
                                <input className="footer-form__input" type="email" placeholder="Введите ваш e-mail:"/>
                                <button className="footer-form__btn" type="submit">Отправить</button>
                            </form>
                        </div>
                        <div className="footer__top-item footer__top-itemdrop">
                            <h6 className="footer__top-title footer__topdrop">Информация</h6>
                            <ul className="footer-list">
                                <li className="footer-list__item"><a href="#">О компании</a></li>
                                <li className="footer-list__item"><a href="#">Контакты</a></li>
                                <li className="footer-list__item"><a href="#">Акции</a></li>
                                <li className="footer-list__item"><a href="#">Магазины</a></li>
                            </ul>
                        </div>
                        <div className="footer__top-item ">
                            <h6 className="footer__top-title footer__topdrop">Интернет-магазин</h6>
                            <ul className="footer-list">
                                <li className="footer-list__item"><a href="#">Доставка и самовывоз</a></li>
                                <li className="footer-list__item"><a href="#">Оплата</a></li>
                                <li className="footer-list__item"><a href="#">Возврат-обмен</a></li>
                                <li className="footer-list__item"><a href="#">Новости</a></li>
                            </ul>
                        </div>
                        <div className="footer__top-item footer__top-social">
                            <ul className="social-list">
                                <li className="social-list__item"><a href="#"><img src="assets/images/vk.svg"
                                                                                   alt="social"/></a>
                                </li>
                                <li className="social-list__item"><a href="#"><img src="assets/images/youtube.svg"
                                                                                   alt="social"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <a className="footer__bottom-link" href="#">Договор оферты</a>
                    <a className="footer__bottom-link" href="#">Политика обработки персональных данных</a>
                </div>
            </div>

        </footer>


    );
};

export default Footer;