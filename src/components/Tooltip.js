// import {styles} from "../styles/Toolfit"
import { useState } from "react"
import styles from "../styles/Tooltip.module.css"

    export const Toolfit = ({ position }) => {
        return (
          <div className={`${styles.tooltip} ${styles[position]}`}>
            <p>Thanks for hovering! I'm a Tooltip</p>
          </div>
        );
      };   
       
