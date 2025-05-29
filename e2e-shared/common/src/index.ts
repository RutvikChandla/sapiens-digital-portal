export * from './lib/common';

export interface LocaleConfigurationModel {
  localeCode: string;
  currency   : string;
}

export function getLocaleConfiguration(): RegExp  {
  return /Welcome/;
}


export function getGreetingFromCommon(): String {
  return "Welcome";
}
