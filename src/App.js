import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/index'
import ComponentOne from './components/Menu/ComponentOne/componentOne';
import ComponentTwo from './components/Menu/ComponentTwo/componentTwo';
import ComponentThree from './components/Menu/ComponentThree/componentThree'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
     <Router>
      <Header/>
          <Routes>
            <Route path="/componentone" exact element={<ComponentOne/>}></Route>
            <Route path="/componenttwo" exact element={<ComponentTwo/>}></Route>
            <Route path="/componentthree"  exact element={<ComponentThree/>}></Route>
          </Routes>

          <Footer />
        </Router>
     
    </div>
  );
}

export default App;
