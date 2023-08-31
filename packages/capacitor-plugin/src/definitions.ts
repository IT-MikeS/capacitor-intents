export interface CapacitorIntentsPlugin {
  registerBroadcastReceiver(
    options: { filters: string[] },
    callback: (data: { [key: string]: any }) => void
  ): Promise<string>;

  unregisterBroadcastReceiver(options: { id: string }): Promise<void>;

  sendBroadcastIntent(options: { action: string; extras: { [key: string]: any } }): Promise<void>;
}
