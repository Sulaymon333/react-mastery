import React from 'react';
import ReactDom from 'react-dom';
const style = {
  background: 'blue',
  color: 'white'
}

// const labelText = () => {
//   return 'Enter your mango name: '
// }

const App = () => {
  const submitText = 'Submit Me';
  const submitTextObject = {
    text: 'Enter your name Man!: '
  }
  return (
    <div className='output'>
      {/* <label htmlFor="name">Enter Name: </label> */}
      {/* <label htmlFor="name">{labelText()}</label> */}
      <label htmlFor="name">{submitTextObject.text}</label>
      <input type="text" name="" id="name" />
      {/* <button style={{ background: 'blue', color: 'white' }}>{submitText}</button> */}
      <button style={style}>{submitText}</button>
    </div >
  )
};

ReactDom.render(<App />, document.querySelector('#root'));