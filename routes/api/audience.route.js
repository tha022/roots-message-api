var express = require('express');

var router = express.Router();

var AudienceController = require('../../controllers/audience.controller');

// router.get('/', function(req, res){
//     // res.render('', {
//     //
//     // })
//     console.log('render');
// });
router.post('/', AudienceController.createAudience);
// router.put('/', ToDoController.updateTodo)
// router.delete('/:id',ToDoController.removeTodo)


// router.get('/contact', (req, res) =&gt; {
//     res.render('contact', {
//     data: {},
//     errors: {}
//     })
// })

module.exports = router;