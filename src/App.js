import "./App.css";
import { ContactForm } from "./components/ContactForm";
import { Header } from "./components/Header";
import { Modals } from "./components/Modals";

function App() {
  return (
    <div className="App">
      <Header title="Forms en React" />
      <ContactForm></ContactForm>
      <Header title="Modals en React" />
      <Modals></Modals>
    </div>
  );
}

export default App;
