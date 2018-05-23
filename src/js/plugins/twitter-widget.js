import providePlugin from '../utils/provide-plugin';

class TwitterWidget {

    constructor() {
        this.$buttons = Array.from(document.querySelectorAll('.twitter-share-button'));
        this.config = {
        };
    }

    onLoad(options = {}) {

        this.$buttons.forEach( $button => {
            $button.style.display = 'none';
        })

        console.log('Twitter widget loaded');
        this.config = {
            ...this.config,
            ...options
        };
    };

    onApprove() {
        this._loadSDK();
        console.log('Twitter Widget is enabled.')
    };

    onDeny() {
        console.log('Twitter Widget is not enabled.')
    };

    _loadSDK() {

        this.$buttons.forEach( $button => {
            $button.style.display = 'inherit';
        })

        !function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
            if (!d.getElementById(id)) {
                js = d.createElement(s);
                js.id = id;
                js.src = p + '://platform.twitter.com/widgets.js';
                fjs.parentNode.insertBefore(js, fjs);
            }
        }(document, 'script', 'twitter-wjs');
    }
}

setTimeout(() => {
    providePlugin('twitter-widget', new TwitterWidget());
}, 0)