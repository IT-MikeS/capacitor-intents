import { registerPlugin } from '@capacitor/core';

import type { CapacitorIntentsPlugin } from './definitions';

const CapacitorIntents = registerPlugin<CapacitorIntentsPlugin>('CapacitorIntentsPlugin', {
  web: () => import('./web').then((m) => new m.CapacitorIntentsPluginWeb()),
});

export * from './definitions';
export { CapacitorIntents };
