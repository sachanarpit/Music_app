import { useState, useEffect } from "react";
import axios from "axios";
export const Home = () => {
  const [fetchData, setFetchData] = useState([]);

  const Fetching = async (url) => {
    let x = await axios.get(url);
    let data = x.data;
    setFetchData(data);
    console.log(data);
  };

  useEffect(() => {
    Fetching(`http://localhost:4000/song`);
  }, []);
    return <div>
      
  </div>;
};
