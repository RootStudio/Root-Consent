# Root Consent

This library can be used to provide GDPR compliant consent screen that allows users to opt-in explicity for data collection.

## Installation

The library can be installed via NPM or included in your page:

* NPM: `npm install root-consent`
* Download Latest Release

#### ES6

```js
import rootConsent from 'root-consent';

const element = document.querySelector('body');
const consent = new rootConsent(element, {
	delay: 500
});
```

#### HTML

```html
<script src="./js/root-consent.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const element = document.querySelector('body');
        const consent = rootConsent(element, {
        	delay: 500
        });
    });
</script>
```

#### JQuery

```html
<script src="./js/jquery.root-consent.js"></script>
<script>
    $(document).ready(function() {
        $('body').rootConsent({
        	delay: 500
        });
    });
</script>
```

## Options

The library is designed to be customisable, you can configure the text, theme and positioning on the page.

<table>
	<tr>
		<th>Property</th>
		<th>Type</th>
		<th>Default</th>
	</tr>
	<tr>
		<td>messageTitle</td>
		<td>String</td>
		<td></td>
	</tr>
	<tr>
		<td>messageText</td>
		<td>String</td>
		<td></td>
	</tr>
	<tr>
		<td>approveLabel</td>
		<td>String</td>
		<td>I accept</td>
	</tr>
	<tr>
		<td>denyLabel</td>
		<td>String</td>
		<td>No thanks</td>
	</tr>
	<tr>
		<td>storageKey</td>
		<td>String</td>
		<td>root-consent</td>
	</tr>
	<tr>
		<td>delay</td>
		<td>Integer</td>
		<td>1000</td>
	</tr>
	<tr>
		<td>position</td>
		<td>top, top-right, top-left, bottom, bottom-right, bottom-left</td>
		<td>bottom</td>
	</tr>
	<tr>
		<td>theme</td>
		<td>light, dark</td>
		<td>dark</td>
	</tr>
</table>

## Plugins

This library makes no assumptions on which analytics package or tracking software is used on your site. The control of such things is left up to you through the extendable plugin system.

Plugins can be registered asynchronously like so:

```html
<script src="./js/root-consent.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const element = document.querySelector('body');

        const consent = rootConsent(element);

        consent.registerPlugin('example');
    });
</script>
<script src="./js/plugins/example.js" async></script>
```

You can pass any options through to the plugin by adding a second parameter to the `registerPlugin` method. This will be passed through to the `onLoad()` method within the plugin instance.

### Developing Plugins

Adding a new plugin is straight forward, each one has three methods that must be callable publicly: `onLoad`, `onApprove` and `onDeny`. These handle the different states of consent managed by the library.

Here is a simple example:

```js
import providePlugin from 'root-consent/src/js/utils/provide-plugin';

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
```

The `providePlugin` utility is a helper utility to correctly dispatch the loaded event so the main library can complete the plugin registration. The same functionality can be replicated using:

```js
document.dispatchEvent(new CustomEvent(`root-consent.plugin.load.${pluginName}`, {
    bubbles: true,
    cancelable: true,
    details: {
        name: 'example',
        instance: new Example()
    }
}));
```

**Note:** you should ensure the plugin name used for registering matches the plugin name passed to the provide event.

## Events

The library fires events on the associated DOM Node as actions are completed:

<table>
	<tr>
		<th>Event</th>
		<th>Payload</th>
	</tr>
	<tr>
		<td>root-consent.setup</td>
		<td>-</td>
	</tr>
	<tr>
		<td>root-consent.display</td>
		<td>-</td>
	</tr>
	<tr>
		<td>root-consent.hide</td>
		<td>-</td>
	</tr>
	<tr>
		<td>root-consent.approve</td>
		<td>-</td>
	</tr>
	<tr>
		<td>root-consent.deny</td>
		<td>-</td>
	</tr>
	<tr>
		<td>root-consent.plugin.[NAME].load</td>
		<td>name, instance</td>
	</tr>
	<tr>
		<td>root-consent.plugin.[NAME].approve</td>
		<td>name, instance</td>
	</tr>
	<tr>
		<td>root-consent.plugin.[NAME].deny</td>
		<td>name, instance</td>
	</tr>
</table>