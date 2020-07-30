import api from '../../services/api'

import React, { Component } from "react";
import './style.css'

export default class Main extends Component {
    state = {
        products: [],
    }
    componentDidMount() { // ciclo de vida = executado assim que o componente for mostrado em tela
        this.loadProducts();
    }

    loadProducts = async () => { // função normal apenas para função do React, as nossas são arrow
        const response = await api.get('/products');
        
        this.setState({ products: response.data.docs });

    }
    render() {
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <article key={product.id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href=" ">Acessar</a>
                    </article>
                    
                ))}
            </div>
        )
    }
}
