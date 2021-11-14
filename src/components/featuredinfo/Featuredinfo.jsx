import "./featuredinfo.css"
import { ArrowDownward, ArrowUpward } from "@mui/icons-material"

const Featuredinfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,500</span>
                    <span className="featuredMoneyRate">-12.5 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compare to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,100</span>
                    <span className="featuredMoneyRate">-10.5 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Compare to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,725</span>
                    <span className="featuredMoneyRate">+2.5 <ArrowUpward className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Compare to last Month</span>
            </div>
        </div>
    )
}

export default Featuredinfo
