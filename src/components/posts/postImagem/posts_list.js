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
                  image={postsImages.image}
                  title={postsImages.title}
                  description={postsImages.description}
                  type={postsImages.type}
                  likes={postsImages.likes}
                  userImage={postsImages.user_image}
                />
              </div>
            );
          } else if (postsImages.type === "text" || postsImages.type === "") {
            return (
              <div>
                <PostImage
                  key={postsImages.id}
                  id={postsImages.id}
                  user={postsImages.user}
                  title={postsImages.title}
                  description={postsImages.description}
                  type={postsImages.type}
                  likes={postsImages.likes}
                  userImage={postsImages.user_image}
                />
              </div>
            );
          } else if (postsImages.type === "audio") {
            return (
              <PostImage
                key={postsImages.id}
                id={postsImages.id}
                user={postsImages.user}
                title={postsImages.title}
                description={postsImages.description}
                type={postsImages.type}
                likes={postsImages.likes}
                userImage={postsImages.user_image}
              />
            );
          }
          else if (postsImages.type === "video") {
            return (
              <PostImage
                key={postsImages.id}
                id={postsImages.id}
                user={postsImages.user}
                title={postsImages.title}
                description={postsImages.description}
                type={postsImages.type}
                video={postsImages.video}
                likes={postsImages.likes}
                userImage={postsImages.user_image}
              />
            );
          }
        })}
      </ul>
      
    </div>
  );
}
