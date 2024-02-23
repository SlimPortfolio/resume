export default function ScrollComponent(props) {
  return (
    <div
      onClick={() =>
        document
          .getElementById(props.route)
          .scrollIntoView({ behavior: "smooth", block: "start" })
      }
    >
      {props.text}
    </div>
  );
}
