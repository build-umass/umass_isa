import "../css/public.css"
import img from '../images/about_us.png'

const AboutUs = () => {

    const contents = (
        <section id="about_us">
                    <div id="textboxes">
                        <div><h1 id="title">About Us</h1></div>

                        <div id="content">We are Umass Amherst's premiere Indian Student Association. Founded in 2011, we are dedicated to promoting and sharing the diversity of Indian culture, tradition, and blah. We host everything from holi to cricket events!</div>
                        
                    </div>
                    <div><img alt="about_us_dancing" src={img}></img></div>
        
        </section>
    )

    return contents
}

export default AboutUs;