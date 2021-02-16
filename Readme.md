# Simple intent tools for Capacitor on Android platform.
This plugin currently supports multiple broadcast receiving of intents, and sending out BroadcastIntents, however I intend to add more functionallity.

---

## Installation

#### 1. Install module
`npm i capacitor-android-intents`

#### 2. Modify YOUR_PROJECT\android\app\src\main\java\YOUR_appId\MainActivity.java to reflect below.
```java
...

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.itmikes.capacitorintents.CapacitorIntents;

...

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(CapacitorIntents.class);
    }});
  }
}
```

#### 3. Use in your app (see below for example usage)

#### 4. Enjoy!

---

## Usage

#### EXAMPLE: Register a broadcast receiver with filters for actions, then after receive first broadcast unregister it. Then send a BroadcastIntent to test it all. 
```ts
import 'capacitor-android-intents';
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
    await Plugins.CapacitorIntents.sendBroadcastIntent({action: 'example.itmikes.action', value: {testValue: "Test String"}});
} 

testMe();

```

---

### Disclaimer:
I am not a native android developer by trade in any way, this is my first real step into native code.
