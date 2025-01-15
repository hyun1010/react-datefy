import { BaseProps, initFormatDate, initMode } from '../type';

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
