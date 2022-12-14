import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
  Routes,
	Route,
	Link,
  useRoutes
} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Admin/Login';
// import About from './components/About/About';



const App = () => {
  
  const routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/Login', element: <Login /> },
      // { path: '/About', element: <About /> },

  ]);

  return routes;
};

export default App;