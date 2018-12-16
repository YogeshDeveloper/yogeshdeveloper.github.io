import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "d5aba4ad281a3266106b02581ec169d9";

class App extends React.Component {

  getWeather = async(e) =>{
    e.preventDefault(); 
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    // const api_call = await fetch(`https://samples.openweathermap.org/data/2.5/
    // weather?q=Manchester,uk&appid=${API_KEY}&units=metric`);
   // https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22
   const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }

  render(){
    return (
<div>
     <Titles/>
     <Form getWeather={this.getWeather}/>
     <Weather/>
 </div>
    );
  }
};

export default App;