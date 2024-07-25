import style from "./Container.module.css";

export function Container({ children }){
  return(
    <div className={style.container}>
      <div className={style.content}>
        { children }
      </div>
    </div>
  )
}