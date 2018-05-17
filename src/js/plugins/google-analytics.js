import providePlugin from '../utils/provide-plugin';
import fireEvent from '../utils/fire-event';

function GoogleAnalytics() {

    let config = {};

    let defaults = {
        trackingID: 'UA-123',
        gaScript: 'https://www.google-analytics.com/analytics.js',
        gaSettings: 'auto',
        anonymizeIp: false
    };

    function onLoad(options, instance) {
        config = {...defaults, ...options};
        fireEvent(document, 'root-consent.plugin.loaded.google-analytics', {name: 'google-analytics', instance: instance});
    };

    function onApprove() {
        _loadAnalyticsScript();
        console.log('Google Analytics are enabled.')
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
        window.ga('set', 'config.anonymizeIp');
    }

    return {
        onLoad,
        onApprove,
        onDeny
    }
}

providePlugin('google-analytics', new GoogleAnalytics());
