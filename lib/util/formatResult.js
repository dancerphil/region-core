"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResult = function (_a) {
    var result = _a.result, snapshot = _a.snapshot, format = _a.format, id = _a.id;
    var _b;
    var formatted = typeof format === 'function' ? format(result, snapshot) : result;
    if (id !== undefined) {
        return Object.assign((_b = {}, _b[id] = formatted, _b), snapshot);
    }
    return formatted;
};
