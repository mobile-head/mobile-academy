const replaceUpperCaseLettersForDashLowerCase = (str) => {
  let alteredString = "";
  for (let character of str) {
    let alteredCharacter = character;
    if (alteredCharacter != alteredCharacter.toLowerCase()) {
      alteredString += "-" + alteredCharacter.toLowerCase();
    } else alteredString += alteredCharacter;
  }
  return alteredString;
};
const replaceAll = (search, replace, subject) => {
  while (subject.indexOf(search) != -1) {
    subject = subject.replace(replace, search);
  }
  return subject;
};

export class StyleSheet {
  static create(_obj) {
    let styleSheet = _obj;
    for (let currentStyle in styleSheet) {
      const values = styleSheet[currentStyle];
      let translatedValues = {};
      for (let currentProperty in values) {
        let translatedProperty = currentProperty;
        if (translatedProperty != translatedProperty.toLowerCase()) {
          translatedProperty =
            replaceUpperCaseLettersForDashLowerCase(translatedProperty);
        }
        translatedValues[translatedProperty] = values[currentProperty];
      }
      translatedValues = JSON.stringify(translatedValues);
      translatedValues = replaceAll(",", ";", translatedValues);
      translatedValues = translatedValues.slice(1).slice(0, -1);

      styleSheet[currentStyle] = translatedValues;
    }
    return styleSheet;
  }
}
