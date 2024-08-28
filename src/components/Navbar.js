import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assert/ODW7E30.jpg'
function Navbar(){
  const [menu,setmenu] = useState("home")

    return(
        
      <header class="p-3 bg-dark text-white">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a class="navbar-brand" href="#">
      <img src={logo}alt="" width="30" height="24"/>
    </a>
  
          <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li class="nav-link px-2 text-secondary" onClick={()=>{setmenu("Home")}}><Link style={{textDecoration: 'none'}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
            <li class="nav-link px-2 text-white" onClick={()=>{setmenu("About")}}><Link style={{textDecoration: 'none'}} to='/'>About</Link>{menu==="About"?<hr/>:<></>}</li>
            <li class="nav-link px-2 text-white"onClick={()=>{setmenu("Items")}}><Link style={{textDecoration: 'none'}} to='/'>Item</Link>{menu==="Items"?<hr/>:<></>}</li>
            <li class="nav-link px-2 text-white" onClick={()=>{setmenu("Sevice")}}><Link style={{textDecoration: 'none'}} to='/'>Service</Link>{menu==="Services"?<hr/>:<></>}</li>
            <li class="nav-link px-2 text-white" onClick={()=>{setmenu("ContactUs")}}><Link style={{textDecoration: 'none'}} to='/'>contact</Link>{menu==="ContactUs"?<hr/>:<></>}</li>
            
          </ul>
  
          <form class="col-12 col-lg-auto mb -3 mb-lg-0 me-lg-3">
            <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search"/>
          </form>
  
          <div class="text-end">
            <button type="button" class="btn btn-outline-light me-2">Login</button>
            <button type="button" class="btn btn-warning">Sign-up</button>
          </div>
        </div>
      </div>
    </header>

        
    )
}
export default Navbar;