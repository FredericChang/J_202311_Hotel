import Categories from "../subcomponents/Categories";
import "./feature.scss"
import {CategoriesCities, CategoriesType, PopularHotelsData} from "../data";
import PostCards from "../subcomponents/PostCards";
import PopularHotels from "../subcomponents/PopularHotels";

import useFetch from '../hooks/useFetch'
const Feature = () => {

    const { data, loading, error} = useFetch("/hotels")
    console.log(data)

    return (
        <div className='feature'>
            <div className='container'>
                <div className='listTitle'>
                    <h2>
                        Type
                    </h2>
                </div>
                <div className='listItems'>
                    <Categories dataArray={CategoriesType}/>
                </div>
                <div className="listItems">
                    <PostCards/>
                </div>
                <div className="listTitle">
                    <h3>探索臺灣</h3>

                    <p>這些熱門目的地魅力無窮，等你來體驗！</p>
                </div>
                <div className='listItems'>
                    <Categories dataArray={CategoriesCities}/>
                </div>
                <div className="listTitle">
                    <h2>人氣民宿、公寓類型住宿</h2>
                </div>
                <div className="listItems">
                    <PopularHotels dataArray={data} loading={ loading }/>
                </div>
            </div>
        </div>
    )
}
export default Feature;