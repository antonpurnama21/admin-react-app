import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, Apps, ShoppingCart, PersonOutline, BarChartOutlined
} from "@mui/icons-material"
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                      <ul className="sidebarList">
                        <Link to="/" className="link">
                          <li className="sidebarListItem active">
                              <LineStyle className="sidebarIcon"/>
                              Home
                          </li>
                        </Link>
                          <li className="sidebarListItem">
                              <Timeline className="sidebarIcon"/>
                              Analytics
                          </li>
                          <li className="sidebarListItem">
                              <TrendingUp className="sidebarIcon"/>
                              Sales
                          </li>
                      </ul>

                      <h3 className="sidebarTitle">Manage</h3>
                      <ul className="sidebarList">
                        <Link to="/users" className="link">
                          <li className="sidebarListItem">
                              <PersonOutline className="sidebarIcon"/>
                              Users
                          </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                              <Apps className="sidebarIcon"/>
                              Products
                            </li>
                        </Link>
                          <li className="sidebarListItem">
                              <ShoppingCart className="sidebarIcon"/>
                              Transaction
                          </li>
                          <li className="sidebarListItem">
                              <BarChartOutlined className="sidebarIcon"/>
                              Report
                          </li>
                      </ul>
                      
                </div>
            </div>
        </div>
    )
}

export default Sidebar
