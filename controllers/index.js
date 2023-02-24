const someoneFunction = (req, res, next) => {
    res.json('Camila Allred');
};

const johndoeFunction = (req, res, next) => {
    res.json('John  Doe');
};

module.exports = {someoneFunction, johndoeFunction};