import React, { useState } from 'react';

    
function Collapse(props) {  
    const [isCollapsed, setIsCollapsed] = useState(false);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

    // const styles = {
    //     display:"flex",
    //     flexDirection: "column"
    // }
    let items = null;
    if (Array.isArray(props.text) && props.text.length > 0) {
        items = props.text.map((element, index) => (
            <p key={index}>{element}</p>
        ));
    } else {
        items = <p>{props.text}</p>;
    }

    return (
        <div className='collapse'>
            <div className="collapseHeader">
                <h2>{props.title}</h2>
                <button onClick={toggleCollapse}>{isCollapsed? <i className="fa-solid fa-angle-up"></i>:<i className="fa-solid fa-angle-down"></i>}</button>
            </div>
            <div className={isCollapsed?"collapseContainer": "collapseContainerHide"}>
                {items}             
            </div>
        </div>
  );
}

export default Collapse;