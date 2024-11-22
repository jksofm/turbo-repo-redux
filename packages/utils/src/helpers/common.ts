import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number,
  ): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout | null;
  
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return function (this: any, ...args: Parameters<T>) {
      clearTimeout(timeoutId!);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }


  export function getRelativeTime (dateString:string) {
    dayjs.extend(relativeTime);


    const relativeTimeString = dayjs(dateString).fromNow();
    return relativeTimeString
  }

