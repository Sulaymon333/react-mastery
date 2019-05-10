import React from 'react';
import PropTypes from 'prop-types';
import StudentCard from './StudentCard';

function StudentList({ studentsInfo }) {
  const studentList = studentsInfo.map((studentInfo, i) => {
    return <StudentCard key={studentInfo + i} studentInfo={studentInfo} />;
  });
  return (
    <div className="student-list container">
      <ul>{studentList}</ul>
    </div>
  );
}

StudentList.propTypes = {
  studentsInfo: PropTypes.array
};

export default StudentList;
