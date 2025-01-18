import React from 'react'
import './ErrorCard.css'

export function ErrorCard({ message, statusCode }){

  return (
    <div className="errorcard">
      <h2>Ошибка {statusCode}!</h2>
      <p>{message}</p>
    </div>
  );
};