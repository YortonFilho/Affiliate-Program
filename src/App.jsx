import { Cards } from "./components/Cards/Cards";
import { Category } from "./components/Category/Category";
import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";

export function App() {
  return (
    <>
      <Header/>
      <Container>
        <Category/>
      </Container>
    </>
  )
}
