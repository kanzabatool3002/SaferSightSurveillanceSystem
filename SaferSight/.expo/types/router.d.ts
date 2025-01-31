/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/Home` | `/(tabs)/Log_videos` | `/(tabs)/Login` | `/(tabs)/Logout` | `/(tabs)/Profile` | `/(tabs)/Signup` | `/(tabs)/Support` | `/(tabs)/explore` | `/(tabs)/index2` | `/(tabs)/notification` | `/(tabs)/tabbottom` | `/Home` | `/Log_videos` | `/Login` | `/Logout` | `/Profile` | `/Signup` | `/Support` | `/_sitemap` | `/explore` | `/index2` | `/notification` | `/tabbottom`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
