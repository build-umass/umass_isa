// public facing page
// need link from react router 
import { Link } from 'react-router-dom'

const Public = () => {
    //basic web page
    const content = (
        <section className="public">
            <header>
                <h1> Welcome to Public Page! </h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Foo City, Dan D. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Dan D. Repairs<br />
                    555 Foo Drive<br />
                    Foo City, CA 12345<br />
                </address>
                <br />
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>
    )

    return content
}

export default Public