export type Styles = {
  'about--pc': string;
  'about--sp': string;
  'activity-container': string;
  'activity-item': string;
  'container': string;
  'description': string;
  'disabled': string;
  'divided': string;
  'header-2': string;
  'image': string;
  'join-discord-box': string;
  'title': string;
  'welcome-image': string;
  'welcome-image__box': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
