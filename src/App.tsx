import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import EstiloGlobal, { Container } from "./styles";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  );
}

export default App;
