import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="https://images.pexels.com/photos/13766656/pexels-photo-13766656.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h1>OBJECTIVES</h1>
            <ul>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
