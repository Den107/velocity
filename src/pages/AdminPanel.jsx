import React from 'react';
import '../css/admin.css'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../index.css'
import ItemForAdmin from "../components/ItemForAdmin";
import axios from "axios";

const AdminPanel = () => {
    const [items, setItems] = useState([])
    const [modalForAdd, setModalForAdd] = useState(false)
    const [modalForUpdate, setModalForUpdate] = useState(false)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [titleForUpdate, setTitleForUpdate] = useState('')
    const [priceForUpdate, setPriceForUpdate] = useState('')
    const [imageUrlForUpdate, setImageUrlForUpdate] = useState('')
    const [update, setUpdate] = useState(false)

    function submitHandler() {
        try {
            setUpdate(false)
            axios.post('http://localhost:4444/velos', {
                title, price, imageUrl
            }).then(response => response.data)
            setModalForAdd(false)
        } catch (e) {
            console.log(e)
        }
    }



    function deleteVelo(_id) {
        setUpdate(false)
        let confirm = window.confirm('Точно удалить?')
        if (confirm) {
            axios.delete(`http://localhost:4444/velos/${_id}`)
                .then(res => console.log(res.data))
        }
    }

    function submitHandlerForUpdate() {
       const _id = localStorage.getItem('id')
         axios.patch(`http://localhost:4444/velos/${_id}`,{
             title: titleForUpdate,
             price: priceForUpdate,
             imageUrl: imageUrlForUpdate
         }).then(resp=>console.log(resp.data))
        localStorage.clear()
        setUpdate(false)
        setModalForUpdate(false)
    }

   async function updateVelo(_id) {
       await axios.get(`http://localhost:4444/velos/${_id}`)
            .then(resp=>{
                setTitleForUpdate(resp.data.title)
                setPriceForUpdate(resp.data.price)
                setImageUrlForUpdate(resp.data.imageUrl)
            })
        setModalForUpdate(true)
       localStorage.setItem('id', _id)
    }

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


    useEffect(() => {
        if (!update) {
            fetch('http://localhost:4444/velos')
                .then(data => data.json())
                // .then(data=>console.log(data))
                .then(items => setItems(items))
        }
        setUpdate(true)

    }, [submitHandler])


    return (
        <div className={'relative'}>
            {modalForAdd && (<div
                className={'h-[100vh] w-full fixed left-auto right-auto z-[11] flex justify-center items-center modal'}>
                <form onClick={e => e.preventDefault()} className={'w-[300px] bg-white p-3'}>
                    <h2 className={'text-center p-2'}>Добавить велосипед</h2>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Название велосипеда
                        <input value={title} onChange={e => setTitle(e.target.value)}
                               className={'w-full p-2 outline-0 bg-blue-100 rounded text-black'} type="text"
                               placeholder={'Название...'}/>
                    </label>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Цена
                        <input value={price} onChange={e => setPrice(e.target.value)}
                               className={'w-full p-2 outline-0 bg-blue-100 rounded text-black'} type="text"
                               placeholder={'Цена...'}/>
                    </label>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Картинка
                        <input value={imageUrl} onChange={e => setImageUrl(e.target.value)}
                               className={'w-full p-2 outline-0 bg-blue-100 rounded text-black'} type="text"
                               placeholder={'Url...'}/>
                    </label>
                    <div className={'flex justify-between mt-3 mb-1'}>
                        <button className={'rounded bg-green-700 p-2 text-white text-xs'} type="submit"
                                onClick={submitHandler}>Добавить
                        </button>
                        <button onClick={() => setModalForAdd(false)}
                                className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть
                        </button>
                    </div>
                </form>
            </div>)}

            {modalForUpdate && (<div
                className={'h-[100vh] w-full fixed left-auto right-auto z-[11] flex justify-center items-center modal'}>
                <form onClick={e => e.preventDefault()} className={'w-[300px] bg-white p-3'}>
                    <h2 className={'text-center p-2'}>Обновить велосипед</h2>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Название велосипеда
                        <input value={titleForUpdate} onChange={e => setTitleForUpdate(e.target.value)}
                               className={'w-full p-2 outline-0 bg-blue-100 rounded text-black'} type="text"
                               placeholder={'Название...'}/>
                    </label>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Цена
                        <input value={priceForUpdate} onChange={e => setPriceForUpdate(e.target.value)}
                               className={'w-full p-2 outline-0 bg-blue-100 rounded text-black'} type="text"
                               placeholder={'Цена...'}/>
                    </label>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Картинка
                        <input value={imageUrlForUpdate} onChange={e => setImageUrlForUpdate(e.target.value)}
                               className={'w-full p-2 outline-0 bg-blue-100 rounded text-black'} type="text"
                               placeholder={'Url...'}/>
                    </label>
                    <div className={'flex justify-between mt-3 mb-1'}>
                        <button className={'rounded bg-green-700 p-2 text-white text-xs'} type="submit"
                                onClick={submitHandlerForUpdate}>Обновить
                        </button>
                        <button onClick={() => setModalForUpdate(false)}
                                className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть
                        </button>
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
                    {items.map((item) => <ItemForAdmin key={item._id} {...item} deleteVelo={() => deleteVelo(item._id)}
                                                       updateVelo={() => updateVelo(item._id)}/>)}
                    <div className={'my-2 flex justify-center items-center w-full'}>
                        <button onClick={() => setModalForAdd(true)} className={'p-2 rounded bg-blue-300'}>Добавить
                            велосипед
                        </button>
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