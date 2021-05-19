import React from 'react';
import { MenuSidebar } from './components/menu';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {

  return (
  <Router>
    <MenuSidebar />
  </Router>
  )
}

export default App;
