const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = lowercase.toUpperCase();
const numbers = "1234567890";
const symbols = "!#$%&/=¡+-_.@|<>";

export function GeneratePassword({
  characterLength = 5,
  includeUppercase = true,
  includeLowercase = true,
  includeNumbers = true,
  includeSymbols,
} = {}) {
  const availableCharacters = [
    ...(includeLowercase ? lowercase : []),
    ...(includeUppercase ? uppercase : []),
    ...(includeNumbers ? numbers : []),
    ...(includeSymbols ? symbols : []),
  ];
  const availableCharactersLength = availableCharacters.length;
  if (!availableCharactersLength) return;

  let password = "";
  for (let i = 0; i < characterLength; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharactersLength);
    password += availableCharacters[randomIndex];
  }

  return password;
}
