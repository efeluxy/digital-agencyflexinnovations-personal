import Header from "./layouts/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import AppLayout from "./layouts/AppLayout";
import Form from "./pages/Form";

function App() {

  return (
    <>
      <AppLayout>
        <Header />
        <Home />
        <Services />
        <About />
        <Form />
      </AppLayout>
    </>
  );
}

export default App
