export function stringToObject(str) {
    const rules = str.split('');
    return rules.reduce((acc, rule) => {
      const [key, value] = rule.split(':');
      acc[key] = value;
      return acc;
    }, {});
  }