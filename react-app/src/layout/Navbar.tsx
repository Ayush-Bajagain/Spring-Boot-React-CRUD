import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand">
            CRUD SpringBoot
          </a>

          <Link to="/addUser" className="btn btn-outline-light" style={{margin:"0 30px 0 0"}}>
            Add User
          </Link>
          
        </div>
      </nav>
    </>
  );
}
