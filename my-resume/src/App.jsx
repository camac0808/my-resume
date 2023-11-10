import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import LoadingScreen from "./components/loading-screen";
import Navigation from "./components/navigation";
// import Login from "./routes/login";
import Home from "./routes/home";
import ErrorBoundary from "./components/error-boundary";


const Wrapper = styled.div``;

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const init = async () => {
    setIsLoading(true);

    // loading screen을 보여주기 위해 setTimeout을 사용한다.
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const router = createBrowserRouter([
    // children은 outlet 역할을 한다.
    {
      path: "/",
      element: <Navigation />,
      children: [{ path: "/", element: <Home /> }],
      errorElement: <ErrorBoundary />,
    },
    // { path: "/login", element: <Login /> },
  ]);

  useEffect(() => {
    init();
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     router.navigate("/");
  //   } else {
  //     router.navigate("/login");
  //   }
  // }, [user, router]);

  return <Wrapper>{isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}</Wrapper>;
}

export default App;
