import "./button.scss";
import { Link } from "react-router-dom";

function Button() {
  return (
    <button className="fbtn">
      <Link to="/" className="nav-link">Back to homepage</Link>
    </button>
  );
}

export default Button;
