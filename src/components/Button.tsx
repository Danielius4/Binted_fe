import "./Comp-styles.css";

interface Props {
  text: string;
  onClick: Function;
  backgroundColor?: string;
  textColor?: string;
  width?: number;
  size?: "small" | "big";
}

export default function Button(props: Props) {
  return (
    <button
      className="binted-button"
      type="submit"
      style={{
        width: props.width,
        color: props.textColor,
        backgroundColor: props.backgroundColor,
        height: props.size === "big" ? 57 : 24,
        fontSize: props.size === "big" ? 25 : 16
      }}
      onClick={() => props.onClick()}
    >
      {props.text}
    </button>
  );
}
