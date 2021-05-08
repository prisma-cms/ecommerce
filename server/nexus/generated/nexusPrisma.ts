import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    take?: boolean
    skip?: boolean
    cursor?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Token: Prisma.Token
  Store: Prisma.Store
  Entity: Prisma.Entity
  EntityType: Prisma.EntityType
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'username' | 'email' | 'fullname' | 'password' | 'active' | 'sudo' | 'createdAt' | 'updatedAt' | 'showEmail' | 'showFullname' | 'Tokens' | 'Stores' | 'Entities' | 'EntityTypes'
      ordering: 'id' | 'username' | 'email' | 'fullname' | 'password' | 'active' | 'sudo' | 'createdAt' | 'updatedAt' | 'showEmail' | 'showFullname'
    }
    tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
    stores: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById'
    }
    entities: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById' | 'CreatedBy' | 'entityTypeId' | 'EntityType'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById' | 'entityTypeId'
    }
    entityTypes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById' | 'CreatedBy' | 'Entities'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById'
    }
  },
  User: {
    Tokens: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiredAt' | 'userId' | 'User'
      ordering: 'id' | 'createdAt' | 'expiredAt' | 'userId'
    }
    Stores: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById' | 'CreatedBy'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById'
    }
    Entities: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById' | 'CreatedBy' | 'entityTypeId' | 'EntityType'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById' | 'entityTypeId'
    }
    EntityTypes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById' | 'CreatedBy' | 'Entities'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById'
    }
  }
  Token: {

  }
  Store: {

  }
  Entity: {

  }
  EntityType: {
    Entities: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById' | 'CreatedBy' | 'entityTypeId' | 'EntityType'
      ordering: 'id' | 'createdAt' | 'updatedAt' | 'name' | 'createdById' | 'entityTypeId'
    }
  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    token: 'Token'
    tokens: 'Token'
    store: 'Store'
    stores: 'Store'
    entity: 'Entity'
    entities: 'Entity'
    entityType: 'EntityType'
    entityTypes: 'EntityType'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'AffectedRowsOutput'
    deleteOneUser: 'User'
    deleteManyUser: 'AffectedRowsOutput'
    upsertOneUser: 'User'
    createOneToken: 'Token'
    updateOneToken: 'Token'
    updateManyToken: 'AffectedRowsOutput'
    deleteOneToken: 'Token'
    deleteManyToken: 'AffectedRowsOutput'
    upsertOneToken: 'Token'
    createOneStore: 'Store'
    updateOneStore: 'Store'
    updateManyStore: 'AffectedRowsOutput'
    deleteOneStore: 'Store'
    deleteManyStore: 'AffectedRowsOutput'
    upsertOneStore: 'Store'
    createOneEntity: 'Entity'
    updateOneEntity: 'Entity'
    updateManyEntity: 'AffectedRowsOutput'
    deleteOneEntity: 'Entity'
    deleteManyEntity: 'AffectedRowsOutput'
    upsertOneEntity: 'Entity'
    createOneEntityType: 'EntityType'
    updateOneEntityType: 'EntityType'
    updateManyEntityType: 'AffectedRowsOutput'
    deleteOneEntityType: 'EntityType'
    deleteManyEntityType: 'AffectedRowsOutput'
    upsertOneEntityType: 'EntityType'
  },
  User: {
    id: 'String'
    username: 'String'
    email: 'String'
    fullname: 'String'
    password: 'String'
    active: 'Boolean'
    sudo: 'Boolean'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    showEmail: 'Boolean'
    showFullname: 'Boolean'
    Tokens: 'Token'
    Stores: 'Store'
    Entities: 'Entity'
    EntityTypes: 'EntityType'
  }
  Token: {
    id: 'String'
    createdAt: 'DateTime'
    expiredAt: 'DateTime'
    userId: 'String'
    User: 'User'
  }
  Store: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    createdById: 'String'
    CreatedBy: 'User'
  }
  Entity: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    createdById: 'String'
    CreatedBy: 'User'
    entityTypeId: 'String'
    EntityType: 'EntityType'
  }
  EntityType: {
    id: 'String'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    name: 'String'
    createdById: 'String'
    CreatedBy: 'User'
    Entities: 'Entity'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Token: Typegen.NexusPrismaFields<'Token'>
  Store: Typegen.NexusPrismaFields<'Store'>
  Entity: Typegen.NexusPrismaFields<'Entity'>
  EntityType: Typegen.NexusPrismaFields<'EntityType'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  