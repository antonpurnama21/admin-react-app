import { CalendarToday, GpsNotFixed, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./user.css"

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userInfo">
                    <div className="userInfoTop">
                        <img src="https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg" alt="" className="userInfoImg" />
                        <div className="userInfoTopTitle">
                            <span className="userInfoName">Anton Purnama</span>
                            <span className="userInfoJob">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userInfoBottom">
                        <span className="userInfoTitle">Account Details</span>
                        <div className="userInfoBottomShow">
                        <PermIdentity className="userInfoBottomIcon"/>
                        <span className="userInfoBottomTitle">antonpurnama21</span>
                        </div>
                        <div className="userInfoBottomShow">
                        <CalendarToday className="userInfoBottomIcon"/>
                        <span className="userInfoBottomTitle">21.01.1995</span>
                        </div>
                        <span className="userInfoTitle">Contact Details</span>
                        <div className="userInfoBottomShow">
                        <PhoneAndroid className="userInfoBottomIcon"/>
                        <span className="userInfoBottomTitle">+62 82118115288</span>
                        </div>
                        <div className="userInfoBottomShow">
                        <MailOutline className="userInfoBottomIcon"/>
                        <span className="userInfoBottomTitle">anton.purnama@dens.tv</span>
                        </div>
                        <div className="userInfoBottomShow">
                        <GpsNotFixed className="userInfoBottomIcon"/>
                        <span className="userInfoBottomTitle">Jakarta | INA</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="#" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="antonpurnama21"  className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Fullname</label>
                                <input type="text" placeholder="Anton Purnama"  className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Date of Birth</label>
                                <input type="text" placeholder="21.01.1995"  className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="anton.purnama@dens.tv"  className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+62 82118115288"  className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Jakarta | INA"  className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://previews.123rf.com/images/metelsky/metelsky1809/metelsky180900233/109815470-man-avatar-profile-male-face-icon-vector-illustration-.jpg" alt="" />
                                <label htmlFor="file">
                                <Publish className="userUpdateUploadIcon"/>
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div> 
                            <button className="userUpdateBottom">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
