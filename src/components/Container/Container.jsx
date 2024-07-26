import style from "./Container.module.css";

export function Container({ children }){
  return(
    <section className={style.container}>
      <div className={style.content}>
        { children }
      </div>
    </section>
  )
}