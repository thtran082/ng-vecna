import { coerceBooleanProperty } from "@angular/cdk/coercion";
export function InputBoolean() {
  return function(target: any, key: string, propertyDescriptor?: PropertyDescriptor): void {
      coerceWithoutAccessors(target, key);
  };

  function coerceWithoutAccessors(target: any, key: string): void {
    const getter = function() {
      // using Typescript reflection
      // @ts-ignore
      return this['__' + key];
    };

    const setter = function(next: any) {
      // using Typescript reflection
      // @ts-ignore
      this['__' + key] = next !== null && next !== undefined && `${next}` !== 'false';
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  }
}
