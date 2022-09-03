import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

import TextField from '@material-ui/core/TextField';



function Header () {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className='header'>
          <div className="header__left">
            <MenuIcon />
            <Link to='/'>
               <img 
                className='header__logo'
                src='youtube2.svg'
                alt=''
              />
               
               
            </Link>
          </div>
          
          <div className="header__center">
            {/* <input type='text' onChange={(e) => setInputSearch(e.target.value)} value={inputSearch}/> */}
            <TextField style={{width:"95%"}} id="outlined-basic" value={inputSearch} onChange={(e) => setInputSearch(e.target.value)} label="Rechercher" variant="outlined" />

            <Link to={`/search/${inputSearch}`}>
              <SearchIcon className='header__searchbutton'/>
            </Link>
            
          </div>

          <div className="header__right">
            <VideoCallIcon className='header__icon'/>
            <AppsIcon className='header__icon'/>
            <NotificationsIcon className='header__icon'/>
            <Avatar
              alt='Amaury le chaffotec'
              src='https://avatars.githubusercontent.com/u/111974984?v=4'
            />
          </div>
          
        </div>
    )
}

export default Header;
