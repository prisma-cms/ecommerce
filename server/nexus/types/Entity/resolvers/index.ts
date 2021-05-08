import { FieldResolver } from 'nexus'
import { NexusGenObjects } from 'server/nexus/generated/nexus'

/**
 * Создание сущности
 */
export const createEntity: FieldResolver<'Mutation', 'createEntity'> = async (
  _,
  args,
  ctx
) => {
  let success = false
  const message = ''
  let result: NexusGenObjects['Entity'] | null = null

  const currentUser = ctx.currentUser

  if (currentUser) {
    await ctx.prisma.entity
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
