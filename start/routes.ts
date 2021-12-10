import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.post('/teste', async ({ view }) => {
  return view.render('welcome')
})
