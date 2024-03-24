/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false
    }
    const parsedS = s.split('').sort().join('')
    const parsedT = t.split('').sort().join('')
    return parsedS === parsedT
};