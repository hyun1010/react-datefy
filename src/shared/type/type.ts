export type DateValueType = Date;

const modeTypes = ['light', 'dark'] as const;
export type ModeType = (typeof modeTypes)[number];
export const initMode = modeTypes[0];

const formatDateTypes = ['yyyy-mm-dd', 'yyyy.mm.dd', 'yyyy/mm/dd'] as const;
export type FormatDateType = (typeof formatDateTypes)[number];
export const initFormatDate = formatDateTypes[0];

const localeTypes = ['en', 'ko'] as const;
export type LocaleType = (typeof localeTypes)[number];
export const initLocale = localeTypes[0];
