define(['React', 'lodash', 'router'], function (React, _, ReactRouter) {
    'use strict';
    var History = ReactRouter.History;

    return React.createClass({
        displayName: 'Signup',
        /*
         Error Codes -
         0 - no error
         1 - username is taken
         2 - passwords don't match
         */
        mixins: [History],
        getInitialState: function () {
            return {
                errorMsg: 0
            };
        },
        validateForm: function (event) {
            event.preventDefault();

            var userName = this.refs.userName.value;
            var password = this.refs.pass.value;
            var repeatedPass = this.refs.repeatedPass.value;

            if (password === repeatedPass) {
                if (!localStorage.getItem(userName)) {
                    localStorage.setItem(userName, password);
                    this.setState({
                        errorMsg: 0
                    });
                    this.history.push('/home');
                } else {
                    this.setState({
                        errorMsg: 1
                    });
                }
            } else {
                this.setState({
                    errorMsg: 2
                });
            }
        },
        onLogin: function () {
            this.history.push('/');
        },
        render: function () {
            var errorMsg = '';
            if (this.state.errorMsg === 1) {
                errorMsg = (<div>
                    <span>username is taken!</span><br/>
                </div>);
            }
            if (this.state.errorMsg === 2) {
                errorMsg = (<div>
                    <span>passwords don't match!</span><br/>
                </div>);
            }
            return (
                <form onSubmit={this.validateForm}>
                    {errorMsg}
                    <input type="text" ref="userName" placeholder="Enter your email" required/><br/>
                    <input type="password" ref="pass" placeholder="Choose your Password"
                           pattern="(?=^.{6,}$)(?=.*\d)(?=.*[a-z]).*$" required/><br/>
                    <input type="password" ref="repeatedPass" placeholder="Repeat Password"
                           pattern="(?=^.{6,}$)(?=.*\d)(?=.*[a-z]).*$" required/><br/>
                    <button type="submit"><span>Create Account</span></button>
                    <br/>
                    <span>Have an account? </span>
                    <button onClick={this.onLogin}><span>Log in</span></button>
                </form>
            );
        }
    });
});
