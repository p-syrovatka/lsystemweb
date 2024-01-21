export function LsysteStochasticmGen(axiom, rules, iterations) {
    let result = axiom;
    for (let i = 0; i < iterations; i++) {
        let newResult = "";
        for (let j = 0; j < result.length; j++) {
            let currentSymbol = result[j];
            let matchedRule = rules[currentSymbol];

            if (matchedRule) {
                let randomChance = Math.random() * 100; // Generate a random number between 0 and 100
                let cumulativeProbability = 0;
                let selectedRule = null;
                for (let k = 0; k < matchedRule.length; k++) {
                    let rule = matchedRule[k];
                    cumulativeProbability += parseFloat(rule.chance);
            
                    
                    if (randomChance < cumulativeProbability) {
                        selectedRule = rule;
                        break;
                    }
                }

                if (selectedRule) {
                    newResult += selectedRule.rule;
                } else {
                    newResult += currentSymbol;
                }
            } else {
                newResult += currentSymbol;
            }
        }
        result = newResult;
    }
    return result;
}