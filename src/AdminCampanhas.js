import React, { Component } from 'react'

import base from './base'

class AdminCampanhas extends Component {
    constructor(props) {
        super(props)

        this.state = {
            campanhas: {}
        }

        this.renderCampanha = this.renderCampanha.bind(this)
        this.handleSalvar = this.handleSalvar.bind(this)
    }

    componentDidMount() {
        base.syncState('campanhas', {
            context: this,
            state: 'campanhas',
            asArray: false
        })
    }

    apagaCampanha(id) {
        base.remove(`campanhas/${id}`, err => {
            console.log(err)
        })

    }

    handleSalvar() {
        const nome = this.nome.value
        const subTitulo = this.subTitulo.value
        const descricao = this.descricao.value
        const tipo = this.state.tipo
        const comoDoar = this.state.tipo === 'produtos' ? this.comoDoar.value : null
        const meta = this.state.tipo === 'dinheiro' ? this.meta.value : null
        const doado = this.state.tipo === 'dinheiro' ? this.doado.value : null

        base.push('campanhas', {
            data: { nome, subTitulo, descricao, tipo, comoDoar, meta, doado },
            then: err => {
                if (!err) {
                    this.nome.value = ''
                    this.subTitulo.value = ''
                    this.descricao.value = ''
                    this.setState({tipo: ''})
                    if(this.comoDoar) this.comoDoar.value = ''
                    if(this.meta) this.meta.value = ''
                    if(this.doado) this.doado.value = ''
                }
            }
        }
        )
    }

    renderCampanha(id, campanha) {
        return (
            <li key={id}>
                {campanha.nome}
                &nbsp;
                <button onClick={() => 1}>Editar</button>
                <button onClick={() => this.apagaCampanha(id)}>Apagar</button>
            </li>
        )
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Campanhas</h1>
                    <h2>Nova Campanha</h2>
                    Campanha: <input type='text' ref={ref => this.nome = ref} /><br />
                    Sub-título: <input type='text' ref={ref => this.subTitulo = ref} /><br />
                    Descrição: <textarea ref={ref => this.descricao = ref} /><br />
                    Tipo: <br />
                    <input type='radio' name='tipo' onClick={() => this.setState({ tipo: 'dinheiro' })} /> Doação <br />
                    <input type='radio' name='tipo' onClick={() => this.setState({ tipo: 'produtos' })} /> Produtos <br />

                    {this.state.tipo === 'dinheiro' && <div>
                        <h4>Doação</h4>
                        Meta: <input type='number' ref={ref => this.meta = ref} />
                        Doado: <input type='number' ref={ref => this.doado = ref} defaultValue={0} />
                    </div>}

                    {this.state.tipo === 'produtos' && <div>
                        <h4>Produtos</h4>
                        Como Doar: <input type='text' ref={ref => this.comoDoar = ref} />
                    </div>}

                    <br />
                    <button onClick={this.handleSalvar}>Salvar</button>
                    <hr />
                </div>
                <ul>
                    {
                        Object.keys(this.state.campanhas)
                            .map(key => {
                                { return this.renderCampanha(key, this.state.campanhas[key]) }
                            })
                    }
                </ul>
            </div>
        )
    }
}

export default AdminCampanhas