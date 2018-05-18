import providePlugin from '../utils/provide-plugin';

class GoogleAnalytics {

    constructor() {

        this.config = {
            trackingID: 'UA-123',
            gaScript: 'https://www.google-analytics.com/analytics.js',
            gaSettings: 'auto',
            anonymizeIp: false
        };
    }

    onLoad(instance, options = {}) {
        console.log('Analytics loaded');
        this.config = {...options};
    };

    onApprove() {
        this._loadAnalyticsScript();
        console.log('Google Analytics are enabled.')
    };

    onDeny() {
        console.log('Google Analytics are not enabled.')
    };

    _loadAnalyticsScript() {
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
        })(window, document, 'script', this.config.gaScript, 'ga');

        window.ga('create', this.config.trackingID, this.config.gaSettings);
        window.ga('send', 'pageview');
        window.ga('set', this.config.anonymizeIp);
    }
}

setTimeout( () => {
    providePlugin('google-analytics', new GoogleAnalytics());
}, 0)