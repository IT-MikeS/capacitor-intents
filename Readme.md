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

receiverId = await Plugins.CapacitorIntents.registerBroadcastReceiver({filters: ['example.action.name']}, async (data) => {
    // data is a JS Object
    console.dir(data);

    // now unregister
    if(receiverId !== null)
        await Plugins.CapacitorIntents.unregisterBroadcastReceiver({id: receiverId});
});
```

---

### Disclaimer:
I am not a native android developer by trade in any way, this is my first real step into native code.