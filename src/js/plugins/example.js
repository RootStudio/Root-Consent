import providePlugin from '../utils/provide-plugin';

function Example() {
    function onLoad() {
        console.log('PLUGIN REGISTERED');
    };

    function onApprove() {
        console.log('PLUGIN CONSENT GIVEN');
    };

    function onDeny() {
        console.log('PLUGIN CONSENT DENIED');
    };

    return {
        onLoad,
        onApprove,
        onDeny
    }
}

providePlugin('example', new Example());
