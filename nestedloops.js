let result = "";

for (let i = 1; i <= 6; i++) {
    result += "* ".repeat(i) + '\n';
};
console.log(result);





let col = 6;

for (x = 1; x<=col; x++) {
        result = "";   
    for (y =1; y<=x; y++) {
        result += '* ';
    }
    console.log(result);
}