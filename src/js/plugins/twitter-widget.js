import providePlugin from '../utils/provide-plugin';

class TwitterWidget {

    constructor ( target = '.twitter-share-button' ) {
        this.$buttons = Array.from( document.querySelectorAll( target ) );
        this.config = {};
    }

    onLoad ( options = {} ) {

        if ( process.env.NODE_ENV !== 'production' ) {
            console.log( 'Twitter widget plugin registered' );
        }

        this.$buttons.forEach( $button => {
            $button.style.display = 'none';
        } )

        this.config = {
            ...this.config,
            ...options
        };
    };

    onApprove () {
        this._loadSDK();
        if ( process.env.NODE_ENV !== 'production' ) {
            console.log( 'Twitter Widget is enabled.' )
        }
    };

    onDeny () {
        if ( process.env.NODE_ENV !== 'production' ) {
            console.log( 'Twitter Widget is not enabled.' )
        }
    };

    _loadSDK () {

        this.$buttons.forEach( $button => {
            $button.style.display = 'inherit';
        } )

        !function( d, s, id ) {
            var js, fjs = d.getElementsByTagName( s )[ 0 ], p = /^http:/.test( d.location ) ? 'http' : 'https';
            if ( !d.getElementById( id ) ) {
                js = d.createElement( s );
                js.id = id;
                js.src = p + '://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore( js, fjs );
            }
        }( document, 'script', 'twitter-wjs' );
    }
}

providePlugin( 'twitter-widget', new TwitterWidget() );