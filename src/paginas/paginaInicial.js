import MainNavigation from "../components/layout/MainNavigation";
import MakePosts from "../components/layout/Make_post";
import PostsAudioList from "../components/posts/postAudio/postAudioList";
import PostsLists from "../components/posts/postImagem/posts_list";
import "./paginainicial.css";

const DUMMY_DATA = [
  {
    id: "m1",
    user: "Renan",
    user_image:
      " https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg ",
    title: "Olha que legal",
    image: "https://i.imgur.com/dEsSnPK.png",
    description: "Muito legal né",
  },
  {
    id: "m2",
    user: "Leonardo DaVinci",
    user_image:
      "https://www.cartacapital.com.br/wp-content/uploads/2019/02/Kombo-Leonardo-Da-Vinci-und-Leonardo-di-Caprio.jpg",
    title: "The Ballad of Mona Lisa",
    image:
      " https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg ",
    description:
      "Mona Lisa, yeah Pleased to please you Mona Lisa",
  },
  {
    id: "m3",
    user: "dabin ",
    user_image:
      "https://d5y9g7a5.rocketcdn.me/wp-content/uploads/2021/03/trollface-origem-significado-e-polemicas-em-torno-do-meme-960x596.jpg",
    title: "peter griffin sans",
    image: " https://i.ytimg.com/vi/QhbNw2YHDw0/maxresdefault.jpg ",
    description: "socorro",
  },
];

export default function PaginaInicial() {
  return (
  <div>
    <MainNavigation/>
    <main>
      <div className="posts"> 
      
      <PostsAudioList postsAudios={DUMMY_DATA}/>

      <PostsLists postsImages={DUMMY_DATA}/> 
      
      </div>
      <div className="make_post">
        <MakePosts/>
      </div>

    </main>
    </div>
  );
}
