import "./nav.css"


function Nav() {
   return( <nav> 
        <ul>
            <li>
              <a href="#header">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.24166 16.2449C2.39704 15.9536 -0.223081 18.0649 0.327716 20.8709C0.663534 22.5816 1.25495 24.2421 2.09046 25.7943C3.75007 28.8776 6.29645 31.3921 9.40037 33.0128C12.5043 34.6334 16.023 35.2857 19.5016 34.8852C22.9802 34.4847 26.2586 33.0498 28.913 30.7662C31.5674 28.4826 33.4758 25.4552 34.3913 22.0755C35.3068 18.6957 35.1873 15.1191 34.0484 11.8079C32.9095 8.49676 30.8035 5.60342 28.0026 3.50196C26.5925 2.444 25.039 1.61124 23.3976 1.0237C20.7054 0.0600361 18.2265 2.33547 18.0896 5.19169L18.0456 6.11122C17.9331 8.45959 19.9074 10.3739 21.788 11.7849V11.7849C22.9315 12.6429 23.7914 13.8242 24.2563 15.176C24.7213 16.5279 24.7701 17.9882 24.3963 19.3681C24.0225 20.7479 23.2434 21.984 22.1597 22.9163C21.0759 23.8487 19.7374 24.4345 18.3172 24.598C16.897 24.7615 15.4604 24.4952 14.1931 23.8335C12.9258 23.1718 11.8862 22.1452 11.2086 20.8864V20.8864C10.0943 18.8162 8.4963 16.5781 6.15746 16.3386L5.24166 16.2449Z" fill="url(#paint0_radial_9_349)"/>
                  <circle cx="17.5" cy="17.5" r="5.83333" fill="url(#paint1_linear_9_349)"/>
                  <defs>
                    <radialGradient id="paint0_radial_9_349" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.1569 17.1569) rotate(-43.1524) scale(15.0512)">
                      <stop stopColor="#3174EC" stopOpacity="0"/>
                      <stop offset="1" stopColor="#4181F3"/>
                    </radialGradient>
                    <linearGradient id="paint1_linear_9_349" x1="12.4058" y1="11.6667" x2="25.4512" y2="13.0979" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3174EC"/>
                      <stop offset="1" stopColor="#4181F3"/>
                    </linearGradient>
                  </defs>
                </svg>
                <strong>Destinations</strong>
              </a>
            </li>
            <li><a href="#header">insights</a></li>
            <li><a href="#header">go to map</a></li>
        </ul>
    </nav>
   )
}

export default Nav;