import classes from "./Make_post.module.css"

export default function MakePosts() {
    return(
        <div >
        <button className={classes.makePost}>
           + Novo Post
        </button>
        </div>
    )
}