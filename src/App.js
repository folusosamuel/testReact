import React from "react";
import "./App.css";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Building a todo app",
      isDone: false,
    },
  ]);
}

export default App;
