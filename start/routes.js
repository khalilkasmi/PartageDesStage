'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.on('/login').render('auth.login')
Route.on('/register').render('auth.register')
Route.on('/add-stage').render('add_stage')


Route.post('/login','UserController.login')
Route.post('/register','UserController.create')
Route.post('/add-stage','StageController.create')
Route.post('/stage/update/:id','StageController.update')


Route.get('/stage/delete/:id','StageController.delete')
Route.get('/stage/edit/:id','StageController.edit')
Route.get('/','stageController.index');
Route.get('/logout',async ({auth,response})=> {
    await auth.logout()
    return response.redirect('/')
})
Route.get('/my-stages',async ({auth,response,view})=>{
    const stages = await auth.user.stages().fetch();
    return view.render('my_stages',{stages: stages.toJSON()})
})


