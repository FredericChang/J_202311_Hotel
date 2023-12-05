import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { OptionsContext } from '../context/OptionsContext'
import useFetch from '../hooks/useFetch'
import "./reservation.scss"
import { motion } from "framer-motion";
import { LoginContext } from '../context/LoginContext'
import axios from 'axios'
import { ReservationDatesList } from '../datesCalculate'
import useCreateOrder from '../hooks/useCreateOrder'
import { useNavigate } from 'react-router-dom'

const Reservation = () => {
    const { data, loading, error } = useFetch("http://localhost:5000/api/v1/hotels")
    const { date, options } = useContext(OptionsContext)
    const { user } = useContext(LoginContext)
    //在這邊建立我們的order訂單，同時新增我們的room的unavailableDates的時間
    //並之後在爬梳unavailableDates如果發現有客戶有選的時間跟我們的unavailableDates有衝突就不讓他勾選

    const [roomNumber, setRoomNumber] = useState([])
    const [ orderData, setOrderData ] = useState({
        userId: user._id,
        hotelId: hotelid,
        RoomNumberId: [],
        ReservationDates: [
            {
                startDate: date[0].startDate,
                endDate: date[0].endDate,
            }
        ],
        totalPrice: 0,
        options: {
            adult: options.adult,
            children: options.children,
            rooms: options.room,
        }
    })
}