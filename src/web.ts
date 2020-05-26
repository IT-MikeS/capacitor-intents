import { WebPlugin } from '@capacitor/core';
import { CapacitorIntentsPlugin, CallbackGeneric } from './definitions';

export class CapacitorIntentsWeb extends WebPlugin implements CapacitorIntentsPlugin {
  constructor() {
    super({
      name: 'CapacitorIntents',
      platforms: ['web', 'Android']
    });
  }

  //@ts-ignore
  async registerBroadcastReceiver(options: {filters: string[]}, callback: CallbackGeneric): Promise<string> {
    Promise.reject('Feature not implemented in web.');
  }

  //@ts-ignore
  async unregisterBroadcastReceiver(options: {id: string}) {
    Promise.reject('Feature not implemented in web.');
  }
}

const CapacitorIntents = new CapacitorIntentsWeb();

export { CapacitorIntents };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorIntents);
