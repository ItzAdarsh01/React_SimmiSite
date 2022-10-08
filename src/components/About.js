import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO SIMMI FOUNDATION</h1>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynaus, quise
              sequitur mutationem consuetudium lectorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sunt corporis pariatur quisquam reprehenderit aut accusamus vero ad, excepturi similique tempora reiciendis quam voluptate facere debitis. Iure quae cupiditate unde quis, sunt quaerat nam neque aut eligendi! Deserunt maxime nesciunt, officia eos magnam fugiat Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="https://images.pexels.com/photos/5737408/pexels-photo-5737408.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
