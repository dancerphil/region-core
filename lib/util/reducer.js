"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reducerPrototype_1 = require("./reducerPrototype");
var logger_1 = require("./logger");
var increase = function (v) {
    if (v === void 0) { v = 0; }
    return v + 1;
};
var decrease = function (v) {
    if (v === void 0) { v = 0; }
    return v - 1 > 0 ? v - 1 : 0;
};
var setKey = function (_a) {
    var state = _a.state, key = _a.key, fetchTime = _a.fetchTime, result = _a.result, error = _a.error;
    reducerPrototype_1.setValueDeep(state, ['fetchTimes', key], fetchTime);
    if (result !== undefined) {
        reducerPrototype_1.setValueDeep(state, ['results', key], result);
    }
    reducerPrototype_1.setValueDeep(state, ['errors', key], error); // as well error ===  undefined
    var nextState = reducerPrototype_1.assignValueDeep(state, ['loadings', key], decrease);
    return nextState;
};
exports.reducer = function (state, action, actionTypes, enableLogInDev) {
    var LOAD = actionTypes.LOAD, SET = actionTypes.SET, RESET = actionTypes.RESET;
    switch (action.type) {
        case LOAD: {
            var key = action.payload.key;
            if (enableLogInDev) {
                logger_1.debug(LOAD, key);
            }
            return reducerPrototype_1.assignValueDeep(state, ['loadings', key], increase);
        }
        case SET: {
            var _a = action.payload, key = _a.key, result = _a.result, error = _a.error;
            var fetchTime = new Date().getTime();
            var nextState = setKey({ state: state, key: key, fetchTime: fetchTime, result: result, error: error });
            if (enableLogInDev) {
                if (error) {
                    console.error(error.message);
                }
                logger_1.group({ actionType: SET, key: key, result: result, error: error, nextState: nextState });
            }
            return nextState;
        }
        case RESET: {
            return {};
        }
        default: {
            return state;
        }
    }
};
