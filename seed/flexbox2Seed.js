const db = require('../db')
const { User } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const User1 = await new User ({
        email: 'Juan3@gmail.com',
        username: 'Juan31',
        password: 'juan123',
    })
    User1.save()

    const User2 = await new User ({
        email: 'Michel',
        username: 'Michel93',
        password: 'michel123', 
    })
    User2.save()

    const User3 = await new User ({
        email: 'Alex',
        username: 'Alex84',
        password: 'alex123'
    })
    User3.save()
}

const run = async () => {
    await main()
    // await db.close()
}

run()