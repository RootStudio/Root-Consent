import providePlugin from '../utils/provide-plugin';

class DGM {

    constructor () {

        this.config = {
            cid: 1234,
        };
    }

    onLoad ( options = {} ) {
        this.config = {
            ...this.config,
            ...options
        };
    };

    onApprove () {
        this.init();

        if (process.env.NODE_ENV !== "production") {
            console.log( 'DGM is enabled.' )
        }
    };

    onDeny () {
        if (process.env.NODE_ENV !== "production") {
            console.log( 'DGM is not enabled.' )
        }
    };

    init() {
        const cid = this.config.cid;

        console.log(cid)

        (function() {
            window.digitalgroupmedia = 'digitalgroupmedia';
            window.digitalgroupmedia = window.digitalgroupmedia || function(){
                (window.digitalgroupmedia.q = window.ga.q || []).push(arguments)
            },
                window.digitalgroupmedia.l = 1 * new Date();
            var a = document.createElement('script');
            var m = document.getElementsByTagName('script')[0];
            a.async = 1;
            a.src = "https://api1.websuccess-data.com/wltracker.js";
            m.parentNode.insertBefore(a,m)
        })()
    }
}

providePlugin( 'DGM', new DGM() );