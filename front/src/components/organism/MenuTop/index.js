import React from 'react'
import "./styles.scss"
import { Button } from "antd"
import {MenuFoldOutlined,PoweroffOutlined} from '@ant-design/icons'
import Logo from "../../../Assets/img/png/logo-white.png"

export default function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img
          className="menu-top__left-logo"
          src={Logo}
          alt="César Galindo"
        />
        <Button type="link" onClick={()=>{console.log("primer boton")}} >
          <MenuFoldOutlined />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button>
          <PoweroffOutlined />
        </Button>
      </div>
    </div>
  )
}
