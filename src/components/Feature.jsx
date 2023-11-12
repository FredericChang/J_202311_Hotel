import Categories from "../subcomponents/Categories";
import "./feature.scss"

const Feature = () => {

    return (
        <div className='feature'>
            <div className='container'>
                <div className='listTitle'>
                    <h2>
                        Type
                    </h2>
                </div>
                <div className='listItems'>
                    <Categories />
                </div>
            </div>
        </div>
    )
}
export default Feature;