import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import reportWebVitals from './reportWebVitals';
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Post from "./Post";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container className="mt-3">
   <Row>
     <Post  />
     
   </Row>
 </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
