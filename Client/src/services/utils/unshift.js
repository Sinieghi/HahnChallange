import { push } from "./push";

export function unshift(arr, data) {
  if (arr.length == 0) {
    arr[0] = data;
    return;
  }
  push(arr, data);
  let temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[length - 1] = temp;
}
