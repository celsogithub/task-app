const TASK_KEY = 'key';

export class WebStorageUtil {

  static get(): any {
    return JSON.parse(localStorage.getItem(TASK_KEY)!);
  }

  static set(value: any) {
    localStorage.setItem(TASK_KEY, JSON.stringify(value));
  }

  static getArray(key: string): any[] {
    if (localStorage.getItem(key) == undefined) {
      localStorage.setItem(key, JSON.stringify([]));
    }
    return JSON.parse(localStorage.getItem(key)!);
  }

  static setArray(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
