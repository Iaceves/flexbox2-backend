const { User } = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function getOneUser(req, res) {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        if (user) {
            return res.json(user)
        }
        return res.status(404).send('User with this id doesnt exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function createNewUser(req,res) {
    try {
        const user = await new User (req.body)
        await user.save()
        return res.status(201).json({user: user})
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


async function updateUser(req,res) {
    try {
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id, req.body, {new: true})
        if (user) {
            return res.status(200).json(user)
        }
        throw new Error('User not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}

async function deleteUser(req,res) {
    try {
        const id = req.params.id
        const user =  await User.findByIdAndDelete(id)
        if (user) {
            return res.status(200).json(User)
        }
        throw new Error('User not found')
    } catch (e) {
        return res.status(500).json({error: e.message})
    }
}


module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateUser,
    deleteUser
}