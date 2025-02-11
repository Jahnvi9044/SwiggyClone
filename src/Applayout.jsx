
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';

import About from './Page/About';
import Dashboard from './Page/Dashboard';
import Home from './Page/Home';
import Contact from './Page/Contact';
import NotFound from './Page/NotFound';
import Body from './Components/Body';
import ResturantPage from './Page/ResturantPage';

function Applayout() {
  
    const appRoutes = createBrowserRouter([
     {
          path:"/",
          element:<Home/>,
          errorElement:<NotFound/>,
          children:[
               {
                    path:"/",
                    element:<Body/>,
               },
               {
                    path:"/about",
                    element:<About/>
               },
               {
                    path:"/contact",
                    element:<Contact/>
               },
               {
                    path:"/dashboard",
                    element:<Dashboard/>
               },
               {
                    path:"/resturant/:id",
                    element:<ResturantPage/>
               }
          ]
     },
    

    ]
    )
  
    return(
     <>
           <RouterProvider router={appRoutes}/>
           
    </>
    
    )
    
         
     
}
export default Applayout