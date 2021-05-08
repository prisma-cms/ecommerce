import { objectType, extendType, inputObjectType, nonNull } from 'nexus'
import { createEntityType } from './resolvers'

export const EntityTypeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.entityTypes({
      description: 'Список типов сущностей',
      filtering: true,
      ordering: true,
    })
  },
})

export const EntityTypeCreateInput = inputObjectType({
  name: 'EntityTypeCreateInput',
  definition(t) {
    t.nonNull.string('name')
  },
})

export const EntityTypePayload = objectType({
  name: 'EntityTypePayload',
  description: 'Объект ответа мутации',
  definition(t) {
    t.nonNull.boolean('success')
    t.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'EntityType',
    })
  },
})

export const EntityTypeMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.nonNull.field('createEntityType', {
      description: 'Создать тип сущности',
      type: 'EntityTypePayload',
      args: {
        data: nonNull('EntityTypeCreateInput'),
      },
      resolve: createEntityType,
    })
  },
})

export const EntityType = objectType({
  name: 'EntityType',
  description: 'Тип сущности',
  sourceType: {
    module: '@prisma/client',
    export: 'EntityType',
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
