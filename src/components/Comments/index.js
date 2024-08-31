import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {commentsList: [], name: '', comment: '', commentsCount: 0}

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onSubmitting = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      commentsCount: prevState.commentsCount + 1,
    }))
  }

  likingComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deletingComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
      commentsCount: prevState.commentsCount - 1,
    }))
  }

  render() {
    const {name, comment, commentsList, commentsCount} = this.state
    return (
      <div className="main-container">
        <div>
          <h1>Comments</h1>
          <div className="top-container">
            <form className="form-style" onSubmit={this.onSubmitting}>
              <p>Say something about 4.0 Technologies</p>
              <input
                type="text"
                className="input-style"
                placeholder="Your Name"
                value={name}
                onChange={this.onChangeName}
              />
              <textarea
                rows="8"
                cols="55"
                className="textarea-style"
                placeholder="Your Comment"
                value={comment}
                onChange={this.onChangeComment}
              />
              <button type="submit" className="button">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr />
          <div className="card-count">
            <p className="comments-count">{commentsCount}</p>
            <span>Comments</span>
          </div>

          <ul className="unordered-list">
            {commentsList.map(eachComment => (
              <CommentItem
                commentObject={eachComment}
                key={eachComment.id}
                likingComment={this.likingComment}
                deletingComment={this.deletingComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
