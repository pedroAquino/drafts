var express = require('express')
, router = express.Router();

router.get('/:name', function(request, response, next) {
  response.render(request.params.name);
});

module.exports = router;
