import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from "@mui/material";
import { useEffect, useState } from 'react';

import "./information2.scss";

function Information2() {

    const group1 = [ "180l", "340l", "600l", "1000l", "1500l", "2000l" ];
    const group2 = [ "-40 C to +180", "-70 C to +180", "WT69/ R-469A"];
    const group3 = [ "3k/min", "5k/min", "10k/min"];

    const setup = [ "Mobile designn", "Vibration-absorbing feet" ];

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
    const [activeItem2, setActiveItem2] = useState(localStorage.getItem('activeItem2') || null);
    const [activeItemTemp, setActiveItemTemp] = useState(localStorage.getItem('activeItemTemp') || null);
    const [activeItemTempC, setActiveItemTempC] = useState(localStorage.getItem('activeItemTempC') || null);

    const [selectedValue, setSelectedValue] = useState('50mm');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
      };

    const [setupItem, setSetupItem] = useState("");
    const [rows, setRows] = useState([{ value: '50mm' }]); // Start with one row

    const handleChangeCombo = (index) => (event) => {
        const newRows = [...rows];
        newRows[index] = { value: event.target.value };
        setRows(newRows);
        console.log(event.target.value + " " + index);
      
        if (event.target.value !== 'none' && rows.length < 10 && rows.length === index+1 ) {
          setRows([...newRows, { value: '50mm' }]);
        }
      };
 
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

    useEffect(() => {
    localStorage.setItem('activeItem2', activeItem2);
    }, [activeItem2]);

    useEffect(() => {
    localStorage.setItem('activeItemTemp', activeItemTemp);
    }, [activeItemTemp]);

    useEffect(() => {
    localStorage.setItem('activeItemTempC', activeItemTempC);
    }, [activeItemTempC]);


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
    const [isImageVisible, setIsImageVisible] = useState(false);

    const handleClickImg = () => {
      setIsImageVisible(!isImageVisible);
    };
  

  return (
    <div className="information">
        <div className="informationContainer">
            <div className="title">
                <h1>TempEvent</h1>
            </div>
            <Divider className='divider'/>
            <div className="group">
                <div className="left">
                    <h2 className="groupTitle">Setup</h2>
                    <FontAwesomeIcon className="icon" icon={faCalendar} />
                </div>
                <div className="right">
                    <div className="buttonGroup">
                        {setup.map((item) => (
                            <button className={`button ${item === activeItem2 ? 'active' : ''}`}  onClick={() => {
                                    setActiveItem2(item);
                                    handleClick(item);
                                }}> {item}
                            </button>
                        
                        ))} 
                    </div>
                    <div>{activeItem2}</div>
                </div>
            </div>
            <Divider className='divider'/>
            <div className="groupX">
                <div className="left3">
                    <h2 className="groupTitle">Access Port:</h2>
                        <FontAwesomeIcon icon={faCalendar} />
                </div>
                <div className="right3">
                    <div className="AccessContainer">
                        <div className="AccessContainer1">
                            <h2 className="AccessTitle">
                            Installation drawing / Position of the access port 
                            </h2>
                            <button className="AccessShow" onClick={handleClickImg}>
                                Show
                            </button>

                        </div>
                        <div className="AccessContainer2">
                            {isImageVisible && (
                                <img src="accessPort_2000l_3_5.png" alt="accessPort_2000l_3_5.png" />
                            )}
                        </div>
                        <div className="AccessContainer3">
                            {rows.map((row, index) => (
                                <div className="row" key={index}>
                                <h2 className="title">Diameter</h2>
                                <select className="combobox" value={row.value} onChange={handleChangeCombo(index)}>
                                    <option value="none">None</option>
                                    <option value="50mm">50mm</option>
                                    <option value="80mm">80mm</option>
                                    <option value="150mm">150mm</option>
                                </select>
                                <h2 className="title">{row.value}</h2>
                                <input type="text" className="textbox"/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Divider className='divider'/>
            
        </div>
    </div>
  )
}

export default Information2