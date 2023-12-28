import { faBed, faCalendar, faPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from "@mui/material";
import { useState } from 'react';
import "./information.scss";

function Information() {
    const group1 = [ "180l", "340l", "600l", "1000l", "1500l", "2000l" ];
    const group2 = [ "-40 C to +180", "-70 C to +180", "WT69/ R-469A"];
    const group3 = [ "3k/min", "5k/min", "10k/min"];
    const [space, setSpace] = useState({
        Height:"---",
        Width:"---",
        Depth: "---"
    });
    const [outSpace, setOutSpace] = useState({
        Height:"---",
        Width:"---",
        Depth: "---"
    });

    const [group1Itme, setGroup1Item] = useState("");
    const [group12tme, setGroup2Item] = useState("");
    const [group13tme, setGroup3Item] = useState("");
    const [activeKey, setActiveKey] = useState(null);
    const [activeItem, setActiveItem] = useState(null);
    const [activeItemTemp, setActiveItemTemp] = useState(null);
    const [activeItemTempC, setActiveItemTempC] = useState(null);
 
    const dimensions = {
        "180l": {
            "space": { Height: 750, Width: 580, Depth: 450 },
            "outSpace": { Height: 1800, Width: 895, Depth: 1495 }
        },
        "340l": {
            "space": { Height: 750, Width: 580, Depth: 450 },
            "outSpace": { Height: 1800, Width: 895, Depth: 1495 }
        },
        "600l": {
            "space": { Height: 950, Width: 800, Depth: 800 },
            "outSpace": { Height: 2000, Width: 1115, Depth: 1855 }
        },
        "1000l": {
            "space": { Height: 950, Width: 1100, Depth: 950 },
            "outSpace": { Height: 2000, Width: 1415, Depth: 2030 }
        },
        "1500l": {
            "space": { Height: 950, Width: 1100, Depth: 1475 },
            "outSpace": { Height: 2000, Width: 1415, Depth: 2555 }
        },
        "2000l": {
            "space": { Height: 950, Width: 1100, Depth: 2150 },
            "outSpace": { Height: 2000, Width: 1415, Depth: 3230 }
        },

    };

    const handleClick = (item) => { 
        if(group1.includes(item)) {
            setGroup1Item(item);
            const selectedDimensions = dimensions[item];
            const spaceDimensions = selectedDimensions.space;
            const outSpaceDimensions = selectedDimensions.outSpace;
            setSpace(spaceDimensions);
            setOutSpace(outSpaceDimensions); // Call setOutSpaces function to update state
            console.log(spaceDimensions);
            console.log(outSpaceDimensions);
        }
    }

  return (
    <div className="information">
        <div className="informationContainer">
            <div className="title">
                <h1>TempEvent</h1>
            </div>
            <Divider className='divider'/>

            <div className="group">
                <div className="left">
                    <h2 className="groupTitle">Volume:</h2>
                    <FontAwesomeIcon className="icon" icon={faCalendar} />
                </div>
                <div className="right">
                    <div className="buttonGroup">
                        {group1.map((item) => (
                            <button className={`button ${item === activeItem ? 'active' : ''}`}  onClick={() => {
                                    setActiveItem(item);
                                    handleClick(item);
                                }}> {item}
                            </button>
                        
                        ))} 
                    </div>
                    <div>{activeItem}</div>
                </div>
            </div>
            <Divider className='divider'/>
            <div className="group">
                <div className="left">
                    <h2 className="groupTitle">Temperature range:</h2>
                        <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div className="right">
                    <div className="buttonGroup">
                            {group2.map((item) => (
                                <button className={`button ${item === activeItemTemp ? 'active' : ''}`}  onClick={() => {
                                    setActiveItemTemp(item);
                                        handleClick(item);
                                    }}> {item}
                                </button>
                            
                            ))} 
                        </div>
                        <div>{activeItemTemp}</div>
                </div>
            </div>
            <Divider className='divider'/>
            <div className="group">
            <div className="left">
                    <h2 className="groupTitle">Temperature change rate:</h2>
                        <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div className="right">
                    <div className="buttonGroup">
                            {group3.map((item) => (
                                <button className={`button ${item === activeItemTempC ? 'active' : ''}`}  onClick={() => {
                                    setActiveItemTempC(item);
                                        handleClick(item);
                                    }}> {item}
                                </button>
                            
                            ))} 
                        </div>
                        <div>{activeItemTempC}</div>
                </div>
            </div>
            <Divider className='divider'/>
            <div className="group">
                <div className="left2">
                        <h2 className="groupTitle">Test space dimensions:</h2>
                            <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div className="right2">
                        <div className="itemInfo">
                            {Object.entries(space).map(([key, value]) => (
                                <div className="itemContainer" key={key}>
                                    <div className="titleSpace">{key}</div>
                                    <div className="desc">{group1Itme === null ? '---' : value}</div>
                                </div>
                            ))}
                        </div>

                </div>
            </div>
            <Divider className='divider'/>
            <div className="group">
            <div className="left2">
                    <h2 className="groupTitle">Exterior housing dimensions:</h2>
                        <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div className="right2">
                        <div className="itemInfo">
                            {Object.entries(outSpace).map(([key, value]) => (
                                <div className="itemContainer" key={key}>
                                    <div className="titleSpace">{key}</div>
                                    <div className="desc">{value}</div>
                                </div>
                            ))}
                        </div>

                </div>
            </div>
            <Divider className='divider'/>
            <div className="group4">

                    <div className="item">
                        <FontAwesomeIcon icon={faBed} />
                        <span >BacK</span>
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span >航班</span>
                    </div>

            </div>
        </div>
    </div>
  )
}

export default Information