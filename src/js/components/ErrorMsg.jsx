/**
 * Created by odedg on 22/02/2016.
 */
define(['react'], function (React) {
    'use strict';
    return React.createClass({
        displayName: 'ErrorMsg',
        render: function () {
            return (
                <span className='error'>{this.props.errorMsg}</span>
            );
        }
    });
});
