import React from 'react';
import PostItem from './PostItem';
import { iPost } from 'src/models';

interface PostListProps {
  posts: iPost[];
  title: string;
  callback: (post: iPost) => void;
}

const PostList = (postList: PostListProps) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{postList.title}</h1>
      {postList.posts.map((post) => {
        return (
          <PostItem post={post} remove={postList.callback} key={post.id} />
        );
      })}
    </div>
  );
};

export default PostList;
