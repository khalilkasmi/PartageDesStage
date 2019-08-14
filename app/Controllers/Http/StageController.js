'use strict'

const Stage = use('App/Models/Stage')

class StageController {

    async index({view}){
        const stages = await Stage.all()
        return view.render('index',{stages: stages.toJSON()})    
    }   

    async create({view,response,request,auth}){

        const stage = request.all()

        await auth.user.stages().create({
            entreprise: stage.entreprise,
            ecole: stage.ecole,
            ville: stage.ville,
            theme: stage.theme,
            description: stage.description,
            siteweb: stage.siteweb,
            email: stage.email,
            duration: stage.duration,
            type_stage: stage.type_stage,
            technologies: stage.technologies,
            domaine: stage.domaine
        })
        return response.redirect('back')
    }

    async delete({response,request,params}){
        const stage = await Stage.find(params.id);
        await stage.delete();
        return response.redirect('/my-stages')
    }
    async edit({view,params}){
        const stage = await Stage.find(params.id);
        return view.render('stage_edit',{stage: stage.toJSON()})
    }
    async update({response,request,params}){
         const stage = await Stage.find(params.id)
         stage.entreprise = request.all().entreprise,
         stage.ecole = request.all().ecole,
         stage.ville = request.all().ville,
         stage.theme = request.all().theme,
         stage.description = request.all().description,
         stage.siteweb = request.all().siteweb,
         stage.email = request.all().email,
         stage.duration = request.all().duration,
         stage.type_stage = request.all().type_stage,
         stage.technologies = request.all().technologies
         stage.domaine = request.all().domaine
        await stage.save()

        return response.redirect('/my-stages')
    }
    async search({request,response,view}){
        if(!request.all().search_input){
            const stages = await Stage.all()
            return view.render('index',{stages: stages.toJSON()})
        }else{
        
        const stages = await Stage.query().where('entreprise','like','%'+request.all().search_input+'%')
        .orWhere('ecole','like','%'+request.all().search_input+'%')
        .orWhere('ville','like','%'+request.all().search_input+'%')
        .orWhere('theme','like','%'+request.all().search_input+'%')
        .orWhere('description','like','%'+request.all().search_input+'%')
        .orWhere('siteweb','like','%'+request.all().search_input+'%')
        .orWhere('email','like','%'+request.all().search_input+'%')
        .orWhere('type_stage','like','%'+request.all().search_input+'%')
        .orWhere('technologies','like','%'+request.all().search_input+'%')
        .orWhere('domaine','like','%'+request.all().search_input+'%')
        .fetch()
        return view.render('index',{stages: stages.toJSON()})
    }
    }

}

module.exports = StageController
