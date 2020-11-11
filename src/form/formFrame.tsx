export function createControl(config: any, validation: any): any {
  return {
    ...config,
    validation,
    valid: !validation,
    touched: false,
    value: '',
  };
}
