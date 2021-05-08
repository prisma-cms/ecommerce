import { FieldResolver } from 'nexus'
import { NexusGenObjects } from 'server/nexus/generated/nexus'

/**
 * Создание хранилища
 */
export const createStore: FieldResolver<'Mutation', 'createStore'> = async (
  _,
  args,
  ctx
) => {
  // const {  } = args.data || {}

  // const where = args.where as Prisma.StoreWhereUniqueInput

  // const store = await ctx.prisma.store.findUnique({
  //   where,
  // })

  let success = false
  const message = ''
  let result: NexusGenObjects['Store'] | null = null

  const currentUser = ctx.currentUser

  if (currentUser) {
    await ctx.prisma.store
      .create({
        data: {
          ...args.data,
          CreatedBy: {
            connect: {
              id: currentUser.id,
            },
          },
        },
      })
      .then((r) => {
        success = true
        result = r
      })
  }

  return {
    success,
    message,
    errors: [],
    data: result,
  }
}
