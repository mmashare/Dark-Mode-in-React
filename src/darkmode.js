import styles from "./darkmode.module.css";
// import { ChangeEventHandler } from "react";
import React, { useState,useEffect } from "react"

const DarkMode = () => {
    const [themedector,setThemeDector] = useState(false);

// if this func run then local storege me me theme{key} = dark{value} set ho jayega 
const setDark = () => {
  localStorage.setItem("theme", "dark");
   // ye css ko dark mode allow karega
  document.documentElement.setAttribute("data-theme", "dark");

  
};

// if this func run then local storege me me theme{key} = light{value} set ho jayega
const setLight = () => {
  localStorage.setItem("theme", "light");
  // ye css ko light mode allow karega
  document.documentElement.setAttribute("data-theme", "light");
  
  
};

// iss func se ham pata karege ki user ke local store me konsa theme hai.
const storedTheme = localStorage.getItem("theme");

// ye hamre css me device theme ko change karega so that ham css me bhi theme ke hisab se color change ho sake.
const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

  // ager kisine phale se koi toogle check kar rakha hai to deafult me dark theme chalega.
const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
 
}

// ye toggle button par ye func work karega.
const toggleTheme = (e) => {
  // checked hai to dark theme run hogi.
  if (e.target.checked) {
    setDark();
    setThemeDector(true);
  } else {
    // otherwise white theme chalega.
    setLight();
    setThemeDector(false);
    
  }
};
/* NEW (END) */

useEffect(()=>{

  const storedTheme1 = localStorage.getItem("theme");
  if(storedTheme1 == "dark"){
    setThemeDector(true);
  }else{
    setThemeDector(false);
  }
},[themedector])


  return (
    <div className={styles.togglethemewrapper}>
     
      <label className={styles.toggletheme} htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"

          // ye dark mode to light theme and white theme to dark theme karega.

          onChange={toggleTheme}
          // ager toggle deafult me toggle hai to ye dark theme chalega.
          defaultChecked={defaultDark}
        />
        {/* it show logo according to your theme which you have chose*/}
        <span>{themedector ? <h4>🌒</h4>:<h4>☀️</h4> }</span>

        <div className={styles.sliderround}></div>
      </label>
      
    </div>
  );
};

export default DarkMode;
