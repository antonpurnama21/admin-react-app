import Chart from "../../components/chart/Chart"
import Featuredinfo from "../../components/featuredinfo/Featuredinfo"
import "./home.css"
import { userData } from "../../dummyData"
import WidgetSmall from "../../components/widget-small/WidgetSmall"
import WidgetLarge from "../../components/widget-large/WidgetLarge"

const Home = () => {
    return (
        <div className="home">
            <Featuredinfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
            </div>
        </div>
    )
}

export default Home
