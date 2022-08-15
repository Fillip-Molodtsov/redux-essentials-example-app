import React from 'react'
import { useSelector } from 'react-redux'

export const PostAuthor = ({ userId }) => {
  const author = useSelector(state =>
    state.users.find(user => user.id === parseInt(userId, 10))
  )

  return <span>by {author ? author.name : 'Unknown author'}</span>
}