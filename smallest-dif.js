array1 = [10, 20, 14, 16, 18]
array2 = [30, 23, 54, 33, 96]

const smallestDifference = (arr1, arr2) => {
  let difference = []
  for(let i = 0; i < arr1.length; i++){
    difference.push(Math.abs(arr1[i]-arr2[i]));
  }
  const min = Math.min(...difference)
  return min
}

console.log(smallestDifference(array1,array2))