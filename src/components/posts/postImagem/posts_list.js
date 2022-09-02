import PostImage from "./posts_imagem";
import classes from "./posts_lists.module.css";

export default function PostsLists(props) {
  return (
    <div>
    <ul className={classes.list}>
      {props.postsImages.map((postsImages) => {
       if (postsImages.type === "image") { 
        return (
        <div>
        <PostImage
          key={postsImages.id}
          id={postsImages.id}
          user={postsImages.user}
          userImage={postsImages.user_image}
          image={postsImages.image}
          title={postsImages.title}
          description={postsImages.description}
          type={postsImages.type}
          likes = {postsImages.likes}
        />
        </div>
        )
       }
       else if (postsImages.type === "text" || postsImages.type === "") { 
        return (
        <div>
        <PostImage
          key={postsImages.id}
          id={postsImages.id}
          user={postsImages.user}
          userImage={postsImages.user_image}
          title={postsImages.title}
          description={postsImages.description}
          type={postsImages.type}
          likes = {postsImages.likes}
        /> 
        </div>
        )
       }
       else if (postsImages.type === "audio") { 
        return (
        <PostImage
          key={postsImages.id}
          id={postsImages.id}
          user={postsImages.user}
          userImage={postsImages.user_image}
          title={postsImages.title}
          description={postsImages.description}
          type={postsImages.type}
          likes = {postsImages.likes}
        /> 
        )
       }
      })}
    </ul>
    </div>
  );
}
