import PostAudio from "./postsAudio";
import classes from "./postAudioList.mocule.css";

export default function PostsAudioList(props){
    return(
        <ul className={classes.list}>
            {props.postsAudios.map((postsAudios) => (
        <PostAudio
          key={postsAudios.id}
          id={postsAudios.id}
          user={postsAudios.user}
          userImage={postsAudios.user_image}
          image={postsAudios.image}
          title={postsAudios.title}
          description={postsAudios.description}
        />
      ))}
        </ul>
    )
}