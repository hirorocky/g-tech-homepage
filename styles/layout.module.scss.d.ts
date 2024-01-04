export type Styles = {
  'footer': string;
  'header': string;
  'join-discord--pc': string;
  'join-discord--sp': string;
  'logo': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
