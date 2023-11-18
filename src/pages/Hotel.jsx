import React from "react";
import { faClipboardCheck, faHeartCircleCheck, faLocationDot, faPeopleGroup, faSmokingBan, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./hotel.scss"
const Hotel = () => {
    const photos = [
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
        {
            src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
    ];
    return (
        <div className="hotel">
            <Navbar/>
            <div className="HotelContainer">
                <div className="HotelWrapper">
                    <div className="HotelHeaderBtn">
                        <button>資訊 & 房價</button>
                        <button>設施</button>
                        <button>訂房須知</button>
                        <button>房客評價</button>
                    </div>
                    <div className="hotelTitle">
                        <div className="titleLeft">
                            <span className="type">飯店</span>
                            <span className='hotelName'>台南微醺文旅</span>
                            <span className='recommend'><span className="recommendSvg"><FontAwesomeIcon icon={faPeopleGroup} /></span>推薦四人住宿</span>
                            <div className="address"><FontAwesomeIcon icon={faLocationDot} /> 台南中西區No. 28 Dade Street <a>地理位置超棒－顯示地圖</a>
                            </div>
                        </div>
                        <div className="titleRight">
                            <button className="reservationBtn">現在就預訂</button>
                            <p> <FontAwesomeIcon icon={faHeartCircleCheck} /> <span>買貴退差價</span></p>
                        </div>
                    </div>
                    <div className="hotelImgWrapper">
                        <div className="hotelImg">
                            {photos.slice(0, 6).map((item, i) => //不管他再怎麼多 如果剛好有到7張照片就可以觀看更多，並往上加
                                i >= 5 ?
                                    <div className="Imgwrap" key={i}>
                                        <div className="more"  >{photos.length > 6 ? `+${photos.length - 6}張照片` : "觀看更多"}</div>
                                        <img src={item.src} alt="img" />
                                    </div>
                                    :
                                    <div className="Imgwrap" key={i}>
                                        <img src={item.src} alt="img" />
                                    </div>
                            )}
                        </div>
                    </div>
                    <div className="hotelDes">
                    </div>
                </div>

            </div>


            <Footer />
        </div>
    )
}
export default Hotel;