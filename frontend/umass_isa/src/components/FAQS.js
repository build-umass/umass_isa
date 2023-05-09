import "../css/FAQS.css";
import Card from "./Card.js";

const FAQS = () => {
  const contents = (
    <section className="container">
      <div id="title">FAQs</div>

      <div id="questions">
        <Card
          question="Do you have a newsletter?"
          answer="Yes we do! Send over your email to us and we'll add you to the list!"
        />

        <Card
          question="Do you have a General Body Meeting?"
          answer="Yes we do! Our general body meeting will take place on October 27,
            2022 at the Student Union 1-2 pm, additional information will
            follow."
        />

        <Card
          question="How can I get involved?"
          answer="Feel free to contact using our google form in the contacts section
            and look out for upcoming events!"
        />
      </div>
    </section>
  );

  return contents;
};

export default FAQS;
