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
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'username' | 'email' | 'fullname' | 'password' | 'active' | 'sudo' | 'createdAt' | 'updatedAt' | 'showEmail' | 'showFullname' | 'Tokens' | 'Stores'
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
  }
  Token: {

  }
  Store: {

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
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Token: Typegen.NexusPrismaFields<'Token'>
  Store: Typegen.NexusPrismaFields<'Store'>
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
  