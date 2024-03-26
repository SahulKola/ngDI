import { InjectionToken } from "@angular/core";
export interface AppConfig{
    experimentalEnabled: boolean;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG', {
    providedIn: 'root',
    factory() {
        return {
            experimentalEnabled: false
        }
    },
});