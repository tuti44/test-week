/**
 * Created by odedg on 22/02/2016.
 */
define(['react',
        'router',
        'components/PageHeader',
        'components/ErrorMsg'
    ],
    function (React,
              ReactRouter,
              PageHeader,
              ErrorMsg) {
        'use strict';
        return React.createClass({
            mixins: [ReactRouter.History, React.addons.LinkedStateMixin],
            displayName: 'LoginPage',
            getInitialState: function () {
                return {
                    email: '',
                    password: '',
                    errorMsg: ''
                };
            },
            validateUserCredentials: function () {
                var users = JSON.parse(localStorage.getItem('users')) || [];
                var user = {
                    email: this.state.email,
                    password: this.state.password
                };
                return _.find(users, user);
            },
            goToMainApp: function (evt) {
                evt.preventDefault();
                evt.stopPropagation();

                if (this.validateUserCredentials()) {
                    this.history.push('/main');
                } else {
                    this.setState({errorMsg: 'Wrong e-mail/password'});
                }
            },
            goToSignUp: function () {
                this.history.push('/signup');
            },
            render: function () {
                return (
                    <div>
                        <PageHeader />
                        <form onSubmit={this.goToMainApp}>
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                valueLink={this.linkState('email')}
                                required
                            />
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                pattern="\d{6,}"
                                valueLink={this.linkState('password')}
                                required
                            />
                            <button type='submit'>Login</button>
                            <ErrorMsg errorMsg={this.state.errorMsg}/>
                        </form>
                        <div>
                            <span>Don't have an account?</span>
                            <button onClick={this.goToSignUp}>Sign up</button>
                        </div>
                    </div>
                );
            }
        });
    });
