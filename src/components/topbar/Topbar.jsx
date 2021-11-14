import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">ReactAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                    <NotificationsNone />
                    <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                    <Language />
                    </div>
                    <div className="topbarIconContainer">
                    <Settings />
                    </div>
                    <img src="https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
