import "./App.css";
import Footer from "./components/Footer";
import Growth from "./components/Growth";
import Statistics from "./components/Statistics";
import Trading from "./components/Trading";

function App() {
  return (
    <div className=" bg-Page">
      <Growth />
      <Statistics />
      <Trading />
      <Footer />
    </div>
  );
}

export default App;
