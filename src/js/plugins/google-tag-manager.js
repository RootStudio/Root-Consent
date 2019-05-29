import providePlugin from '../utils/provide-plugin';

class GoogleTagManager {

    constructor () {

        this.config = {
            tagID: 'GTM-XXXXXXX'
        };
    }

    onLoad ( options = {} ) {
        if (process.env.NODE_ENV !== "production") {
            console.log( 'Google Tag Manger plugin registered.' )
        }
        this.config = {
            ...this.config,
            ...options
        };
    };

    onApprove () {
        this._loadAnalyticsScript();
        if (process.env.NODE_ENV !== "production") {
            console.log( 'Google Tag Manager is enabled.' )
        }
    };

    onDeny () {
        if (process.env.NODE_ENV !== "production") {
            console.log( 'Google Tag Manger is not enabled.' )
        }
    };

    _loadAnalyticsScript () {
        ( function( w, d, s, l, i ) {
            w[ l ] = w[ l ] || [];
            w[ l ].push( {
                             'gtm.start':
                                 new Date().getTime(), event: 'gtm.js'
                         } );
            var f = d.getElementsByTagName( s )[ 0 ],
                j = d.createElement( s ), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore( j, f );

        } )( window, document, 'script', 'dataLayer', this.config.tagID );
    }

}

providePlugin( 'google-tag-manager', new GoogleTagManager() );