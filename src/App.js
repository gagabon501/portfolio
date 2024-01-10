import NavBar from "./components/NavBar";
import Card from "./components/Card";
function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <main>
        <section id="hero" className="mb-10 mx-auto">
          <div className="text-7xl text-center">Hi! I am Gilberto Gabon</div>
          <div className="text-4xl text-center">Fullstack Developer</div>
        </section>
        <section id="aboutme" className="mb-4">
          <Card
            title="About Me"
            body="This is me and about me. I will describe here who am I."
          />
        </section>
        <section id="mywork" className="mb-4">
          <Card
            title="My Work"
            body="This section will describe my work and will list down my work here"
          />
        </section>
        <section id="contactme" className="mb-4">
          <Card title="Contact Me" body="This is where you can contact me" />
        </section>
      </main>
    </div>
  );
}

export default App;
