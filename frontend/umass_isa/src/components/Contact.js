import Navbar from "./Navbar"
import Footer from "./Footer"
import "../css/contact.css"

const Contact = () => {

    const contents = (
        
        <>

        <Navbar/>

        <section className="container">

            <div id="title">Contact Us</div>

            <div className="subtitle">Interested in joining or have any questions?</div>

            <div className="form">

                <div id="label"><label for="name">Name</label></div>

                <div className="textbox"><input id="name" type="text"></input></div>
             

                <div id="label"><label for="email">Email</label></div>

                <div className="textbox"><input id="email" type="text"></input></div>

                <div id="textarea">
                    <label id="message" for="name">Message</label>
                    <br></br>
                    <textarea></textarea>
                </div>

            </div>

        </section>

        <Footer/>

        </>      
    )

    return contents
}

export default Contact