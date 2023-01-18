import React from 'react';
import '../css/admin.css'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../index.css'
import ItemForAdmin from "../components/ItemForAdmin";

const AdminPanel = () => {
    const [modal, setModal] = useState(false)


    function selectCategory(e) {
        const categories = document.querySelectorAll('#cat')
        const sections = document.querySelectorAll("section")
        console.log(sections)
        categories.forEach(cat => {
            cat.classList.remove('active')
        })
        e.target.className += ' active'
        console.log(e)
        sections.forEach(sec => {
            sec.classList.remove('flex')
            sec.className += ' hidden'
            if (e.target.dataset.cat === sec.dataset.cat) {
                sec.classList.remove('hidden')
                sec.className += ' flex'
            }
        })
    }

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('http://localhost:4444/velos')
            .then(data => data.json())
            // .then(data=>console.log(data))
            .then(items => setItems(items))
    }, [])


    return (
        <div className={'relative'}>
            {modal && (<div className={'h-[100vh] w-full fixed left-auto right-auto z-[11] flex justify-center items-center modal'}>
                <form onClick={e => e.preventDefault()} className={'w-[300px] bg-white p-3'}>
                    <h2 className={'text-center p-2'}>Добавить велосипед</h2>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Название велосипеда
                        <input className={'w-full p-2 outline-0 bg-blue-100 rounded text-black'} type="text"
                               placeholder={'Название...'}/>
                    </label>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Цена
                        <input className={'w-full p-2 outline-0 bg-blue-100 rounded text-black'} type="text"
                               placeholder={'Цена...'}/>
                    </label>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Картинка
                        <input className={'w-full p-2 outline-0 bg-blue-100 rounded text-black'} type="text"
                               placeholder={'Картинка...'}/>
                    </label>
                    <div className={'flex justify-between mt-3 mb-1'}>
                        <button className={'rounded bg-green-700 p-2 text-white text-xs'} type="submit">Добавить
                        </button>
                        <button onClick={()=>setModal(false)} className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть</button>
                    </div>
                </form>
            </div>)}

            <Link className={'fixed top-3 right-3 rounded bg-blue-400 p-2 text-gray-100'} to={'/'}>Выйти</Link>
            <aside className={'w-1/4 p-4 bg-blue-500 fixed h-[100vh]'}>
                <ul>
                    <li onClick={(e) => selectCategory(e)} id={'cat'}
                        className={'text-gray-100 p-5 cursor-pointer hover:bg-blue-600 active'}
                        data-cat={'Велосипеды'}>Велосипеды
                    </li>
                    <li onClick={(e) => selectCategory(e)} id={'cat'}
                        className={'text-gray-100 p-5 cursor-pointer hover:bg-blue-600'}
                        data-cat={'Аксессуары'}>Аксессуары
                    </li>
                    <li onClick={(e) => selectCategory(e)} id={'cat'}
                        className={'text-gray-100 p-5 cursor-pointer hover:bg-blue-600'} data-cat={'Запчасти'}>Запчасти
                    </li>
                    <li onClick={(e) => selectCategory(e)} id={'cat'}
                        className={'text-gray-100 p-5 cursor-pointer hover:bg-blue-600'}
                        data-cat={'Инструменты'}>Иструменты
                    </li>
                    <li onClick={(e) => selectCategory(e)} id={'cat'}
                        className={'text-gray-100 p-5 cursor-pointer hover:bg-blue-600'}
                        data-cat={'Электроника'}>Электроника
                    </li>
                    <li onClick={(e) => selectCategory(e)} id={'cat'}
                        className={'text-gray-100 p-5 cursor-pointer hover:bg-blue-600'}
                        data-cat={'Экипировка'}>Экипировка
                    </li>
                </ul>
            </aside>
            <main className={'w-3/4 ml-[25%] p-4'}>
                <section data-cat={'Велосипеды'} className={'flex flex-wrap gap-20'}>
                    {items.map((item, i) => <ItemForAdmin key={i} {...item}/>)}
                    <div className={'my-2 flex justify-center items-center w-full'}>
                        <button onClick={()=>setModal(true)} className={'p-2 rounded bg-blue-300'}>Добавить велосипед</button>
                    </div>
                </section>
                <section data-cat={'Аксессуары'} className={'hidden flex-wrap gap-20'}>
                    2
                </section>
                <section data-cat={'Запчасти'} className={'hidden flex-wrap gap-20'}>
                    3
                </section>
                <section data-cat={'Инструменты'} className={'hidden flex-wrap gap-20'}>
                    4
                </section>
                <section data-cat={'Электроника'} className={'hidden flex-wrap gap-20'}>
                    5
                </section>
                <section data-cat={'Экипировка'} className={'hidden flex-wrap gap-20'}>
                    6
                </section>
            </main>
        </div>
    );
};

export default AdminPanel;