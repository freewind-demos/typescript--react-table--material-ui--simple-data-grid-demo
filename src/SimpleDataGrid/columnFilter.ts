import { FilterType } from 'react-table';
import { includesIgnoreCase } from '../../utils/strUtils';

function getNestedValues(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.flatMap((it) => getNestedValues(it));
  }
  if (typeof obj === 'object') {
    return Object.values(obj);
  }
  return [obj];
}

function getValues(obj: object, keys: string[]): string[] {
  return keys.flatMap((key) => {
    const value = (obj as any)[key];
    return getNestedValues(value)
      .filter(Boolean)
      .map((it: any) => it.toString());
  });
}

// FIXME can't get the value generated by `accessor` directly?
// have to use `row.values` and `columnIds` to get
export function columnFilter<T extends object>(): FilterType<T> {
  return (rows, columnIds, filterValue) => {
    return rows.filter((row) => {
      const values = getValues(row.values, columnIds);
      console.log('### columnFilter', { values, filterValue });
      return values.some((it) => includesIgnoreCase(it, filterValue));
    });
  };
}
