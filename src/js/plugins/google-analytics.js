import providePlugin from '../utils/provide-plugin';

function GoogleAnalytics() {

    let config = {};

    let defaults = {
        trackingID: 'UA-123',
        gaScript: 'https://www.google-analytics.com/analytics.js',
        gaSettings: 'auto'
    };

    function onLoad(options) {
        config = {...defaults, ...options};
    };

    function onApprove() {
        _loadAnalyticsScript();
    };

    function onDeny() {
        console.log('Google Analytics are not enabled.')
    };

    function _loadAnalyticsScript() {
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),
                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', config.gaScript, 'ga');

        window.ga('create', config.trackingID, config.gaSettings);
        window.ga('send', 'pageview');
    }

    return {
        onLoad,
        onApprove,
        onDeny
    }
}

providePlugin('google-analytics', new GoogleAnalytics());
