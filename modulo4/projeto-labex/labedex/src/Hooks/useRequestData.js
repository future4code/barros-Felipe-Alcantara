import axios from "axios";
import React, {useState, useEffect} from "react";

export const useRequestData= (url) =>{
  const [data, setData] = useState (undefined);
  const [loading, setLoading]=useState();
  const [erro, setErro]= useState("");

  useEffect( ()=> {
    setLoading(true)
    axios.get(url).then((res) => {
      setLoading(false) 
      setData(res.data) 
    })
     .catch((err) => {
      setLoading(false) 
      setErro(err.data)
    })
  }, [url])
    
  return [data, loading, erro]

}