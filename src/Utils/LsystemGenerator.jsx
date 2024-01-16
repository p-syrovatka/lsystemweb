export function LsystemGen(axiom, rules, iteration) {
    var result = axiom;
    var next = "";
    for (var i = 0; i < iteration; i++) {
        for (var j = 0; j < result.length; j++) {
            var c = result.charAt(j);
            if (rules[c] !== undefined) {
                next += rules[c];
            } else {
                next += c;
            }
        }
        result = next;
        next = "";
    }
    return result;
}