import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {updateUsername} from '../redux/reducer'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })

        this.props.updateUsername(e.target.value)
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    render() {
        return(
            <div>
                <input placeholder='Username' onChange={this.handleUsernameChange}/>
                <input placeholder='Password' onChange={this.handlePasswordChange}/>
                <Link to='/profile'>Log in</Link>
            </div>
        )
    }
}

export default connect(undefined,{updateUsername})(Login)