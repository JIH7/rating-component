import { useState } from 'react'
import "./css/App.css"
import RatingComponent from './components/RatingComponent'
import ThankYouComponent from './components/ThankYouComponent';

function App() {
  const [ratingComplete, setRatingComplete] = useState(false);

  return (
    <>
      {
        (!ratingComplete)
        ?
        <RatingComponent submit={setRatingComplete}/>
        :
        <ThankYouComponent />
      }
    </>
  )
}

export default App
