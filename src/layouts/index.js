import React, { useEffect, useState } from 'react'
import { head } from 'lodash';
import Menu from "./menu"
import './index.less'

const data = [
  {
    name: "数据",
    key: "shuju",
    children: [
      {
        name: "概览",
        key: "gailan",
        children: [
          {
            name: "整体看板",
            key: "zhengtikanban",
            url: "/home"
          }
        ]
      },
      {
        name: "营销",
        key: "yingxiao",
        children: [
          {
            name: "优惠券统计",
            key: "youhuiquan",
            url: "/youhuitongji"
          },{
            name: "活动统计",
            key: "huodongtongji",
            url: "/huodongtongji"
          },{
            name: "活动分析",
            key: "/huodongfenxi"
          }
        ]
      }
    ]
  },{
    name: "客户",
    key: "kehu",
    children: [
      {
        name: "客户管理",
        key: "kehuguanli",
        children: [
          {
            name: "客户列表",
            key: "kehuguanli",
            url: ""
          },
          {
            name: "客户标签",
            key: "kehubiaoqian",
            url: ""
          },
          {
            name: "客户分群",
            key: "kehufenqun",
            url: ""
          },
          {
            name: "客户导入",
            key: "kehudaoru",
            url: ""
          },
        ]
      },{
        name: "会员管理",
        key: "huiyuanguanli",
        children: [
          {
            name: "基础设置",
            key: "jichushezhi",
            url: ""
          },
          {
            name: "固定等级",
            key: "gudingdengji",
            url: ""
          },
          {
            name: "动态等级",
            key: "dongtaidengji",
            url: ""
          }
        ]
      }
    ]
  }
]

const BaseLayout = (props) => {

  const [menu, setMenu] = useState(head(data)['children']);
  const [key, setKey] = useState(head(data)['key'])

  useEffect(() => {
    // setMenu(head(data))
    // setKey(head(data)["key"])
  }, [data])

  const selectMenu = (item) => {
    console.log('item', item)
    setMenu(item.children)
    setKey(item["children"]["key"])
  }

  return (
    <div className={"layout"}>
      <div className={"menu"}>
        <div className="menu-sider">
          <span className="logo">
            <img src="https://yy-1258898587.cos.ap-guangzhou.myqcloud.com/public/mp/logo/mp-logo.png" alt=""/>
          </span>
          {data.map((item) => <div
            key={item.key}
            className={item.key == key ? "active" : "" }
            onClick={() => selectMenu(item)}
            onMouseMove={() => setMenu(item.children)}
          >{item.name}</div>)}
        </div>
        <div className="menu-sider-children">
          <Menu menu={menu}/>
        </div>
      </div>
      <div className="header"></div>
      <div className={"container"}>
        {props.children}
      </div>
    </div>
  )
}

export default BaseLayout;
