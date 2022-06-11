import React from "react";
import Navbar from "./components/Navbar";
import Travel from "./components/Travel";
import Data from "./data"

export default function App(){
    const cards = Data.map(place => <Travel key={place.googleMapsUrl} {...place} />)
    return (<>
      <Navbar />
      {cards}
      </>
    )

}