import React from "react";

function Header(){
    // const handleClickDark=()=>{
    //     document.getElementById("dark").classList+=" active-btn" ;
    //     document.getElementById("light").classList.remove("active-btn");

    //     const theme=document.querySelector(":root");
    //     theme.style.setProperty('--white','#000000');
    //     theme.style.setProperty('--yellow','#775a0a');
    //     theme.style.setProperty('--notebg','#6f6f6f');
    //     theme.style.setProperty('--grey','#eee');
    //     theme.style.setProperty('--black','#fff');

    // }
    // const handleClickLight=()=>{
    //     document.getElementById("dark").classList.remove("active-btn");
    //     document.getElementById("light").classList.add("active-btn");
    //     const theme=document.querySelector(":root");
    //     theme.style.setProperty('--white','#eee');
    //     theme.style.setProperty('--yellow','#f5ba13');
    //     theme.style.setProperty('--notebg','#fff');
    //     theme.style.setProperty('--grey','#6f6f6f');
    //     theme.style.setProperty('--black','#000');

    // }
     const handleClick=(mode)=>{
        if(mode==='dark'){
        document.getElementById("dark").classList+=" active-btn" ;
        document.getElementById("light").classList.remove("active-btn");

        const theme=document.querySelector(":root");
        theme.style.setProperty('--white','#000000');
        theme.style.setProperty('--yellow','#775a0a');
        theme.style.setProperty('--notebg','#6f6f6f');
        theme.style.setProperty('--grey','#eee');
        theme.style.setProperty('--black','#fff');
        }
        else{
        document.getElementById("dark").classList.remove("active-btn");
        document.getElementById("light").classList.add("active-btn");
        const theme=document.querySelector(":root");
        theme.style.setProperty('--white','#eee');
        theme.style.setProperty('--yellow','#f5ba13');
        theme.style.setProperty('--notebg','#fff');
        theme.style.setProperty('--grey','#6f6f6f');
        theme.style.setProperty('--black','#000');
        }


    }
    return(
    <header className="header"><h1>KEEP IT UP
    <span id="animate-head">¯\_(<strong>ツ</strong>)_/¯</span> </h1> 
    <div className="btn-container">
    <i onClick={()=>{handleClick('dark')}} id="dark" className="bi bi-moon-stars mode"></i>
    <i onClick={()=>{handleClick('light')}} id="light" className="bi bi-brightness-high mode active-btn"></i>
    </div> 
    </header>
    )};
export default Header;