import classes from "./Make_post.module.css"


export default function MakePosts() {

    function PostHandler() {
        console.log('ola');
    }

    return(
        <div >
        <button className={classes.makePost} onClick={PostHandler}>
           + Novo Post
        </button>
        </div>
    )
}