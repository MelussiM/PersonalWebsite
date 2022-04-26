import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">intelligence.</a>
                <div className="itemContainer">
                <Person className="icon"/>
                <span>
                    +78073616
                </span>

                </div>
                <div className="itemContainer">
                <Mail className="icon"/>
                <span>
                    melo@gmail.com
                </span>

                </div>
            </div>
            
            <div className="right">
                <div className="hamburger">
                    <span className="l1"></span>
                    <span className="l2"></span>
                    <span className="l3"></span>
                </div>
            </div>

        </div>
    </div>
  )
}
