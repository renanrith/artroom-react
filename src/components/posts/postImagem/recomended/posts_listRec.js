import classes from "../posts_lists.module.css";
import PostImageRec from "./postImagemRec";

export default function PostsListsRec(props) {
  return (
    <ul className={classes.list}>
      {props.postsImages.map((postsImages) => (
        <PostImageRec
          key={postsImages.id}
          id={postsImages.id}
          user={postsImages.user}
          image={postsImages.image}
          title={postsImages.title}
          description={postsImages.description}
          likes={postsImages.likes}
          userImage={postsImages.userImage}
        />
      ))}
    </ul>
  );
}
