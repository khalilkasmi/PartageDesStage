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
            ville: stage.ville
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
         stage.entreprise = request.all().entreprise   
         stage.ecole = request.all().ecole   
         stage.ville = request.all().ville   
        await stage.save()

        return response.redirect('/my-stages')
    }

}

module.exports = StageController
