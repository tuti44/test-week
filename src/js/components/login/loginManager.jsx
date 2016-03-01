define([], function () {
    'use strict';

    return {
        authenticateUser: function (userName, password) {
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(localStorage.getItem(userName) === password);
                }, 3000);
            });
        }
    };
});
