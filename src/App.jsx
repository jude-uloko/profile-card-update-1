import './Burger/style.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './layouts/Layout';

import {
  Hero, Delivery, CategoryGrid, Ingredents, Family
} from './Burger'



function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {index: true, element: <Hero/> },
        {path: 'Home', element: <Hero /> },
        {path: 'delivery', element: <Delivery /> },
        {path: 'category', element: <CategoryGrid /> },
        {path: 'ingredents', element: <Ingredents /> },
        {path: 'family', element: <Family />}
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;