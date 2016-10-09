import React, { Component } from 'react';
import { render } from 'react-dom'
require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {token: { signature :"",header:{alg:"",typ:""}}};
    }

    componentDidMount() {

        fetch('http://www.lua_nginx.com/verify', {
            method: 'GET',
            mode: 'CORS'
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    token : data
                })
            }).catch(err => err);

    }

    sendPost() {
        fetch('http://www.lua_nginx.com/verify', {
            method: 'GET',
            mode: 'CORS'
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    token : data
                })
            }).catch(err => err);

    }

    render() {
        console.log(this.state.token.signature);
        let signature = this.state.token.signature;
        let alg = this.state.token.header.alg;
        let typ = this.state.token.header.typ;

        console.log('this.state.token.header:',this.state.token);
        return (
            <div>
                <h1>Hello, World!</h1>

                <table className="table table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>signature</th>
                            <th>algorithm</th>
                            <th>type</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{signature}</td>
                        <td>{alg}</td>
                        <td>{typ}</td>
                        <td>
                            <a href="#" className="btn btn-default btn-sm" onClick={this.sendPost}>POST</a>
                            <a href="#" className="btn btn-danger btn-sm">DELETE</a>
                        </td>
                    </tr>

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