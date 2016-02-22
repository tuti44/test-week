define(['lodash',
        'React',
        'components/login/login',
        'components/login/signup',
        'components/login/home',
        'router'
    ],

    function (_, React, Login, Signup, Home, ReactRouter) {
        'use strict';
        var Router = ReactRouter.Router;
        var Route = ReactRouter.Route;

        return React.createClass({
            displayName: 'MainView',

            render: function () {
                return (
                        <Router>
                            <Route path="/" component={Login}/>
                            <Route path="/sign-up" component={Signup}/>
                            <Route path="/home" component={Home}/>
                        </Router>
                );
            }
        });
    });
