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
      table.integer('user_id')
      table.timestamps()
    })
  }

  down () {
    this.drop('stages')
  }
}

module.exports = StagesSchema
