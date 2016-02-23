define(['React', 'components/login/loginManager'],
    function (React, loginManager) {
        'use strict';

        describe('Login Manager', function () {

            beforeEach(function () {
                spyOn(localStorage, 'getItem').and.callFake(function () {
                    return 'a123456';
                });
            });

            it('should return true when user credentials are valid', function () {
                expect(loginManager.authenticateUser('abc', 'a123456')).toBeTruthy();
            });

            it('should return false when user credentials are invalid', function () {
                expect(loginManager.authenticateUser('abc', 'a1234567')).toBeFalsy();
            });
        });

    });
