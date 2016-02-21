/** @jsx React.DOM */

define(['React', 'components/component/Component'],
    function (React, Component) {
        'use strict';

        var TestUtils = React.addons.TestUtils;

        describe('First Describe Block', function () {
            it('should work', function () {
                var instance = React.createElement(Component);
                var comp = TestUtils.renderIntoDocument(instance);
                console.log(comp);
            });
        });

    });
