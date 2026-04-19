import Header from "@/components/organisms/Header/index.jsx";
import Footer from "@/components/organisms/Footer/index.jsx";

import "./styles/main.scss";

import { Outlet, ScrollRestoration } from "react-router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addRecipes } from "@/store/recipes/recipes-actions.js";

import data from "@/mock/data.json";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addRecipes(data));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
