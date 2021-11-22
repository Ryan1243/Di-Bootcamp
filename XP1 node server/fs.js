let fs = require('fs');
fs.readFile('Some Text To See.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }
    console.log(data);
});

fs.writeFile('Some Text To See.txt', 'Bla bla', function (err) { 
    if (err){ 
        console.log(err);
    }
    else{
        console.log('Write operation complete.');
    }
});


let newContent = "Buy orange juice"
fs.appendFile('Some Text To See.txt', '\n' + newContent, function (err) {
    if (err) {
        console.error(err)
        return
    }
});

fs.readFile('Some Text To See.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err)
        return
    }

    console.log(data)
});


// In order to delete text file comment out fs.unlink


/*fs.unlink('Some Text To See.txt', function (err) {
    console.log('write operation complete.');
});*/