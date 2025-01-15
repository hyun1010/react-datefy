import { DateValueType } from '../../../shared/types';
import { LocaleContentType } from '../../../shared/types/locale';

export interface CalendarBaseProps {
  locale: LocaleContentType;
  currentDate: DateValueType;
}
