"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
// Convert the class component to TypeScript
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Initialize the state
        _this.state = {
            count: 0, // Initial count is set to 0
        };
        // Define the increment method
        _this.increment = function () {
            _this.setState(function (prevState) { return ({
                count: prevState.count + 1, // Increment count by 1 using prevState
            }); });
        };
        return _this;
    }
    // Render method returns JSX
    Counter.prototype.render = function () {
        return Count;
        {
            this.state.count;
        }
        /p> {/ * Display;
        the;
        current;
        count * /;
    };
    return Counter;
}(react_1.Component));
onClick;
{
    this.increment;
}
 > Increment < /button>{" "};
{ /* Button to increment count */ }
/div>;
;
exports.default = Counter; // Export the Counter component
