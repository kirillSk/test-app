import React from 'react';
import {Menu} from "semantic-ui-react";
import {IProduct} from "../../models/product";

interface AppMenuProps {
  products: IProduct[],
  openProductId: string|null,
  setOpenProductId: Function
}

function AppMenu(props:AppMenuProps) {
  return <Menu fluid vertical tabular>
    {props.products.filter(x=>x.parentId == null).map(x=> <Menu.Item
        name={x.name}
        active={props.openProductId === x.id}
        onClick={()=>{
          if(props.openProductId === x.id)
            props.setOpenProductId(null)
          else
            props.setOpenProductId(x.id)
        }}
    />)}
  </Menu>;
}

export default AppMenu;
