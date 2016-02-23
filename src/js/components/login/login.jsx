define(['React', 'router'], function (React, ReactRouter) {
    'use strict';

    var Login = React.createClass({
        displayName: 'Login',
        /*
         Error Codes -
         0 - no error
         1 - invalid username or password
         */
        mixins: [ReactRouter.History],
        getInitialState: function () {
            return {
                errorMsg: 0
            };
        },
        onLogin: function () {
            var history = this.props.history || this.history;
            var userName = this.refs.userName.value;
            var password = this.refs.password.value;
            if (localStorage.getItem(userName) !== password) {
                this.setState({
                    errorMsg: 1
                });
            } else {
                history.push('/home');
            }
        },
        onSignUp: function () {
            var history = this.props.history || this.history;
            history.push('/sign-up');
        },
        render: function () {
            var errorMsg = '';
            if (this.state.errorMsg === 1) {
                errorMsg = (<div>
                    <span>Invalid username or password!</span><br/>
                </div>);
            }
            return (
                <form onSubmit={this.onLogin}>
                    {errorMsg}
                    <input type="text" ref="userName" placeholder="Email" required/><br/>
                    <input type="password" ref="password" placeholder="Password" required/><br/>
                    <button type="submit"><span>Login</span></button>
                    <br/>
                    <span>Don't have an account? </span>
                    <button onClick={this.onSignUp}><span>Sign up</span></button>
                </form>
            );
        }
    });

    return Login;
});


