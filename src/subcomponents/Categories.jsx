import React from "react";
import "./categories.scss"
import { CategoriesType} from "../data";

const Categories = () => {
    // const map = CategoriesType.map((item, index) => {
    //     console.log( `${item.img} is at index ${index}`)
    // })
    return (
        <>
            {CategoriesType.map((item, index) =>
                <div className="item" key={index}>
                    <img src={item.img} alt="" />
                    <div className="itemInfo">
                        <div className="title">
                            {item.name}
                        </div>
                        <div className="desc">
                            {item.amount}
                        </div>
                    </div>
                </div>)}
        </>
    )
}

export default Categories;