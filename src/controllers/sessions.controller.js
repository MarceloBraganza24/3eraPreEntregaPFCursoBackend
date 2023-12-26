const getSession = async (req, res) => {
    try {
        const session = req.cookies['TokenJWT'];
        if(!session) return res.send('the session does not exist')
        res.send({ data: session });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export {
    getSession
}