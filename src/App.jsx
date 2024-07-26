import { Cards } from "./components/Cards/Cards";
import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";

export function App() {
  return (
    <>
      <Header/>
      <Container>
        <Cards/>
      </Container>
    </>
  )
}
