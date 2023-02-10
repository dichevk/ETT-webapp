import React from 'react'
import {GridLayout, Responsive as ResponsiveGridLayout} from 'react-grid-layout';


export default class ProductGridView extends React.Component {

  getShopProductsData(){
    /* fetch shop product data */
    return {
      data : [
        {
          id : 1,
          name : "Drinking bottle",
          description : "great drinking bottle",
        },
        {
          id : 2,
          name : "Mouse pad",
          description : "great mouse pad",
        },
      ]
    }
  }

  render() {
    const productsData = this.getShopProductsData();
    
    return (
      <>
        
      </>
    )
  }
}
