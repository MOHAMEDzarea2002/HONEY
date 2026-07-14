import { useState, useEffect } from 'react';
export  function useFetch(fetchFunction) {
  const [data,setData] = useState()
  const [Loading,setLoading] = useState(true)
  const [error,setError] = useState()

  useEffect(()=>{
    const fetchData =  async ()=>{
      try{
        setLoading(true)
        const result = await fetchFunction()
        setData(result)
      }catch(error){
        setError(error)
      }finally{
        setLoading(false)
      }
    }
    
  fetchData();

  }
,[fetchFunction]
)

  return {error,data,Loading}
}
