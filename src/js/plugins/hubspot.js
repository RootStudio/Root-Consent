import providePlugin from '../utils/provide-plugin';

class Hubspot {

    constructor () {

        this.config = {
            ID: 'XXXXXXX'
        };
    }

    onLoad ( options = {} ) {
        if (process.env.NODE_ENV !== "production") {
            console.log( 'Hubspot plugin registered.' )
        }
        this.config = {
            ...this.config,
            ...options
        };
    };

    onApprove () {
        this._loadAnalyticsScript();
        if (process.env.NODE_ENV !== "production") {
            console.log( 'Hubspot is enabled.' )
        }
    };

    onDeny () {
        if (process.env.NODE_ENV !== "production") {
            console.log( 'Hubspot is not enabled.' )
        }
    };

    _loadAnalyticsScript () {
        const hubspot = document.createElement('script');

        hubspot.setAttribute('src',`https://js.hs-scripts.com/${this.config.ID}.js`);

        document.head.appendChild(hubspot);
    }

}

providePlugin( 'hubspot', new Hubspot() );
