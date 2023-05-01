import React, { useState } from 'react';

    
function Collapse(props) {  
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const toggleCollapse = () => {
      setIsCollapsed(!isCollapsed);
    };

    return (
        <div className='collapse'>
            <div className="collapseHeader">
                <h2>{props.title}</h2>
                <button onClick={toggleCollapse}>{isCollapsed? <i class="fa-solid fa-angle-down"></i>:<i class="fa-solid fa-angle-up"></i>}</button>
            </div>
            <div className={isCollapsed?"collapseContainer": "collapseContainerHide"}>
                <p>{props.text}</p>              
            </div>
        </div>
  );
}

export default Collapse;