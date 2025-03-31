import axios from "axios";
import { User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function HomePage() {

  const {id} = useParams();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async() => {
    const result = await axios.get("http://localhost:8080/user/getAll");
    setUsers(result.data);
  }


  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/delete/${id}`);
    loadUsers();
  }


  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">SN</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">Action</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map((users, index) => (
                <tr>
                  <th scope="row" key={index}>{index+1}</th>
                  <td>{users.username}</td>
                  <td>{users.email}</td>
                  <td>{users.password}</td>
                  <td>
                    <Link className="btn btn-primary mx-1" to={`/editUser/${users.id}`}>Edit</Link>
                    <Link className="btn btn-info mx-1" to={`/viewUser/${users.id}`}>View</Link>
                    <button className="btn btn-danger mx-1" onClick={() => deleteUser(users.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
