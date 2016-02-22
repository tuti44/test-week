/**
 * Created by odedg on 22/02/2016.
 */
define(['react', 'router'], function (React, ReactRouter) {
    'use strict';
    return React.createClass({
        mixins: [ReactRouter.History],
        displayName: 'MainApp',
        goToLogin: function (evt) {
            evt.preventDefault();
            this.history.push('/');
        },
        render: function () {
            return (
                <button onClick={this.goToLogin}>Logout</button>
            );
        }
    });
});
