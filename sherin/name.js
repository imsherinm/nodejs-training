const showName = (firstName, lastName) => {
    try {
        return firstName + ' ' + lastName;
    } catch (error) {
        console.log('error: ', error);
    }
};

const title = ['mr', 'ms'];

module.exports = { showName, title };
