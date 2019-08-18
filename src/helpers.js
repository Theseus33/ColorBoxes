/** Return a random element from a list */

function choice(arr) {
    let randomIndex = Math.floor(Math.random() * arr.lentgth);
    return arr[randomIndex];

}

export { choice };