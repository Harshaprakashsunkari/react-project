import React, { useState } from "react";
import Actors from "./Actors";
import Show from "./Show";

const Search = () => {
  const [actor, setActor] = useState(false);
  const [show, setShow] = useState(false);

  const setActorFilter = () => {
    setShow(false);
    setActor(true);
  };
  const setShowFilter = () => {
    setActor(false);
    setShow(true);
  };
  return (
    <>
      {/* //Navbar */}
      <section>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="container">
              <h2 className="container-child">
                <img
                  src="https://miro.medium.com/max/663/1*kZpIN83A-IszvrmPWFsKbQ.png"
                  alt="TvMaze" width={"150vw"} height={"100vh"} 
                />
              </h2>
            </div>
          </div>
        </nav>
      </section>

      {/* search  */}
      <section className="mt-5">
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-7">
              <input
                type="radio"
                name="movie"
                onChange={() => setActorFilter()}
              />
              <strong style={{ fontsize: "20px", color: "whitesmoke" }}>
                {" "}
                By Actor{" "}
              </strong>{" "}
              &nbsp; &nbsp;
              <input
                type="radio"
                name="movie"
                onChange={() => setShowFilter()}
                className="ms-3"
              />
              <strong style={{ fontsize: "20px", color: "whitesmoke" }}>
                {" "}
                By Shows{" "}
              </strong>
            </div>
          </div>
        </div>
      </section>
      {actor ? <Actors /> : ""}
      {show ? <Show /> : ""}
    </>
  );
};

export default Search;