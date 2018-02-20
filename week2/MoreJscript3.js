let language = {
    code: 'en',
    desc: 'English'
};

function printLanguage(language) {

    let keys = Object.keys(language);

    for (var i in keys) {
        var key = keys[i];
        console.log(key + " property value = " + language[key]);
    }

}

printLanguage(language);