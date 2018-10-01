var css = require('sheetify')
var choo = require('choo')

css('tachyons')

css`
html{
  width:100%;
  height:100%;
}
`

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

app.use(require('./stores/auth'))
// app.use(require('./stores/overview'))
app.use(require('./stores/syllabus'))

app.route('/', require('./views/main'))
app.route('/auth', require('./views/auth'))
app.route('/overview', require('./views/overview'))
app.route('/syllabus', require('./views/syllabus'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
