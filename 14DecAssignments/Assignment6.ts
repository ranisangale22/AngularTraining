class Operations
{
   
   // count:number = 0;
    
    setvalues(str1:string);
    setvalues(str1:string){
   
    console.log(str1.toLowerCase());
    if(str1[0]=="a"||str1[0]=="e"||str1[0]=="i"||str1[0]=="o"||str1[0]=="u")
    {
        this.countconsonants(str1);
        console.log(str1[0]);
    }
    else {
        this.countvowels(str1);
        console.log("from vowel");
    }
  
}

countconsonants=(str1:string)=>{
    let count=0;
    for (var i = 0; i < str1.length; i++) 
    {

        if (str1[i] !== "a" && str1[i] !== "e" && str1[i] !== "i" &&
          str1[i] !== "o" && str1[i] !== "u" && str1[i] !== " ") {
          count++;
        }
        
    };
    console.log("Number of Consonants"+' '+count);
}
countvowels=(str1:string)=>{
    let count=0;
    for (var i = 0; i < str1.length; i++) 
    {

        if (str1[i] == "a" || str1[i] == "e" || str1[i] == "i" ||
          str1[i] == "o" || str1[i] == "u" || str1[i] !== " ") {
          count++;
        }
        
    };
    console.log("Number of Vowels"+' '+count);
}
}
var op1=new Operations();
op1.setvalues("yash");