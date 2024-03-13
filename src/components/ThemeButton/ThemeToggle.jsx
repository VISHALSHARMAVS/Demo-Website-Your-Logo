import { useEffect, useState } from 'react';
import { ThemeProvider } from '../Context/userContext'
import ThemeButton from './ThemeButton';


function ThemeToggle() {
  const [themeMode, setThemeMode] = useState("light");

const lightTheme = ()=>{
setThemeMode("light");
}
const darkTheme = () => {
  setThemeMode ("dark");
}

useEffect(()=>{
  const htmlDoc = document.querySelector('html').classList
  htmlDoc.remove("light","dark");
  htmlDoc.add(themeMode);
},[themeMode])

  return (
    <ThemeProvider value= {{themeMode , lightTheme , darkTheme}}>
     
<div>
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeButton/>
                    </div>
                </div>
            </div>
{/* {console.log("Vishal Sharma")} */}
      </ThemeProvider>
  )
}

export default ThemeToggle
