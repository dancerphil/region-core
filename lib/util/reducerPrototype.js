"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assignValue = function (state, key, format) {
    if (state === void 0) { state = {}; }
    var _a;
    var value = format(state[key]);
    return Object.assign({}, state, (_a = {}, _a[key] = value, _a));
};
// NOTE 只支持 path.length === 2 和 format
exports.assignValueDeep = function (state, path, format) {
    if (state === void 0) { state = {}; }
    var _a;
    var pathCopied = path.slice();
    var key = pathCopied.shift();
    var formatObj = (_a = {},
        _a[key] = assignValue(state[key], pathCopied[0], format),
        _a);
    return Object.assign({}, state, formatObj);
};
// NOTE 只支持 path.length === 2 和 value
exports.setValueDeep = function (state, path, value) {
    var obj = state;
    var i;
    for (i = 0; i < path.length - 1; i += 1) {
        if (obj[path[i]] === undefined) {
            obj[path[i]] = {};
        }
        obj = obj[path[i]];
    }
    obj[path[i]] = value;
    return null;
};
