import { BaseProps } from '../internal/config';
import { BaseProvider } from '../internal/context';
import { Input } from '../internal/ui';

export default function DatePicker({
  theme = 'light',
  value,
  placeholder,
}: BaseProps) {
  return (
    <BaseProvider theme={theme}>
      <Input value={value} placeholder={placeholder} />
    </BaseProvider>
  );
}
