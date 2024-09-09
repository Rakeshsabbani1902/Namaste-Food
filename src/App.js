
import './App.css';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import {createBrowserRouter} from 'react-router-dom'
import About from './Components/Navbar/About/About';
import Error from './Components/Error/Error';
import Contact from './Components/Navbar/Contact/Contact';
import { Outlet } from 'react-router-dom';
import Cart from './Components/Navbar/Cart/Cart';
import RestaurantMenu from './Components/Main/menu/RestaurantMenu';
import useOnline from './Utils/useOnline';
// import LiftingUpState from './Components/LiftingUpState';
import UserData from './Utils/Context';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './Utils/store';
// import ClassBasedComponent from './Components/ClassBasedComponent';

function App() {
  const online = useOnline()
  const [user, setUser] = useState({
    name:"Ankit Payal",
    email:"thisIsAnkit@gmail.com",
  })

  if(!online){
    return(
       <div style={{ textAlign:"center"}}>
    <img src="
        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLSmloIQxmAROZr059PgIoN0gQO04ZeBZPw&usqp=CAU
        " alt="error"/>
      <h1 > You are offline, Please check your Internet Connection</h1>
      </div>
      )
  }
  
  return (
    <div className="App">
      <Provider store={store}>
      <UserData.Provider 
      value={{user : user}}>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </UserData.Provider>
      </Provider>
    </div>


  // color
  // darkgreen - #004b1c
  // yellow - #fdb913
  // red - #ba1222
  // green - #a6ce39

  
  );
}

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<App/>,
    errorElement: <Error/>,
    children:[
      {
        path:'/',
        element:<Main/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/restaurant/:id',
        element:<RestaurantMenu/>
      }
    ]
  },
  
])

export default App;
