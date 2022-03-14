// 1 Plain solution
function greet(name) {
    const str1 = "Hello, ";
    const str2 = " how are you doing today?";
    
    return str1 + name + str2;
}

// 2 Optimized solution
function greet(name) {
    return "Hello, " + name + " how are you doing today?";
}

// 3 Clever solution
function greet(name) {
    return `Hello, ${name} how are you doing today?`;
}

// 4 Coding golf
greet=_=>`Hello, ${_} how are you doing today?`
