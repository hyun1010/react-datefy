import { BaseProps } from '../types/props';

export function createProps<T extends BaseProps>(props: T) {
  const {
    mode = 'light',
    locale = 'en',
    value = new Date(),
    formatDate = 'yyyy-mm-dd',
    ...restProps
  } = props;

  return {
    mode,
    locale,
    value,
    formatDate,
    ...restProps,
  };
}
