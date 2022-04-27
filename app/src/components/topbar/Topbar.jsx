import "./topbar.scss"
import {Person,Mail} from "@material-ui/icons"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
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
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="l1"></span>
                    <span className="l2"></span>
                    <span className="l3"></span>
                </div>
            </div>

        </div>
    </div>
  )
}
