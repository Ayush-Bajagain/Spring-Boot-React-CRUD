import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function View() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/get/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">User Details</h2>

          <div className="cart">
            <div className="cart-header">
      
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Username: </b> {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email: </b> {user.email}
                </li>
                <li className="list-group-item">
                  <b>Password:  </b> {user.password}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
