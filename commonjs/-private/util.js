"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dirtyKey = exports.consumeKey = exports.dirtyCollection = exports.consumeCollection = exports.dirtyTag = exports.consumeTag = exports.createTag = void 0;
const tracking_1 = require("@glimmer/tracking");
const ember_1 = require("ember");
class Tag {
    static consumeTag(tag) {
        // read the tag value
        tag.__tag_value__;
    }
    static dirtyTag(tag) {
        // write the tag value
        tag.__tag_value__ = undefined;
    }
}
__decorate([
    tracking_1.tracked
], Tag.prototype, "__tag_value__", void 0);
function createTag() {
    return new Tag();
}
exports.createTag = createTag;
exports.consumeTag = Tag.consumeTag;
exports.dirtyTag = Tag.dirtyTag;
////////////
const COLLECTION_SYMBOL = {};
let consumeCollection = (obj) => {
    consumeKey(obj, COLLECTION_SYMBOL);
};
exports.consumeCollection = consumeCollection;
let dirtyCollection = (obj) => {
    dirtyKey(obj, COLLECTION_SYMBOL);
};
exports.dirtyCollection = dirtyCollection;
if (typeof ember_1.default !== 'undefined') {
    // eslint-disable-next-line ember/new-module-imports
    exports.consumeCollection = (obj) => ember_1.default.get(obj, '[]');
    // eslint-disable-next-line ember/new-module-imports
    exports.dirtyCollection = (obj) => ember_1.default.notifyPropertyChange(obj, '[]');
}
////////////
const OBJECT_TAGS = new WeakMap();
function getOrCreateTag(obj, key) {
    let tags = OBJECT_TAGS.get(obj);
    if (tags === undefined) {
        tags = new Map();
        OBJECT_TAGS.set(obj, tags);
    }
    let tag = tags.get(key);
    if (tag === undefined) {
        tag = new Tag();
        tags.set(key, tag);
    }
    return tag;
}
function consumeKey(obj, key) {
    exports.consumeTag(getOrCreateTag(obj, key));
}
exports.consumeKey = consumeKey;
function dirtyKey(obj, key) {
    exports.dirtyTag(getOrCreateTag(obj, key));
}
exports.dirtyKey = dirtyKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy8tcHJpdmF0ZS91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLGdEQUE0QztBQUM1QyxpQ0FBMEI7QUFFMUIsTUFBTSxHQUFHO0lBR1AsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFRO1FBQ3hCLHFCQUFxQjtRQUNyQixHQUFHLENBQUMsYUFBYSxDQUFDO0lBQ3BCLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQVE7UUFDdEIsc0JBQXNCO1FBQ3RCLEdBQUcsQ0FBQyxhQUFhLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQVhVO0lBQVIsa0JBQU87MENBQWtDO0FBYTVDLFNBQWdCLFNBQVM7SUFDdkIsT0FBTyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ25CLENBQUM7QUFGRCw4QkFFQztBQUVZLFFBQUEsVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFDNUIsUUFBQSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUVyQyxZQUFZO0FBRVosTUFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7QUFFdEIsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLEdBQVcsRUFBUSxFQUFFO0lBQ25ELFVBQVUsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFGUyxRQUFBLGlCQUFpQixxQkFFMUI7QUFFSyxJQUFJLGVBQWUsR0FBRyxDQUFDLEdBQVcsRUFBUSxFQUFFO0lBQ2pELFFBQVEsQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUM7QUFGUyxRQUFBLGVBQWUsbUJBRXhCO0FBRUYsSUFBSSxPQUFPLGVBQUssS0FBSyxXQUFXLEVBQUU7SUFDaEMsb0RBQW9EO0lBQ3BELHlCQUFpQixHQUFHLENBQUMsR0FBRyxFQUFRLEVBQUUsQ0FBQyxlQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFhLENBQUMsQ0FBQztJQUNqRSxvREFBb0Q7SUFDcEQsdUJBQWUsR0FBRyxDQUFDLEdBQUcsRUFBUSxFQUFFLENBQUMsZUFBSyxDQUFDLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUN4RTtBQUVELFlBQVk7QUFFWixNQUFNLFdBQVcsR0FBRyxJQUFJLE9BQU8sRUFBNkIsQ0FBQztBQUU3RCxTQUFTLGNBQWMsQ0FBQyxHQUFXLEVBQUUsR0FBWTtJQUMvQyxJQUFJLElBQUksR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRWhDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtRQUN0QixJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNqQixXQUFXLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1QjtJQUVELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFeEIsSUFBSSxHQUFHLEtBQUssU0FBUyxFQUFFO1FBQ3JCLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLEdBQVcsRUFBRSxHQUFZO0lBQ2xELGtCQUFVLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUM7QUFGRCxnQ0FFQztBQUVELFNBQWdCLFFBQVEsQ0FBQyxHQUFXLEVBQUUsR0FBWTtJQUNoRCxnQkFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRkQsNEJBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFja2VkIH0gZnJvbSAnQGdsaW1tZXIvdHJhY2tpbmcnO1xuaW1wb3J0IEVtYmVyIGZyb20gJ2VtYmVyJztcblxuY2xhc3MgVGFnIHtcbiAgQHRyYWNrZWQgcHJpdmF0ZSBfX3RhZ192YWx1ZV9fOiB1bmRlZmluZWQ7XG5cbiAgc3RhdGljIGNvbnN1bWVUYWcodGFnOiBUYWcpIHtcbiAgICAvLyByZWFkIHRoZSB0YWcgdmFsdWVcbiAgICB0YWcuX190YWdfdmFsdWVfXztcbiAgfVxuXG4gIHN0YXRpYyBkaXJ0eVRhZyh0YWc6IFRhZykge1xuICAgIC8vIHdyaXRlIHRoZSB0YWcgdmFsdWVcbiAgICB0YWcuX190YWdfdmFsdWVfXyA9IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGFnKCkge1xuICByZXR1cm4gbmV3IFRhZygpO1xufVxuXG5leHBvcnQgY29uc3QgY29uc3VtZVRhZyA9IFRhZy5jb25zdW1lVGFnO1xuZXhwb3J0IGNvbnN0IGRpcnR5VGFnID0gVGFnLmRpcnR5VGFnO1xuXG4vLy8vLy8vLy8vLy9cblxuY29uc3QgQ09MTEVDVElPTl9TWU1CT0wgPSB7fTtcblxuZXhwb3J0IGxldCBjb25zdW1lQ29sbGVjdGlvbiA9IChvYmo6IG9iamVjdCk6IHZvaWQgPT4ge1xuICBjb25zdW1lS2V5KG9iaiwgQ09MTEVDVElPTl9TWU1CT0wpO1xufTtcblxuZXhwb3J0IGxldCBkaXJ0eUNvbGxlY3Rpb24gPSAob2JqOiBvYmplY3QpOiB2b2lkID0+IHtcbiAgZGlydHlLZXkob2JqLCBDT0xMRUNUSU9OX1NZTUJPTCk7XG59O1xuXG5pZiAodHlwZW9mIEVtYmVyICE9PSAndW5kZWZpbmVkJykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZW1iZXIvbmV3LW1vZHVsZS1pbXBvcnRzXG4gIGNvbnN1bWVDb2xsZWN0aW9uID0gKG9iaik6IHZvaWQgPT4gRW1iZXIuZ2V0KG9iaiwgJ1tdJyBhcyBuZXZlcik7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlbWJlci9uZXctbW9kdWxlLWltcG9ydHNcbiAgZGlydHlDb2xsZWN0aW9uID0gKG9iaik6IHZvaWQgPT4gRW1iZXIubm90aWZ5UHJvcGVydHlDaGFuZ2Uob2JqLCAnW10nKTtcbn1cblxuLy8vLy8vLy8vLy8vXG5cbmNvbnN0IE9CSkVDVF9UQUdTID0gbmV3IFdlYWtNYXA8b2JqZWN0LCBNYXA8dW5rbm93biwgVGFnPj4oKTtcblxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVUYWcob2JqOiBvYmplY3QsIGtleTogdW5rbm93bikge1xuICBsZXQgdGFncyA9IE9CSkVDVF9UQUdTLmdldChvYmopO1xuXG4gIGlmICh0YWdzID09PSB1bmRlZmluZWQpIHtcbiAgICB0YWdzID0gbmV3IE1hcCgpO1xuICAgIE9CSkVDVF9UQUdTLnNldChvYmosIHRhZ3MpO1xuICB9XG5cbiAgbGV0IHRhZyA9IHRhZ3MuZ2V0KGtleSk7XG5cbiAgaWYgKHRhZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGFnID0gbmV3IFRhZygpO1xuICAgIHRhZ3Muc2V0KGtleSwgdGFnKTtcbiAgfVxuXG4gIHJldHVybiB0YWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25zdW1lS2V5KG9iajogb2JqZWN0LCBrZXk6IHVua25vd24pIHtcbiAgY29uc3VtZVRhZyhnZXRPckNyZWF0ZVRhZyhvYmosIGtleSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlydHlLZXkob2JqOiBvYmplY3QsIGtleTogdW5rbm93bikge1xuICBkaXJ0eVRhZyhnZXRPckNyZWF0ZVRhZyhvYmosIGtleSkpO1xufVxuIl19