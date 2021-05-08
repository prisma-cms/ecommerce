import { FieldResolver } from 'nexus'
import { NexusGenObjects } from 'server/nexus/generated/nexus'

/**
 * Создание позиции
 */
export const createEntityType: FieldResolver<
  'Mutation',
  'createEntityType'
> = async (_, args, ctx) => {
  let success = false
  const message = ''
  let result: NexusGenObjects['EntityType'] | null = null

  const currentUser = ctx.currentUser

  if (currentUser) {
    await ctx.prisma.entityType
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
