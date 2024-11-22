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

 export  function filterMainContent(text:string) {
    // Remove any unnecessary parts such as filenames and special characters
    // This regex pattern captures and removes text fragments before and after the main content
    const filtered = text.replace(/(?<=\/ )[^|]+|\s*\|.+/g, '').trim();
    return filtered;
}
export function decodeURIComponent(encodedString:string) {
  if(!encodedString) return ""
  // Decode the percent-encoded characters
  return encodedString.replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode(parseInt(p1, 16));
  });
}
