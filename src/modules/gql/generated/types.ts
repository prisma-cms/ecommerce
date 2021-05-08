/* eslint-disable */

/** 
* ФАЙЛ ГЕНЕРИРУЕТСЯ АВТОМАТИЧЕСКИ, ПРАВИТЬ ЕГО НЕ НУЖНО 
* Команда для генерирования этого файла: "yarn generate:types" 
*/


export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: globalThis.Date;
  JSON: any;
};

/** Объект ответа мутации пользователя */
export interface AuthPayload {
  __typename?: 'AuthPayload';
  data?: Maybe<User>;
  errors: Array<RequestError>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
  token?: Maybe<Scalars['String']>;
}

export interface BoolFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
}


export interface DateTimeFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface DateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

/** Сущность */
export interface Entity {
  __typename?: 'Entity';
  /** Когда создан */
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  /** Когда обновлен */
  updatedAt: Scalars['DateTime'];
}

export interface EntityCreateInput {
  name: Scalars['String'];
}

export interface EntityListRelationFilter {
  every?: Maybe<EntityWhereInput>;
  none?: Maybe<EntityWhereInput>;
  some?: Maybe<EntityWhereInput>;
}

export interface EntityOrderByInput {
  createdAt?: Maybe<SortOrder>;
  createdById?: Maybe<SortOrder>;
  entityTypeId?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

/** Объект ответа мутации */
export interface EntityPayload {
  __typename?: 'EntityPayload';
  data?: Maybe<Entity>;
  errors: Array<RequestError>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
}

/** Тип сущности */
export interface EntityType {
  __typename?: 'EntityType';
  /** Когда создан */
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  /** Когда обновлен */
  updatedAt: Scalars['DateTime'];
}

export interface EntityTypeCreateInput {
  name: Scalars['String'];
}

export interface EntityTypeListRelationFilter {
  every?: Maybe<EntityTypeWhereInput>;
  none?: Maybe<EntityTypeWhereInput>;
  some?: Maybe<EntityTypeWhereInput>;
}

export interface EntityTypeOrderByInput {
  createdAt?: Maybe<SortOrder>;
  createdById?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

/** Объект ответа мутации */
export interface EntityTypePayload {
  __typename?: 'EntityTypePayload';
  data?: Maybe<EntityType>;
  errors: Array<RequestError>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
}

export interface EntityTypeWhereInput {
  AND?: Maybe<Array<EntityTypeWhereInput>>;
  CreatedBy?: Maybe<UserWhereInput>;
  Entities?: Maybe<EntityListRelationFilter>;
  NOT?: Maybe<Array<EntityTypeWhereInput>>;
  OR?: Maybe<Array<EntityTypeWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  createdById?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface EntityTypeWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface EntityWhereInput {
  AND?: Maybe<Array<EntityWhereInput>>;
  CreatedBy?: Maybe<UserWhereInput>;
  EntityType?: Maybe<EntityTypeWhereInput>;
  NOT?: Maybe<Array<EntityWhereInput>>;
  OR?: Maybe<Array<EntityWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  createdById?: Maybe<StringFilter>;
  entityTypeId?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface EntityWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}


export interface Mutation {
  __typename?: 'Mutation';
  /** Создать сущность */
  createEntity: EntityPayload;
  /** Создать тип сущности */
  createEntityType: EntityTypePayload;
  /** Создать хранилище */
  createStore: StorePayload;
  /** Авторизация */
  signin: AuthPayload;
  /** Регистрация */
  signup: AuthPayload;
}


export type MutationCreateEntityArgs = {
  data: EntityCreateInput;
};


export type MutationCreateEntityTypeArgs = {
  data: EntityTypeCreateInput;
};


export type MutationCreateStoreArgs = {
  data: StoreCreateInput;
};


export type MutationSigninArgs = {
  data: UserSigninDataInput;
  where: UserWhereUniqueInput;
};


export type MutationSignupArgs = {
  data: UserSignupDataInput;
};

export interface NestedBoolFilter {
  equals?: Maybe<Scalars['Boolean']>;
  not?: Maybe<NestedBoolFilter>;
}

export interface NestedDateTimeFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface NestedDateTimeNullableFilter {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
}

export interface NestedStringFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface NestedStringNullableFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface Query {
  __typename?: 'Query';
  /** Список сущностей */
  entities: Array<Entity>;
  /** Список типов сущностей */
  entityTypes: Array<EntityType>;
  me?: Maybe<User>;
  /** Список хранилищь */
  stores: Array<Store>;
  /** Список пользователей */
  users: Array<User>;
}


export type QueryEntitiesArgs = {
  cursor?: Maybe<EntityWhereUniqueInput>;
  orderBy?: Maybe<Array<EntityOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<EntityWhereInput>;
};


export type QueryEntityTypesArgs = {
  cursor?: Maybe<EntityTypeWhereUniqueInput>;
  orderBy?: Maybe<Array<EntityTypeOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<EntityTypeWhereInput>;
};


export type QueryStoresArgs = {
  cursor?: Maybe<StoreWhereUniqueInput>;
  orderBy?: Maybe<Array<StoreOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<StoreWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

/** Объект ошибки */
export interface RequestError {
  __typename?: 'RequestError';
  key: Scalars['String'];
  message: Scalars['String'];
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc'
}

/** Хранилище */
export interface Store {
  __typename?: 'Store';
  /** Когда создан */
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  /** Когда обновлен */
  updatedAt: Scalars['DateTime'];
}

export interface StoreCreateInput {
  name: Scalars['String'];
}

export interface StoreListRelationFilter {
  every?: Maybe<StoreWhereInput>;
  none?: Maybe<StoreWhereInput>;
  some?: Maybe<StoreWhereInput>;
}

export interface StoreOrderByInput {
  createdAt?: Maybe<SortOrder>;
  createdById?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
}

/** Объект ответа мутации */
export interface StorePayload {
  __typename?: 'StorePayload';
  data?: Maybe<Store>;
  errors: Array<RequestError>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
}

export interface StoreWhereInput {
  AND?: Maybe<Array<StoreWhereInput>>;
  CreatedBy?: Maybe<UserWhereInput>;
  NOT?: Maybe<Array<StoreWhereInput>>;
  OR?: Maybe<Array<StoreWhereInput>>;
  createdAt?: Maybe<DateTimeFilter>;
  createdById?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
}

export interface StoreWhereUniqueInput {
  id?: Maybe<Scalars['String']>;
}

export interface StringFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface StringNullableFilter {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
}

export interface TokenListRelationFilter {
  every?: Maybe<TokenWhereInput>;
  none?: Maybe<TokenWhereInput>;
  some?: Maybe<TokenWhereInput>;
}

export interface TokenWhereInput {
  AND?: Maybe<Array<TokenWhereInput>>;
  NOT?: Maybe<Array<TokenWhereInput>>;
  OR?: Maybe<Array<TokenWhereInput>>;
  User?: Maybe<UserWhereInput>;
  createdAt?: Maybe<DateTimeFilter>;
  expiredAt?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<StringFilter>;
  userId?: Maybe<StringFilter>;
}

/** Пользователь */
export interface User {
  __typename?: 'User';
  /** Когда создан */
  createdAt: Scalars['DateTime'];
  email?: Maybe<Scalars['String']>;
  fullname?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  /** Показывать емейл другим пользователям */
  showEmail: Scalars['Boolean'];
  /** Показывать ФИО другим пользователям */
  showFullname: Scalars['Boolean'];
  sudo?: Maybe<Scalars['Boolean']>;
  /** Когда обновлен */
  updatedAt: Scalars['DateTime'];
  username?: Maybe<Scalars['String']>;
}

export interface UserOrderByInput {
  active?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  fullname?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  showEmail?: Maybe<SortOrder>;
  showFullname?: Maybe<SortOrder>;
  sudo?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
}

export interface UserSigninDataInput {
  password: Scalars['String'];
}

export interface UserSignupDataInput {
  email: Scalars['String'];
  fullname?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  /** Показывать емейл другим пользователям */
  showEmail: Scalars['Boolean'];
  /** Показывать ФИО другим пользователям */
  showFullname: Scalars['Boolean'];
  username: Scalars['String'];
}

export interface UserWhereInput {
  AND?: Maybe<Array<UserWhereInput>>;
  Entities?: Maybe<EntityListRelationFilter>;
  EntityTypes?: Maybe<EntityTypeListRelationFilter>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  Stores?: Maybe<StoreListRelationFilter>;
  Tokens?: Maybe<TokenListRelationFilter>;
  active?: Maybe<BoolFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  email?: Maybe<StringFilter>;
  fullname?: Maybe<StringNullableFilter>;
  id?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  showEmail?: Maybe<BoolFilter>;
  showFullname?: Maybe<BoolFilter>;
  sudo?: Maybe<BoolFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  username?: Maybe<StringFilter>;
}

export interface UserWhereUniqueInput {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
}
