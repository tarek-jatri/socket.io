module.exports = (io, count) => {
    return (req, res) => {
        io.on('connection', (socket) => {
            res.status(200).json({
                count,
            })
            console.log('a user connected from response');
            socket.emit('count', {count: ++count});
            socket.on('disconnect', () => {
                console.log('user disconnected from response');
            });
        });
        res.status(200).json({
            count,
        })
    }
}
