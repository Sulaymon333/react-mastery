import React from 'react';

const Student = ({ students }) => {
  const mappedStudents = students.map((student, i) => (
    <li key={student.name + i}>
      <img src={student.imgUrl} alt={student.name} />
      <h3>{student.name}</h3>
      <p>{student.title}</p>
    </li>
  ));
  return <ul className="image-list">{mappedStudents}</ul>;
};
export default Student;
