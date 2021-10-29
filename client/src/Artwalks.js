import { Link } from "@reach/router";

function Artwalks(props) {
  return (
    <>
      <h3>ArtWalk Touren</h3>
      <ol>
        {props.artwalks.map(artwalk =>
          <li key={artwalk._id}>
            <Link to={`/artwalk/${artwalk._id}`}>{artwalk.name}</Link>
          </li>)}
      </ol>
    </>
  );
}

export default Artwalks;