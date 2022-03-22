// call
Function.prototype.MyCall = function (context) {
  var context = context || window;
  context.fn = this;
  let args = [];
  for (let i = 1; i < arguments.length; i++) {
    args.push(`arguments[${i}]`);
  }
  var result = eval('context.fn(' + args + ')');
  delete context.fn;
  return result;
};

// apply
Function.prototype.MyApply = function (context, arr) {
  var context = context || window;
  context.fn = this;
  var result;
  if (!arg) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push('arr[' + i + ']');
    }
    result = eval('context.fn(' + args + ')');
  }
  delete context.fn;
  return result;
};

// bind
Function.prototype.MyBind = function (context) {
  var context = context || window;
};
