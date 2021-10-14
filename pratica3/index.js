var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa = /** @class */ (function () {
    function Pessoa(p, id) {
        this.p = p;
        this.id = id;
    }
    return Pessoa;
}());
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old.");
    };
    return UserAccount;
}());
var CharAccount = /** @class */ (function (_super) {
    __extends(CharAccount, _super);
    function CharAccount(name, age, nickname, level, email, bonus) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        _this.email = email;
        _this.bonus = bonus;
        return _this;
    }
    Object.defineProperty(CharAccount.prototype, "getLevel", {
        get: function () {
            console.log("--------GET--------");
            return this.level;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CharAccount.prototype, "setLevel", {
        set: function (level) {
            this.level = level;
        },
        enumerable: false,
        configurable: true
    });
    return CharAccount;
}(UserAccount));
var will = new UserAccount("Willian", 30);
console.log(will);
console.log(will.age);
will.logDetails();
var john = new CharAccount("John", 45, "johnmaster", 80, "john@test.com", 43);
john.logDetails();
console.log(john.getLevel);
john.setLevel = 89;
console.log(john.getLevel);
