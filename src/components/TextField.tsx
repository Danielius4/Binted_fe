import "./Comp-styles.css";

interface Props {
  type?: 'text' | 'password';
  name?: string;
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
      name={props.name}
      onChange={(e) => props.onChange(e.target.value)}
    ></input>
  );
}
