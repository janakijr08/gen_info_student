import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Create from './components/Create';
import Delete from './components/Delete';
import Update from './components/Update';
import View from './components/View';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
            
              <li><Link to="/create">Create</Link></li>
              <li><Link to="/delete">Delete</Link></li>
              <li><Link to="/update">Update</Link></li>
              <li><Link to="/view">View</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
           
            <Route path="/create" element={<Create />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/update" element={<Update />} />
            <Route path="/view" element={<View />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
