import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Announcement from "../components/Announcement";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

const array = [
    {id: 0, name: "飯店"},
    {id: 1, name: "公寓"},
    {id: 2, name: "小木屋"},
]

const Home = () => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].name);
    }
    const map = array.map((item) => item.name);
    console.log(map);

    return (
        <div className='home'>
            <h1>Home</h1>
            <Navbar/>
            <Header/>
            <Announcement type={"Upper half"}/>
            <Feature/>
            <Announcement type={"lower half"}/>
            <Footer/>
        </div>
    )
}


export default Home;