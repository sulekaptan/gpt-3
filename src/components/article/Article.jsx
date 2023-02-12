import React from 'react'
import './article.css'

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='blog-article'>

      <div className='blog-article-image'>
        <img src={imgUrl} alt="Blog" />
      </div>

      <div className="blog-article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>

    </div>
  )
}

export default Article