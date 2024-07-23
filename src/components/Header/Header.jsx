import style from "./Header.module.css";

export function Header() {
  return (
    <header className={style.header}>

      <div className={style.logo}>
        <a href="#"><img src="" alt="logo" /></a>
      </div>

      <nav>
        <a href="#">Início</a>
        <a href="#">Máquinarios</a>
        <a href="#">Cartuchos</a>
        <a href="#">Agulhas</a>
        <a href="#">Tintas</a>
        <a href="#">Outros</a>
      </nav>

    </header>
  )
}