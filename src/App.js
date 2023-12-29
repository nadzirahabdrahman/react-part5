import { useState } from 'react';
import './App.css';

const App = () => {

  const studentList = () => {
    let studentArr = ["Ross", "Rachel", "Monica", "Phoebe", "Joey", "Chandler"];
    
    return studentArr;
  }

  //create state, setState
  const [student, setStudent] = useState(studentList());

  const addStudent = (event) => {
    let valueStudent = event.target.value; // get value of the button
    let newStudentArr = [...student, valueStudent]; //store student's name from studentList() and new student's name in the new array
    setStudent(newStudentArr); //append all latest student's name from the new array
  }

  const delStudent = (event) => {
    let valueStudent = event.target.value; //get value of the delete button 
    let newStudentArr = student.filter(function(val) {
      //check value of delete button in the student's list name array
      if(valueStudent === val) {
        return false;
      } else {
        return true;
      }
    });

    setStudent(newStudentArr);
  }
  return (
    <>
      <h1>Studywithme React pt.5</h1>

      <div className='card flex-apart'>
        <button className='buttonName' value="Frank" onClick={addStudent}>Frank</button>
        <button className='buttonName' value="Alice" onClick={addStudent}>Alice</button>
        <button className='buttonName' value="Emily" onClick={addStudent}>Emily</button>
        <button className='buttonName' value="Janice" onClick={addStudent}>Janice</button>
      </div>
      {/* How to call an array using map() */}
      {student.map(function(val, index) {
        return (
          <div className='card flex-apart' key={val}>
            <span>{val}</span>
            <button onClick={delStudent} value={val}>Delete</button>
          </div>
        )
      })}
    </>
  );
}

export default App;
