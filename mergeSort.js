function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArray = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i]);
      i++;
    } else {
      sortedArray.push(right[j]);
      j++;
    }
  }

  return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));


// Мы должны разделить массив на 2 половины, отсортировать левую часть, отсортировать правую часть и объединить.

// При сортировке левой части - делим ее на еще 2 половины - сортируем левую часть - делим ее на половину - если больше некуда делить, значит элемент один и сортировка прошла успешно, повторяем с правой частью, объединяем 2 половины пока не объединим левую часть исходного массива обратно.
// Сортировка правой части аналогичным способом.
// Объединяем 2 отсортированные части в один массив

// Базовый случай - если длина массива левой и правой части = 1, объединяем их вместе сортируя по возрастанию

// Рекурсивный случай - деление массива на половины + сортировка до длины массива в 1 элемент.