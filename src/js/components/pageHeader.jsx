/**
 * Created by odedg on 22/02/2016.
 */
define(['react'], function (React) {
    'use strict';
    return React.createClass({
        displayName: 'PageHeader',
        render: function () {
            return (
                <div>
                    <h1>MarkBook</h1>
                    <img src="img/logo.jpg"/>
                </div>
            );
        }
    });
});
