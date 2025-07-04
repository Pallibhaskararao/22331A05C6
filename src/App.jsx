import { useState } from 'react'
import './App.css'

function handleShorten() {
  setError("");
  if (!longUrl.trim()) {
    setError("Please enter a URL.");
    return;
  }
  if (!isValidUrl(longUrl)) {
    setError("Invalid URL format.");
    return;
  }
}

export default function App() {
  const [longUrl, setLongUrl] = useState("")

  const SaveUrl = () =>{
    setUrl(document.getElementsByClassName("url").value)

  }

  return (
    <>
    <div>
        <h1>URL shorter Apllication </h1>
        <h3>Enter the link to convert into short link : </h3>
        <input type = "url" 
            className = "url" 
            placeholder="Enter the LongUrl to convert " 
            value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
            />
        <div className="card">
          <button className='generate' onClick={handleShorten}>
            Generate
          </button>
        </div>

      {/* {url.map((l,index) =>(
        <li key = {index} >
          {l}
        </li>
      ))} */}

      <footer style={{ marginTop: 40, textAlign: "center", color: "#666" }}>
        Made with in React — Fully Client Side
      </footer>
    </div>
    </>
  )
}



