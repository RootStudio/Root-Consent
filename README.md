# Root Consent

This library can be used to provide GDPR compliant consent screen that allows users to opt-in explicitly for data collection. Also has the option to set the consent as always approved

## Installation

The library can be installed via NPM or included in your page:

* NPM: `npm install root-consent`
* Download Latest Release

#### ES6

```js
import RootConsent from 'root-consent';

const consent = new RootConsent('body', {
	delay: 500
});
```

#### HTML

```html
<script src="./js/root-consent.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const consent = rootConsent('body', {
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
		<td>Your Right to Privacy</td>
	</tr>
	<tr>
		<td>messageText</td>
		<td>String</td>
		<td>This website uses analytics software - do you wish to be included in the collected data? Find out more in our Privacy Policy.</td>
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
		<td>expiryFrame</td>
		<td>Integer</td>
		<td>(1000 * 60 * 60 * 24)</td>
	</tr>
	<tr>
		<td>expiry</td>
		<td>Integer</td>
		<td>30</td>
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
	<tr>
		<td>alwaysApproved</td>
		<td>boolean</td>
		<td>false</td>
	</tr>
</table>

## Plugins

This library makes no assumptions on which analytics package or tracking software is used on your site. The control of such things is left up to you through the extendable plugin system.

Plugins can be registered asynchronously like so:
#### ES6

```js
import RootConsent from 'root-consent';
import Example from 'path/toexample';

const consent = new RootConsent('body', {
	delay: 500
});

consent.registerPlugin('example', {
    //Options object here
});
```

#### HTML
```html
<script src="./js/root-consent.js"></script>
<script>
        document.addEventListener('DOMContentLoaded', function() {

            var Consent = rootConsent('body', {
                //Options object here
            });

            Consent.registerPlugin('example', {
                //Options object here
            });
        });
</script>
<script src="./js/plugins/example.js" async></script>
```

You can pass any options through to the plugin by adding a second parameter to the `registerPlugin` method. This will be passed through to the `onLoad()` method within the plugin instance.
```js
import RootConsent from 'root-consent';
import Plugin1 from 'path/to/plugin1';
import Plugin2 from 'path/to/plugin2';

const consent = new RootConsent('body', {
	delay: 500
});

consent.registerMultiple([
    {
        name: 'Plugin1'
        options: {}
    },
    {
        name: 'Plugin2'
        options: {}
    }
]);
```
Its also possible to register multiple plugins at one

### Developing Plugins

Adding a new plugin is straight forward, each one has three methods that must be callable publicly: `onLoad`, `onApprove` and `onDeny`. These handle the different states of consent managed by the library.

Here is a simple example:

```js
import providePlugin from 'root-consent/src/js/utils/provide-plugin';

class Example {

    // Set any default config options here
    constructor () {
    }
    
    onLoad() {
        console.log('PLUGIN REGISTERED');
    };

    onApprove() {
        console.log('PLUGIN CONSENT GIVEN');
    };

    onDeny() {
        console.log('PLUGIN CONSENT DENIED');
    };
}

providePlugin('example', new Example());
```

The `providePlugin` utility is a helper utility to correctly dispatch the loaded event so the main library can complete the plugin registration. The same functionality can be replicated using:

```js
document.addEventListener( `root-consent.plugin.${pluginName}.load`, ( ev ) => {
    pluginInstance.onLoad( ev.detail );

    // Catches plugins that load before RootConsent has been called
    fireEvent( document, `root-consent.plugin.${pluginName}.loaded`, {
        instance: pluginInstance,
        name: pluginName
    } );
} )

fireEvent( document, `root-consent.plugin.${pluginName}.registered`, {
    instance: pluginInstance,
    name: pluginName
} );
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
		<td>options</td>
	</tr>
	<tr>
		<td>root-consent.plugin.[NAME].approve</td>
		<td>{instance, name}</td>
	</tr>
	<tr>
		<td>root-consent.plugin.[NAME].deny</td>
		<td>{instance, name}</td>
	</tr>
	<tr>
		<td>root-consent.plugin.[NAME].loaded</td>
		<td>instance, name</td>
	</tr>
	<tr>
		<td>root-consent.plugin.[NAME].registered</td>
		<td>instance, name</td>
	</tr>
</table>

## License

The MIT License (MIT)

Copyright (c) 2018 Root Studio

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
