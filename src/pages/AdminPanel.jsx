import React from 'react';
import '../css/admin.css'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import '../index.css'
import ItemForAdmin from "../components/ItemForAdmin";
import axios from "axios";
import ItemForAdminAcc from "../components/ItemForAdminAcc";
import ItemForAdminSpares from "../components/ItemForAdminSpares";
import ItemForAdminIns from "../components/ItemForAdminIns";
import ItemForAdminElec from "../components/ItemForAdminElec";
import ItemForAdminEquip from "../components/ItemForAdminEquip";

const AdminPanel = () => {
    const [items, setItems] = useState([])
    const [itemsAcc, setItemsAcc] = useState([])
    const [itemsElec, setItemsElec] = useState([])
    const [itemsEquip, setItemsEquip] = useState([])
    const [itemsIns, setItemsIns] = useState([])
    const [itemsSpares, setItemsSpares] = useState([])
    const [modalForAddVelo, setModalForAddVelo] = useState(false)
    const [modalForAddAcc, setModalForAddAcc] = useState(false)
    const [modalForAddElec, setModalForAddElec] = useState(false)
    const [modalForAddEquip, setModalForAddEquip] = useState(false)
    const [modalForAddIns, setModalForAddIns] = useState(false)
    const [modalForAddSpares, setModalForAddSpares] = useState(false)
    const [modalForUpdateVelo, setModalForUpdateVelo] = useState(false)
    const [modalForUpdateAcc, setModalForUpdateAcc] = useState(false)
    const [modalForUpdateElec, setModalForUpdateElec] = useState(false)
    const [modalForUpdateEquip, setModalForUpdateEquip] = useState(false)
    const [modalForUpdateIns, setModalForUpdateIns] = useState(false)
    const [modalForUpdateSpares, setModalForUpdateSpares] = useState(false)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [titleForUpdate, setTitleForUpdate] = useState('')
    const [priceForUpdate, setPriceForUpdate] = useState('')
    const [imageUrlForUpdate, setImageUrlForUpdate] = useState('')
    const [update, setUpdate] = useState(false)

    function submitHandlerVelo() {
        try {
            setUpdate(false)
            axios.post('http://localhost:4444/velos', {
                title, price, imageUrl
            }).then(response => response.data)
            setModalForAddVelo(false)
            setTitle('')
            setPrice('')
            setImageUrl('')
        } catch (e) {
            console.log(e)
        }
    }

    function submitHandlerAcc() {
        try {
            setUpdate(false)
            axios.post('http://localhost:4444/acc', {
                title, price, imageUrl
            }).then(response => response.data)
            setModalForAddAcc(false)
            setTitle('')
            setPrice('')
            setImageUrl('')
        } catch (e) {
            console.log(e)
        }
    }

    function submitHandlerElec() {
        try {
            setUpdate(false)
            axios.post('http://localhost:4444/elec', {
                title, price, imageUrl
            }).then(response => response.data)
            setModalForAddElec(false)
            setTitle('')
            setPrice('')
            setImageUrl('')
        } catch (e) {
            console.log(e)
        }
    }

    function submitHandlerEquip() {
        try {
            setUpdate(false)
            axios.post('http://localhost:4444/equip', {
                title, price, imageUrl
            }).then(response => response.data)
            setModalForAddEquip(false)
            setTitle('')
            setPrice('')
            setImageUrl('')
        } catch (e) {
            console.log(e)
        }
    }

    function submitHandlerIns() {
        try {
            setUpdate(false)
            axios.post('http://localhost:4444/ins', {
                title, price, imageUrl
            }).then(response => response.data)
            setModalForAddIns(false)
            setTitle('')
            setPrice('')
            setImageUrl('')
        } catch (e) {
            console.log(e)
        }
    }

    function submitHandlerSpares() {
        try {
            setUpdate(false)
            axios.post('http://localhost:4444/spares', {
                title, price, imageUrl
            }).then(response => response.data)
            setModalForAddSpares(false)
            setTitle('')
            setPrice('')
            setImageUrl('')
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

    function deleteAcc(_id) {
        setUpdate(false)
        let confirm = window.confirm('Точно удалить?')
        if (confirm) {
            axios.delete(`http://localhost:4444/acc/${_id}`)
                .then(res => console.log(res.data))
        }
    }

    function deleteElec(_id) {
        setUpdate(false)
        let confirm = window.confirm('Точно удалить?')
        if (confirm) {
            axios.delete(`http://localhost:4444/elec/${_id}`)
                .then(res => console.log(res.data))
        }
    }

    function deleteEquip(_id) {
        setUpdate(false)
        let confirm = window.confirm('Точно удалить?')
        if (confirm) {
            axios.delete(`http://localhost:4444/equip/${_id}`)
                .then(res => console.log(res.data))
        }
    }

    function deleteIns(_id) {
        setUpdate(false)
        let confirm = window.confirm('Точно удалить?')
        if (confirm) {
            axios.delete(`http://localhost:4444/ins/${_id}`)
                .then(res => console.log(res.data))
        }
    }

    function deleteSpares(_id) {
        setUpdate(false)
        let confirm = window.confirm('Точно удалить?')
        if (confirm) {
            axios.delete(`http://localhost:4444/spares/${_id}`)
                .then(res => console.log(res.data))
        }
    }


    function submitHandlerForUpdateVelo() {
       const _id = localStorage.getItem('id')
         axios.patch(`http://localhost:4444/velos/${_id}`,{
             title: titleForUpdate,
             price: priceForUpdate,
             imageUrl: imageUrlForUpdate
         }).then(resp=>console.log(resp.data))
        localStorage.clear()
        setUpdate(false)
        setModalForUpdateVelo(false)
    }

    function submitHandlerForUpdateAcc() {
        const _id = localStorage.getItem('id')
        axios.patch(`http://localhost:4444/acc/${_id}`,{
            title: titleForUpdate,
            price: priceForUpdate,
            imageUrl: imageUrlForUpdate
        }).then(resp=>console.log(resp.data))
        localStorage.clear()
        setUpdate(false)
        setModalForUpdateAcc(false)
    }

    function submitHandlerForUpdateElec() {
        const _id = localStorage.getItem('id')
        axios.patch(`http://localhost:4444/elec/${_id}`,{
            title: titleForUpdate,
            price: priceForUpdate,
            imageUrl: imageUrlForUpdate
        }).then(resp=>console.log(resp.data))
        localStorage.clear()
        setUpdate(false)
        setModalForUpdateElec(false)
    }

    function submitHandlerForUpdateEquip() {
        const _id = localStorage.getItem('id')
        axios.patch(`http://localhost:4444/equip/${_id}`,{
            title: titleForUpdate,
            price: priceForUpdate,
            imageUrl: imageUrlForUpdate
        }).then(resp=>console.log(resp.data))
        localStorage.clear()
        setUpdate(false)
        setModalForUpdateEquip(false)
    }

    function submitHandlerForUpdateIns() {
        const _id = localStorage.getItem('id')
        axios.patch(`http://localhost:4444/ins/${_id}`,{
            title: titleForUpdate,
            price: priceForUpdate,
            imageUrl: imageUrlForUpdate
        }).then(resp=>console.log(resp.data))
        localStorage.clear()
        setUpdate(false)
        setModalForUpdateIns(false)
    }

    function submitHandlerForUpdateSpares() {
        const _id = localStorage.getItem('id')
        axios.patch(`http://localhost:4444/spares/${_id}`,{
            title: titleForUpdate,
            price: priceForUpdate,
            imageUrl: imageUrlForUpdate
        }).then(resp=>console.log(resp.data))
        localStorage.clear()
        setUpdate(false)
        setModalForUpdateSpares(false)
    }


   async function updateVelo(_id) {
       await axios.get(`http://localhost:4444/velos/${_id}`)
            .then(resp=>{
                setTitleForUpdate(resp.data.title)
                setPriceForUpdate(resp.data.price)
                setImageUrlForUpdate(resp.data.imageUrl)
            })
        setModalForUpdateVelo(true)
       localStorage.setItem('id', _id)
    }

    async function updateAcc(_id) {
        await axios.get(`http://localhost:4444/acc/${_id}`)
            .then(resp=>{
                setTitleForUpdate(resp.data.title)
                setPriceForUpdate(resp.data.price)
                setImageUrlForUpdate(resp.data.imageUrl)
            })
        setModalForUpdateAcc(true)
        localStorage.setItem('id', _id)
    }

    async function updateElec(_id) {
        await axios.get(`http://localhost:4444/elec/${_id}`)
            .then(resp=>{
                setTitleForUpdate(resp.data.title)
                setPriceForUpdate(resp.data.price)
                setImageUrlForUpdate(resp.data.imageUrl)
            })
        setModalForUpdateElec(true)
        localStorage.setItem('id', _id)
    }

    async function updateEquip(_id) {
        await axios.get(`http://localhost:4444/equip/${_id}`)
            .then(resp=>{
                setTitleForUpdate(resp.data.title)
                setPriceForUpdate(resp.data.price)
                setImageUrlForUpdate(resp.data.imageUrl)
            })
        setModalForUpdateEquip(true)
        localStorage.setItem('id', _id)
    }

    async function updateIns(_id) {
        await axios.get(`http://localhost:4444/ins/${_id}`)
            .then(resp=>{
                setTitleForUpdate(resp.data.title)
                setPriceForUpdate(resp.data.price)
                setImageUrlForUpdate(resp.data.imageUrl)
            })
        setModalForUpdateIns(true)
        localStorage.setItem('id', _id)
    }

    async function updateSpares(_id) {
        await axios.get(`http://localhost:4444/spares/${_id}`)
            .then(resp=>{
                setTitleForUpdate(resp.data.title)
                setPriceForUpdate(resp.data.price)
                setImageUrlForUpdate(resp.data.imageUrl)
            })
        setModalForUpdateSpares(true)
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

    }, [submitHandlerVelo])

    useEffect(() => {
        if (!update) {
            fetch('http://localhost:4444/acc')
                .then(data => data.json())
                // .then(data=>console.log(data))
                .then(items => setItemsAcc(items))
        }
        setUpdate(true)

    }, [submitHandlerAcc])

    useEffect(() => {
        if (!update) {
            fetch('http://localhost:4444/elec')
                .then(data => data.json())
                // .then(data=>console.log(data))
                .then(items => setItemsElec(items))
        }
        setUpdate(true)

    }, [submitHandlerElec])

    useEffect(() => {
        if (!update) {
            fetch('http://localhost:4444/equip')
                .then(data => data.json())
                // .then(data=>console.log(data))
                .then(items => setItemsEquip(items))
        }
        setUpdate(true)

    }, [submitHandlerEquip])

    useEffect(() => {
        if (!update) {
            fetch('http://localhost:4444/ins')
                .then(data => data.json())
                // .then(data=>console.log(data))
                .then(items => setItemsIns(items))
        }
        setUpdate(true)

    }, [submitHandlerIns])

    useEffect(() => {
        if (!update) {
            fetch('http://localhost:4444/spares')
                .then(data => data.json())
                // .then(data=>console.log(data))
                .then(items => setItemsSpares(items))
        }
        setUpdate(true)

    }, [submitHandlerSpares])


    return (
        <div className={'relative'}>
            {modalForAddVelo && (<div
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
                                onClick={submitHandlerVelo}>Добавить
                        </button>
                        <button onClick={() => setModalForAddVelo(false)}
                                className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть
                        </button>
                    </div>
                </form>
            </div>)}

            {modalForUpdateVelo && (<div
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
                                onClick={submitHandlerForUpdateVelo}>Обновить
                        </button>
                        <button onClick={() => setModalForUpdateVelo(false)}
                                className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть
                        </button>
                    </div>
                </form>
            </div>)}

            {modalForAddAcc && (<div
                className={'h-[100vh] w-full fixed left-auto right-auto z-[11] flex justify-center items-center modal'}>
                <form onClick={e => e.preventDefault()} className={'w-[300px] bg-white p-3'}>
                    <h2 className={'text-center p-2'}>Добавить аксессуар</h2>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Название аксессуара
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
                                onClick={submitHandlerAcc}>Добавить
                        </button>
                        <button onClick={() => setModalForAddAcc(false)}
                                className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть
                        </button>
                    </div>
                </form>
            </div>)}

            {modalForUpdateAcc && (<div
                className={'h-[100vh] w-full fixed left-auto right-auto z-[11] flex justify-center items-center modal'}>
                <form onClick={e => e.preventDefault()} className={'w-[300px] bg-white p-3'}>
                    <h2 className={'text-center p-2'}>Обновить аксессуар</h2>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Название аксессуара
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
                                onClick={submitHandlerForUpdateAcc}>Обновить
                        </button>
                        <button onClick={() => setModalForUpdateAcc(false)}
                                className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть
                        </button>
                    </div>
                </form>
            </div>)}

            {modalForAddSpares && (<div
                className={'h-[100vh] w-full fixed left-auto right-auto z-[11] flex justify-center items-center modal'}>
                <form onClick={e => e.preventDefault()} className={'w-[300px] bg-white p-3'}>
                    <h2 className={'text-center p-2'}>Добавить запчасть</h2>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Название запчасти
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
                                onClick={submitHandlerSpares}>Добавить
                        </button>
                        <button onClick={() => setModalForAddSpares(false)}
                                className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть
                        </button>
                    </div>
                </form>
            </div>)}

            {modalForUpdateSpares && (<div
                className={'h-[100vh] w-full fixed left-auto right-auto z-[11] flex justify-center items-center modal'}>
                <form onClick={e => e.preventDefault()} className={'w-[300px] bg-white p-3'}>
                    <h2 className={'text-center p-2'}>Обновить запчасть</h2>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Название запчасти
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
                                onClick={submitHandlerForUpdateSpares}>Обновить
                        </button>
                        <button onClick={() => setModalForUpdateSpares(false)}
                                className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть
                        </button>
                    </div>
                </form>
            </div>)}

            {modalForAddIns && (<div
                className={'h-[100vh] w-full fixed left-auto right-auto z-[11] flex justify-center items-center modal'}>
                <form onClick={e => e.preventDefault()} className={'w-[300px] bg-white p-3'}>
                    <h2 className={'text-center p-2'}>Добавить инструмент</h2>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Название инструмента
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
                                onClick={submitHandlerIns}>Добавить
                        </button>
                        <button onClick={() => setModalForAddIns(false)}
                                className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть
                        </button>
                    </div>
                </form>
            </div>)}

            {modalForUpdateIns && (<div
                className={'h-[100vh] w-full fixed left-auto right-auto z-[11] flex justify-center items-center modal'}>
                <form onClick={e => e.preventDefault()} className={'w-[300px] bg-white p-3'}>
                    <h2 className={'text-center p-2'}>Обновить инструмент</h2>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Название инструмента
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
                                onClick={submitHandlerForUpdateIns}>Обновить
                        </button>
                        <button onClick={() => setModalForUpdateIns(false)}
                                className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть
                        </button>
                    </div>
                </form>
            </div>)}

            {modalForAddElec && (<div
                className={'h-[100vh] w-full fixed left-auto right-auto z-[11] flex justify-center items-center modal'}>
                <form onClick={e => e.preventDefault()} className={'w-[300px] bg-white p-3'}>
                    <h2 className={'text-center p-2'}>Добавить электронику</h2>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Название электроники
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
                                onClick={submitHandlerElec}>Добавить
                        </button>
                        <button onClick={() => setModalForAddElec(false)}
                                className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть
                        </button>
                    </div>
                </form>
            </div>)}

            {modalForUpdateElec && (<div
                className={'h-[100vh] w-full fixed left-auto right-auto z-[11] flex justify-center items-center modal'}>
                <form onClick={e => e.preventDefault()} className={'w-[300px] bg-white p-3'}>
                    <h2 className={'text-center p-2'}>Обновить электронику</h2>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Название электроники
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
                                onClick={submitHandlerForUpdateElec}>Обновить
                        </button>
                        <button onClick={() => setModalForUpdateElec(false)}
                                className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть
                        </button>
                    </div>
                </form>
            </div>)}

            {modalForAddEquip && (<div
                className={'h-[100vh] w-full fixed left-auto right-auto z-[11] flex justify-center items-center modal'}>
                <form onClick={e => e.preventDefault()} className={'w-[300px] bg-white p-3'}>
                    <h2 className={'text-center p-2'}>Добавить экипировку</h2>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Название экипировки
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
                                onClick={submitHandlerEquip}>Добавить
                        </button>
                        <button onClick={() => setModalForAddEquip(false)}
                                className={'rounded bg-red-700 p-2 text-white text-xs'}>Закрыть
                        </button>
                    </div>
                </form>
            </div>)}

            {modalForUpdateEquip && (<div
                className={'h-[100vh] w-full fixed left-auto right-auto z-[11] flex justify-center items-center modal'}>
                <form onClick={e => e.preventDefault()} className={'w-[300px] bg-white p-3'}>
                    <h2 className={'text-center p-2'}>Обновить экипировку</h2>
                    <label className={'p-2 text-sm text-black mt-2'}>
                        Название экипировки
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
                                onClick={submitHandlerForUpdateEquip}>Обновить
                        </button>
                        <button onClick={() => setModalForUpdateEquip(false)}
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
                        <button onClick={() => setModalForAddVelo(true)} className={'p-2 rounded bg-blue-300'}>Добавить
                            велосипед
                        </button>
                    </div>
                </section>
                <section data-cat={'Аксессуары'} className={'hidden flex-wrap gap-20'}>
                    {itemsAcc.map((item) => <ItemForAdminAcc key={item._id} {...item} deleteAcc={() => deleteAcc(item._id)}
                                                       updateAcc={() => updateAcc(item._id)}/>)}
                    <div className={'my-2 flex justify-center items-center w-full'}>
                        <button onClick={() => setModalForAddAcc(true)} className={'p-2 rounded bg-blue-300'}>Добавить
                            аксессуар
                        </button>
                    </div>
                </section>
                <section data-cat={'Запчасти'} className={'hidden flex-wrap gap-20'}>
                    {itemsSpares.map((item) => <ItemForAdminSpares key={item._id} {...item} deleteSpares={() => deleteSpares(item._id)}
                                                       updateSpares={() => updateSpares(item._id)}/>)}
                    <div className={'my-2 flex justify-center items-center w-full'}>
                        <button onClick={() => setModalForAddSpares(true)} className={'p-2 rounded bg-blue-300'}>Добавить
                            запчасть
                        </button>
                    </div>
                </section>
                <section data-cat={'Инструменты'} className={'hidden flex-wrap gap-20'}>
                    {itemsIns.map((item) => <ItemForAdminIns key={item._id} {...item} deleteIns={() => deleteIns(item._id)}
                                                             updateIns={() => updateIns(item._id)}/>)}
                    <div className={'my-2 flex justify-center items-center w-full'}>
                        <button onClick={() => setModalForAddIns(true)} className={'p-2 rounded bg-blue-300'}>Добавить
                            инструмент
                        </button>
                    </div>
                </section>
                <section data-cat={'Электроника'} className={'hidden flex-wrap gap-20'}>
                    {itemsElec.map((item) => <ItemForAdminElec key={item._id} {...item} deleteElec={() => deleteElec(item._id)}
                                                          updateElec={() => updateElec(item._id)}/>)}
                    <div className={'my-2 flex justify-center items-center w-full'}>
                        <button onClick={() => setModalForAddElec(true)} className={'p-2 rounded bg-blue-300'}>Добавить
                            электронику
                        </button>
                    </div>
                </section>
                <section data-cat={'Экипировка'} className={'hidden flex-wrap gap-20'}>
                    {itemsEquip.map((item) => <ItemForAdminEquip key={item._id} {...item} deleteEquip={() => deleteEquip(item._id)}
                                                           updateEquip={() => updateEquip(item._id)}/>)}
                    <div className={'my-2 flex justify-center items-center w-full'}>
                        <button onClick={() => setModalForAddEquip(true)} className={'p-2 rounded bg-blue-300'}>Добавить
                            экипировку
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default AdminPanel;