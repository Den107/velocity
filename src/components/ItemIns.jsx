import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";
import axios from "axios";
import {addItem} from "../redux/features/bascketSlice";
import {useState} from "react";

const Item = ({title, price, imageUrl, _id}) => {
    const dispatch = useDispatch()

    const [buttonVisible, setButtonVisible] = useState(true)

    const addToBascket=async ()=>{
        try {
            await axios.get(`http://localhost:4444/ins/${_id}`)
                .then(resp=>dispatch(addItem(resp.data)))
                .then(setButtonVisible(false))
        }catch (e){
            console.log(e)
        }
    }
    return (
        <div className="product-item__wrapper">
            <button className="product-item__favorite">
            </button>
            <button onClick={addToBascket} className={`product-item__bascket ${buttonVisible ? '' : 'hidden'}`}>
                <img src="assets/images/bascket-icon-white.svg" alt="bascket"/>
            </button>
            <a className="product-item__notify-link" href="#"> <span>Сообщить о поступлении</span>
            </a>
            <Link className="product-item" to={`/productIns/${_id}`}>
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