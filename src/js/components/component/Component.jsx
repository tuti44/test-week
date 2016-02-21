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

            onClick: function (event) {
                event.preventDefault();
                setState({
                    click: true
                });
            },

            render: function () {
                console.log(this.state.click);
                return (
                    <div>
                      <h2 onClick={this.onClick}>Simple component</h2>
                    </div>
                );
            }
        });
    }
);
