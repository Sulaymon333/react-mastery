import React from 'react';

const Main = ({ techs }) => {
  const techsMapped = techs.map((tech, i) => <li key={tech + i}>{tech}</li>);
  return (
    <main className="main">
      <p>For you to become an expert in React, you gotta to have the following skills</p>
      <ul>{techsMapped}</ul>
      <p>Some of my awesome colleagues are listed below. Happy you meet them</p>
    </main>
  );
};

export default Main;
