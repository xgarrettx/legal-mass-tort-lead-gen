export {};

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string,
      config?: { [key: string]: any }
    ) => void;
    dataLayer: any[];
  }
}
