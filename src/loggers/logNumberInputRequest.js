const logNumberInputRequest = (numbers, isStrict) => {
  if (isStrict) {
    console.log(`Enter ${numbers} number${numbers > 1 ? 's' : ''}`);
  } else {
    console.log(`Enter at least ${numbers} number${numbers > 1 ? 's' : ''}`);
  }
}

export default logNumberInputRequest;