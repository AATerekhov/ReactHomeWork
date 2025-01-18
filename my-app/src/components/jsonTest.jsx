import React, { useState } from 'react'
import axios from 'axios'
import { JsonCard } from './jsonCard'

export function JsonCollectionTest(){
    const [fucts, setFucts] = useState([]);
    const [loading, setLoading] = useState(false);
    const GetObjectTest = async () => {        
        try{
            const response  = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setFucts(response.data);
        }
        catch{
            setFucts({error: "Ошибка получения данных."});
        }     
        finally{
            setLoading(false);
        }  
    }

    if (loading) return <div>Loading...</div>;
    return (
        <div>
            <button className="getFucts-button" onClick={GetObjectTest}>
            Way button
            </button>
            <JsonCard data={fucts}/>
        </div>
    );
};