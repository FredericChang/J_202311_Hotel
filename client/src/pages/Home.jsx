import { useContext, useEffect } from 'react';
import Announcement from "../components/Announcement";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Information from "../components/Information";
import Information2 from "../components/Information2";

import Navbar from "../components/Navbar";
import { ActiveItemContext } from '../context/ActiveItemContext'; // Replace with the actual path to your ActiveItemContext file
import "./home.scss";


const array = [
    {id: 0, name: "飯店"},
    {id: 1, name: "公寓"},
    {id: 2, name: "小木屋"},
]

const Home = () => {
    const { activeItem, group1Item1, group2Item1, group3Item1, dispatch } = useContext(ActiveItemContext);

    for (let i = 0; i < array.length; i++) {
        console.log(array[i].name);
    }
    const map = array.map((item) => item.name);
    console.log(map);

    useEffect(() => {
        const handleBeforeUnload = () => {
          localStorage.removeItem('activeItem2');
          localStorage.removeItem('activeItemTemp');
          localStorage.removeItem('activeItemTempC');
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
        // Cleanup function to remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <div className='home'>
            <h1>Home</h1>
            
            <Navbar/>
            <Header2/>
            <h2 className="ff">{activeItem}</h2>
            <Information/>
            <Information2/>
            <Header/>
            <Announcement type={"Upper half"}/>
            <Feature/>
            <Announcement type={"lower half"}/>
            <Footer/>
        </div>
    )
}


export default Home;