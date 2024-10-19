import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, themes } from "./themeContext";
import { stringify } from 'querystring';


export function ClickCounter() {
    const theme = useContext(ThemeContext);

 const [count, setCount] = useState(0);

 const handleClick = () => {
   setCount(count + 1);
 };

 useEffect(() => {
   document.title = `You clicked ${count} times`;
 }, [count]);

 return (
    <div
      style={{
        background: theme.background,
        color: theme.foreground,
        padding: "20px",
      }}
    >
      <p>You clicked {count} times </p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ background: theme.foreground, color: theme.background }}
      >
        Click me
      </button>
    </div>
  );
}

// Wrapper component to provide context

interface chair{
    leg:{
      foreground: string;
      background: string;
    };
    legSet: React.Dispatch<React.SetStateAction<
    
    {
      
        foreground: string;
      
      
        background: string;
    }>>;
  }


export function ToggleTheme(floor: chair) {
   
    const toggleTheme = () => {
      floor.legSet(floor.leg === themes.light ? themes.dark : themes.light);
    };
   
    return (
      <ThemeContext.Provider value={floor.leg}>
        <button onClick={toggleTheme}> Toggle Theme </button>
      </ThemeContext.Provider>
    );
   }
   
   export default ToggleTheme;

interface listyThing {
    title: string;
    list: string[];
    listSet: React.Dispatch<React.SetStateAction<string[]>>;
    
}

export function ToggleHeart(burrito: listyThing) {
    const [currentStatus, setCurrentStatus] = useState("♡");
   
    const toggleStatus = () => {
      setCurrentStatus(currentStatus === "♡" ? "❤️" : "♡");
      if (burrito.list.includes(burrito.title)) {
        burrito.listSet((prevlist) => prevlist.filter(sombrero => sombrero !== burrito.title));
      }
      else {
        burrito.listSet((prevlist) => [...prevlist, burrito.title]);
      }
    };
   
    return (
        <button onClick={toggleStatus} data-testid="liking"> {currentStatus} </button>
    );
}