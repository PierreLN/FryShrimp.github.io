import React, { useState } from 'react';
import './App.css';
import SideMenu from './components/SideMenu/SideMenu';
import MainPage from './components/MainPage';
function App() {
  const [location, setlocation] = useState("home");
  
  const locationHandler = (data: any) => {
    setlocation(data);
  };

  const onMoveProject = () => {
    setlocation("blog");
  }
  return (
    <div className="App">
      <SideMenu onMove={locationHandler}></SideMenu>
      <MainPage selectedPage={location} onClick={onMoveProject}></MainPage>
    </div>
  );
}

export default App;
