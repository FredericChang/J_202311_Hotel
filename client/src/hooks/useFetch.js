import React, { useEffect, useState } from 'react'
import axios from "axios"

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        const fetchData = async()=>{
            setLoading(true); //來確定連線時成功的開始
            try{
                const response = await axios.get(url);
                //axios.get最重要的資料 且url是feature那邊傳入的/hotels
                setData(response.data);
            }catch(error){
                setError(error)//如果有錯誤也紀錄進去setError State
            }
            setLoading(false);//代表連線時成功的結束
        }
        fetchData()
    }, [url]);
    return {
        data,
        loading,
        error
    }
}

export default useFetch