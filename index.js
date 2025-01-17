function justInvoke(func) {
    return func()
}
  
function setThisWithCall(func, thisValue, argument) {
    return func.call(thisValue, argument)
}
  
function setThisWithApply(func, thisValue, arguments) {
    return func.apply(thisValue, arguments)
}
  
function returnNewFunctionOf(functionToBeCopied, arguments) {
    return functionToBeCopied.bind(arguments)
}