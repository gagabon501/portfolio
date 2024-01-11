const logo = "GAG_Profile.jpg";
function App() {
  return (
    <>
      <div className="overscroll-none relative">
        <nav className="flex justify-between  text-white w-full fixed top-0 p-2  bg-black z-50">
          <a href="#" className="">
            <img
              src={logo}
              className="w-100 h-10 mr-2 rounded-full"
              alt="Logo"
            />
          </a>
          <div className="grid grid-cols-3 gap-4 align-middle">
            <a href="#about" className=" p-2">
              about me
            </a>

            <a href="#mywork" className=" p-2">
              my work
            </a>

            <a href="#contact" className=" p-2">
              contact me
            </a>
          </div>
        </nav>

        <section id="about" className="h-screen  bg-blue-100 sticky top-14">
          about me
        </section>
        <section id="mywork" className="h-screen bg-blue-300  sticky top-14">
          my work
        </section>
        <section id="contact" className="h-screen  bg-blue-400  sticky top-14">
          contact me
        </section>

        <footer className="sticky bottom-5">Copyright</footer>
      </div>
    </>
  );
}

export default App;
