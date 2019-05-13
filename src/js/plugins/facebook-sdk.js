import providePlugin from '../utils/provide-plugin';

class FacebookSDK {

    constructor () {

        this.config = {
            appID: '123456789',
            version: '2.0',
        };
    }

    onLoad ( options = {} ) {
        this.config = {
            ...this.config,
            ...options
        };
    };

    onApprove () {
        this._loadSDK();

        if (process.env.NODE_ENV !== "production") {
            console.log( 'Facebook SDK is enabled.' )
        }
    };

    onDeny () {
        if (process.env.NODE_ENV !== "production") {
            console.log( 'Facebook SDK is not enabled.' )
        }
    };

    _loadSDK () {
        const $el = document.createElement( 'div', { id: 'fb-root' } );
        document.body.appendChild( $el );
        const srcVar = `${this.config.appID}&version=v${this.config.version}`;
        ( function( d, s, id ) {
            var js, fjs = d.getElementsByTagName( s )[ 0 ];
            if ( d.getElementById( id ) ) return;
            js = d.createElement( s );
            js.id = id;
            js.src = `//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=${srcVar}`;
            fjs.parentNode.insertBefore( js, fjs );
        }( document, 'script', 'facebook-jssdk' ) );
    }
}

providePlugin( 'facebook-sdk', new FacebookSDK() );