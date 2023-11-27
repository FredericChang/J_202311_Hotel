import React from 'react'
import "./popularHotels.scss"
import {Link} from "react-router-dom";
import Skeleton from "../components/Skeleton";
const PopularHotels = ({ dataArray, loading }) => {
//loading 現在從 feature useFetch Api那傳資料回來了
    const isloading = true;
    return (
        <div className='popularHotels'>
            { loading ?  <Skeleton type="popularHotel" length={7} />  :
                //利用loading = true 時 顯示 "冒號" 後面的原本dataArray
                //利用loading = false 時 顯示 "問號" 後面的<>我在載入不顯示</>
                <>{dataArray.map((item, index) =>
                    <Link to={`/hotels/${item._id}`} style={{ textDecoration: "none", color: "inherit" }}  key={index}>
                        <div className="item" >
                            <img src={item.photos[0]} alt="" />
                            <div className="itemInfo">
                                <div className="title">
                                    {item.name}
                                </div>
                                <div className="subTitle">
                                    {item.city}
                                </div>
                                <div className="price">
                                    TWD {item.cheapestPrice.toLocaleString()} 起
                                </div>
                                <div className="rate">
                                    <button>{item.rating}</button>
                                    <span>{item.rating >= 9.5 ? "好極了" : "傑出"}</span>
                                    <p>{item.comments.toLocaleString()}則評論</p>
                                </div>
                            </div>
                        </div>
                    </Link>)}
                </>
            }
        </div>
    )
}

export default PopularHotels;