import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import EstiloGlobal, { Container } from "./styles";
import { Provider } from "react-redux";
import store from "./store";

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <EstiloGlobal />
        <Container>
          <RouterProvider router={rotas} />
        </Container>
      </Provider>
    </>
  );
}

export default App;
