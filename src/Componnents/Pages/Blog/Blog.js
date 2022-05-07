import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import JSImage from "../../../Images/JSVsNode.png";
import NodeMgImg from "../../../Images/NodeVsMongo.png";
import SQLNoImg from "../../../Images/SQL vs NoSQL.png";
import JWTImg from "../../../Images/JWT_img.png";

const Blog = () => {
  return (
    <div className="container">
      <h3 className="text-center my-4 text-muted">My Letest Blog</h3>
      <div className="post_container">
        <Row xs={1} md={2} className="g-4 mb-5">
          <Col>
            <Card>
              <Card.Img variant="top" src={JSImage} />
              <Card.Body>
                <Card.Title>
                  Difference Between Javascript And Nodejs
                </Card.Title>
                <Card.Text>
                  <h5 className="text-success">JavaScript : </h5>
                  <ListGroup>
                    <ListGroup.Item>Javascript is a programming language that is used for writing scripts on the website.</ListGroup.Item>
                    <ListGroup.Item>Javascript can only be run in the browsers.</ListGroup.Item>
                    <ListGroup.Item>It is basically used on the client-side.</ListGroup.Item>
                    <ListGroup.Item>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</ListGroup.Item>
                    <ListGroup.Item>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Card.Text>
                  <h5 className="text-success">Node JS : </h5>
                  <ListGroup>
                    <ListGroup.Item>NodeJS is a Javascript runtime environment.</ListGroup.Item>
                    <ListGroup.Item>We can run Javascript outside the browser with the help of NodeJS.</ListGroup.Item>
                    <ListGroup.Item>It is mostly used on the server-side.</ListGroup.Item>
                    <ListGroup.Item>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</ListGroup.Item>
                    <ListGroup.Item>Nodejs is written in C, C++ and Javascript.</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={NodeMgImg} />
              <Card.Body>
                <Card.Title>When Should You Use NodeJS And When Should You Use Mongodb</Card.Title>
                <Card.Text>
                <h5 className="text-success">NodeJS : </h5>
                Node.js is an open source, a server-side script which runs on the top of Google’s open-source scripting engine V8. Node.js is fast, lightweight and efficient. It uses the asynchronous mode of operation, event-driven Input/Output rather than using the traditional threads or separate threads for each process. Node.js was originally written by Ryan Dahl in the year 2009. It is a cross-platform Javascript run-time environment that executes Javascript code outside of a browser. Node.js uses javascript for creating node applications or we can use any other language that ultimately compiles to javascript (like typescript). The javascript is written in the same way as we’d use in any client-side application. However, we need to set up the node development environment.
                </Card.Text>
                <Card.Text>
                <h5 className="text-success">MongoDB : </h5>
                MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they don’t need to think about normalizing data. MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads. MongoDB was built for people building internet and business applications who need to evolve quickly and scale elegantly. Companies and development teams of all sizes use MongoDB for a wide variety of reasons.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={SQLNoImg} />
              <Card.Body>
                <Card.Title>Difference Between SQL and NoSQL Database?</Card.Title>
                <Card.Text>
                  <h5 className="text-success">SQL : </h5>
                  <ListGroup>
                    <ListGroup.Item>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</ListGroup.Item>
                    <ListGroup.Item>These databases have fixed or static or predefined schema</ListGroup.Item>
                    <ListGroup.Item>These databases are not suited for hierarchical data storage.</ListGroup.Item>
                    <ListGroup.Item>These databases are best suited for complex queries</ListGroup.Item>
                    <ListGroup.Item>Vertically Scalable</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
                <Card.Text>
                  <h5 className="text-success">NoSQL : </h5>
                  <ListGroup>
                    <ListGroup.Item>Non-relational or distributed database system.</ListGroup.Item>
                    <ListGroup.Item>They have dynamic schema</ListGroup.Item>
                    <ListGroup.Item>These databases are best suited for hierarchical data storage.</ListGroup.Item>
                    <ListGroup.Item>These databases are not so good for complex queries</ListGroup.Item>
                    <ListGroup.Item>Horizontally scalable</ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={JWTImg} />
              <Card.Body>
                <Card.Title>What is The Purpose of JWT and How Does it work?</Card.Title>
                <Card.Text>
                <h5 className="text-success">JWT : </h5>
                JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                </Card.Text>
                <Card.Text>
                <h5 className="text-success">JWT Works : </h5>
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Blog;
