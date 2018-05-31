var calc = {

    lastResult: null,

    add: function (arg1, arg2) {
        return arg1 + arg2;
    },

    substract: function (arg1, arg2) {
        return arg1 - arg2;
    },

    multiply: function (arg1, arg2) {
        return arg1 * arg2;
    },

    devide: function (arg1, arg2) {
        return arg1 / arg2;
    },

    operate: function (operation, arg1, arg2) {
        if (arg2) {
            return this.lastResult = this.operation(arg1, arg2);
        } else {
            return this.lastResult = this.operation(arg1, this.lastResult);
        }
    }
