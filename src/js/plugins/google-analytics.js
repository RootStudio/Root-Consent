import providePlugin from '../utils/provide-plugin';

class GoogleAnalytics {

    constructor() {

        this.config = {
            trackingID: 'UA-123',
            gaScript: 'https://www.google-analytics.com/analytics.js',
            gaSettings: 'auto',
            anonymizeIp: false,
        };
    }

    onLoad(options = {}) {
        console.log('Google Analytics Registered.')
        this.config = {
            ...this.config,
            ...options
        };
    };

    onApprove() {
        this._loadAnalyticsScript();
        if (process.env.NODE_ENV !== "production") {
            console.log( 'Google Analytics are enabled.' )
        }
    };

    onDeny() {
        if (process.env.NODE_ENV !== "production") {
            console.log( 'Google Analytics are not enabled.' )
        }
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
            if (typeof g !== 'undefined') {
                a.src = g;
            } else {
                a.src = 'https://www.google-analytics.com/analytics.js';
            }
            m.parentNode.insertBefore(a, m)
        })(window, document, 'script', this.config.gaScript, 'ga');

        window.ga('create', this.config.trackingID, this.config.gaSettings);
        window.ga('set', 'anonymizeIp', this.config.anonymizeIp);
        window.ga('send', 'pageview');
    }
}

providePlugin('google-analytics', new GoogleAnalytics());
