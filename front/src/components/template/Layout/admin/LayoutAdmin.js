import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from "antd"
import MenuTop from '../../../organism/MenuTop/index'

import "./style.scss"

export default function LayoutAdmin(props) {
  const {routes} = props
  const {Header, Footer, Content} = Layout
  return (
    <Layout>
      <Layout className="layout-admin">
        <Header className="layout-admin__header"> 
          <MenuTop />
        </Header>
        <Content className="layout-admin__content">
          <LoadRoutes routes={routes} />
        </Content>
        <Footer className="layout-admin__footer">César galindo</Footer>
      </Layout>
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