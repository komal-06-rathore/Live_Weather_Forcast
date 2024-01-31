
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {useState } from "react";
import axios from "axios";


function App() {


  const apiKey = "c828c1ae73a1a0d8d4b1e870fa076509"

  const [inputCity, setInputCity] = useState("")
  const [data,setData] = useState({})

  const getDetail = (cityName) => {
    if(!cityName) return 
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res)=>{
      console.log("response",res.data)
      setData(res.data)
    }).catch((err)=>{
      console.log("err",err)
    })
  }

  const handleInputChange = (e) =>{
    console.log("value",e.target.value);
    setInputCity(e.target.value)
  }
  const handleSearch = () => {
    // alert("clicked")
    getDetail(inputCity)
  }


  //  useEffect(()=>{
  //   getDetail(inputCity)
  //  },[])

  const currTemp = (Math.round(data?.main?.temp)-273)

  return (
    <div className="col-md-12">
      <div className="wedBG">
        <h1 className="heading ">Weather App</h1>
        <div className="col-md-12 mt-4">
        <input type=" text" className="searchbar"
        //  value={inputCity} 
         onClick={handleInputChange}/>
        <button className="searchbtn" 
        onClick={handleSearch}></button>
        </div>  
        {Object.keys(data).length > 0 &&
        <div className=" text-centre ">
      <div className="shadow rounded result">
      <img className ="boximg" src="https://cdn-icons-png.flaticon.com/512/2480/2480608.png" alt="weather img"/>
      <h5 className="weathercity">{data?.name}</h5>
      <h3 className="weathertemp">{currTemp}°C</h3>
      </div>
      </div>
        }
      </div> 
     

    </div>
    
     
    
  );
}

export default App;
