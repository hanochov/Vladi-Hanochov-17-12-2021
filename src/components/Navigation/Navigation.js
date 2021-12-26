import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Main from "../Main/Main";
import Favorites from "../Favorites/Favorites";

function Navigation() {
  return (
    <Container>
      <Router>
        <nav className="nav">
          <Container>
            <Row >
              <Col className="col-1">
                <h4>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <div style={{ color: "black" }} className="nav-link">
                      Home
                    </div>
                  </Link>
                </h4>
              </Col>
              <Col className="col-1">
                <h4>
                  <Link to="/fav" style={{ textDecoration: "none" }}>
                    <div style={{ color: "black" }} className="nav-link">
                      Favorites
                    </div>
                  </Link>
                </h4>
              </Col>
              <Col className="col-10 text-end">
                <h4>
                  <div
                    style={{ color: "black", fontFamily: "cursive" }}
                    className="nav-link"
                  >
                    Herolo Weather Task
                  </div>
                </h4>
              </Col>
            </Row>
          </Container>
        </nav>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/fav" element={<Favorites />} />
          </Routes>
        </Fragment>
      </Router>
    </Container>
  );
}

export default Navigation;
