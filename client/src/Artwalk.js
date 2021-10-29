import { Link } from "@reach/router";
function Artwalk(props) {

<<<<<<< HEAD:client/src/Artwalk.js
  const artwalk = props.getArtwalk(props.id);
  let content = <p>Loading</p>;
  if (artwalk) { 
  content =
    <>
      <h1>{artwalk.name}</h1>
      <h3>Bilds</h3>
      <ul>
        {artwalk.bilds}
      </ul>
      <br />
      <Link to="/">Back</Link>
    </>
=======

  const artwalk = props.getArtwalk(props.id);
  let content = <p>Loading</p>;
  if (artwalk) {
    content =
      <>
        <h1>{artwalk.name}</h1>
        <h3>Bilder</h3>
        <ul>
          {artwalk.bilds}
        </ul>

       

       
        <br />
        <Link to="/">Back</Link>
      </>
>>>>>>> 94b0c1dceaae8731d5bed1d3cd0ccd89f2b28e00:client/src/Tours/Artwalk.js
  }

  return content;
}

export default Artwalk;
