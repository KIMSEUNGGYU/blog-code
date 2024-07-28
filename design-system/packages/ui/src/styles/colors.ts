// Primary
const primary = {
    primary25: '#FBF8FF',
    primary50: '#F2EFFD',
    primary100: '#E9DEFF',
    primary200: '#DAC9FF',
    primary300: '#C5ABFF',
    primary400: '#A57EFF',
    primary500: '#8B5FF1',
    primary600: '#7046CE',
    primary700: '#5C37BA',
    primary800: '#3D1892',
    primary900: '#340A7A',
  };
  
  // Semantic
  const danger = {
    danger25: '#FDF0F0',
    danger50: '#FFE9E9',
    danger100: '#FFDADB',
    danger200: '#FFBFBF',
    danger300: '#FF8585',
    danger400: '#FF5454',
    danger500: '#E52626',
  };
  
  const warning = {
    warning25: '#FFF6E2',
    warning50: '#FFF2D1',
    warning100: '#FFEAB3',
    warning200: '#FFDD82',
    warning300: '#FECF6E',
    warning400: '#FEBB4A',
    warning500: '#F7A300',
  };
  
  const positive = {
    positive25: '#EAFBF2',
    positive50: '#DBF4E7',
    positive100: '#C0E5D1',
    positive200: '#97D4B4',
    positive300: '#6BC497',
    positive400: '#47B881',
    positive500: '#069952',
  };
  
  const information = {
    information25: '#EDF5FC',
    information50: '#E1F1FF',
    information100: '#CDE6FF',
    information200: '#B0D7FE',
    information300: '#89BDFC',
    information400: '#6BA6F9',
    information500: '#2880E9',
  };
  
  // Color Palette
  const plum = {
    plum25: '#FEF6FD',
    plum50: '#FEE7FB',
    plum100: '#FED2F9',
    plum200: '#FDB5F5',
    plum300: '#FA90F7',
    plum400: '#EE73F5',
    plum500: '#D946EF',
    plum600: '#AD33CD',
    plum700: '#8423AC',
    plum800: '#5F168A',
    plum900: '#450D72',
  };
  
  const rose = {
    rose25: '#FEF5EF',
    rose50: '#FFE7E5',
    rose100: '#FFD2CF',
    rose200: '#FEB5B1',
    rose300: '#FC8A8F',
    rose400: '#F96C80',
    rose500: '#F63D68',
    rose600: '#D32C63',
    rose700: '#B11E5C',
    rose800: '#8E1353',
    rose900: '#760B4D',
  };
  
  const orange = {
    orange25: '#FEF9EC',
    orange50: '#FFF1DF',
    orange100: '#FFE4C4',
    orange200: '#FED3A0',
    orange300: '#FDB471',
    orange400: '#FC964E',
    orange500: '#FB6514',
    orange600: '#D7480E',
    orange700: '#B4300A',
    orange800: '#911C06',
    orange900: '#780F03',
  };
  
  const brown = {
    brown25: '#FAF7F3',
    brown50: '#F4ECE3',
    brown100: '#F0E5D8',
    brown200: '#E7D4BE',
    brown300: '#DDC2A4',
    brown400: '#CFA97D',
    brown500: '#B08053',
    brown600: '#97633C',
    brown700: '#7E4A29',
    brown800: '#66331A',
    brown900: '#54220F',
  };
  
  const cyan = {
    cyan25: '#EFFDFC',
    cyan50: '#E0FCF9',
    cyan100: '#C7FAF4',
    cyan200: '#A4F6EC',
    cyan300: '#73E5E0',
    cyan400: '#4DC7CC',
    cyan500: '#1D9AAA',
    cyan600: '#157A92',
    cyan700: '#0E5C7A',
    cyan800: '#094362',
    cyan900: '#053051',
  };
  
  const indigo = {
    indigo25: '#EFF5FE',
    indigo50: '#E3EBFD',
    indigo100: '#CCDAFC',
    indigo200: '#ADC3F8',
    indigo300: '#819EEC',
    indigo400: '#5E7DD9',
    indigo500: '#2F50C1',
    indigo600: '#223DA5',
    indigo700: '#172C8A',
    indigo800: '#0E1E6F',
    indigo900: '#09145C',
  };
  
  const gray = {
    'gray-white': '#FFFFFF',
    gray25: '#F7F9FE',
    gray50: '#F3F5FA',
    gray100: '#E9EDF5',
    gray200: '#DAE0EA',
    gray300: '#C9D1DB',
    gray400: '#94A3B8',
    gray500: '#64748B',
    gray600: '#475569',
    gray700: '#27364B',
    gray800: '#1E2A3B',
    gray900: '#0F1A2A',
    'gray-black': '#000000',
  };
  
  const dim = {
    dim50: '#00000080',
  };
  
  // text
  const text = {
    'text-white': '#ffffff',
    text300: '#C9D1DB',
    text400: '#94A3B8',
    text500: '#64748B',
    text700: '#27364B',
    text900: '#0F1A2A',
  };
  
  const grey = {
    gray100: '#f8f8f8',
    gray200: '#f0f0f0',
    gray300: '#e6e6e6',
    gray400: '#dedfe1',
    gray500: '#cdced1',
    gray600: '#b6b6b6',
    gray700: '#979797',
    gray800: '#666666',
    gray900: '#262626',
  };
  
  export const colorMap = {
    ...primary,
    ...danger,
    ...warning,
    ...positive,
    ...information,
    ...plum,
    ...rose,
    ...orange,
    ...brown,
    ...cyan,
    ...indigo,
    ...gray,
    ...dim,
    ...text,
  };
  
  export type Color = keyof typeof colorMap;