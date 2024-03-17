import './App.css';
import "./theme.css"
import useDarkMode from './useDarkMode';
function App(){
const {theme,handleToggle}=useDarkMode("theme","white")
//make all styling in css
  return(
    <div className='wrapper' data-theme={theme}>
    <p>{theme.toUpperCase()} THEME</p>
 <button onClick={handleToggle} >Change Theme</button>
 </div>
  )
}
export default App;
