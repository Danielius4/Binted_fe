import "./Comp-styles.css";

interface Props {
  type?: 'text' | 'password';
  placeholder?: string;
  value: string;
  onChange: Function;
}

export default function TextField(props: Props) {
  return (
    <input
      className="form-control text-box"
      type={props.type ?? "text"}
      placeholder={props.placeholder ?? ""}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    ></input>
  );
}
