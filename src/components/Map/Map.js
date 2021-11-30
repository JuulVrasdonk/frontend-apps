import React, { useRef, useEffect, useState } from 'react'
import './Map.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as d3 from "d3";
import * as input from "./data.json"
import  mapboxgl  from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import ZoomButton from "../ZoomButton/ZoomButton.js"

mapboxgl.accessToken = 'pk.eyJ1IjoianV1bHZyYXNkb25rIiwiYSI6ImNrdnRnbW8ydjByZGgyb205ZmZvZWJjYW4ifQ.1kI6XuFZQ1JkxTAjgzjcrA'; 
gsap.registerPlugin(ScrollTrigger);

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(10.5854738679537563);
    const [lat] = useState(25.83355015464672);
    const [zoom] = useState(1.8);


    useEffect(() => {
      if (map.current) return; // initialize map only once
      let d3Map = map.current;
      d3Map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/juulvrasdonk/ckw1xzwxt4kum14mprcvnfxq8', 
        center: [lng, lat], 
        zoom: zoom,
        minZoom: .5
      });

      // Ik maak een container variable en selecteer 
      // hierin de container waar mijn Mapbox map zich in bevindt
      const container = d3Map.getCanvasContainer();
    
    
      // Nu wil ik deze container koppelen aan D3. 
      // Dit moet om zometeen mijn SVG's op de kaart
      // te kunnen tekenen. Ik zet ook de z-index op 2
      // omdat de Mapbox anders boven de D3 graphics 
      // worden gezet. 
      const svg = d3
          .select(container)
          .append("svg")
          .attr("width", "100%")
          .attr("height", "100%")
          .style("position", "absolute")
          .style("z-index", 2)
        

      const data = input.default


      // In deze project functie zeg ik tegen Mapbox wat de coörinaten 
      // zijn uit mijn data array. 
      function project(d) {
          return d3Map.project(new mapboxgl.LngLat(d[0], d[1]));
      }
    
      // Hier geef ik aan hoe de data gevisualiseerd moet worden.
      const dots = svg
        .selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .classed("dot", true)
        .attr("r", 5)
        .style("fill", "#1B60DB")
    
      // Nu render ik de dots SVG's naar de kaart door ze door de 
      // project functie heen te halen. Via cx en cy hieraan te 
      // koppelen verteld  mapbox via de project functie waar
      // de dots moeten komen. Fucking vet. 
      function render() {
          dots
            .attr("cx", d => {
                return project(d).x;
            })
            .attr("cy", d => {
                return project(d).y;
            });
      }
    
    
      // Hier voeg ik een kleine staggering animation toe met GSAP.
      const dotTl = gsap.timeline();
    
      dotTl.from(".dot", {
        duration: 1,
        opacity: 0
      })
      .from(".dot", {
          opacity: 0,
          scale: 0
      })
    
      .to(".dot", {
          scale: 1, 
          opacity: .7,
          stagger: .007, 
          // ease: Elastic.easeOut.config(1, 0.3)
      })
    
        // Hier vertel ik wat dots moeten als ik in- of uitzoom of beweeg.
      render();
        d3Map.on("viewreset", render);
        d3Map.on("move", render);
        d3Map.on("moveend", render);
    });
  return (
    <section>
        <div className="divider"></div>
        <div className="mapWrapper">
          <div ref={mapContainer} className="map-container" />
        </div>
    </section>
  );
}
