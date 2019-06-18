import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { auth } from './base'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false,
            error: false,
            isLogging: false
        }

        this.email = null
        this.passwd = null

        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin() {
        this.setState({ isLogging: true, error: false })
        auth.signInWithEmailAndPassword(this.email.value, this.passwd.value)
            .then((user) => {
                console.log('usuário logado: ', user)
                this.setState({isLoggedIn: true})
            })
            .catch(err => {
                console.log('deu ruim: ', err)
                this.setState({ error: true, isLogging: false })
            })
    }

    render() {
        if(this.state.isLoggedIn){
           return <Redirect to={'/admin'} />
        }
        return (
            <div className="app flex-row align-items-center">
                <div>
                    <div className='row' className="justify-content-center">
                        <div className='col-xs-12 col-md-8'>
                            <div className='card'>
                                <div className='card-header' >
                                    Login
                                </div>
                                <div className='card-body' >

                                    <input type="text" name="email" placeholder="Digite seu email:" ref={ref => this.email = ref} />

                                    <input type="password" name="password" placeholder="Digite sua senha:" ref={ref => this.passwd = ref} />
                                    {this.state.error && <p>Email e/ou senha inválidos</p>}
                                </div>
                                <div className='card-footer' >
                                    <button type="button" disabled={this.state.isLoggedIn} color="primary" onClick={this.handleLogin}>Entrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login