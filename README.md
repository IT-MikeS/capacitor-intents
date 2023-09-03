# capacitor-android-intents

Simple intent tools for Capacitor on Android platform.

## Install

```bash
npm install capacitor-android-intents
npx cap sync
```

## Usage

See `example-app` in `packages` folder.

## API

<docgen-index>

* [`registerBroadcastReceiver(...)`](#registerbroadcastreceiver)
* [`unregisterBroadcastReceiver(...)`](#unregisterbroadcastreceiver)
* [`sendBroadcastIntent(...)`](#sendbroadcastintent)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### registerBroadcastReceiver(...)

```typescript
registerBroadcastReceiver(options: { filters: string[]; }, callback: (data: { [key: string]: any; }) => void) => any
```

| Param          | Type                                                    |
| -------------- | ------------------------------------------------------- |
| **`options`**  | <code>{ filters: {}; }</code>                           |
| **`callback`** | <code>(data: { [key: string]: any; }) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### unregisterBroadcastReceiver(...)

```typescript
unregisterBroadcastReceiver(options: { id: string; }) => any
```

| Param         | Type                         |
| ------------- | ---------------------------- |
| **`options`** | <code>{ id: string; }</code> |

**Returns:** <code>any</code>

--------------------


### sendBroadcastIntent(...)

```typescript
sendBroadcastIntent(options: { action: string; extras: { [key: string]: any; }; }) => any
```

| Param         | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| **`options`** | <code>{ action: string; extras: { [key: string]: any; }; }</code> |

**Returns:** <code>any</code>

--------------------

</docgen-api>
