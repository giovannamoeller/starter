import api from '../../services/api'

import React, { Component } from "react";

export default class Main extends Component {
    componentDidMount() { // ciclo de vida = executado assim que o componente for mostrado em tela
        this.loadProducts();
    }

    loadProducts = async () => { // função normal apenas para função do React, as nossas são arrow
        const response = await api.get('/products');
        console.log(response.data.docs);

        
    }
    render() {
        return <h1>Oii</h1>
    }
}
