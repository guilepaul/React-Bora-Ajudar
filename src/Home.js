import React, { Component } from 'react'

class Home extends Component {

    render() {
        return (
            <div>
                <section className='page-section clearfix'>
                    <div className='container'>
                        <div className='intro'>
                            <img className='intro-img img-fluid mb-3 mb-lg-0 rounded' src='img/intro-menor.jpg' alt='' />
                            <div className='intro-text left-0 text-center bg-faded p-5 rounded'>
                                <h2 className='section-heading mb-4'>
                                    <span className='section-heading-upper'>Ajudar</span>
                                    <span className='section-heading-lower'>Faz Muito Bem</span>
                                </h2>
                                <p className='mb-3'>Todos os trabalhos desenvolvidos pela Morada da Melhor Idade só é possível pela ajuda incansável de nossos voluntários.
                            </p>
                                <div className='intro-button mx-auto'>
                                    <a className='btn btn-primary btn-xl' href='#'>Veja o que estamos precisando no momento</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='page-section cta'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-xl-9 mx-auto'>
                                <div className='cta-inner text-center rounded'>
                                    <h2 className='section-heading mb-4'>
                                        <span className='section-heading-upper'>Nosso Propósito</span>
                                        <span className='section-heading-lower'>A Nossa Comunidade</span>
                                    </h2>
                                    <p className='mb-0'>Cuidar de pessoas que estão em suas melhores idades assim como eles contribuiram para a nossa comunidade.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default Home