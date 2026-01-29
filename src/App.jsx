import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";

function App() {
  const date = new Date().getFullYear();
  return (
    <div>
      <Container>
        <Header title="React Profile" />
        <p>This is the main component</p>
        <Footer year={date} />
      </Container>
    </div>
  );
}

export default App;
