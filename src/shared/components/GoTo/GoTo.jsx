import { Link } from "react-router-dom";
import { Typography } from "./styles";

export function GoTo({ to, text }) {
  return (
    <Link to={to}>
      <Typography>{text}</Typography>
    </Link>
  );
}
