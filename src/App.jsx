import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Header Section */}
        <Header />

        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            {/* Home Routes - Display all sections together */}
            <Route
              path="/"
              element={
                <div>
                  <Home />
                  <About />
                  <Experience />
                  <Projects />
                  <Contact />
                </div>
              }
            />
            <Route
              path="/home"
              element={
                <div>
                  <Home />
                  <About />
                  <Experience />
                  <Projects />
                  <Contact />
                </div>
              }
            />
            {/* Other Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
