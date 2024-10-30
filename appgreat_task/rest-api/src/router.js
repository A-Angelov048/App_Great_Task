const nodeArr = [
    {
        id: 1,
        noteName: 'creat rest-api.',
        details: 'create client now',
    },

    {
        id: 2,
        noteName: 'create client.',
        details: 'create client now',
    }
];

const router = require('express').Router();

router.get('/note', (req, res) => {

    const data = nodeArr;
    res.json(data);

})

router.get('/note/:id', (req, res) => {

    const nodeId = req.params.id;
    const currentNote = nodeArr.filter((a) => a.id == nodeId);

    res.json(currentNote)

})

router.post('/note', (req, res) => {

    const data = req.body;
    const createNoteId = nodeArr.length + 1;



})

router.put('/note/edit/:id', (req, res) => {

    const nodeId = req.params.id;



})

router.delete('/note/delete/:id', (req, res) => {

    const nodeId = req.params.id;

})

module.exports = router;