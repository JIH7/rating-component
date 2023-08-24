interface RatingButtonProps {
  text: string;
  activeButton: string;
  setActiveButton: Function;
}

function RatingButton(props: RatingButtonProps) {
  const {text, activeButton, setActiveButton} = props;

  return (
    <button className={activeButton === text ? "selected" : ""} onClick={() => setActiveButton(text)}>
        {text}
    </button>
  )
}

export default RatingButton
