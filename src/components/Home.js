import React from 'react'
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";


const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (

    <div className="p-4 box mt-3 ">
    <h1 text-center>Todo List</h1>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Lorem ipsum dolor sit amet.</li>
      </ul>
      <div>
      <Link to='/addtodo'>
        <Button variant="primary" type="submit" className='me-2'>
          Add New
        </Button>
        </Link>
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>

    </div>
  )
}

export default Home