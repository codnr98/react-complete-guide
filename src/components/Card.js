import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  // 위 코드를 통해 className에 "card props로_받는_className"를 담을 수 있다.

  return <div className={classes}>{props.children}</div>;
  // {props.children}을 적용해야 해당 div 태그 안에 다른 태그를 담을 수 있다.
}

export default Card;
