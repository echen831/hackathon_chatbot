const capFirstLetter = (str) => {

    if (!str || !str.length) return;
    
    return str[0].toUpperCase() + str.slice(1);
};

module.exports = capFirstLetter