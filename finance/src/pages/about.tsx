import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <p>ABOUT</p>
      <Link className="bg-blue-500 p-4 rounded-md " to="/">
        GO TO HOME
      </Link>
    </div>
  );
}
