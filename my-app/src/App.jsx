import { useState } from 'react'
import './App.css'
import { GetCollectionFoUrl } from "./components/getCollectionFoUrl"
import { JsonCollectionTest } from "./components/jsonTest"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>HomeWork №9</h1>
      <div className="card">
        <GetCollectionFoUrl url={"http://localhost:32768/WeatherForecast"}/>
        <GetCollectionFoUrl url={"http://localhost:32768/WeatherForecast/NotFound"}/>   
        <GetCollectionFoUrl url={"http://localhost:32768/WeatherForecast/BadRequest"}/>       
        {/* <JsonCollectionTest/> */}
      </div>
    </>
  )
}

export default App
