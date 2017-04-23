import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
 render(){
   return (
       <section>
           <ul className="nav nav-pills">
               <li role="presentation">
                   <NavLink activeClassName={'active'} to="/recipes" > Recipes List </NavLink>
               </li>
               <li role="presentation">
                   <NavLink activeClassName={'active'} to="/addnew" > Add New Recipe </NavLink>
               </li>
           </ul>
       </section>
   )
 }
}

export default Header;