import { useSelector } from 'react-redux'
import { Router } from "@reach/router";
<<<<<<< HEAD
import Artwalk from "./Artwalk";
import Artwalks from "./Artwalks";
import Gallery from "./components/Gallery";
=======
import Artwalk from "./tours/Artwalk";
import Artwalks from "./tours/Artwalks";
import Logo from "./logo/Logo";
>>>>>>> 94b0c1dceaae8731d5bed1d3cd0ccd89f2b28e00

function App() {

  // We get state from the redux store using a selector function that selects 
  // the part of the state that we are interested in.
  const artwalks = useSelector(state => state.artwalks);

  // Helper function for finding a artwalk by id 
  function getArtwalk(id) {
    return artwalks.find(artwalk => artwalk._id === id);
  }

  return (
    <>
<<<<<<< HEAD
=======
      <h3>ArtWalk touren</h3>
>>>>>>> 94b0c1dceaae8731d5bed1d3cd0ccd89f2b28e00
      <Router>
        <Artwalk path="/artwalk/:id" getArtwalk={getArtwalk} />
        <Artwalks path="/" artwalks={artwalks} />
      </Router>
      <Gallery/>
    </>
  );
}

export default App;