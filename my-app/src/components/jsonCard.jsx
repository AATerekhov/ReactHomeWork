import React from 'react'
import './GreenCard.css'

export function JsonCard({ data }){
  
  return (
    <div class="greencard">
      <h2>Текст запроса</h2>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};