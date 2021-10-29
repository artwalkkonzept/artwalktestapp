import { Link } from "@reach/router";

function Artwalk(props) {
  const artwalk = props.getArtwalk(props.id);
  let content = <p>Loading</p>;
  
  if (artwalk) { 
  content =
    <>
      <h3>{artwalk.name}</h3>
      <h3>Bilder</h3>
      <ul>
        {artwalk.bilds}
      </ul>
      <br />
      <Link to="/">Back</Link>
    </>
  }

  return content;
}

export default Artwalk;
