import styles from "./styles/btn.module.css"
import { useState } from "react";
import { Toolfit } from "./components/Tooltip";
function App() {
  const [isHover, setIsHover] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState('top'); // Default position

  return (
    <>
      <div className={styles.container}>
        
      <div className={styles.selector}>
        <label>Select Tooltip Position: </label>
        <select onChange={(e) => setTooltipPosition(e.target.value)}>
          <option value="top">Top</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
          <option value="right">Right</option>
        </select>
      </div>


        <button
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          Hover on me!
        </button>
        {isHover && <Toolfit position={tooltipPosition} />}

      </div>
      
    </>
  );
}

export default App;
