import "./intro.scss"

export default function Intro() {
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.jpg" alt="" />
        </div>
      </div>
      
      <div className="right"></div>
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Melusi Mkhonta</h1>
          <h3>Freelancer <span></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
    </div>
  )
}
