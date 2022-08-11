import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params


  console.log("ukukuk" +JSON.stringify(postId))
  const post = useSelector(state =>
    state.posts.find(post => post.id === parseInt(postId, 10))
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  )
}