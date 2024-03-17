import { useEffect, useState } from "react";
function savedData(key,initialValue){
const savedValue=JSON.parse(localStorage.getItem(key))
if(savedData) return savedValue
if(initialValue instanceof Function)return initialValue()
return initialValue
}

export default function useDarkMode(key,initialValue){
    const [theme,setTheme]=useState(()=>{
        return savedData(key,initialValue)
    })



function handleToggle(){
setTheme((pre)=>pre=="white"?"black":"white")
}

useEffect(()=>{
localStorage.setItem(key,JSON.stringify(theme))
},[key,theme])
    return {theme,handleToggle}

}