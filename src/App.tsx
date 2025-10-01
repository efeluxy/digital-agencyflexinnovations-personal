
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import AppLayout from "./layouts/AppLayout";
import Form from "./pages/Form";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App
