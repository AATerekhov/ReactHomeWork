import React from 'react'
import ErrorCard from '../errorCard';

const WithErrorCard = (CardComponent) => {
    return (props) => {
        if (props.error !== null){
            return <ErrorCard message={props.error} statusCode={props.statusCode}/>;
        } else {
            return <CardComponent data={props.fucts}/>;
        }
    }
};

export default WithErrorCard;