import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from "antd"

export default function LayoutAdmin(props) {
  const {routes} = props
  const { Footer, Content} = Layout
  return (
    <Layout>
      <Content>
        <LoadRoutes routes={routes} />
      </Content>
      <Footer>footer</Footer>
    </Layout>
  )
}

function LoadRoutes({routes}) {
  return (
    <Switch>
    {routes.map((route,index)=>{
      return(
        <Route 
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      )
    })}
    </Switch>
  )
}