import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

function Post({ id, username, userImg, img, caption }) {
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
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      <p className="truncate p-5">
        <span className="mr-1 font-bold">{username} </span>
        {caption}
      </p>

      {/* comments */}

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 cursor-pointer" />
        <input
          type="text"
          className="flex-1 border-none outline-none focus:ring-0"
          placeholder="Add a comment..."
        />
        <button className="cursor-pointer font-semibold text-blue-400">
          Post
        </button>
      </form>
    </div>
  )
}

export default Post
