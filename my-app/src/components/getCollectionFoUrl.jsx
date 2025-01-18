import React, { useState } from 'react';
import axios from 'axios';
import GreenCard from './greenCard';
import WithErrorCard from './HOC/withError';

export function GetCollectionFoUrl({ url }){
    const [fucts, setFucts] = useState(null);
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
            setError(err.message + ` url: ${url}`); 
            setStatusCode(err.response.status);
          } else if (err.request) {          
            setError('No response received from the server.');
            setStatusCode(500); 
          } else {
            setError(err.message);
            setStatusCode(500);
          }
        }  
    }

    const CardHOC = WithErrorCard(GreenCard);

    return (
        <div >
        <button className="getFucts-button" onClick={GetObjectTest}>
          Load Card
        </button>
        <CardHOC  fucts={fucts} error={error} statusCode={statusCode}/>
      </div>
    );
};
