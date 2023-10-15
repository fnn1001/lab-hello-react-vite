import comp from "../images/comp.png";
import Dec from "../images/Dec.png";
import jsx from "../images/jsx.png";
import single from "../images/single.png";
function Footer() {
  return (
    <div className="footer">
      <img src={Dec} alt="" />
      <h2>Declarative</h2>
      <p>React makes it painless to create interactive UIs.</p>
      <img src={comp} alt="" />
      <h2>Components</h2>
      <p>Build encapsulated components that manage their state.</p>
      <img src={single} alt="" />
      <h2>Single-Way</h2>
      <p>A set of immutable values are passed to the component's.</p>
      <img src={jsx} alt="" />
      <h2>JSX</h2>
      <p>Statically-typed, designed to run on modern browsers.</p>
    </div>
  );
}

export default Footer;




