import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authication/Login/Login";
import Register from "../Pages/Authication/Register/Register";
import Blogs from "../Pages/Blogs/Blogs";
import Course from "../Pages/Course/Course";
import CourseDetails from "../Pages/Course/CourseDetails/CourseDetails";
import Faq from "../Pages/FAQ/Faq";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";


export const router = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/home',
            element:<Home></Home>
        },
        {
            path:'/blogs',
            element:<Blogs></Blogs>
        },
        {
            path:'/course',
            element:<Course></Course>
        },
        {
            path:'/faq',
            element:<Faq></Faq>
        },
        {
            path:'/course-details/:id',
            element:<CourseDetails></CourseDetails>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'*',
            element:<NotFound></NotFound>
        }
    ]
},



]);



