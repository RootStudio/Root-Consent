import providePlugin from '../utils/provide-plugin';

class LinkedInWidget {

    constructor ( target = '.ln-share-button' ) {
        this.$buttons = Array.from( document.querySelectorAll( target ) );
        this.config = {
            type: 'IN/Share'
        };
    }

    onLoad ( options = {} ) {

        if ( process.env.NODE_ENV !== 'production' ) {
            console.log( 'LinkedIn plugin registered.' )
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
            console.log( 'LinkedIn plugin is enabled.' )
        }
    };

    onDeny () {
        if ( process.env.NODE_ENV !== 'production' ) {
            console.log( 'LinkedIn plugin is not enabled.' )
        }
    };

    _loadSDK () {

        this.$buttons.forEach( $button => {
            $button.style.display = 'inherit';

            const script = document.createElement( 'script' );
            script.setAttribute( 'type', 'IN/Share' );
            $button.appendChild( script );
        } )

        const script = document.createElement( 'script' );
        script.setAttribute( 'type', 'text/javascript' );
        script.src = '//platform.linkedin.com/in.js';
        document.querySelector( 'body' ).appendChild( script );


    }
}

providePlugin( 'linkedin-plugin', new LinkedInWidget() );