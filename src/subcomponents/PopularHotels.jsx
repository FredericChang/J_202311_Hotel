import React from 'react'
import "./popularHotels.scss"
const PopularHotels = ({dataArray}) => {
    return (
        <div className="popularHotels">
            { dataArray.map((item,index) =>
                <div className="item" key={index}>
                    <img src={item.img} alt=""/>
                    <div className="itemInfo">
                        <div className="title">
                            {item.name}
                        </div>
                        <div className="subTitle">
                            {item.place}
                        </div>
                        <div className="price">
                            TWD {item.price.toLocaleString()} From
                        </div>
                        <div className="rate">
                            <button>{item.rate}</button>
                            <span>{item.rate >= 9.5 ? "Good" : "Perfect}"}</span>
                            <p>{item.comment.toLocaleString()} Reviews</p>

                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default PopularHotels;