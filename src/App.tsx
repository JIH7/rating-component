import { useState } from 'react'
import "./css/App.css"
import RatingComponent from './components/RatingComponent'
import ThankYouComponent from './components/ThankYouComponent';

function App() {
  const [ratingComplete, setRatingComplete] = useState(false);
  const [selection, setSelection] = useState("")

  const submitRating = (val: string) => {
    setSelection(val);
    setRatingComplete(true);
  }

  const returnHome = () => {
    setRatingComplete(false);
  }

  return (
    <>
      {
        (!ratingComplete)
        ?
        <RatingComponent submit={submitRating}/>
        :
        <ThankYouComponent selection={selection} />
      }
    </>
  )
}

export default App
