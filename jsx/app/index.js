import React, { Component } from 'react';
import { render } from 'react-dom'
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {token: { signature :"",header:{alg:"",typ:""}}};
    }

    componentDidMount() {

        /*fetch('http://www.lua_nginx.com/verify', {
            method: 'GET',
            mode: 'CORS'
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    token : data
                })
            }).catch(err => err);*/

        fetch("http://www.lua_nginx.com/sign", {
            method: 'POST',
            headers: {
                'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: JSON.stringify({
                email: 'foo',
                pass: 'bar'
            })
        }).then(response => console.log('response:',response))

    }

    sendPost() {
        fetch("http://www.lua_nginx.com/verify", {
            method: "GET",
            mode: "CORS"
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    token : data
                })
            }).catch(err => err);

    }

    render() {
        let token = this.state.token;
        // let id = token.id;
        // let name = token.name;
        // let password = token.password;

        // console.log('this.state.token:',token);

        return (
            <div>
                <h1>Hello, World!</h1>

                <table className="table table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                    { /*allTokenData*/ }

                    {/*this.state.token && this.state.token.map(post => {
                        {console.log('post:', post)}
                        return (
                            <tr key="1">
                                <td></td>
                                <td></td>
                                <td>
                                    <a href="#" className="btn btn-default btn-sm">Edit</a>
                                    <a href="#" className="btn btn-danger btn-sm">Delete</a>
                                </td>
                            </tr>
                        );
                    })
                    */}
                    </tbody>
                </table>
            </div>
        );
    }
}

render(
        <App />,
    document.getElementById('root')
);