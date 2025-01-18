import React, { useState } from 'react';
import axios from 'axios';
import { GreenCard } from './greenCard';
import { ErrorCard } from './errorCard';

export function GetCollectionFoUrl({ url }){
    const [fucts, setFucts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [statusCode, setStatusCode] = useState(null);

    const GetObjectTest = async () => {        
        try{
            const response  = await axios.get(url);
            setFucts(response.data);
            setError(null);
            setStatusCode(response.status);            
        } catch (err) {
          if (err.response) {          
            setError(err.message + `url: ${url}`); 
            setStatusCode(err.response.status);
          } else if (err.request) {          
            setError('No response received from the server.');
            setStatusCode(500); 
          } else {
            setError(err.message);
            setStatusCode(500);
          }
        } finally{
            setLoading(false);
        }  
    }

    if (loading) return (
        <div >
          <button className="getFucts-button" onClick={GetObjectTest}>
            Get Card
          </button>            
        </div>
        );
    if (error !== null) return (   
        <div >
          <button className="getFucts-button" onClick={GetObjectTest}>
            Get Card
          </button>
          <ErrorCard message={error} statusCode={statusCode}/>
        </div>
    );
    return (
        <div >
          <button className="getFucts-button" onClick={GetObjectTest}>
            Card
          </button>
          <GreenCard data={fucts}/>
        </div>
    );
};
