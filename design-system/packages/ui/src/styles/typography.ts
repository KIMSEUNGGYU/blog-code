import { createDotKey } from './util';

const defaultFontStyle = {
  fontFamily: 'Pretendard',
  fontStyle: 'normal',
};

const header = {
  H1: {
    ...defaultFontStyle,
    fontWeight: '700',
    fontSize: '52px',
    lineHeight: '76px',
  },
  H2: {
    ...defaultFontStyle,
    fontWeight: '700',
    fontSize: '40px',
    lineHeight: '60px',
  },
  H3: {
    ...defaultFontStyle,
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '48px',
  },
  H4: {
    ...defaultFontStyle,
    fontWeight: '700',
    fontSize: '28px',
    lineHeight: '40px',
  },
  H5: {
    ...defaultFontStyle,
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '36px',
  },
  H6: {
    ...defaultFontStyle,
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '30px',
  },
};

const title = {
  T1_700: {
    ...defaultFontStyle,
    fontWeight: '700',
    fontSize: '17px',
    lineHeight: '26px',
  },
  T1_600: {
    ...defaultFontStyle,
    fontWeight: '600',
    fontSize: '17px',
    lineHeight: '26px',
  },
  T1_500: {
    ...defaultFontStyle,
    fontWeight: '500',
    fontSize: '17px',
    lineHeight: '26px',
  },
  T2_700: {
    ...defaultFontStyle,
    fontWeight: '700',
    fontSize: '15px',
    lineHeight: '24px',
  },
  T2_600: {
    ...defaultFontStyle,
    fontWeight: '600',
    fontSize: '15px',
    lineHeight: '24px',
  },
  T2_500: {
    ...defaultFontStyle,
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '24px',
  },
};

const body = {
  B1: {
    ...defaultFontStyle,
    fontWeight: '400',
    fontSize: '15px',
    lineHeight: '24px',
  },
  B2: {
    ...defaultFontStyle,
    fontWeight: '400',
    fontSize: '13px',
    lineHeight: '20px',
  },
};

const caption = {
  C1_500: {
    ...defaultFontStyle,
    fontWeight: '500',
    fontSize: '12px',
    lineHeight: '18px',
  },
  C1_400: {
    ...defaultFontStyle,
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '18px',
  },
  C2_700: {
    ...defaultFontStyle,
    fontWeight: '700',
    fontSize: '11px',
    lineHeight: '14px',
  },
  C2_400: {
    ...defaultFontStyle,
    fontWeight: '400',
    fontSize: '11px',
    lineHeight: '14px',
  },
};

const button = {
  BTN1_700: {
    ...defaultFontStyle,
    fontWeight: '700',
    fontSize: '15px',
    lineHeight: '24px',
  },
  BTN1_500: {
    ...defaultFontStyle,
    fontWeight: '500',
    fontSize: '15px',
    lineHeight: '24px',
  },
  BTN2_line: {
    ...defaultFontStyle,
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '20px',
    textDecorationLine: 'underline',
  },
  BTN2_500: {
    ...defaultFontStyle,
    fontWeight: '500',
    fontSize: '13px',
    lineHeight: '20px',
  },
};

export const typographyMap = {
  // header 만 사용하면  header 로 인식함, className 으로도 제어하기 위해 createDotKey(header) 도 추가
  ...header,
  ...createDotKey(button),
  ...createDotKey(caption),
  ...createDotKey(body),
  ...createDotKey(title),
  ...createDotKey(header),
};

export type Typography = keyof typeof typographyMap;