import Card from "./components/Card";

const logo = "GAG_Profile.jpg";

function App() {
  return (
    <>
      <div className="gcontainer">
        <nav className="flex justify-between flex-wrap text-white w-full sticky mx-auto top-0 p-2  bg-black">
          <a href="#about" className="">
            <img
              src={logo}
              className="w-100 h-10 mr-2 rounded-full"
              alt="Logo"
            />
          </a>
          <div className="flex justify-between align-middle">
            <a
              href="#about"
              className="p-2 hover:decoration-solid hover:underline"
            >
              about me
            </a>

            <a
              href="#mywork"
              className="p-2 hover:decoration-solid hover:underline"
            >
              my work
            </a>

            <a
              href="#contact"
              className="p-2 hover:decoration-solid hover:underline"
            >
              contact me
            </a>
          </div>
        </nav>

        <section
          id="about"
          className="bg-blue-100 flex flex-col align-middle justify-center"
        >
          <div className="text-6xl text-center py-4">
            Hi! I'm Gilberto Gabon
          </div>
          <div className="text-4xl text-center">Fullstack Developer</div>
        </section>
        <section id="mywork" className="bg-blue-300  ">
          my work
        </section>
        <section id="contact" className="bg-blue-400  ">
          contact me
        </section>

        <footer className="sticky bottom-0 p-2 bg-black text-white text-center w-full">
          Copyright
        </footer>
      </div>
    </>
  );
}

export default App;
