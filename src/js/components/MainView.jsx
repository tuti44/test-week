define([
        'lodash',
        'react',
        'reactDOM',
        'router',
        'components/PageHeader',
        'components/ErrorMsg',
        'components/MainApp',
        'components/LoginPage'
    ],
    function (_,
              React,
              ReactDOM,
              ReactRouter,
              PageHeader,
              ErrorMsg,
              MainApp,
              LoginPage) {
        'use strict';

        var Router = ReactRouter.Router;
        var Route = ReactRouter.Route;
        var History = ReactRouter.History;

        var SignUpPage = React.createClass({
            mixins: [History, React.addons.LinkedStateMixin],
            displayName: 'SignUpPage',
            getInitialState: function () {
                return {
                    email: '',
                    password: '',
                    passwordRepeat: '',
                    errorMsg: ''
                };
            },
            validateUserNameNotExist: function (user, users) {
                var findResult = _.find(users, {email: this.state.email});
                return !findResult;
            },
            validatePasswordMatches: function () {
                return this.state.password === this.state.passwordRepeat;
            },
            addUser: function (user, users) {
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
            },
            createUser: function () {
                var users = JSON.parse(localStorage.getItem('users')) || [];
                var user = {
                    email: this.state.email,
                    password: this.state.password
                };

                if (!this.validateUserNameNotExist(user, users)) {
                    this.setState({errorMsg: 'User name already exists'});
                    return false;
                }

                if (!this.validatePasswordMatches()) {
                    this.setState({errorMsg: 'Password does not match'});
                    return false;
                }

                this.addUser(user, users);
                return true;
            },
            goToMainApp: function (evt) {
                evt.preventDefault();
                evt.stopPropagation();

                if (this.createUser()) {
                    this.history.push('/main');
                }
            },
            goToLogin: function (evt) {
                evt.preventDefault();
                this.history.push('/');
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
                            <input
                                type='password'
                                name='repeatPassword'
                                placeholder='Repeat password'
                                pattern="\d{6,}"
                                valueLink={this.linkState('passwordRepeat')}
                                required
                            />
                            <button type='submit'>Sign Up</button>
                            <ErrorMsg errorMsg={this.state.errorMsg}/>
                        </form>
                        <div>
                            <span>Already have an account?</span>
                            <button onClick={this.goToLogin}>Login</button>
                        </div>
                    </div>
                );
            }
        });

        return React.createClass({
            displayName: 'MainView',
            render: function () {
                return (
                    <Router>
                        <Route path="/" component={LoginPage}/>
                        <Route path="/signup" component={SignUpPage}/>
                        <Route path="/main" component={MainApp}/>
                    </Router>
                );
            }
        });
    });
