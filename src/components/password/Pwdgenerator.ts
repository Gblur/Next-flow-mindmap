export const passwordGeneratorContent = () => {
  const alphaRange: number = 26;
  const digitRange: number = 10;
  const symbolRange: number = 10;
  const loopRepetitions: number = 4;
  const staticRandom = (max: any) => Math.floor(Math.random() * max);

  const alphaOutputUpperCase = [...Array(alphaRange)].map((_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );
  const alphaOutputLowerCase = [...Array(alphaRange)].map((_, i) =>
    String.fromCharCode("a".charCodeAt(0) + i)
  );

  const digitOutput = [...Array(digitRange)].map((_, i) =>
    String.fromCharCode("0".charCodeAt(0) + i)
  );

  const symbolOutput = [...Array(symbolRange)].map((_, i) =>
    String.fromCharCode("!".charCodeAt(0) + i)
  );

  const generatePwd = () => {
    let pwd: string[] = [];
    for (let i = 0; i < loopRepetitions; i++) {
      pwd.push(alphaOutputUpperCase[staticRandom(alphaRange)]);
      pwd.push(digitOutput[staticRandom(digitRange)]);
      pwd.push(symbolOutput[staticRandom(symbolRange)]);
      pwd.push(alphaOutputLowerCase[staticRandom(alphaRange)]);
    }
    return pwd.join("").toString().substring(0, 10);
  };

  return generatePwd();
};
