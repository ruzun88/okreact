import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Link to="/">Home</Link> | {" "}
      <Link to="/about">About</Link> | {" "}
      <a href="/">old tag</a>
    </>
  )
}

export default Header
