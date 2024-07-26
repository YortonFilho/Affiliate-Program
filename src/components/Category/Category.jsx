import { Cards } from "../Cards/Cards";
import style from "./Category.module.css";

export function Category(){
  return(
    <div className={style.category}>
      <h1>Máquinas</h1>

      <div className={style.cards}>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
    </div>
  )
}