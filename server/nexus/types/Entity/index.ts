import { objectType, extendType, inputObjectType, nonNull } from 'nexus'
import { createEntity } from './resolvers'

export const EntityQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.entities({
      description: 'Список сущностей',
      filtering: true,
      ordering: true,
    })
  },
})

export const EntityCreateInput = inputObjectType({
  name: 'EntityCreateInput',
  definition(t) {
    t.nonNull.string('name')
  },
})

export const EntityPayload = objectType({
  name: 'EntityPayload',
  description: 'Объект ответа мутации',
  definition(t) {
    t.nonNull.boolean('success')
    t.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'Entity',
    })
  },
})

export const EntityMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.nonNull.field('createEntity', {
      description: 'Создать сущность',
      type: 'EntityPayload',
      args: {
        data: nonNull('EntityCreateInput'),
      },
      resolve: createEntity,
    })
  },
})

export const Entity = objectType({
  name: 'Entity',
  description: 'Сущность',
  sourceType: {
    module: '@prisma/client',
    export: 'Entity',
  },
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.date('createdAt', {
      description: 'Когда создан',
    })
    t.nonNull.date('updatedAt', {
      description: 'Когда обновлен',
    })
    t.string('name')
  },
})
