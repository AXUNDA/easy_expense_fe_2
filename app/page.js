import Nav from "./components/Nav";
import Container from "./components/Container";
import Intro from "./components/Intro";
import CardSection from "./components/CardSection";

export default function Home() {
  return (
    <main>
      <Nav />
      <Container>
        <Intro />
        <CardSection />
      </Container>
    </main>
  );
}
