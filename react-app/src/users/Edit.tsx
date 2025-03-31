import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Edit() {
  
  
  let navigate = useNavigate()

  const {id} = useParams();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const {username, email, password } = user;

  useEffect(() => {
    loadUser();
  },[])

  const onInputChange = (ex) => {
    setUser({ ...user, [ex.target.name]: ex.target.value });
  };


  const loadUser = async() => {
    const result = await axios.get(`http://localhost:8080/user/get/${id}`)
    setUser(result.data);
  }

  const onSubmit = async (e)=> {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/update/${id}`, user);
    navigate("/");

  }






  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form action="" onSubmit={(e) => onSubmit(e)}>


            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control username"
                placeholder="Enter Username."
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            

            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email."
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password."
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <button className="btn btn-outline-primary" type="submit">
              Update
            </button>
            <Link to="/" className="btn btn-outline-danger mx-3">
              Cancle
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
