try {
    let car = newCar;
}

catch (error) {
    console.log('error: ', error);
}
finally {
    console.log('this always executes');
}