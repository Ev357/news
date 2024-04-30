export const useTruncate = (string: string, length = 40) =>
  string.length <= length ? string : string.slice(0, length - 3) + '...';
