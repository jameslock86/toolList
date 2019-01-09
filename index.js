
function count(str){
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z]/g, '');
    let obj = {};
    for (let i = 0; i <str.lenght; i++){
        if (obj[str[i]]){
            obj[str[i]] = obj[str[i]] + 1;
        }else{
            obj[str[i]] = 1;
        }
    }return obj;
}
//with a turanary function-->
function count(str){
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z]/g, '');
    let obj = {};
    for (let i = 0; i <str.lenght; i++){
      obj[str[i]] = obj[str[i]] ? ++obj[str[i]] : 1; 

    }return obj;
}
// return the charater that appears the most-->
function count(str){
    str = str.toLowerCase();
    str = str.replace(/[^a-zA-Z]/g, '');
    let obj = {};
    for (let i = 0; i <str.lenght; i++){
      obj[str[i]] = obj[str[i]] ? ++obj[str[i]] : 1; 

    }return obj;
}

//return if the str is a paladrum
// checking to see if the words are spelled the same forwards and backwords
function palindrome(str){
    let str2 = str.split('');
    str2.reverse();
    str2 = str2.split('');
    if (str === str2 ){
        return true;
    }else {
        return false;
    }
}

function palindrome(str){
    let str2 = str.split('');
    str2.reverse();
    str2 = str2.split('');
    return str === str2;
}
function palindrome(str){
    let str2 = str.split('').reverse().join();
    return str === str2;
}