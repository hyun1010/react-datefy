import { initFormatDate, initMode } from '../types';
import { BaseProps } from '../types/props';

export function createProps<T extends BaseProps>(props: T) {
  const {
    mode = initMode,
    value,
    formatDate = initFormatDate,
    ...restProps
  } = props;

  return {
    mode,
    value,
    formatDate,
    ...restProps,
  };
}
