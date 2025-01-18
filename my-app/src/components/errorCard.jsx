import React from 'react'
import './ErrorCard.css'

const ErrorCard = React.memo(({ message, statusCode }) => {
  return (
    <div className="errorcard">
      <h2>Ошибка {statusCode}!</h2>
      <p>{message}</p>
    </div>
  );
});

export default ErrorCard;