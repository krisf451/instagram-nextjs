import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  serverTimestamp,
  query,
} from 'firebase/firestore'
import { db } from '../firebase'
import Moment from 'react-moment'

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession()
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    []
  )

  const sendComment = async (e) => {
    e.preventDefault()

    const commentToSend = comment
    setComment('')
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    })
  }

  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt="post-header"
          className="mr-3 h-12 w-12 rounded-full border object-contain p-1"
        />
        <p className="flex-1 font-bold">{username}</p>
        {/* TODO: add show more functionallity */}
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>
      <img src={img} alt="user" className="w-full object-cover" />

      {/* Buttons */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      <p className="truncate p-5">
        <span className="mr-1 font-bold">{username} </span>
        {caption}
      </p>

      {/* comments */}

      {session && comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll">
          {comments.map((comment) => (
            <div key={comment.id} className="mb-3 flex items-center space-x-2">
              <img
                src={comment.data().userImage}
                alt="comment"
                className="h-7 rounded-full"
              />
              <p className="flex-1 text-sm">
                <span className="font-bold">{comment.data().username}</span>{' '}
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* form */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7 cursor-pointer" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 border-none outline-none focus:ring-0"
            placeholder="Add a comment..."
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="cursor-pointer font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  )
}

export default Post
