// public facing page
// need link from react router 
import "../css/footer.css"
import fb from "../images/facebook_icon.png"
import insta from "../images/instagram_icon.png"
import twitter from "../images/twitter_icon.png"
import { Link } from 'react-router-dom'

const Footer = () => {
    const content = (
        <footer>
            <div className="col-1">
                <h3 className="title logo">Umass Amherst's Indian Student Association</h3>
                <p id="copyright">copyright 2023</p>
            </div>
            <div className="col-2">
                <h3 className="title">About</h3>
                <ul>
                    <li className="tab" id="text">Meet the Team</li>
                    <li className="tab" id="text">Events</li>
                    <li className="tab" id="text">Gallery</li>
                    <li className="tab" id="text">FAQS</li>
                </ul>
            </div>
            <div className="col-3">
                <h3 className="title">Sponsors</h3>
                <ul>
                    <li className="tab" id="text"><Link target="_blank" to="https://www.bombayroyale.com/">Bombay Royale</Link></li>
                    <li className="tab" id="text"><Link target="_blank" to="https://desiopt.com/">DesiOPT</Link></li>
                    <li className="tab" id="text"><Link target="_blank" to="https://www.neighborfoodmart.com/">Neighbor Food Mart</Link></li>
                </ul>
            </div>
            <div className="col-4">
                <h3 className="title">Contact Us</h3>
                <ul>
                    <li className="tab" id="text">umassisa@gmail.com</li>
                    <ul className="tab">
                        <div>
                            <ul className="social">
                                <li><img id="socials" alt="facebook" src={fb}></img></li>
                                <li><Link target="_blank" to="https://www.instagram.com/umass_isa/"><img id="socials" alt="instagram" src={insta}></img></Link></li>
                                <li><img id="socials" alt="twitter" src={twitter}></img></li>
                            </ul>
                        </div>
                    </ul>
                </ul>
            </div>
        </footer>
    )

    return content
}

export default Footer