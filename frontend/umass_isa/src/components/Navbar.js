import "../css/navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
    }

    const contents = (
        <>
        <div id="navbar">
            <ul>
                <li onClick={scrollToTop}><Link to="/">Home</Link></li>
                <li>Meet the Team</li>
                <li>Events</li>
                <li>Gallery</li>
                <li onClick={scrollToTop}><Link to="/FAQS">FAQs</Link></li>
                <li onClick={scrollToTop}><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
        </div>
           
        </>      
    )

    return contents
}

export default Navbar