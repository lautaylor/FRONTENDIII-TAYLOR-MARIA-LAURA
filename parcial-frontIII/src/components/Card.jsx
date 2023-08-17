//Este componente recibe por props y muestra en pantalla la informacion
//que envia el usuario

function Card (props) {
  return (
      <div className='card'>
          <h2 >Hola {props.name}!</h2>
          <div> Sabemos que tu banda de música Favorita es</div>
          <div className="banda">{props.banda}</div>
      </div>
    
 )
}
 
 export default Card