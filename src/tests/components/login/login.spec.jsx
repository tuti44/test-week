define(['React', 'components/login/login', 'router'],
    function (React, Login, ReactRouter) {
        'use strict';

        var testUtils = React.addons.TestUtils;

        describe('Login', function () {

            var myHistory;

            function renderLogin(userName, pass) {
                var loginComp = testUtils.renderIntoDocument(<Login history={myHistory}/>);
                console.log(loginComp);
                loginComp.refs.userName.value = userName;
                loginComp.refs.password.value = pass;
                return loginComp;
            }

            beforeEach(function () {
                spyOn(localStorage, 'getItem').and.callFake(function () {
                    return 'a123456';
                });

                myHistory = ReactRouter.createMemoryHistory();
            });

            it('should route to home when valid username is entered', function () {
                spyOn(myHistory, 'push');
                var loginComp = renderLogin('abc', 'a123456');
                loginComp.onLogin();
                expect(myHistory.push).toHaveBeenCalledWith('/home');
            });

            it('should show error when invalid username is entered', function () {
                var loginComp = renderLogin('abc', 'a1234567');
                loginComp.onLogin();
                var actual = loginComp.state.errorMsg;
                expect(actual).toEqual(1);
            });
        });

    });
