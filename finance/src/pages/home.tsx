import { Link } from "react-router-dom";
import "@radix-ui/themes/styles.css";
import "./home.css";

export default function Home() {
  return (
    <div className="bg-neutral-100 min-h-screen flex flex-col">
      <p>FINANCE</p>
      <div className="container">
        <div className="translucent-rectangle flex justify-center items-center">
          <Link className="bg-emerald-300 p-2 rounded-md " to="/about">
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  );
}
