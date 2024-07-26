import style from "./Cards.module.css";

export function Cards(){
  return(
    <div className={style.cards}>
      <a href="#"><img src="https://down-br.img.susercontent.com/file/br-11134207-7qukw-lid35twhm4kwd5" alt="produto"/></a>

      <div className={style.productTitle}>
        <p>Suporte Garra Para Celular</p>
      </div>
    </div>
  )
}