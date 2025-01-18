import React from 'react'
import './GreenCard.css'

const  GreenCard = React.memo(({ data }) => {
  if (data == null){
    return <></>
  }
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
});

export default GreenCard