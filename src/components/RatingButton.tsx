function RatingButton(props: {text: string, activeButton: string, setActiveButton: Function}) {
  return (
    <button className={props.activeButton === props.text ? "selected" : ""} onClick={() => props.setActiveButton(props.text)}>
        {props.text}
    </button>
  )
}

export default RatingButton
