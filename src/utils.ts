/**
 * Convert string in URL (remove accents, spaces and special chars)
 * @param {*} str String to convert
 */

export const convertStringToURL = (str: string) => {
    let URL = str.toLowerCase();
    URL = URL.charAt(0).toLowerCase() + URL.slice(1);
    URL = URL.replace(/[&#,+()$~%^.'":*?!;<>{}/\\\\]/g, " ")
    URL = URL.replace(/ +/g, " ")
    URL = URL.trim()
    URL = removeAccents(URL)
    URL = URL.replace(/ /g, "-")
    return URL
}

let characterMap = { "À": "A", "Á": "A", "Â": "A", "Ã": "A", "Ä": "A", "Å": "A", "Ấ": "A", "Ắ": "A", "Ẳ": "A", "Ẵ": "A", "Ặ": "A", "Æ": "AE", "Ầ": "A", "Ằ": "A", "Ȃ": "A", "Ç": "C", "Ḉ": "C", "È": "E", "É": "E", "Ê": "E", "Ë": "E", "Ế": "E", "Ḗ": "E", "Ề": "E", "Ḕ": "E", "Ḝ": "E", "Ȇ": "E", "Ì": "I", "Í": "I", "Î": "I", "Ï": "I", "Ḯ": "I", "Ȋ": "I", "Ð": "D", "Ñ": "N", "Ò": "O", "Ó": "O", "Ô": "O", "Õ": "O", "Ö": "O", "Ø": "O", "Ố": "O", "Ṍ": "O", "Ṓ": "O", "Ȏ": "O", "Ù": "U", "Ú": "U", "Û": "U", "Ü": "U", "Ý": "Y", "à": "a", "á": "a", "â": "a", "ã": "a", "ä": "a", "å": "a", "ấ": "a", "ắ": "a", "ẳ": "a", "ẵ": "a", "ặ": "a", "æ": "ae", "ầ": "a", "ằ": "a", "ȃ": "a", "ç": "c", "ḉ": "c", "è": "e", "é": "e", "ê": "e", "ë": "e", "ế": "e", "ḗ": "e", "ề": "e", "ḕ": "e", "ḝ": "e", "ȇ": "e", "ì": "i", "í": "i", "î": "i", "ï": "i", "ḯ": "i", "ȋ": "i", "ð": "d", "ñ": "n", "ò": "o", "ó": "o", "ô": "o", "õ": "o", "ö": "o", "ø": "o", "ố": "o", "ṍ": "o", "ṓ": "o", "ȏ": "o", "ù": "u", "ú": "u", "û": "u", "ü": "u", "ý": "y", "ÿ": "y", "Ā": "A", "ā": "a", "Ă": "A", "ă": "a", "Ą": "A", "ą": "a", "Ć": "C", "ć": "c", "Ĉ": "C", "ĉ": "c", "Ċ": "C", "ċ": "c", "Č": "C", "č": "c", "C̆": "C", "c̆": "c", "Ď": "D", "ď": "d", "Đ": "D", "đ": "d", "Ē": "E", "ē": "e", "Ĕ": "E", "ĕ": "e", "Ė": "E", "ė": "e", "Ę": "E", "ę": "e", "Ě": "E", "ě": "e", "Ĝ": "G", "Ǵ": "G", "ĝ": "g", "ǵ": "g", "Ğ": "G", "ğ": "g", "Ġ": "G", "ġ": "g", "Ģ": "G", "ģ": "g", "Ĥ": "H", "ĥ": "h", "Ħ": "H", "ħ": "h", "Ḫ": "H", "ḫ": "h", "Ĩ": "I", "ĩ": "i", "Ī": "I", "ī": "i", "Ĭ": "I", "ĭ": "i", "Į": "I", "į": "i", "İ": "I", "ı": "i", "Ĳ": "IJ", "ĳ": "ij", "Ĵ": "J", "ĵ": "j", "Ķ": "K", "ķ": "k", "Ḱ": "K", "ḱ": "k", "K̆": "K", "k̆": "k", "Ĺ": "L", "ĺ": "l", "Ļ": "L", "ļ": "l", "Ľ": "L", "ľ": "l", "Ŀ": "L", "ŀ": "l", "Ł": "l", "ł": "l", "Ḿ": "M", "ḿ": "m", "M̆": "M", "m̆": "m", "Ń": "N", "ń": "n", "Ņ": "N", "ņ": "n", "Ň": "N", "ň": "n", "ŉ": "n", "N̆": "N", "n̆": "n", "Ō": "O", "ō": "o", "Ŏ": "O", "ŏ": "o", "Ő": "O", "ő": "o", "Œ": "OE", "œ": "oe", "P̆": "P", "p̆": "p", "Ŕ": "R", "ŕ": "r", "Ŗ": "R", "ŗ": "r", "Ř": "R", "ř": "r", "R̆": "R", "r̆": "r", "Ȓ": "R", "ȓ": "r", "Ś": "S", "ś": "s", "Ŝ": "S", "ŝ": "s", "Ş": "S", "Ș": "S", "ș": "s", "ş": "s", "Š": "S", "š": "s", "Ţ": "T", "ţ": "t", "ț": "t", "Ț": "T", "Ť": "T", "ť": "t", "Ŧ": "T", "ŧ": "t", "T̆": "T", "t̆": "t", "Ũ": "U", "ũ": "u", "Ū": "U", "ū": "u", "Ŭ": "U", "ŭ": "u", "Ů": "U", "ů": "u", "Ű": "U", "ű": "u", "Ų": "U", "ų": "u", "Ȗ": "U", "ȗ": "u", "V̆": "V", "v̆": "v", "Ŵ": "W", "ŵ": "w", "Ẃ": "W", "ẃ": "w", "X̆": "X", "x̆": "x", "Ŷ": "Y", "ŷ": "y", "Ÿ": "Y", "Y̆": "Y", "y̆": "y", "Ź": "Z", "ź": "z", "Ż": "Z", "ż": "z", "Ž": "Z", "ž": "z", "ſ": "s", "ƒ": "f", "Ơ": "O", "ơ": "o", "Ư": "U", "ư": "u", "Ǎ": "A", "ǎ": "a", "Ǐ": "I", "ǐ": "i", "Ǒ": "O", "ǒ": "o", "Ǔ": "U", "ǔ": "u", "Ǖ": "U", "ǖ": "u", "Ǘ": "U", "ǘ": "u", "Ǚ": "U", "ǚ": "u", "Ǜ": "U", "ǜ": "u", "Ứ": "U", "ứ": "u", "Ṹ": "U", "ṹ": "u", "Ǻ": "A", "ǻ": "a", "Ǽ": "AE", "ǽ": "ae", "Ǿ": "O", "ǿ": "o", "Þ": "TH", "þ": "th", "Ṕ": "P", "ṕ": "p", "Ṥ": "S", "ṥ": "s", "X́": "X", "x́": "x", "Ѓ": "Г", "ѓ": "г", "Ќ": "К", "ќ": "к", "A̋": "A", "a̋": "a", "E̋": "E", "e̋": "e", "I̋": "I", "i̋": "i", "Ǹ": "N", "ǹ": "n", "Ồ": "O", "ồ": "o", "Ṑ": "O", "ṑ": "o", "Ừ": "U", "ừ": "u", "Ẁ": "W", "ẁ": "w", "Ỳ": "Y", "ỳ": "y", "Ȁ": "A", "ȁ": "a", "Ȅ": "E", "ȅ": "e", "Ȉ": "I", "ȉ": "i", "Ȍ": "O", "ȍ": "o", "Ȑ": "R", "ȑ": "r", "Ȕ": "U", "ȕ": "u", "B̌": "B", "b̌": "b", "Č̣": "C", "č̣": "c", "Ê̌": "E", "ê̌": "e", "F̌": "F", "f̌": "f", "Ǧ": "G", "ǧ": "g", "Ȟ": "H", "ȟ": "h", "J̌": "J", "ǰ": "j", "Ǩ": "K", "ǩ": "k", "M̌": "M", "m̌": "m", "P̌": "P", "p̌": "p", "Q̌": "Q", "q̌": "q", "Ř̩": "R", "ř̩": "r", "Ṧ": "S", "ṧ": "s", "V̌": "V", "v̌": "v", "W̌": "W", "w̌": "w", "X̌": "X", "x̌": "x", "Y̌": "Y", "y̌": "y", "A̧": "A", "a̧": "a", "B̧": "B", "b̧": "b", "Ḑ": "D", "ḑ": "d", "Ȩ": "E", "ȩ": "e", "Ɛ̧": "E", "ɛ̧": "e", "Ḩ": "H", "ḩ": "h", "I̧": "I", "i̧": "i", "Ɨ̧": "I", "ɨ̧": "i", "M̧": "M", "m̧": "m", "O̧": "O", "o̧": "o", "Q̧": "Q", "q̧": "q", "U̧": "U", "u̧": "u", "X̧": "X", "x̧": "x", "Z̧": "Z", "z̧": "z" };

let chars = Object.keys(characterMap).join('|')
let allAccents = new RegExp(chars, 'g')

/**
 * Remove all accents from string
 * @param {*} string String to remove accents from
 */

export const removeAccents = (string: string) => {
    return string.replace(allAccents, (match) => {
        return characterMap[match];
    })
}

/**
 * Return date formated : 00-00-000
 * @param {*} num Date to convert
 */

export const numericDateParser = (num: string) => {
    let options: Record<string, string> = { year: "numeric", month: "2-digit", day: "2-digit" }
    let timestamp = Date.parse(num)
    let date = new Date(timestamp).toLocaleDateString('fr-FR', options)
    return date.toString()
}

export const decodeHtmlEntity = (str: string) => {
    return str.replace(/&#(\d+);/g, (match, dec) => {
        return String.fromCharCode(dec);
    });
};

/**
 * Check if a string is an HTML element (<> ... </>)
 * @param {*} string String to check
 */

export const isHTML = (string) => {
    let regexp = new RegExp(/<(?=.*? .*?\/ ?>|br|hr|input|!--|wbr)[a-z]+.*?>|<([a-z]+).*?<\/\1>/i)
    if (regexp.test(string)) return true
    else return false
}