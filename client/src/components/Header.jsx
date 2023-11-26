import React  from "react";
import "./header.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faPeopleGroup, faCalendar} from "@fortawesome/free-solid-svg-icons"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import * as locales from 'react-date-range/dist/locale';
import format from 'date-fns/format';
import { DateRange } from 'react-date-range';
import "./header.scss"
import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate =useNavigate();
    const [ openConditions, setOpenConditions ] = React.useState(false);
    const [ openCalendar, setOpenCalendar ] = React.useState(false);
    const [dates, setdates] = React.useState([ {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }]);
    const [ destination, setDestination ] = React.useState("");
    const [ conditions, setConditions ] = React.useState({
        adult: 1,
        children: 1,
        rooms: 1
    });

    const handleSearchBarSubmit = () => {
        navigate("/hotelsList",{state:{destination,dates,conditions}})

    }

    const handleCounter = (name, sign) => {

        setConditions(prev => {
            return {
                ...prev,
                [name]: sign === 'increase' ? prev[name] + 1 : prev[name] - 1
            }
        })
    }


    return (
        <div className='header'>
            <div className="headerContainer">
                <h1 className="headerTitle">
                    Search your hotels
                </h1>
                <p className="headerDes">
                    Search Hotels, and the coupons will be automatically applied when you check out.
                    <br/> Booking.com clone change the way you travel.
                </p>
                <div className="headerSearchBar">
                    <div className="SearchBarItem ">
                        <FontAwesomeIcon icon={faBed} />
                        <input type="search" placeholder="Where are you going?" className='searchInput' onChange={(e) => {
                            setDestination(e.target.value)
                        }}/>

                    </div>
                    <div className="SearchBarItem ">
                        <FontAwesomeIcon icon={faCalendar} onClick={ () => setOpenCalendar(!openCalendar)}/>
                        <span className='searchText' onClick={()=>setOpenCalendar(!openCalendar)} >
                            {format(dates[0].startDate,"MM/dd/yyyy")} - {format(dates[0].endDate,"MM/dd/yyyy")}

                        </span>

                        {openCalendar && <DateRange
                            editableDateInputs={true}//可以讓日期被選取並輸入等等的
                            onChange={item => setdates([item.selection])}
                            //onChange把紀錄到的改動都紀錄到state date 裡面我們暫存器就會有選好的日期範圍，等於是輸入到暫存器
                            //item.selection的概念就是讓他選擇上傳到key=selection的部分，因為
                            moveRangeOnFirstSelection={false}
                            className="calendar"//並記得classname scss styling導入
                            minDate={new Date()}
                            ranges={dates}//才可以選範圍並範圍更改會re-render useState的date等於這是個抓取date範圍並顯示在日曆上，等於是從暫存器輸入到日曆顯示上面
                            locale={locales['uk']}
                            //最後這邊就是語言版本使用繁體中文zhTW概念
                            //就可以用到上面的import * as locales from 'react-date-range/dist/locale';

                                                    />}
                    </div>
                    <div className="SearchBarItem">
                        <FontAwesomeIcon icon={faPeopleGroup} onClick={ ()=> setOpenConditions(!openConditions)}/>
                        <span className='searchText' onClick={ ()=> setOpenConditions(!openConditions)}>
                            {conditions.adult}位成人 · {conditions.children}位小孩 ·{conditions.room}間房
                        </span>
                        {openConditions &&
                            <div className="ConditionsContainer">
                                <div className="condition">
                                    Adults
                                    <div className="conditionCounter">
                                        <button className="conditionCounterButton" disabled={conditions.adult <=1 }
                                                onClick={() => handleCounter("adult","decrease")}>-</button>
                                        <span className="number">{conditions.adult}</span>
                                        <button className="conditionCounterButton" onClick={() => handleCounter("adult","increase")}>+</button>
                                    </div>
                                </div>
                                <div className="condition">
                                    <span>Children <p>0-17 years</p></span>
                                    <div className="conditionCounter">
                                        <button className="conditionCounterButton" disabled={conditions.children <=0 }
                                                onClick={() => handleCounter("children","decrease")}>-</button>
                                        <span className="number">{conditions.children}</span>
                                        <button className="conditionCounterButton" onClick={() => handleCounter("children","increase")}>+</button>
                                    </div>
                                </div>
                                <div className="condition">
                                    Rooms
                                    <div className="conditionCounter">
                                        <button className="conditionCounterButton" disabled={conditions.rooms <=1 }
                                                 onClick={() => handleCounter("rooms","decrease")}>-</button>
                                        <span className="number">{conditions.rooms}</span>
                                        <button className="conditionCounterButton" onClick={() => handleCounter("rooms","increase")}>+</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <button className='SearchBarBtn' onClick={handleSearchBarSubmit}>Search</button>
                </div>

            </div>
        </div>
    )
}

export default Header;