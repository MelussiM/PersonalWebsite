import "./testimonials.scss"

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
        <h1>Testimonials</h1>
        <div className="container">
          <div className="card">
            <div className="top">
                <img src="assets/arrow-right.png" className="left" alt="" />
                <img className="user" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <img className="right" src="assets/youtube.png" alt="" />
            </div>
              <div className="center">
                  [Random text insert here] akjhsauygiabhsd jhasbuiasbjkjbiub kusabidbas jbyasb
              </div>
              <div className="bottom">
                  <h3>
                    Melusi
                  </h3>
                  <h3>
                    Owner of [company name]
                  </h3>
              </div>
            </div>
          </div>
    </div>
  )
}
