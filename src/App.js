import React from 'react'
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <React.Fragment>
      <NavBar title="TextUtils" />
      <div className="container">
      <TextForm heading="Enter you text below to analyse"/>
    </div>
    </React.Fragment>
    
  );
}

export default App;
