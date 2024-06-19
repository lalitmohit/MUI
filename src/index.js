import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Contacts from './Pages/Contact/Contact';
import Experience from './Pages/Experience/Experience'; 
// import Gallery from './Pages/Gallery/Gallery';
import KeyCourses from './Pages/KeyCourses/keyCourses';
import Dashboard from './Pages/Dashboard/Dashboard';
import Education from './Pages/Education/Education';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
// import Settings from './Pages/Settings/Settings';
import Honors from './Pages/Honors/Honors';


ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
      {/* <Route path="/contact" element={<Contacts />} /> */}
      <Route path="/about" element={<Honors />} />
      <Route path="/keyCourses" element={<KeyCourses />} />
      {/* <Route path="/gallery" element={<Gallery />} /> */}
      {/* <Route path="/settings" element={<Settings />} /> */}

    </Route>
  </Routes>
</BrowserRouter>,
document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
