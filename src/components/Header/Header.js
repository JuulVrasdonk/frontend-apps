import './Header.css';
import Nav from '../Nav/Nav.js';

function Header() {
  return (
      <header className="App-header" id="header">
        <Nav />
        <div>
          <section>
            <h1>Destinations of <span>Schiphol</span> Airport</h1>  
          </section>
          <article>
            <ul>
              <li><p>Flight data of</p><strong>WED 17</strong><p>November</p></li>
              <li><p>Total of</p><strong>1148</strong><p>Flight destinations</p></li>
              <li>Hello! &#128075; Welcome to my schoolproject in which I build a datavisualisation using React, D3 and Mapbox. 
                  In a period of 6 weeks, I cleaned the data of the Schiphol flights API, converted it to coordinates and rendered it to a Mapbox map. 
              </li>
            </ul>
          </article>
        </div>
      </header>
  );
}

export default Header;
