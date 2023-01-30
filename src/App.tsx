import React, {useEffect, useState} from 'react';
import './App.css';
import {Container, Grid, Menu, Message, Header} from "semantic-ui-react";
import i18n from "i18next";
import LangSwitcher from "./components/LangSwitcher/LangSwitcher";
import AppMenu from "./components/AppMenu/AppMenu";
import lang from "./lang/lang";
import {IProduct} from "./models/product";
import ProductCards from "./components/ProductCards/ProductCards";
import {api} from "./utils/api";

export default function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [openProductId, setOpenProductId] = useState<string|null>(null);

  useEffect(()=>{
    api()
        .getProducts()
        .then(setProducts);
  }, []);

  let currentElement = openProductId == null ? null : products.filter(x=>x.id === openProductId)[0];
  let subProducts = openProductId !== null ? products
      .filter(c=>c.parentId !== null)
      .filter(child=>{return child.parentId === openProductId;}) : [];

  return <Container>
    <Menu>
      <Menu.Item header>{i18n.t('programName')}</Menu.Item>
      <Menu.Item position={'right'}><LangSwitcher/></Menu.Item>
    </Menu>
    <Grid>
      <Grid.Row>
        <Grid.Column width={3}>
          <AppMenu
              products={products}
              openProductId={openProductId}
              setOpenProductId={setOpenProductId}/>
        </Grid.Column>
        <Grid.Column width={13}>
          {openProductId == null ? <Header as='h1'>{i18n.t('selectCategory')}</Header> : <Message>
            <Message.Header>{currentElement?.name}</Message.Header>
            <p>{lang.get() === 'ru' ? currentElement?.description.ru : currentElement?.description.en}</p>
          </Message>}
          {subProducts.length > 0 ? <ProductCards products={subProducts}/> :
              (openProductId == null ? '' :  <Header as='h1'>{i18n.t('noSubProducts')}</Header>)}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>;
}