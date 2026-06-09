import { useState, useRef } from "react";
import "./App.css";
import LRUCache from "./LRUCache";

function App() {
  const cacheref = useRef(new LRUCache(3));
  const [key,setKey]=new useState("");
  const [val,setVal]=new useState("");
  const [cacheItems,setCacheItems]=new useState([]);
  const [logs,setLogs]=new useState([]);
  const handlePut=()=>{
    if(!key||!val){
      return;
    }
    cacheref.current.put(key,val);
    setCacheItems(cacheref.current.getCacheItems());
    setLogs((prevlogs)=[
      ...prevlogs,
      `Put(${key},${val})`,
    ])
    setKey("");
    setVal("");
  }
  const handleGet=()=>{
    if(!key){
      return;
    }
    const value=cacheref.current.get(key);
    setCacheItems(cacheref.current.getCacheItems());
    setLogs((prevlogs)=[
      ...prevlogs,
      value !== null
        ? `Get(${key}) => ${val}`
        : `Get(${key}) => Not Found`,
    ])
    setKey("");
  }

  return (
    <div className="app">
      <h1>LRU Cache Visualizer</h1>

      <h3>Capacity: 3</h3>

      <div className="input-section">
        <input
          type="text"
          placeholder="Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />

        <input
          type="text"
          placeholder="Value"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      </div>

      <div className="button-section">
        <button onClick={handlePut}>PUT</button>
        <button onClick={handleGet}>GET</button>
      </div>

      <h2>Current Cache</h2>

      <div className="cache-container">
        {cacheItems.length === 0 ? (
          <p>Cache is empty</p>
        ) : (
          cacheItems.map(([Key, value]) => (
            <div key={Key} className="cache-item">
              {Key}:{value}
            </div>
          ))
        )}
      </div>

      <p>Most Recent → Least Recent</p>

      <h2>Logs</h2>

      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;