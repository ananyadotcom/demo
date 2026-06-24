function dangerous(userInput) {
    eval(userInput);
}

dangerous("console.log('hello')");
