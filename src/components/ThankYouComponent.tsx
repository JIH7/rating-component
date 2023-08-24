import thanksImg from "../assets/illustration-thank-you.svg"
import "../css/ThankYouComponent.css"

interface ThankYouComponentProps {
  selection: string;
}

function ThankYouComponent(props : ThankYouComponentProps) {
  const { selection } = props;

  return (
    <section className="thanks">
      <img src={thanksImg} alt="thanks-img" />
      <div>
        <h2>You selected {selection} out of 5</h2>
      </div>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </section>
  )
}

export default ThankYouComponent
