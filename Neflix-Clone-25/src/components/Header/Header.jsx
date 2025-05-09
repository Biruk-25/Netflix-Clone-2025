import React from 'react'
import './header.css';
import Netflixlogo from '../../assets/images/Netflix_Logo_RGB.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Header() {
  return (
    <div className='header-outer-container'>
    <div className='header-container'>
      <div className='header-left'>
         <ul>
          <li> <img src={Netflixlogo} alt="Netflixlogo" width='100' /></li>
          {/* <li>Netflix</li> */}
          <li>Home</li>
          <li>TVShows</li>
          <li>Movies</li>
          <li>Latest</li>
          <li>MyList</li>
          <li>Browse By Languages</li>
         </ul>
      </div>
      <div className='header-right'>
           <li><SearchIcon/></li>
           <li><NotificationsNoneIcon/></li>
           <li><AccountBoxIcon/></li>
           <li><ArrowDropDownIcon/></li>
      </div>
    </div>
    
    </div>
  )
}

export default Header;