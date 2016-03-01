define(['React', 'components/login/loginManager'],
    function (React, loginManager) {
        'use strict';

        describe('Login Manager', function () {

            beforeEach(function () {
                spyOn(localStorage, 'getItem').and.callFake(function () {
                    return 'a123456';
                });
            });

            it('should return true when user credentials are valid', function (done) {
                var promise = loginManager.authenticateUser('abc', 'a123456');
                promise.then(function (result) {
                    expect(result).toBeTruthy();
                    console.info(2);
                    done();
                });
                console.info(1);
            });

            it('should return false when user credentials are invalid', function (done) {
                loginManager.authenticateUser('abc', 'a1234567').then(function (result) {
                    expect(result).toBeFalsy();
                    done();
                });
            });
        });

    });
