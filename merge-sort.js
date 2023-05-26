const arr = [6, 5, 1, 2, 4, 3, 8, 7];

const mergeSort = (list) => {
  // on input of n elements
  const n = list.length;
  // if n < 2 return
  if (n < 2) {
    return list;
  }
  // else
  // sort left half of elements
  // sort right half of elements
  const mid = Math.ceil(n / 2);
  const left = list.splice(0, mid);
  const right = list.splice(-mid);
  const a = mergeSort(left);
  const b = mergeSort(right);
  // merge sorted halves
  let c = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < a.length && j < b.length) {
    if (a[i] < b[j]) {
      c[k++] = a[i++];
    } else {
      c[k++] = b[j++];
    }
  }
  while (i < a.length) {
    c[k++] = a[i++];
  }
  while (j < b.length) {
    c[k++] = b[j++];
  }

  return c;
};

const sorted = mergeSort(arr);
console.log(sorted);
