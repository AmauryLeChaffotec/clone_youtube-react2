import React from 'react';
import SideBarRow from './../SideBarRow/SideBarRow';
import './SideBar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


const SideBar = () => {
    return (
        <div className='sidebar'>
            <SideBarRow selected Icon={HomeIcon} title='Page principal' />
            <SideBarRow Icon={WhatshotIcon} title='Tendance' />
            <SideBarRow Icon={SubscriptionsIcon} title='Abonnements' />
            <hr />
            <SideBarRow Icon={VideoLibraryIcon} title='Bibliothèque' />
            <SideBarRow Icon={HistoryIcon} title='Historique' />
            <SideBarRow Icon={OndemandVideoIcon} title='Tes videos' />
            <SideBarRow Icon={WatchLaterIcon} title='Regarder plus tard' />
            <SideBarRow Icon={ThumbUpIcon} title='Vidéos aimées' />
            <hr />
        </div>
    )
}

export default SideBar;
