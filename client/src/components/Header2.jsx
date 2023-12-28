import { faBed, faCar, faPlane, faToriiGate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { new_ActiveItem } from '../constants/actionTypes'; // Replace with the actual path to your actionTypes file
import { ActiveItemContext } from '../context/ActiveItemContext'; // Replace with the actual path to your ActiveItemContext file
import "./Header2.scss";


function Header2() {
    const { activeItem, dispatch } = useContext(ActiveItemContext);
    const handleItemClick = (item) => {
        dispatch({ type: new_ActiveItem, payload: item });
    };

    return (
        <div className="navbar2">
            <div className="navbar2Container">
                <div className="lineTwo">
                    <div className={`item ${activeItem === 'AC Source' ? 'active' : ''}`} onClick={() => handleItemClick('AC Source')}>
                        <FontAwesomeIcon icon={faBed} />
                        <span>AC Source</span>
                    </div>
                    <div className={`item ${activeItem === 'AC Load' ? 'active' : ''}`} onClick={() => handleItemClick('AC Load')}>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>AC Load</span>
                    </div>
                    <div className={`item ${activeItem === 'DC Source' ? 'active' : ''}`} onClick={() => handleItemClick('DC Source')}>
                        <FontAwesomeIcon icon={faCar} />
                        <span>DC Source</span>
                    </div>
                    <div className={`item ${activeItem === 'DC Load' ? 'active' : ''}`} onClick={() => handleItemClick('DC Load')}>
                        <FontAwesomeIcon icon={faToriiGate} />
                        <span>DC Load</span>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Header2