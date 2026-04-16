import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import {store} from "@/store/index.js";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router";
import {Router} from "@/Router.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </StrictMode>,
)
