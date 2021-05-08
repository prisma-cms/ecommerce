import { objectType, extendType, inputObjectType, nonNull } from 'nexus'
import { createStore } from './resolvers'
// import { signin, signup } from './resolvers'

export const StoreQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.stores({
      description: 'Список хранилищь',
      filtering: true,
      ordering: true,
    })
  },
})

export const StoreCreateInput = inputObjectType({
  name: 'StoreCreateInput',
  definition(t) {
    t.nonNull.string('name')
  },
})

export const StorePayload = objectType({
  name: 'StorePayload',
  description: 'Объект ответа мутации пользователя',
  definition(t) {
    t.nonNull.boolean('success')
    t.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'Store',
    })
  },
})

export const StoreMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.nonNull.field('createStore', {
      description: 'Создать хранилище',
      type: 'StorePayload',
      args: {
        data: nonNull('StoreCreateInput'),
      },
      resolve: createStore,
    })
  },
})

export const Store = objectType({
  name: 'Store',
  description: 'Хранилище',
  sourceType: {
    module: '@prisma/client',
    export: 'Store',
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
