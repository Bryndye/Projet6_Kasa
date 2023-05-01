import React, { useState } from 'react';

    
function Collapse(props) {  
    const [isCollapsed, setIsCollapsed] = useState(false);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

    return (
        <div className='collapse'>
            <div className="collapseHeader">
                <h2>{props.title}</h2>
                <button onClick={toggleCollapse}>{isCollapsed? <i className="fa-solid fa-angle-up"></i>:<i className="fa-solid fa-angle-down"></i>}</button>
            </div>
            <div className={isCollapsed?"collapseContainer": "collapseContainerHide"}>
                <p>{props.text}</p>              
            </div>
        </div>
  );
}

export default Collapse;