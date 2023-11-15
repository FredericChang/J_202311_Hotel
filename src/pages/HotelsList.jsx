import React from "react";
import Navbar from "../components/Navbar";
import "./hotelsList.scss";
import { DateRange } from 'react-date-range'
import { format } from 'date-fns'
import * as locales from 'react-date-range/dist/locale';
const HotelsList = () => {
    const [openConditions, setOpenConditions] = React.useState(false)

    return (
        <>
         <div>
             <Navbar/>
             <div className="listContainer">
                 <div className="listWrapper">
                     <div className="listSearch">
                        <div className="searchTitle">
                            搜尋
                        </div>
                         <div className="listItem">
                             <lable>目的地／住宿名稱：</lable>
                             <input type="text" className="searchInput" placeholder='要去哪裡?'/>
                         </div>
                         <div className="listItem">

                             <label>入住/退房日期</label>
                             <span className='dates' >
                            這邊會放header的打開視窗calendar
                            </span>
                         </div>
                         <div className="listItem">
                             <div className="listItemLimitPrice">
                                 <span className="limitTitle">每晚最低價格</span>
                                 <input type="text" className='searchInput' />
                             </div>
                             <div className="listItemLimitPrice">
                                 <span className="limitTitle">每晚最高價格</span>
                                 <input type="text" className='searchInput' />
                             </div>
                             <div className="listItmConditions">
                                 <span className="SearchText" >3 位成人 · 2 位小孩· 1 間房</span>

                         </div>
                         <div className="listItem">
                             <button className='searchbtn'>搜尋</button>
                         </div>
                     </div>
                     </div>

                     <div className="listResult">

                     </div>
                 </div>
             </div>
         </div>
        </>
    )
}
export default HotelsList;