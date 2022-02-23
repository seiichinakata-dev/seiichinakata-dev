// import React from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../../profile'
import React, { useState, useEffect } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes, FaReact } from 'react-icons/fa'
import { Button } from '../Button'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const [menus, setMenus] = useState([])

  useEffect(() => {
    setMenus([...MenuItems.map(item => item )])
  }, [])
  // state = { 
  //   clicked: false,
  //   menus: [...MenuItems.map(item => item )]
  // }
// [...MenuItems.map(item => item )]
  const handleClick = () => {
    setClicked(!clicked)
  }

  const toggleMenu = title => {
    menus.forEach(menu => {
      menu.active = false
    })
    const newMenus = [...menus]
    const menu = newMenus.find(menu => menu.title === title)
    menu.active = true
    setMenus(newMenus)
  }

  // onClick={toggleMenu(item.title)} 
  // handleMenuActive = () => {
  //   this.setState(prevState => {
  //     menus
  //   })
  // }

  // ${item.active ? 'active' : '' }
    const { fullname } = profile

   console.log(menus)
    return(
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>{ fullname } <FaReact className='icon-main' /> </h1>
        <div className="menu-icon" onClick={handleClick}>
          {
            clicked
            ? <FaTimes className='icon times' />
            : <GiHamburgerMenu className='icon burger' />
          }
        </div>
        <ul className={ clicked? 'nav-menu active' : 'nav-menu'}>
          {
            MenuItems.map((item, index) => {
              return <li key={`item-${index}`}>
                <Link onClick={() => toggleMenu(item.title)} className={`${item.title} ${item.class} ${item.active ? 'active' : '' }` } to={item.url}>{ item.title }</Link>
              </li>
            })
          }
          <li></li>
        </ul>
        {/* <Button>Mode</Button> */}
      </nav>
    )
}

export default Navbar;
// export default function Navbar( { fullname } ) {
//   return (
//     <header className='section-nav'>
//         <nav>
//             <Link to={'/'}><h2 className='name'>{ fullname }</h2></Link>
//         </nav>
//     </header>
//   )
// }
