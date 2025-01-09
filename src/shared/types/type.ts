export type DateValueType = Date | null;

const modeTypes = ['light', 'dark'] as const;
export type ModeType = (typeof modeTypes)[number];

const formatTypes = ['yyyy-mm-dd', 'yyyy.mm.dd', 'yyyy/mm/dd'] as const;
export type FormatType = (typeof formatTypes)[number];
