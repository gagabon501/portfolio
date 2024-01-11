import NavBar from "./components/NavBar";
import Card from "./components/Card";
function App() {
  return (
    <>
      <div className="relative">
        <NavBar />
      </div>

      <section id="hero" className="mx-auto h-screen max-h-full">
        <div className="text-7xl text-center">Hi! I am Gilberto Gabon</div>
        <div className="text-4xl text-center">Fullstack Developer</div>
      </section>
      <section id="aboutme" className="mb-4 h-screen max-h-full">
        <Card
          title="About Me"
          body="This is me and about me. I will describe here who am I."
        />
      </section>
      <section id="mywork" className="mb-4 h-screen max-h-full">
        <Card
          title="My Work"
          body="This section will describe my work and will list down my work here"
        />
      </section>
      <section id="contactme" className="mb-4 h-full max-h-full">
        <Card title="Contact Me" body="This is where you can contact me" />
      </section>
    </>
  );
}

export default App;
