import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="about-body">
        <h3>Difference between javascript and node js</h3>
        <h6>
          JavaScript :JavaScript is a simple programming language that runs in
          any browser JavaScript Engine.js mainly using for any clint side
          activity for web application. js run any engine like v8,spider
          monkkey.
        </h6>
        <h6>
          Node js :Node js is an interpreter and environment foor js.its a
          server side language.its mainly using for performing any non blocking
          operation of any operating system
        </h6>
        <hr />
        <h3>When should you use nodejs and when should you use mongodb</h3>
        <h6>
          Node Js:when our application is large and realtime comminecation and
          many faching data from servers{" "}
        </h6>
        <h6>
          Mongodb : When we build highly available and scalable internet
          applications.{" "}
        </h6>
        <hr />
        <h3>Differences between sql and nosql databases?</h3>
        <h6>
          1.SQL databases are relational, NoSQL databases are non-relational.
        </h6>
        <h6>
          2.SQL databases use structured query language and have a predefined
          schema. NoSQL databases have dynamic schemas for unstructured data.
        </h6>
        <h6>
          3.SQL databases are table-based, NoSQL databases are document,
          key-value stores.
        </h6>
      </div>
    </div>
  );
};

export default Blogs;
