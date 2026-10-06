import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://github.com/VulaniMap"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Vulani Mapiyeye{" "}
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/VulaniMap/map-dicti"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://map-dicti.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Render{" "}
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
export default App;
