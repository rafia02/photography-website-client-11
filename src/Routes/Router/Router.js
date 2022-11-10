import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import AllServices from "../../Pages/AllServices/AllServices";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Myreview from "../../Pages/Myreview/Myreview";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Signup from "../../Pages/Signup/Signup";

export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {path: '/', element: <Home></Home>},
        {path: '/services',element: <AllServices></AllServices>},
        {path: '/login', element: <Login></Login>},
        {path: 'signup', element: <Signup></Signup>},
        {path: 'services/:id', loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`), element: <ServiceDetails></ServiceDetails>},
        {path: '/blog', element: <Blog></Blog>},
        {path: '/myreview',  element: <Myreview></Myreview>},
        {path: '/addservice', element: <AddService></AddService>}
    ]}
])