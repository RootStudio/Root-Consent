import providePlugin from '../utils/provide-plugin';

class Hotjar {

    constructor () {

        this.config = {
            hjid: 'XXXXXXX',
            hjsv: 6
        };
    }

    onLoad ( options = {} ) {
        if (process.env.NODE_ENV !== "production") {
            console.log( 'Hotjar plugin registered.' )
        }
        this.config = {
            ...this.config,
            ...options
        };
    };

    onApprove () {
        this._loadAnalyticsScript();
        if (process.env.NODE_ENV !== "production") {
            console.log( 'Hotjar is enabled.' )
        }
    };

    onDeny () {
        if (process.env.NODE_ENV !== "production") {
            console.log( 'Hotjar is not enabled.' )
        }
    };

    _loadAnalyticsScript () {
        ((h,o,t,j,a,r) => {
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:this.config.hjid,hjsv:this.config.hjsv};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    }

}

providePlugin( 'hotjar', new Hotjar() );
