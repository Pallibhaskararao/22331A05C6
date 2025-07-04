import { useState ,useEffect} from 'react'
import './App.css'

const STORAGE_KEY = "shortUrls";

        function generateShortCode(length = 6) {
          const chars =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          let result = "";
          for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
          }
          return result;
        }

        function isValidUrl(url) {
          try {
            new URL(url);
            return true;
          } catch {
            return false;
          }
        }

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

          const existing = urls.find((u) => u.longUrl === longUrl.trim());
            if (existing) {
              setCopied(existing.shortCode);
              return;
            }

            let shortCode;
            do {
              shortCode = generateShortCode();
            } while (urls.find((u) => u.shortCode === shortCode));

            const newUrl = {
              longUrl: longUrl.trim(),
              shortCode,
              createdAt: new Date().toISOString(),
              clickCount: 0,
              lastClicked: null,
            };
            setUrls([newUrl, ...urls]);
            setCopied(shortCode);
            setLongUrl("");
        }

export default function App() {
    const [longUrl, setLongUrl] = useState("");
    const [urls, setUrls] = useState([]);
    const [error, setError] = useState("");

    

  const printUrl = () =>{
    return (
      <p> The url is your given url : {longUrl}</p>
    )
  }

  return (
    <>
    <div>
        <h1>URL shorter Apllication </h1>
        <h3>Enter the link to convert into short link : </h3>
        <input type = "url" 
            className = "url" 
            placeholder="Enter the URL to convert " 
            value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
            />
        <div className="card">
          <button className='generate' onClick={()=>{
            <p> The url is your given url : {longUrl}</p>
          }}>
            <a href = "{longUrls}">Generate</a>
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



