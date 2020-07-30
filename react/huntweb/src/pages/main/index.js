import api from '../../services/api'

import React, { Component } from "react";
import './style.css'

export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1
    }
    componentDidMount() { // ciclo de vida = executado assim que o componente for mostrado em tela
        this.loadProducts();
    }

    loadProducts = async (page = 1) => { // função normal apenas para função do React, as nossas são arrow
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data
        this.setState({ products: docs, productInfo, page });
    }

    prevPage = () => {
        const { page } = this.state;

        if(page === 1) return;

        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if(page === productInfo.pages) return;

        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }
    render() {
        const { products, page, productInfo } = this.state;
        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product.id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href=" ">Acessar</a>
                    </article>
                ))}
                <div className="action">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>
        )
    }
}
