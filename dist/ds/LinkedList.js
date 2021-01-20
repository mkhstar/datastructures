"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var initialItems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            initialItems[_i] = arguments[_i];
        }
        this.length = 0;
        this.first = null;
        this.last = null;
        this.list = null;
        this.add.apply(this, __spread(initialItems));
    }
    LinkedList.prototype.size = function () {
        return this.length;
    };
    LinkedList.prototype.getFirstElement = function () {
        var _a;
        return ((_a = this.first) === null || _a === void 0 ? void 0 : _a.getElement()) || null;
    };
    LinkedList.prototype.getLastElement = function () {
        var _a;
        return ((_a = this.last) === null || _a === void 0 ? void 0 : _a.getElement()) || null;
    };
    LinkedList.prototype[Symbol.iterator] = function () {
        var next;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    next = this.list;
                    _a.label = 1;
                case 1:
                    if (!next) return [3 /*break*/, 3];
                    return [4 /*yield*/, next.getElement()];
                case 2:
                    _a.sent();
                    next = next.getNext();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    };
    LinkedList.prototype.indexOf = function (index) {
        var e_1, _a;
        var currentIndex = 0;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var element = _c.value;
                if (currentIndex === index)
                    return element;
                currentIndex++;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return null;
    };
    LinkedList.prototype.removeAt = function (index) {
        if (index < 0 || index + 1 > this.length)
            return false;
        if (this.length === 1 && index === 0) {
            this.first = this.last = this.list = null;
            return true;
        }
        var next = this.list;
        var prev = null;
        var currentIndex = 0;
        while (next) {
            if (index > 0 && index - 1 === currentIndex)
                prev = next;
            else if (currentIndex === index) {
                if (prev) {
                    var result = prev.setNextNode(next.getNext());
                    if (next === this.last)
                        this.last = result;
                }
                else
                    this.first = this.list = next.getNext();
                this.length--;
                return true;
            }
            next = next.getNext();
            currentIndex++;
        }
        return false;
    };
    LinkedList.prototype.removeElements = function (element) {
        if (!this.length)
            return;
        var next = this.list;
        var prev = null;
        while (next) {
            var nextElement = next.getElement();
            if (nextElement !== element)
                prev = next;
            else {
                if (prev) {
                    var result = prev.setNextNode(next.getNext());
                    if (next === this.last)
                        this.last = result;
                }
                else
                    this.first = this.list = next.getNext();
                this.length--;
            }
            next = next.getNext();
        }
    };
    LinkedList.prototype.removeElementsWhere = function (test) {
        if (!this.length)
            return;
        var next = this.list;
        var prev = null;
        while (next) {
            var nextElement = next.getElement();
            if (!test(nextElement))
                prev = next;
            else {
                if (prev) {
                    var result = prev.setNextNode(next.getNext());
                    if (next === this.last)
                        this.last = result;
                }
                else
                    this.first = this.list = next.getNext();
                this.length--;
            }
            next = next.getNext();
        }
    };
    LinkedList.prototype.removeElement = function (element) {
        if (!this.length)
            return false;
        var next = this.list;
        var prev = null;
        while (next) {
            var nextElement = next.getElement();
            if (nextElement !== element)
                prev = next;
            else {
                if (prev) {
                    var result = prev.setNextNode(next.getNext());
                    if (next === this.last)
                        this.last = result;
                }
                else
                    this.first = this.list = next.getNext();
                this.length--;
                return true;
            }
            next = next.getNext();
        }
        return false;
    };
    LinkedList.prototype.removeElementWhere = function (test) {
        if (!this.length)
            return false;
        var next = this.list;
        var prev = null;
        while (next) {
            var nextElement = next.getElement();
            if (!test(nextElement))
                prev = next;
            else {
                if (prev) {
                    var result = prev.setNextNode(next.getNext());
                    if (next === this.last)
                        this.last = result;
                }
                else
                    this.first = this.list = next.getNext();
                this.length--;
                return true;
            }
            next = next.getNext();
        }
        return false;
    };
    LinkedList.prototype.insertAt = function (index, element) {
        if (index < 0 || index + 1 > this.length)
            return false;
        if (index === 0) {
            this.addFirst(element);
            return true;
        }
        if (index === this.length) {
            this.addLast(element);
            return true;
        }
        var next = this.list;
        var prev = null;
        var currentIndex = 0;
        while (next) {
            if (index - 1 === currentIndex)
                prev = next;
            else if (currentIndex === index && prev) {
                var currentNode = new LinkedListNode(element, next);
                prev.setNextNode(currentNode);
                this.length++;
                return true;
            }
            next = next.getNext();
            currentIndex++;
        }
        return false;
    };
    LinkedList.prototype.add = function () {
        var e_2, _a;
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        try {
            for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                var item = items_1_1.value;
                if (!this.last) {
                    this.first = this.last = this.list = new LinkedListNode(item);
                }
                else {
                    this.last = this.last.setNext(item);
                }
                this.length++;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    LinkedList.prototype.addFirst = function (item) {
        if (!this.list) {
            this.first = this.last = this.list = new LinkedListNode(item);
        }
        else
            this.list = this.first = new LinkedListNode(item, this.list);
        this.length++;
    };
    LinkedList.prototype.addLast = function (item) {
        if (!this.last) {
            this.first = this.last = this.list = new LinkedListNode(item);
        }
        else
            this.last = this.last.setNext(item);
        this.length++;
    };
    LinkedList.prototype.clear = function () {
        this.first = this.last = this.list = null;
        this.length = 0;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(element, next) {
        if (next === void 0) { next = null; }
        this.element = element;
        this.next = next;
    }
    LinkedListNode.prototype.getElement = function () {
        return this.element;
    };
    LinkedListNode.prototype.getNext = function () {
        return this.next;
    };
    LinkedListNode.prototype.setElement = function (element) {
        this.element = element;
    };
    LinkedListNode.prototype.setNext = function (element) {
        this.next = new LinkedListNode(element);
        return this.next;
    };
    LinkedListNode.prototype.setNextNode = function (node) {
        this.next = node;
        return this.next;
    };
    return LinkedListNode;
}());
