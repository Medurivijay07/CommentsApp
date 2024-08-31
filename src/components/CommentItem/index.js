// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentObject, likingComment, deletingComment} = props
  const {name, comment, isLiked, id} = commentObject
  const initial = name.slice(0, 1)

  const onClickingLike = () => {
    likingComment(id)
  }

  const onClickingDelete = () => {
    deletingComment(id)
  }

  const time = formatDistanceToNow(new Date())

  const likeUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeClass = isLiked ? 'liked-style' : 'normal-style'

  return (
    <li>
      <div className="comment-card">
        <div className="initial">
          <p>{initial}</p>
        </div>
        <div className="comment-box">
          <div className="name-time">
            <h1 className="name">{name}</h1>
            <p>{time}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
      <div className="like-cord">
        <div className="like">
          <img src={likeUrl} alt="like" className="like-image" />
          <button type="button" className={likeClass} onClick={onClickingLike}>
            Like
          </button>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="del-btn"
          onClick={onClickingDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
