import React from 'react'
import "./popularHotels.scss"
import {Link} from "react-router-dom";
const PopularHotels = ({dataArray}) => {
    return (
        <div className="popularHotels">
            { dataArray.map((item,index) =>
                <Link to={`/hotels/${item.id}`} style={{textDecoration:"none",color: "inherit"}}>
                <div className="item" key={index}>
                    <img src={item.photos[0]} alt=""/>
                    <div className="itemInfo">
                        <div className="title">
                            {item.name}
                        </div>
                        <div className="subTitle">
                            {item.city}
                        </div>
                        <div className="price">
                            TWD {item.cheapestPrice.toLocaleString()} From
                        </div>
                        <div className="rate">
                            <button>{item.rating}</button>
                            <span>{item.rating >= 9.5 ? "Good" : "Perfect}"}</span>
                            <p>{item.comments.toLocaleString()} Reviews</p>

                        </div>
                    </div>

                </div>
                </Link>
            )}
        </div>
    )
}

export default PopularHotels;