const fishBash = function (n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "fish";
    }
    if (i % 5 === 0) {
      output += "bash";
    }
    if (output === "") {
      output = i.toString();
    }
    console.log(output);
  }
};
// fishBash(100);

const sortAsc = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
const sortDesc = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

let arr = [9, 2, 5, 4, 0, 3, 1, 3, 6];
console.log(sortAsc(arr));
console.log(sortDesc(arr));

function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s/g, "");
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello world"));

module.exports = {
  fishBash,
  sortAsc,
  sortDesc,
  isPalindrome,
};
