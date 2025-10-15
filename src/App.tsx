
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import AppLayout from "./layouts/AppLayout";
import Form from "./pages/Form";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider"

function App() {

  return (
    <>
      <AppLayout>
        <Header />
        <Home />
        <SectionDivider />
        <Services />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Form />
        <Footer />
      </AppLayout>
      
    </>
  );
}

export default App
