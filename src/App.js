import Card from "./components/Card";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <section id="about" className="gsection  bg-blue-100 px-3 text-center">
          <div className="text-4xl md:text-6xl transition ease-out duration-1000 transform hover:scale-125 cursor-pointer">
            Hi! I'm Gilberto Gabon
          </div>
          <div className="text-2xl md:text-4xl text-center">
            Fullstack Developer
          </div>

          <p className="text-center mt-2">
            A passionate software developer with more than 10 years of software
            development experience.
          </p>
          <p className="text-center mt-2">
            Currently a fullstack developer using the MERN
            (MongoDB-Express-React-NodeJS) stack. Used this stack for five (5)
            years now.
          </p>
        </section>
        <section id="mywork" className="gsection bg-blue-200">
          <h1 className="text-4xl top-2">My Work</h1>
          <div className="p-2">
            <div className="flex flex-col p-4 md:flex md:flex-row md:gap-4 md:flex-wrap">
              <div className="bg-green-100 card">
                <h1>Work-1</h1>
              </div>
              <div className="bg-blue-100 card">
                <h1>Work-2</h1>
              </div>
              <div className="bg-teal-100 card">
                <h1>Work-3</h1>
              </div>
              <div className="bg-purple-100 card">
                <h1>Work-4</h1>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="gsection bg-blue-300">
          <h1 className="text-4xl top-2">Contact Me</h1>
          <div className="">
            <form action="">
              <div className="mb-4 flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows={4}
                  cols={50}
                ></textarea>
              </div>
              <button className="btn-primary w-full">Submit</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
