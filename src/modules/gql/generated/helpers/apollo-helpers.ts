import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AuthPayloadKeySpecifier = ('data' | 'errors' | 'message' | 'success' | 'token' | AuthPayloadKeySpecifier)[];
export type AuthPayloadFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityKeySpecifier = ('createdAt' | 'id' | 'name' | 'updatedAt' | EntityKeySpecifier)[];
export type EntityFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityPayloadKeySpecifier = ('data' | 'errors' | 'message' | 'success' | EntityPayloadKeySpecifier)[];
export type EntityPayloadFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityTypeKeySpecifier = ('createdAt' | 'id' | 'name' | 'updatedAt' | EntityTypeKeySpecifier)[];
export type EntityTypeFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EntityTypePayloadKeySpecifier = ('data' | 'errors' | 'message' | 'success' | EntityTypePayloadKeySpecifier)[];
export type EntityTypePayloadFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createEntity' | 'createEntityType' | 'createStore' | 'signin' | 'signup' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createEntity?: FieldPolicy<any> | FieldReadFunction<any>,
	createEntityType?: FieldPolicy<any> | FieldReadFunction<any>,
	createStore?: FieldPolicy<any> | FieldReadFunction<any>,
	signin?: FieldPolicy<any> | FieldReadFunction<any>,
	signup?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('entities' | 'entityTypes' | 'me' | 'stores' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	entities?: FieldPolicy<any> | FieldReadFunction<any>,
	entityTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	stores?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequestErrorKeySpecifier = ('key' | 'message' | RequestErrorKeySpecifier)[];
export type RequestErrorFieldPolicy = {
	key?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StoreKeySpecifier = ('createdAt' | 'id' | 'name' | 'updatedAt' | StoreKeySpecifier)[];
export type StoreFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StorePayloadKeySpecifier = ('data' | 'errors' | 'message' | 'success' | StorePayloadKeySpecifier)[];
export type StorePayloadFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('createdAt' | 'email' | 'fullname' | 'id' | 'showEmail' | 'showFullname' | 'sudo' | 'updatedAt' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	showEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	showFullname?: FieldPolicy<any> | FieldReadFunction<any>,
	sudo?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	AuthPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthPayloadKeySpecifier | (() => undefined | AuthPayloadKeySpecifier),
		fields?: AuthPayloadFieldPolicy,
	},
	Entity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityKeySpecifier | (() => undefined | EntityKeySpecifier),
		fields?: EntityFieldPolicy,
	},
	EntityPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityPayloadKeySpecifier | (() => undefined | EntityPayloadKeySpecifier),
		fields?: EntityPayloadFieldPolicy,
	},
	EntityType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityTypeKeySpecifier | (() => undefined | EntityTypeKeySpecifier),
		fields?: EntityTypeFieldPolicy,
	},
	EntityTypePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EntityTypePayloadKeySpecifier | (() => undefined | EntityTypePayloadKeySpecifier),
		fields?: EntityTypePayloadFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RequestError?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequestErrorKeySpecifier | (() => undefined | RequestErrorKeySpecifier),
		fields?: RequestErrorFieldPolicy,
	},
	Store?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StoreKeySpecifier | (() => undefined | StoreKeySpecifier),
		fields?: StoreFieldPolicy,
	},
	StorePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StorePayloadKeySpecifier | (() => undefined | StorePayloadKeySpecifier),
		fields?: StorePayloadFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};