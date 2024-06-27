import { iPost } from '@/constants/models';
import MyButton from '@uiMyButton/MyButton';

interface PostProps {
  post: iPost;
  remove: (post: iPost) => void;
}

const PostItem = ({ post, ...props }: PostProps) => {
  return (
    <div className="post">
      <div className="post_content">
        <strong>
          {post.id}.{post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post_btns">
        <MyButton
          onClick={() => {
            props.remove(post);
          }}
        >
          Удалить
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;
