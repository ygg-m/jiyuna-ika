import {
  Home,
  About,
  House,
  Members,
  Photos,
  Cookies,
  Census,
  Links,
  FreeCompanyProvider,
  MenuProvider,
  Route,
  Routes,
} from "./index.js";

function App() {
  return (
    <>
      <FreeCompanyProvider>
        <MenuProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/house" element={<House />} />
            <Route path="/members" element={<Members />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/census" element={<Census />} />
            <Route path="/links" element={<Links />} />
          </Routes>
        </MenuProvider>
      </FreeCompanyProvider>
    </>
  );
}

export default App;
