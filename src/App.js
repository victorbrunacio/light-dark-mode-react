import Form from './components/Form';
import './App.css';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("light")

  function toggleTheme() {
    setTheme((pattern)=>
      (pattern === "light" ?  "dark" :  "light")
  )
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className='App' id={theme}>

    <Form/>
    <div className='switch'>
      <label>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
    <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
    </div>

    </div>
    </ThemeContext.Provider>
        );
}

        export default App;
