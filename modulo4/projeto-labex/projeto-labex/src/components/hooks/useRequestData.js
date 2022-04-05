import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const UseRequestData = (url, initialState) => {

    const [data,setData] = useState(initialState)

    useEffect(()=>{
        axios
        .get(url)
        .then((res)=>{
            setData(res.data.trips)
        })
        .catch((err)=>{
            console.log(err)
        })  
    }, [])

    return data;
}


