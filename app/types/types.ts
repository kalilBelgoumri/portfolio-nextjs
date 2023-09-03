export type ThemeValues = {
  expimg: string;
  eduimg: string;
  contactsimg: string;
  primary: string;
  primary30: string;
  primary50: string;
  primary80: string;
  primary600: string;
  primary400: string;
  secondary: string;
  secondary50: string;
  secondary70: string;
  tertiary70: string;
  tertiary50: string;
  tertiary: string;
  tertiary80: string;
  aboutimg1: string;
  aboutimg2: string;
  type: string;
};

export type ThemeType = {
  theme: ThemeValues;
  drawerOpen?: boolean;
  setHandleDrawer: () => void;
};
