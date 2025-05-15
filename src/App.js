import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import QuoteBox from "./components/QuoteBox";

function App() {
  return (
    <main
      data-testid="quote-box"
      className="App d-flex justify-content-center align-items-center min-vh-100"
    >
      <QuoteBox />
    </main>
  );
}

export default App;
