const noteArr = [
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

    const data = noteArr;
    res.json(data);

})

router.get('/note/:id', (req, res) => {

    const noteId = req.params.id;
    const currentNote = noteArr.filter((a) => a.id == noteId);
    const index = noteArr.indexOf(currentNote[0]);
    noteArr.splice(index, 1);



    res.json(currentNote)

})

router.post('/note', (req, res) => {

    const data = req.body;
    const createNoteId = noteArr.length + 1;




})

router.put('/note/edit/:id', (req, res) => {

    const noteId = req.params.id;
    const currentNote = noteArr.filter((a) => a.id == noteId);
    const index = noteArr.indexOf(currentNote[0]);


    res.json({ ok: true });

})

router.delete('/note/delete/:id', (req, res) => {

    const noteId = req.params.id;
    const currentNote = noteArr.filter((a) => a.id == noteId);
    const index = noteArr.indexOf(currentNote[0]);
    noteArr.splice(index, 1);

    res.json({ ok: true });
})

module.exports = router;