# Simple intent tools for Capacitor on Android platform.
This plugin currently only supports broadcast receiving of intents, however I intend to add more functionallity, such as sending broadcast intents ect.

---

## Installation
* `npm i capacitor-intents`

---

## Usage

#### EXAMPLE: Register a broadcast receiver with filters for actions, then after receive first broadcast unregister it.
```ts
import 'capacitor-intents';
import { Plugins } from '@capacitor/core';

let receiverId: string | null = null;

receiverId = await Plugins.CapacitorIntents.registerBroadcastReceiver({filters: ['example.itmikes.action']}, async (data) => {
    // data is a JS Object but could contain any structure
    console.dir(data);
    // data in this example will be {value: **JSONString of the below passed value**}

    // now unregister
    if(receiverId !== null)
        await Plugins.CapacitorIntents.unregisterBroadcastReceiver({id: receiverId});
});

async function testMe() {
    Plugins.CapacitorIntents.sendBroadcastIntent({action: 'example.itmikes.action', value: {testValue: "Test String"}});
} 

```

---

### Disclaimer:
I am not a native android developer by trade in any way, this is my first real step into native code.