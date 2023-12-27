import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import React, {useState} from 'react'
import { useContext } from 'react'
import { OptionsContext } from '../context/OptionsContext'
import useFetch from '../hooks/useFetch'
import "./reservation.scss"
import {LoginContext} from "../context/LoginContext";

const Reservation = ({ openSetting, hotelid  }) => {
    const {user } = useContext(LoginContext)
    const {data, loading, error} = useFetch("http://localhost:5000/api/v1/rooms/findHotel/655a82026782712dd88a52a7")
    return (
        <div className='Reservation'>
            <div className="container">
                <div className="wrapper">
                    <div className="title">
                        <h2>空房情況</h2>
                        <h3>幾號幾號幾晚 大孩小孩</h3>
                        <FontAwesomeIcon icon={faCircleXmark} onClick={() => openSetting(false)} />

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
                                {loading && <>載入中</>}
                                {data.map((room, i) =>
                                    (
                                        <div className="roomInfo" key={i}>
                                            <div >
                                                {room.title}<br/><p>{room.desc}</p>
                                            </div>
                                            <div >
                                                {room.maxPeople}
                                            </div>
                                            <div >
                                                TWD {room.price}
                                            </div>

                                            <div >
                                                TWD {room.price}
                                            </div>

                                            <div >
                                                {room.roomNumbers?.map((item, i) => (
                                                    <span key={i}>
                                                <input type="checkbox" value={item._id} />
                                                        {item.number}<br/>
                                            </span>
                                                ))}
                                            </div>
                                        </div>)
                                )}
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
