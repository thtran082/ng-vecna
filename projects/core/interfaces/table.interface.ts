export interface IVecnaTableHeaderTemplateContext<T extends object> {
  $implicit: T[];
  vnTableHeader: T[];
}

export interface IVecnaTableRowTemplateContext<T extends object> {
  $implicit: T;
  vnTableRow: T;
  index: number;
}