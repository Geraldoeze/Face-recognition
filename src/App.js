import React from 'react'
import './App.css';
import Navigation from './Comps/Navigation/Navigation';
import Logo from './Comps/Logo/Logo';
import ImageLink from './Comps/ImageLink/ImageLink';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
       <ImageLink />
      {/* <FaceRecogniton/>  */}
    </div>
  );
}

export default App;
