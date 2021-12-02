import React, { useState } from 'react';
import styled from 'styled-components';
import './Insights.css';

// Start Styled components 

const Tab = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 10px 30px;
  cursor: pointer;
  color: white;
  background-color: transparent;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
    background: linear-gradient(96.26deg, #3174EC 5.71%, #4181F3 107.68%);
    border-radius: 26px;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  background-color: #353e42;
  border-radius: 26px;
  width: fit-content;
  margin: 200px auto 0 auto;
`;

// End Styled components

// Start getting data

const continents = require('./continents.json');


const titles = continents.map(continent => {
    return continent.Title
})

const images = continents.map(singleData => {
    const img = singleData.img
    return img
})

const destinations = continents.map(singleData => {
    const destination = singleData.destinations
    return destination
})

console.log(titles);
// End getting data

// Start render


export default function TabGroup() {
    const [activeTitle, setActiveTitle] = useState(titles[0]);
    const [activeImg, setActiveImg] = useState(images[0])
    const [activeDestination, setActiveDestination] = useState(destinations[0])
    
    return (
      <div className="continentsWrapper">
        <ButtonGroup>
          {titles.map(title => (
            <Tab
              key={title}
              active={activeTitle === title}
              onClick={() => {setActiveTitle(title); setActiveImg(images[titles.indexOf(title)]); setActiveDestination(destinations[titles.indexOf(title)])}}
            >
              {title}
            </Tab>
          ))}
        </ButtonGroup>
        <article>
            <div className="continentContainer">
                <img src={activeImg} alt="" />
            </div>
            <section>
                <h2>{activeTitle}</h2>
                <p>Destinations: {activeDestination}</p>
            </section>
        </article>
    
      </div>
    )
}