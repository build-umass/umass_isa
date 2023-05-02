import "../css/FAQS.css"

const FAQS = () => {

    const contents = (
        <section className="container">

            <div id="title">FAQs</div>

            <div id="questions">

                <div className="info">
                    <div className="question">Do you have a newsletter?</div>
                    <div className="answer">Yes we do! Send over your email to us and we'll add you to the list!</div>
                </div>

                <div className="info">
                    <div className="question">Do you have a General Body Meeting?</div>
                    <div className="answer">Yes we do! Our general body meeting will take place on October 27, 2022 at the Student Union 1-2 pm, additional information will follow.</div>
                </div>

                <div className="info">
                    <div className="question">How can I get involved?</div>
                    <div className="answer">Feel free to contact using our google form in the contacts section and look out for upcoming events!</div>
                </div>

            </div>

        </section>     
    )

    return contents
}

export default FAQS;