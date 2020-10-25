module.exports.database = {

    url: 'mongodb+srv://jiif:123@cluster0.ko8li.mongodb.net/<dbname>?retryWrites=true&w=majority',
    options: {
        user: 'jiif',
        pass: '123',
        db: 'BD-EMDCOM',
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true

    }
}