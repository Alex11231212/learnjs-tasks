let styles = ['Jazz', 'Blues'];
console.log(styles);

styles.push("Rock'n'roll");
console.log(styles);

styles[Math.floor((styles.length) / 2)] = 'Classic';
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift('Rap', 'Reggae');
console.log(styles);
