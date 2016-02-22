var tests = [];
for (var file in window.__karma__.files) {
    if (/spec\.js$/.test(file)) {
        console.info(file);
        tests.push(file);
    }
}

requirejs.config({
    baseUrl: '/base/build',
    paths: {
        lodash: 'vendor/lodash',
        React: 'vendor/react',
        reactDOM: 'vendor/react-dom',
        components: 'js/components'
    },
    map: {
        '*': {
            react: 'React'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start,
    shim: {
        lodash: {
            exports: '_'
        },
        React: {
            exports: 'React'
        },
        reactDom: ['react']
    }
});
