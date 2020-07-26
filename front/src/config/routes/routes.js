import Layout from '../../components/template/Layout/LayoutAdmin'
import BasicLayout from '../../components/template/Layout/LayoutAdmin'

import Admin from "../../pages/Admin"
import Signin from "../../pages/Signin"

import Home from "../../pages/Home"
import Contact from "../../pages/Contact"

import Error from "../../pages/Error"

const routes = [
  {
    path:"/Admin",
    component:Layout,
    exact: false,
    routes:[
      {
        path:"/Admin",
        component:Admin,
        exact: true,
      },
      {
        path:"/admin/sign",
        component:Signin,
        exact: true,
      },
      {
        component: Error,
      }
    ]
  },
  {
    path:"/",
    component: BasicLayout,
    exact: false,
    routes:[
      {
        path:"/",
        component:Home,
        exact: true,
      },
      {
        path:"/contact",
        component:Contact,
        exact: true,
      },
      {
        component: Error,
      }
    ]
  },
]

export default routes;