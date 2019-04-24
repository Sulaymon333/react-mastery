import React from 'react';
import Student from './Student';

const StudentsList = ({ students }) => {
  // const mappedStudents = students.map((student, i) => (
  //   <li key={student.name + i}>
  //     <img src={student.imgUrl} alt={student.name} />
  //     <h3>{student.name}</h3>
  //     <p>{student.title}</p>
  //   </li>
  // ));
  // return <ul className="image-list">{mappedStudents}</ul>;
  return <Student students={students} />;
};

export default StudentsList;
