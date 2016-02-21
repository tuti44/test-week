define(['React'],
    function (React) {
        'use strict';

        return React.createClass({
            displayName: 'SimpleComponent',

            getInitialState: function () {
                return {
                    click: false
                }
            },

            onClick: function () {
                this.setState({
                    click: true
                });
            },

            render: function () {
                return (
                    <div onClick={this.onClick}>
                      <h2>Simple component</h2>
                    </div>
                );
            }
        });
    }
);
