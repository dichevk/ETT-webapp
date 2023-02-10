import React, { Component } from 'react';
import {Navbar, Footer,Lavabg} from '../../components/export';
import ProductGridView from './containers/gridview/ProductGridView';
import ProductView from './containers/individualview/ProductView';
import CartView from './containers/cartview/CartView';


export default class Shop extends Component {
    constructor(props){
        super(props);
        console.log(this.props.requestService);
        this.state = { shownComponent : 'ProductGridView'};
    }

    setShownComponent(componentToShow){
        this.setState({
            shownComponent: componentToShow,
        });
    }
    
    render() {
        if (this.state.shownComponent === 'ProductGridView')
            var componentToShow = <ProductGridView requestService={this.props.requestService}/>;
        else if (this.state.shownComponent === 'ProductView')
            var componentToShow = <ProductView requestService={this.props.requestService}/>;
        else if (this.state.shownComponent === 'CartView')
            var componentToShow = <CartView requestService={this.props.requestService}/>;
        else var componentToShow = <ProductGridView requestService={this.props.requestService}/>;
        
        return (
            <>
                <Navbar currentPage="Shop"/>

                {componentToShow}

                <Footer />
                <Lavabg />
            </>
        );
    }
}
