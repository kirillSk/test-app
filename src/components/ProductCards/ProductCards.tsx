import {Container, Grid, Card, Icon, Menu, Message, Dropdown, Header} from "semantic-ui-react";
import lang from "./../../lang/lang";
import {IProduct, ProductType} from "../../models/product";
import i18n from "i18next";

interface ProductCardsProps {
    products: IProduct[]
}

function ProductCards(props: ProductCardsProps) {
  return <Card.Group items={props.products
      .map(product=>
          ({
            header: product.name,
            description: lang.get() === 'ru' ? product.description.ru : product.description.en,
            meta: <>
                <Icon name={'file alternate'}/> 
                {product.type == ProductType.Document ? i18n.t('productTypeDocument') : i18n.t('productTypeSoftware')}
            </>,
            color: product.color != null ? 'blue' : ''
          })
      )} />;
}

export default ProductCards;