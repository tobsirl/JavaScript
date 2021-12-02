const numbers = [1, 2, 3, 4, 5];

// Includes
numbers.reduce((includes, value) => (includes ? includes : value === 3), false); 
numbers.reduce((includes, value) => (includes ? includes : value === 10), false); 
