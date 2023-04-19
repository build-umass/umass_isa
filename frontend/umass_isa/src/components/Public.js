// public facing page
// need link from react router 
import "../css/public.css"
import Footer from './Footer.js'

const Public = () => {
    const contents = (
        <>
            <section id="landing"></section>
            <section id="about_us">
                <Footer />
            </section>
        </>      
    )

    return contents
}

export default Public