import "../css/FAQS.css";

const Card = (props) => {
  const contents = 
    <div className="info">
        <div className="question"> {props.question} </div>
        <div className="answer"> {props.answer} </div>
    </div>;

  return contents;
};

export default Card;
