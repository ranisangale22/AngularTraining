var result = '';
var str1 = function (str2) {
    for (var i = str2.length - 1; i >= 0; i--) {
        result += str2[i];
    }
    if (str2 == result) {
        console.log("given string is palindrom");
    }
    else {
        console.log("given string is not palindrom");
    }
};
str1("rani");
