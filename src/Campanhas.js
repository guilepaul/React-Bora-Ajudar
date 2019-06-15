import React, { Component } from 'react'
import base from './base'

class Campanhas extends Component {
    constructor(props){
        super(props)
        this.state = {
            campanhas: {}
        }
    }
    componentDidMount(){
        base.syncState('campanhas', {
            context: this,
            state: 'campanhas',
            asArray: false
        })
    }
    renderCampanha(campanha){
        return(
            <section className='page-section'>
                    <div className='container'>
                        <div className='product-item bg-faded'>
                        <div className='product-item-title d-flex'>
                            <div className='p-5 d-flex mr-auto rounded'>
                            <h2 className='section-heading mb-0'>
                                <span className='section-heading-upper'>{campanha.subTitulo}</span>
                                <span className='section-heading-lower'>{campanha.nome}</span>
                            </h2>
                            </div>
                        </div>
                        <div className='product-item-description d-flex ml-auto'>
                            <div className='p-5 rounded'>
                                <p className='mb-0'>{campanha.descricao}</p>
                                { campanha.tipo === 'dinheiro' && <div>
                                    <div className='progress'>
                                        <div className='progress-bar bg-success' role='progressbar'  aria-valuenow='25' aria-valuemin='0' aria-valuemax='100'></div>
                                    </div>
                                    <p>Meta: R$ 5.000,00 / Atingidos: R$ 2.500,00</p>
                                    <div>
                                        <button className='btn btn-success'>Contribuir</button>
                                    </div>
                                </div> }
                                { campanha.tipo === 'produtos' && <div>
                                    <h4>Como doar: </h4>
                                    <p>{campanha.comoDoar}</p>
                                </div> } 
                            </div>
                        </div>
                        <div className='ml-auto'>
                            
                        </div>
                        </div>
                    </div>
                </section>
        )
    }
    render(){
        return(
            <div>
                <section className='page-section'>
                    <div className='container'>
                        <div className='product-item'>
                        <div className='product-item-title d-flex'>
                            <div className='bg-faded p-5 d-flex ml-auto rounded'>
                            <h2 className='section-heading mb-0'>
                                <span className='section-heading-upper'>Ajude-nos por nossas</span>
                                <span className='section-heading-lower'>Campanhas</span>
                            </h2>
                            </div>
                        </div>
                        <img className='product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0' src='img/products-01-menor.jpg' alt='' />
                        <div className='product-item-description d-flex mr-auto'>
                            <div className='bg-faded p-5 rounded'>
                            <p className='mb-0'>We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced black coffee, you will be coming back for more.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                { Object
                    .keys(this.state.campanhas)
                    .map(key => this.renderCampanha(this.state.campanhas[key])) 
                }
                
            </div>
        )
    }
}

export default Campanhas