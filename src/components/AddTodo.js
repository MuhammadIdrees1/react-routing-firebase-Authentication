import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


import { useNavigate } from "react-router"
import { useUserAuth } from "../context/UserAuthContext";

const AddTodo = () => {
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
    <Form className="p-4 box mt-3 text-center">
      <Form.Group className="mb-3 d-flex">
        <Form.Control 
        type="text"
        placeholder="Type your todo here"
      />

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form.Group>

      <Link to='/home'>
        <Button variant="primary" type="submit" className="mx-2">
          Check List
        </Button>
        </Link>
      <Button variant="primary" onClick={handleLogout}>
        Log out
      </Button>
    </Form>
  );
};

export default AddTodo;
