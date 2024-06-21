import { Link } from 'react-router-dom';
import ABOUT_ARRAY from '../content/about';
import headshot from '../content/headshot.jpg';


export default function Index() {
  return (
    <div>
      <h1>
        Eric Roth - Developer
      </h1>
      <img src={headshot}/>
      <h2>
        About Me
      </h2>
      <p>
        {ABOUT_ARRAY[0]}
        <Link to='about'> Read More...</Link>
      </p>
    </div>

  );
}