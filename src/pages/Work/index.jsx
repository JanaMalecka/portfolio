import React from 'react';
import './style.css';
/* import hradejovSmallUrl from './img/hradejovSmallUrl.png'; */

const Work = () => {
  return (
    <>
      <div className="container">
        <h2>Czechitas Web Academy</h2>
        <h3>Final project</h3>
        <div className="project-info">
          <a href="https://github.com/JanaMalecka/Hradejov">
            <p className="code">Code</p>
          </a>
          <a href="https://www.hradejov.cz/">
            <p className="code">Website</p>
          </a>
        </div>
        {/* <img src={hradejovSmallUrl}></img> */}

        <h2>ReactGirls - Academy for advanced</h2>
        <h3>Workshop project</h3>
        <div className="project-info">
          <p className="code">Code</p>
          <p className="code">Website</p>
        </div>
        <img></img>
        <h2>Google UX Design - Coursera (professional certificate)</h2>
        <h3>Case Study</h3>
        <div className="project-info">
          <p className="code">Code</p>
          <p className="code">Website</p>
        </div>
        <img></img>
      </div>
    </>
  );
};

export default Work;
