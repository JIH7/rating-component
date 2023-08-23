import { useState } from "react"
import "../css/RatingComponent.css"
import star from "../assets/icon-star.svg"
import RatingButton from "./RatingButton";

function RatingComponent() {
    const [activeButton, setActiveButton] = useState("");
    const nums = ["1", "2", "3", "4", "5"];

  return (
    <section>
        <button><img src={star} alt="star" /></button>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div>
            {
                nums.map((el) => {
                    return (<RatingButton text={el} activeButton={activeButton} setActiveButton={setActiveButton} />)
                })
            }
        </div>
        <button className="submit">SUBMIT</button>
    </section>
  )
}

export default RatingComponent
