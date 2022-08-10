// Component: popup comment areas for each post
export default function Comentario(props) {
  return (
    <div className="comentario">
      <div className="comentario-header">
        <div className="comentario-header-user">
          <img src={props.userImage} alt={props.user} />
          <h3>{props.user}</h3>
        </div>
        <div className="comentario-header-date">
          <h3>{props.date}</h3>
        </div>
      </div>
      <div className="comentario-content">
        <p>{props.content}</p>
      </div>
    </div>
  );
}