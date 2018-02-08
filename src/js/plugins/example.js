import providePlugin from '../utils/providePlugin';

function Example() {
    function onRegister() {
        alert('Hello World!');
    };

    function onApprove() {
        alert('Load trackers...');
    };

    function onDeny() {
        alert('Destroy trackers...');
    };

    return {
        onRegister,
        onApprove,
        onDeny
    }
}

providePlugin('example', new Example());
