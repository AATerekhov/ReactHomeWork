import React from 'react'
import './GreenCard.css'

export function GreenCard({ data }){

  return (
    <div className="greencard">
      <h2>Данные запроса</h2>
      <ul>
        {data.map(post => (
          <li key={post.date}>{post.date} {post.summary} {post.temperatureC}</li>
        ))}
      </ul>
    </div>
  );
};