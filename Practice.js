//Ab check
//Have the function abCheck(str) take the str parameter being passed and return
//the string true if the characters a and b are separated by exactly 3 places
//anywhere in the string at least once (ie. "lane borrowed" would result in
//true because there is exactly three characters between a and b). Otherwise
//return the string false.

function abCheck(str) {
    //letters we are searching for
    let searchLetters = ['a', 'b'];
    //the number of spaces between
    let letterSpace = 3;

    if (str.length < letterSpace +2) {
        return 'false'
    }
}