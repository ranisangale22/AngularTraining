var Operations = /** @class */ (function () {
    function Operations() {
        // count:number = 0;
        this.countconsonants = function (str1) {
            var count = 0;
            for (var i = 0; i < str1.length; i++) {
                if (str1[i] !== "a" && str1[i] !== "e" && str1[i] !== "i" &&
                    str1[i] !== "o" && str1[i] !== "u") {
                    count++;
                }
            }
            ;
            console.log("Number of Consonants" + ' ' + count);
        };
        this.countvowels = function (str1) {
            var count = 0;
            for (var i = 0; i < str1.length; i++) {
                if (str1[i] == "a" || str1[i] == "e" || str1[i] == "i" ||
                    str1[i] == "o" || str1[i] == "u") {
                    count++;
                }
            }
            ;
            console.log("Number of Vowels" + ' ' + count);
        };
    }
    Operations.prototype.setvalues = function (str1) {
        console.log(str1.toLowerCase());
        if (str1[0] == "a" || str1[0] == "e" || str1[0] == "i" || str1[0] == "o" || str1[0] == "u") {
            this.countconsonants(str1);
            //console.log(str1[0]);
        }
        else {
            this.countvowels(str1);
            //  console.log("from vowel");
        }
    };
    return Operations;
}());
var op1 = new Operations();
op1.setvalues("Ranisangale");
