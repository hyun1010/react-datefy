# react-datefy

`react-datefy`는 React 기반의 심플하고 커스터마이징 가능한 날짜 선택 라이브러리입니다. 날짜 입력 필드와 캘린더 UI를 포함하며, 사용자가 날짜를 쉽게 선택할 수 있도록 도와줍니다.

## 설치

```bash
npm install react-datefy
```

## 사용법

```tsx
import DatePicker from 'react-datefy';

export default function App() {
  return (
    <DatePicker
      value={new Date()}
      placeholder="Select a date"
      onChange={({ dateValue, formatValue }) => {
        console.log(dateValue, formatValue);
      }}
      minDate="2025-01-01"
      maxDate="2025-12-31"
    />
  );
}
```

## 주요 기능

- **유연한 날짜 선택**: 캘린더와 텍스트 입력 방식 모두 지원
- **날짜 범위 설정**: `minDate`와 `maxDate`를 이용하여 선택 가능한 날짜를 제한 가능

## 속성

| 속성          | 타입       | 기본값            | 설명                                                               |
| ------------- | ---------- | ----------------- | ------------------------------------------------------------------ |
| `value`       | `Date`     | `undefined`       | 선택된 날짜 값                                                     |
| `placeholder` | `string`   | `'Select a date'` | 입력 필드의 플레이스홀더 텍스트                                    |
| `onChange`    | `function` | `undefined`       | 날짜 선택 시 호출되는 콜백 함수 (`dateValue`와 `formatValue` 제공) |
| `minDate`     | `string`   | `undefined`       | 선택 가능한 최소 날짜 (`YYYY-MM-DD` 형식)                          |
| `maxDate`     | `string`   | `undefined`       | 선택 가능한 최대 날짜 (`YYYY-MM-DD` 형식)                          |
| `formatDate`  | `string`   | `'YYYY-MM-DD'`    | 날짜 포맷 지정                                                     |

## 예외 처리

- **날짜 포맷 검증**: 유효하지 않은 날짜 포맷 입력 시 경고 로그 출력
- **범위 초과 처리**: 허용되지 않은 범위의 날짜 선택 시 경고 로그 출력

## 라이센스

[MIT](LICENSE)
