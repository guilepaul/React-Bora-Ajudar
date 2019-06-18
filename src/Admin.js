import React, { Component } from 'react'
import { auth } from './base'
import { Route, Redirect } from 'react-router-dom'
import AdminCampanhas from './AdminCampanhas';

const AdminHome = props => {
    return <h1>Bem vindo</h1>
}

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isAuthing: true,
            isLoggedIn: false,
            user: null
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged(user => {
            this.setState({
                isAuthing: false,
                isLoggedIn: !!user,
                user
            })
        })
    }

    render() {
        if(this.state.isAuthing){
            return <p>aguarde... </p>
        }
        if(!this.state.isLoggedIn){
            return <Redirect to='/login' />
        }
        return (
            <div className='card'>
            <h2>Painel Administrativo </h2>
            <Route path = {`/`} component={AdminHome}/>
            <Route path = {`${this.props.match.url}/campanhas`} component={AdminCampanhas}/>
            </div>
        )
    }
}

export default Admin