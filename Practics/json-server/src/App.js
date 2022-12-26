import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  useEffect(()=> {
    axios.get("http://localhost:3000/posts").then((res)=>setData(res.data));
  },[]);

  return (
    <div>{data && data.map((item,idx) => 
      <div key={idx}>{item.name}{item.price}</div>)}
    </div>
  );
}

export default App;
