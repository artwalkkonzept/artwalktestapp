import { Link } from "@reach/router";

const hr = {
  maxWidth: 270,
  marginLeft: 0,
}

function Artwalk(props) {

  const artwalk = props.getArtwalk(props.id);
  let content = <p>Loading</p>;
  if (artwalk) { 
  content =
    <>
    <Link to="/">Back</Link>
      <br />
      <h3>Current ArtWalk</h3>
      <hr  style={hr}/>
      <h3>{artwalk.name}</h3>
      <h3>Bild</h3>
      <ul>
        {artwalk.bilds}
      </ul>
    </>
  }

  return content;
}

export default Artwalk;
