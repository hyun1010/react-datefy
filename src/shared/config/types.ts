export type DateValueType = Date | null;

const themetypes = ['light', 'dark'] as const;
export type ThemeType = (typeof themetypes)[number];
