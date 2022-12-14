var Items = /** @class */ (function () {
    function Items(itemid, itemname, itemprice, itemcategory) {
        var _this = this;
        this.display = function () { return console.log(_this.itemid + ' ' + _this.itemname + ' ' + _this.itemprice + ' ' + _this.itemcategory); };
        this.itemid = itemid;
        this.itemname = itemname;
        this.itemprice = itemprice;
        this.itemcategory = itemcategory;
    }
    return Items;
}());
var item1 = new Items(100, "Item1", 500, "A");
var item2 = new Items(101, "Item2", 1000, "B");
var item3 = new Items(102, "Item3", 1500, "C");
item1.display();
item2.display();
item3.display();
