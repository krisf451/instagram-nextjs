import Post from './Post'
import { faker } from '@faker-js/faker'

const posts = [
  {
    id: '123',
    username: 'krisf451',
    userImg: faker.image.avatar(),
    img: faker.image.avatar(),
    caption: 'YOOOO',
  },
  {
    id: '123',
    username: 'krisf451',
    userImg: faker.image.avatar(),
    img: faker.image.avatar(),
    caption: 'YOOOO',
  },
  {
    id: '123',
    username: 'krisf451',
    userImg: faker.image.avatar(),
    img: faker.image.avatar(),
    caption: 'YOOOO',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
