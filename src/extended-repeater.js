module.exports = function repeater(str, options) {
    let repeatTimes = options.repeatTimes || 1
    let separator = options.separator || "+"
    let addition = options.addition !== undefined ? options.addition : ""
    let additionRepeatTimes = options.additionRepeatTimes || 1
    let additionSeparator = options.additionSeparator || "|"
  
    let resAddition = ""
    for (let i = 1; i < additionRepeatTimes; i++) {
      resAddition = `${resAddition}${addition}${additionSeparator}`
    }
    resAddition += addition
  
    let resString = ""
    for (let i = 1; i < repeatTimes; i++) {
      resString = `${resString}${str}${resAddition}${separator}`
    }
    return resString += `${str}${resAddition}`
};
  
