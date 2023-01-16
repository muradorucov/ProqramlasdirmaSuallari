let countries = ["Azerbaijan", "Belarus", "Canada", "Denmark", "Estonia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kazakhstan", "Latvia", "Moldova", "Netherlands", "Oman", "Poland"];
    
function findLongestName(countries) {
    let longestName = "";
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].length > longestName.length) {
            longestName = countries[i];
        }
    }
    return longestName;
}