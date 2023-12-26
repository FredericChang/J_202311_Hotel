import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import React from 'react'
import { useContext } from 'react'
import { OptionsContext } from '../context/OptionsContext'
import useFetch from '../hooks/useFetch'
import "./reservation.scss"

const Reservation = () => {
    const {data, loading, error} = useFetch("http://localhost:5000/api/v1/hotels")
    return (
        <div className='Reservation'>
            <div className="container">
                <div className="wrapper">
                    <div className="title">
                        <h2>空房情況</h2>
                    </div>
                    <div className="body">
                        <div className="roomTitle">
                            <div>客房類型</div>
                            <div>適合人數</div>
                            <div>房型今日價格</div>
                            <div>住宿總價格</div>
                            <div>選擇房型編號</div>
                        </div>
                        <div className='roomData'>
                            <div className='roomColumn'>
                                <div className='roomType'>雙人房</div>
                                <div className='roomType'>雙人房</div>
                                <div className='roomType'>雙人房</div>
                            </div>
                            <button className='reservationbtn'> 現在預訂</button>
                        </div>
                    </div >
                </div>
            </div>
        </div >
    )
}

export default Reservation
