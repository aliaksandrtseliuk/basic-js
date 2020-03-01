module.exports = function transform(arr) {

    if (!Array.isArray(arr)) throw new Error
    let newArr = []
  
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case "--discard-next":
          i++
          break
        case "--discard-prev":
          if (newArr.length != 0) newArr.pop()
          break
        case "--double-next":
          if (i < arr.length - 1) newArr.push(arr[i + 1])
          break
        case "--double-prev":
          if (i >= 1) newArr.push(arr[i - 1])
          break
        default:
          newArr.push(arr[i]);
      }
    }
  
    return newArr
};
