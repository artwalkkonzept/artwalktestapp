import { useSelector } from "react-redux"
import { Router } from "@reach/router";
import Artwalk from "./Tours/Artwalk";
import Artwalks from "./Tours/Artwalks";
import Logo from "./logo/Logo";

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
    <h3>ArtWalk touren</h3>
      <Router>
        <Artwalk path="/artwalk/:id" getArtwalk={getArtwalk} />
        <Artwalks path="/" artwalks={artwalks} />
      </Router>
      <Logo/>
    </>
  );
}

export default App;