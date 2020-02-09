import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Articles from './components/Articles/Articles';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='wrapper'>
      <div className='container-fluid'>
        <Header id={'React App'} />
      </div>
      <div className="container-md">
        <Slider id={'Slider'} />
        <Articles />
        <Contacts id={'Contacts'} />
      </div>
      <div className='container-fluid'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
