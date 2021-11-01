import React from 'react';
import Header from '../../components/Header';
import './style.css';

const Home = () => {
  return (
    <>
      <div className="container">
        <h1>Hi there, I'm Jana.</h1>
        <h2>
          Cause I haven't <span className="italic">meta</span> a mentor
        </h2>
        <h3>who would take me under their React wing</h3>
        <h4>so far...</h4>
        <h5>it looks like how it looks!</h5>
      </div>
      <div className="container">
        <p>
          My website is a work in progress if you haven't noticed yet. Currently
          I'm working on my UX design dark side so that you can look forward on
          seeing my Google Coursera UX Design Project/s here.
        </p>
      </div>
    </>
  );
};

export default Home;
