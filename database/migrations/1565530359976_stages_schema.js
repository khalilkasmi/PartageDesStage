'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StagesSchema extends Schema {
  up () {
    this.create('stages', (table) => {
      table.increments()
      table.string('entreprise')
      table.string('ecole')
      table.string('ville')
      table.string('theme')
      table.text('description')
      table.string('siteweb')
      table.string('email')
      table.integer('duration')
      table.string('type_stage')
      table.text('technologies')
      table.string('domaine')
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('stages')
  }
}

module.exports = StagesSchema
