import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Counter from "./components/Counter";
import TechList from "./components/TechList";
import Tech from "./components/Tech";

function App() {
  const date = new Date().getFullYear();
  return (
    <div>
      <Container>
        <Header title="React Profile" />
        <p>This is the main component</p>
        <Footer year={date} />

        <Counter />

        <TechList />

        <Tech />
      </Container>
    </div>
  );
}

export default App;
