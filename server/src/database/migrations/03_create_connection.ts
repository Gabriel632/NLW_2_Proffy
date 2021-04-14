import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();        
        
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            // representa o que ocorre com essa tabela quando a o fk atualiza ou deleta
            // CASCADE - atualiza ou deleta junto 
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}