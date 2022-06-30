// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleBlog from './Pages/SingleBlog';

function App() {

  const GoToSingleBlog = ({match}) => {
    return(

      // PARSEINT IS A JS FUNCTION WHICH WILL CONVERT THE THE GIVEN STRING OF NUMBERS ACCORDING TO THE BASE OR RADIX SPECIFIED
      <SingleBlog id={match.params.id} />
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/blog/:id" component={GoToSingleBlog} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
