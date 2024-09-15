import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        {" "}
        This project was coded by{" "}
        <a href="https://www.shecodes.io/graduates/51244-mastane-kachloo">
          Mastane Kachloo
        </a>{" "}
        and it is open-sourced on
        <a href="https://github.com/Mastanee/react-weather-app">Github</a> and
        hosted on{" "}
        <a href="https://peaceful-palmier-0b7b31.netlify.app">Netlify</a>.
      </p>
    </div>
  );
}

export default App;
