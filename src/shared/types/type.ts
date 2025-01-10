export type DateValueType = Date | null;

const modeTypes = ['light', 'dark'] as const;
export type ModeType = (typeof modeTypes)[number];

const formatDateTypes = ['yyyy-mm-dd', 'yyyy.mm.dd', 'yyyy/mm/dd'] as const;
export type FormatDateType = (typeof formatDateTypes)[number];

const localeTypes = ['en', 'ko'] as const;
export type localeTypes = (typeof localeTypes)[number];
