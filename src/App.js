import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import { studentsData } from './students-data';
import StudentsList from './Components/StudentsList';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header title="Let's get started with React.js" name="Sulaymon Tajudeen" year={new Date().getFullYear()} />
      <Main techs={['HTML', 'CSS', 'JavaScript']} />
      <StudentsList students={studentsData} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
};

export default App;
