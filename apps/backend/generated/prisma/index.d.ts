/**
 * Client
 **/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model ProfileEntity
 *
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>;
/**
 * Model PantryItem
 *
 */
export type PantryItem = $Result.DefaultSelection<Prisma.$PantryItemPayload>;
/**
 * Model CollectionEntity
 *
 */
export type Collection = $Result.DefaultSelection<Prisma.$CollectionPayload>;
/**
 * Model GroceryItemEntity
 *
 */
export type GroceryItem = $Result.DefaultSelection<Prisma.$GroceryItemPayload>;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken =
  $Result.DefaultSelection<Prisma.$RefreshTokenPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **ProfileEntity** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pantryItem`: Exposes CRUD operations for the **PantryItem** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more PantryItems
   * const pantryItems = await prisma.pantryItem.findMany()
   * ```
   */
  get pantryItem(): Prisma.PantryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collection`: Exposes CRUD operations for the **CollectionEntity** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Collections
   * const collections = await prisma.collection.findMany()
   * ```
   */
  get collection(): Prisma.CollectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groceryItem`: Exposes CRUD operations for the **GroceryItemEntity** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more GroceryItems
   * const groceryItems = await prisma.groceryItem.findMany()
   * ```
   */
  get groceryItem(): Prisma.GroceryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more RefreshTokens
   * const refreshTokens = await prisma.refreshToken.findMany()
   * ```
   */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import Bytes = runtime.Bytes;
  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    User: 'User';
    Profile: 'Profile';
    PantryItem: 'PantryItem';
    Collection: 'Collection';
    GroceryItem: 'GroceryItem';
    RefreshToken: 'RefreshToken';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'user'
        | 'profile'
        | 'pantryItem'
        | 'collection'
        | 'groceryItem'
        | 'refreshToken';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>;
        fields: Prisma.ProfileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[];
          };
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[];
          };
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[];
          };
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>;
          };
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProfile>;
          };
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProfileGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>;
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number;
          };
        };
      };
      PantryItem: {
        payload: Prisma.$PantryItemPayload<ExtArgs>;
        fields: Prisma.PantryItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PantryItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PantryItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>;
          };
          findFirst: {
            args: Prisma.PantryItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PantryItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>;
          };
          findMany: {
            args: Prisma.PantryItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>[];
          };
          create: {
            args: Prisma.PantryItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>;
          };
          createMany: {
            args: Prisma.PantryItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PantryItemCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>[];
          };
          delete: {
            args: Prisma.PantryItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>;
          };
          update: {
            args: Prisma.PantryItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>;
          };
          deleteMany: {
            args: Prisma.PantryItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PantryItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PantryItemUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>[];
          };
          upsert: {
            args: Prisma.PantryItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PantryItemPayload>;
          };
          aggregate: {
            args: Prisma.PantryItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePantryItem>;
          };
          groupBy: {
            args: Prisma.PantryItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PantryItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.PantryItemCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<PantryItemCountAggregateOutputType>
              | number;
          };
        };
      };
      Collection: {
        payload: Prisma.$CollectionPayload<ExtArgs>;
        fields: Prisma.CollectionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CollectionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CollectionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          findFirst: {
            args: Prisma.CollectionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CollectionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          findMany: {
            args: Prisma.CollectionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[];
          };
          create: {
            args: Prisma.CollectionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          createMany: {
            args: Prisma.CollectionCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CollectionCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[];
          };
          delete: {
            args: Prisma.CollectionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          update: {
            args: Prisma.CollectionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          deleteMany: {
            args: Prisma.CollectionDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CollectionUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CollectionUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>[];
          };
          upsert: {
            args: Prisma.CollectionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CollectionPayload>;
          };
          aggregate: {
            args: Prisma.CollectionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCollection>;
          };
          groupBy: {
            args: Prisma.CollectionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CollectionGroupByOutputType>[];
          };
          count: {
            args: Prisma.CollectionCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<CollectionCountAggregateOutputType>
              | number;
          };
        };
      };
      GroceryItem: {
        payload: Prisma.$GroceryItemPayload<ExtArgs>;
        fields: Prisma.GroceryItemFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.GroceryItemFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.GroceryItemFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>;
          };
          findFirst: {
            args: Prisma.GroceryItemFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.GroceryItemFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>;
          };
          findMany: {
            args: Prisma.GroceryItemFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>[];
          };
          create: {
            args: Prisma.GroceryItemCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>;
          };
          createMany: {
            args: Prisma.GroceryItemCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.GroceryItemCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>[];
          };
          delete: {
            args: Prisma.GroceryItemDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>;
          };
          update: {
            args: Prisma.GroceryItemUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>;
          };
          deleteMany: {
            args: Prisma.GroceryItemDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.GroceryItemUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.GroceryItemUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>[];
          };
          upsert: {
            args: Prisma.GroceryItemUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GroceryItemPayload>;
          };
          aggregate: {
            args: Prisma.GroceryItemAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGroceryItem>;
          };
          groupBy: {
            args: Prisma.GroceryItemGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GroceryItemGroupByOutputType>[];
          };
          count: {
            args: Prisma.GroceryItemCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<GroceryItemCountAggregateOutputType>
              | number;
          };
        };
      };
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>;
        fields: Prisma.RefreshTokenFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
          };
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
          };
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[];
          };
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>;
          };
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRefreshToken>;
          };
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[];
          };
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<RefreshTokenCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory;
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[];
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    profile?: ProfileOmit;
    pantryItem?: PantryItemOmit;
    collection?: CollectionOmit;
    groceryItem?: GroceryItemOmit;
    refreshToken?: RefreshTokenOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    pantryItems: number;
    collections: number;
    groceryItems: number;
    refreshTokens: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    pantryItems?: boolean | UserCountOutputTypeCountPantryItemsArgs;
    collections?: boolean | UserCountOutputTypeCountCollectionsArgs;
    groceryItems?: boolean | UserCountOutputTypeCountGroceryItemsArgs;
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPantryItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PantryItemWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCollectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CollectionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroceryItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GroceryItemWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RefreshTokenWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    passwordHash: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    passwordHash: string | null;
    name: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      profile?: boolean | User$profileArgs<ExtArgs>;
      pantryItems?: boolean | User$pantryItemsArgs<ExtArgs>;
      collections?: boolean | User$collectionsArgs<ExtArgs>;
      groceryItems?: boolean | User$groceryItemsArgs<ExtArgs>;
      refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      passwordHash?: boolean;
      name?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'email' | 'passwordHash' | 'name' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    profile?: boolean | User$profileArgs<ExtArgs>;
    pantryItems?: boolean | User$pantryItemsArgs<ExtArgs>;
    collections?: boolean | User$collectionsArgs<ExtArgs>;
    groceryItems?: boolean | User$groceryItemsArgs<ExtArgs>;
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null;
      pantryItems: Prisma.$PantryItemPayload<ExtArgs>[];
      collections: Prisma.$CollectionPayload<ExtArgs>[];
      groceryItems: Prisma.$GroceryItemPayload<ExtArgs>[];
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        passwordHash: string | null;
        name: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    profile<T extends User$profileArgs<ExtArgs> = {}>(
      args?: Subset<T, User$profileArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    pantryItems<T extends User$pantryItemsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$pantryItemsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PantryItemPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    collections<T extends User$collectionsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$collectionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$CollectionPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    groceryItems<T extends User$groceryItemsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$groceryItemsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$GroceryItemPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(
      args?: Subset<T, User$refreshTokensArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$RefreshTokenPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly passwordHash: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly createdAt: FieldRef<'User', 'DateTime'>;
    readonly updatedAt: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.profile
   */
  export type User$profileArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileEntity
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileEntity
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    where?: ProfileWhereInput;
  };

  /**
   * User.pantryItems
   */
  export type User$pantryItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null;
    where?: PantryItemWhereInput;
    orderBy?:
      | PantryItemOrderByWithRelationInput
      | PantryItemOrderByWithRelationInput[];
    cursor?: PantryItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PantryItemScalarFieldEnum | PantryItemScalarFieldEnum[];
  };

  /**
   * User.collections
   */
  export type User$collectionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionEntity
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectionEntity
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    where?: CollectionWhereInput;
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    cursor?: CollectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * User.groceryItems
   */
  export type User$groceryItemsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroceryItemEntity
     */
    select?: GroceryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroceryItemEntity
     */
    omit?: GroceryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null;
    where?: GroceryItemWhereInput;
    orderBy?:
      | GroceryItemOrderByWithRelationInput
      | GroceryItemOrderByWithRelationInput[];
    cursor?: GroceryItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: GroceryItemScalarFieldEnum | GroceryItemScalarFieldEnum[];
  };

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    where?: RefreshTokenWhereInput;
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    cursor?: RefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model ProfileEntity
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  export type ProfileMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
  };

  export type ProfileMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
  };

  export type ProfileCountAggregateOutputType = {
    id: number;
    userId: number;
    diet: number;
    intolerances: number;
    cuisines: number;
    goals: number;
    _all: number;
  };

  export type ProfileMinAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type ProfileMaxAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type ProfileCountAggregateInputType = {
    id?: true;
    userId?: true;
    diet?: true;
    intolerances?: true;
    cuisines?: true;
    goals?: true;
    _all?: true;
  };

  export type ProfileAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which ProfileEntity to aggregate.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Profiles
     **/
    _count?: true | ProfileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProfileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProfileMaxAggregateInputType;
  };

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>;
  };

  export type ProfileGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProfileWhereInput;
    orderBy?:
      | ProfileOrderByWithAggregationInput
      | ProfileOrderByWithAggregationInput[];
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum;
    having?: ProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileCountAggregateInputType | true;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
  };

  export type ProfileGroupByOutputType = {
    id: string;
    userId: string;
    diet: string[];
    intolerances: string[];
    cuisines: string[];
    goals: string[];
    _count: ProfileCountAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
  };

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProfileGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ProfileGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>;
        }
      >
    >;

  export type ProfileSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      diet?: boolean;
      intolerances?: boolean;
      cuisines?: boolean;
      goals?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type ProfileSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      diet?: boolean;
      intolerances?: boolean;
      cuisines?: boolean;
      goals?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type ProfileSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      diet?: boolean;
      intolerances?: boolean;
      cuisines?: boolean;
      goals?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['profile']
  >;

  export type ProfileSelectScalar = {
    id?: boolean;
    userId?: boolean;
    diet?: boolean;
    intolerances?: boolean;
    cuisines?: boolean;
    goals?: boolean;
  };

  export type ProfileOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'diet' | 'intolerances' | 'cuisines' | 'goals',
    ExtArgs['result']['profile']
  >;
  export type ProfileInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ProfileIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ProfileIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ProfilePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Profile';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        diet: string[];
        intolerances: string[];
        cuisines: string[];
        goals: string[];
      },
      ExtArgs['result']['profile']
    >;
    composites: {};
  };

  type ProfileGetPayload<
    S extends boolean | null | undefined | ProfileDefaultArgs,
  > = $Result.GetResult<Prisma.$ProfilePayload, S>;

  type ProfileCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileCountAggregateInputType | true;
  };

  export interface ProfileDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Profile'];
      meta: { name: 'Profile' };
    };
    /**
     * Find zero or one ProfileEntity that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a ProfileEntity
     * @example
     * // Get one ProfileEntity
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(
      args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ProfileEntity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a ProfileEntity
     * @example
     * // Get one ProfileEntity
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProfileEntity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a ProfileEntity
     * @example
     * // Get one ProfileEntity
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(
      args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ProfileEntity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a ProfileEntity
     * @example
     * // Get one ProfileEntity
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     *
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProfileFindManyArgs>(
      args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ProfileEntity.
     * @param {ProfileCreateArgs} args - Arguments to create a ProfileEntity.
     * @example
     * // Create one ProfileEntity
     * const ProfileEntity = await prisma.profile.create({
     *   data: {
     *     // ... data to create a ProfileEntity
     *   }
     * })
     *
     */
    create<T extends ProfileCreateArgs>(
      args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProfileCreateManyArgs>(
      args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ProfileEntity.
     * @param {ProfileDeleteArgs} args - Arguments to delete one ProfileEntity.
     * @example
     * // Delete one ProfileEntity
     * const ProfileEntity = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one ProfileEntity
     *   }
     * })
     *
     */
    delete<T extends ProfileDeleteArgs>(
      args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ProfileEntity.
     * @param {ProfileUpdateArgs} args - Arguments to update one ProfileEntity.
     * @example
     * // Update one ProfileEntity
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProfileUpdateArgs>(
      args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProfileDeleteManyArgs>(
      args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProfileUpdateManyArgs>(
      args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ProfileEntity.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a ProfileEntity.
     * @example
     * // Update or create a ProfileEntity
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a ProfileEntity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProfileEntity we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(
      args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>,
    ): Prisma__ProfileClient<
      $Result.GetResult<
        Prisma.$ProfilePayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
     **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ProfileEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProfileAggregateArgs>(
      args: Subset<T, ProfileAggregateArgs>,
    ): Prisma.PrismaPromise<GetProfileAggregateType<T>>;

    /**
     * Group by ProfileEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProfileGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProfileEntity model
     */
    readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProfileEntity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the ProfileEntity model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<'Profile', 'String'>;
    readonly userId: FieldRef<'Profile', 'String'>;
    readonly diet: FieldRef<'Profile', 'String[]'>;
    readonly intolerances: FieldRef<'Profile', 'String[]'>;
    readonly cuisines: FieldRef<'Profile', 'String[]'>;
    readonly goals: FieldRef<'Profile', 'String[]'>;
  }

  // Custom InputTypes
  /**
   * ProfileEntity findUnique
   */
  export type ProfileFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileEntity
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileEntity
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProfileEntity to fetch.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * ProfileEntity findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileEntity
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileEntity
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProfileEntity to fetch.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * ProfileEntity findFirst
   */
  export type ProfileFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileEntity
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileEntity
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProfileEntity to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * ProfileEntity findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileEntity
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileEntity
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which ProfileEntity to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * ProfileEntity findMany
   */
  export type ProfileFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileEntity
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileEntity
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Profiles to fetch.
     */
    orderBy?:
      | ProfileOrderByWithRelationInput
      | ProfileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Profiles.
     */
    skip?: number;
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[];
  };

  /**
   * ProfileEntity create
   */
  export type ProfileCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileEntity
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileEntity
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The data needed to create a ProfileEntity.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>;
  };

  /**
   * ProfileEntity createMany
   */
  export type ProfileCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ProfileEntity createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileEntity
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileEntity
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProfileEntity update
   */
  export type ProfileUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileEntity
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileEntity
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The data needed to update a ProfileEntity.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>;
    /**
     * Choose, which ProfileEntity to update.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * ProfileEntity updateMany
   */
  export type ProfileUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>;
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput;
    /**
     * Limit how many Profiles to update.
     */
    limit?: number;
  };

  /**
   * ProfileEntity updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileEntity
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileEntity
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>;
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput;
    /**
     * Limit how many Profiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ProfileEntity upsert
   */
  export type ProfileUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileEntity
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileEntity
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * The filter to search for the ProfileEntity to update in case it exists.
     */
    where: ProfileWhereUniqueInput;
    /**
     * In case the ProfileEntity found by the `where` argument doesn't exist, create a new ProfileEntity with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>;
    /**
     * In case the ProfileEntity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>;
  };

  /**
   * ProfileEntity delete
   */
  export type ProfileDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileEntity
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileEntity
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
    /**
     * Filter which ProfileEntity to delete.
     */
    where: ProfileWhereUniqueInput;
  };

  /**
   * ProfileEntity deleteMany
   */
  export type ProfileDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput;
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number;
  };

  /**
   * ProfileEntity without action
   */
  export type ProfileDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProfileEntity
     */
    select?: ProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProfileEntity
     */
    omit?: ProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null;
  };

  /**
   * Model PantryItem
   */

  export type AggregatePantryItem = {
    _count: PantryItemCountAggregateOutputType | null;
    _avg: PantryItemAvgAggregateOutputType | null;
    _sum: PantryItemSumAggregateOutputType | null;
    _min: PantryItemMinAggregateOutputType | null;
    _max: PantryItemMaxAggregateOutputType | null;
  };

  export type PantryItemAvgAggregateOutputType = {
    ingredientId: number | null;
    amount: number | null;
  };

  export type PantryItemSumAggregateOutputType = {
    ingredientId: number | null;
    amount: number | null;
  };

  export type PantryItemMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    ingredientId: number | null;
    name: string | null;
    amount: number | null;
    unit: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PantryItemMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    ingredientId: number | null;
    name: string | null;
    amount: number | null;
    unit: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type PantryItemCountAggregateOutputType = {
    id: number;
    userId: number;
    ingredientId: number;
    name: number;
    amount: number;
    unit: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type PantryItemAvgAggregateInputType = {
    ingredientId?: true;
    amount?: true;
  };

  export type PantryItemSumAggregateInputType = {
    ingredientId?: true;
    amount?: true;
  };

  export type PantryItemMinAggregateInputType = {
    id?: true;
    userId?: true;
    ingredientId?: true;
    name?: true;
    amount?: true;
    unit?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PantryItemMaxAggregateInputType = {
    id?: true;
    userId?: true;
    ingredientId?: true;
    name?: true;
    amount?: true;
    unit?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type PantryItemCountAggregateInputType = {
    id?: true;
    userId?: true;
    ingredientId?: true;
    name?: true;
    amount?: true;
    unit?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type PantryItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PantryItem to aggregate.
     */
    where?: PantryItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PantryItems to fetch.
     */
    orderBy?:
      | PantryItemOrderByWithRelationInput
      | PantryItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PantryItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PantryItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PantryItems
     **/
    _count?: true | PantryItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PantryItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PantryItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PantryItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PantryItemMaxAggregateInputType;
  };

  export type GetPantryItemAggregateType<T extends PantryItemAggregateArgs> = {
    [P in keyof T & keyof AggregatePantryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePantryItem[P]>
      : GetScalarType<T[P], AggregatePantryItem[P]>;
  };

  export type PantryItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: PantryItemWhereInput;
    orderBy?:
      | PantryItemOrderByWithAggregationInput
      | PantryItemOrderByWithAggregationInput[];
    by: PantryItemScalarFieldEnum[] | PantryItemScalarFieldEnum;
    having?: PantryItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PantryItemCountAggregateInputType | true;
    _avg?: PantryItemAvgAggregateInputType;
    _sum?: PantryItemSumAggregateInputType;
    _min?: PantryItemMinAggregateInputType;
    _max?: PantryItemMaxAggregateInputType;
  };

  export type PantryItemGroupByOutputType = {
    id: string;
    userId: string;
    ingredientId: number;
    name: string;
    amount: number | null;
    unit: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PantryItemCountAggregateOutputType | null;
    _avg: PantryItemAvgAggregateOutputType | null;
    _sum: PantryItemSumAggregateOutputType | null;
    _min: PantryItemMinAggregateOutputType | null;
    _max: PantryItemMaxAggregateOutputType | null;
  };

  type GetPantryItemGroupByPayload<T extends PantryItemGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PantryItemGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PantryItemGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PantryItemGroupByOutputType[P]>
            : GetScalarType<T[P], PantryItemGroupByOutputType[P]>;
        }
      >
    >;

  export type PantryItemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      ingredientId?: boolean;
      name?: boolean;
      amount?: boolean;
      unit?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['pantryItem']
  >;

  export type PantryItemSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      ingredientId?: boolean;
      name?: boolean;
      amount?: boolean;
      unit?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['pantryItem']
  >;

  export type PantryItemSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      ingredientId?: boolean;
      name?: boolean;
      amount?: boolean;
      unit?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['pantryItem']
  >;

  export type PantryItemSelectScalar = {
    id?: boolean;
    userId?: boolean;
    ingredientId?: boolean;
    name?: boolean;
    amount?: boolean;
    unit?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type PantryItemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'userId'
    | 'ingredientId'
    | 'name'
    | 'amount'
    | 'unit'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['pantryItem']
  >;
  export type PantryItemInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PantryItemIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type PantryItemIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $PantryItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'PantryItem';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        ingredientId: number;
        name: string;
        amount: number | null;
        unit: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['pantryItem']
    >;
    composites: {};
  };

  type PantryItemGetPayload<
    S extends boolean | null | undefined | PantryItemDefaultArgs,
  > = $Result.GetResult<Prisma.$PantryItemPayload, S>;

  type PantryItemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    PantryItemFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: PantryItemCountAggregateInputType | true;
  };

  export interface PantryItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['PantryItem'];
      meta: { name: 'PantryItem' };
    };
    /**
     * Find zero or one PantryItem that matches the filter.
     * @param {PantryItemFindUniqueArgs} args - Arguments to find a PantryItem
     * @example
     * // Get one PantryItem
     * const pantryItem = await prisma.pantryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PantryItemFindUniqueArgs>(
      args: SelectSubset<T, PantryItemFindUniqueArgs<ExtArgs>>,
    ): Prisma__PantryItemClient<
      $Result.GetResult<
        Prisma.$PantryItemPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one PantryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PantryItemFindUniqueOrThrowArgs} args - Arguments to find a PantryItem
     * @example
     * // Get one PantryItem
     * const pantryItem = await prisma.pantryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PantryItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PantryItemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__PantryItemClient<
      $Result.GetResult<
        Prisma.$PantryItemPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PantryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemFindFirstArgs} args - Arguments to find a PantryItem
     * @example
     * // Get one PantryItem
     * const pantryItem = await prisma.pantryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PantryItemFindFirstArgs>(
      args?: SelectSubset<T, PantryItemFindFirstArgs<ExtArgs>>,
    ): Prisma__PantryItemClient<
      $Result.GetResult<
        Prisma.$PantryItemPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first PantryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemFindFirstOrThrowArgs} args - Arguments to find a PantryItem
     * @example
     * // Get one PantryItem
     * const pantryItem = await prisma.pantryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PantryItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PantryItemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__PantryItemClient<
      $Result.GetResult<
        Prisma.$PantryItemPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more PantryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PantryItems
     * const pantryItems = await prisma.pantryItem.findMany()
     *
     * // Get first 10 PantryItems
     * const pantryItems = await prisma.pantryItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const pantryItemWithIdOnly = await prisma.pantryItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PantryItemFindManyArgs>(
      args?: SelectSubset<T, PantryItemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PantryItemPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a PantryItem.
     * @param {PantryItemCreateArgs} args - Arguments to create a PantryItem.
     * @example
     * // Create one PantryItem
     * const PantryItem = await prisma.pantryItem.create({
     *   data: {
     *     // ... data to create a PantryItem
     *   }
     * })
     *
     */
    create<T extends PantryItemCreateArgs>(
      args: SelectSubset<T, PantryItemCreateArgs<ExtArgs>>,
    ): Prisma__PantryItemClient<
      $Result.GetResult<
        Prisma.$PantryItemPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many PantryItems.
     * @param {PantryItemCreateManyArgs} args - Arguments to create many PantryItems.
     * @example
     * // Create many PantryItems
     * const pantryItem = await prisma.pantryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PantryItemCreateManyArgs>(
      args?: SelectSubset<T, PantryItemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many PantryItems and returns the data saved in the database.
     * @param {PantryItemCreateManyAndReturnArgs} args - Arguments to create many PantryItems.
     * @example
     * // Create many PantryItems
     * const pantryItem = await prisma.pantryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PantryItems and only return the `id`
     * const pantryItemWithIdOnly = await prisma.pantryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PantryItemCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PantryItemCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PantryItemPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a PantryItem.
     * @param {PantryItemDeleteArgs} args - Arguments to delete one PantryItem.
     * @example
     * // Delete one PantryItem
     * const PantryItem = await prisma.pantryItem.delete({
     *   where: {
     *     // ... filter to delete one PantryItem
     *   }
     * })
     *
     */
    delete<T extends PantryItemDeleteArgs>(
      args: SelectSubset<T, PantryItemDeleteArgs<ExtArgs>>,
    ): Prisma__PantryItemClient<
      $Result.GetResult<
        Prisma.$PantryItemPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one PantryItem.
     * @param {PantryItemUpdateArgs} args - Arguments to update one PantryItem.
     * @example
     * // Update one PantryItem
     * const pantryItem = await prisma.pantryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PantryItemUpdateArgs>(
      args: SelectSubset<T, PantryItemUpdateArgs<ExtArgs>>,
    ): Prisma__PantryItemClient<
      $Result.GetResult<
        Prisma.$PantryItemPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more PantryItems.
     * @param {PantryItemDeleteManyArgs} args - Arguments to filter PantryItems to delete.
     * @example
     * // Delete a few PantryItems
     * const { count } = await prisma.pantryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PantryItemDeleteManyArgs>(
      args?: SelectSubset<T, PantryItemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PantryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PantryItems
     * const pantryItem = await prisma.pantryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PantryItemUpdateManyArgs>(
      args: SelectSubset<T, PantryItemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more PantryItems and returns the data updated in the database.
     * @param {PantryItemUpdateManyAndReturnArgs} args - Arguments to update many PantryItems.
     * @example
     * // Update many PantryItems
     * const pantryItem = await prisma.pantryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PantryItems and only return the `id`
     * const pantryItemWithIdOnly = await prisma.pantryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PantryItemUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PantryItemUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PantryItemPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one PantryItem.
     * @param {PantryItemUpsertArgs} args - Arguments to update or create a PantryItem.
     * @example
     * // Update or create a PantryItem
     * const pantryItem = await prisma.pantryItem.upsert({
     *   create: {
     *     // ... data to create a PantryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PantryItem we want to update
     *   }
     * })
     */
    upsert<T extends PantryItemUpsertArgs>(
      args: SelectSubset<T, PantryItemUpsertArgs<ExtArgs>>,
    ): Prisma__PantryItemClient<
      $Result.GetResult<
        Prisma.$PantryItemPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of PantryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemCountArgs} args - Arguments to filter PantryItems to count.
     * @example
     * // Count the number of PantryItems
     * const count = await prisma.pantryItem.count({
     *   where: {
     *     // ... the filter for the PantryItems we want to count
     *   }
     * })
     **/
    count<T extends PantryItemCountArgs>(
      args?: Subset<T, PantryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PantryItemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a PantryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PantryItemAggregateArgs>(
      args: Subset<T, PantryItemAggregateArgs>,
    ): Prisma.PrismaPromise<GetPantryItemAggregateType<T>>;

    /**
     * Group by PantryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PantryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PantryItemGroupByArgs['orderBy'] }
        : { orderBy?: PantryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, PantryItemGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetPantryItemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PantryItem model
     */
    readonly fields: PantryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PantryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PantryItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the PantryItem model
   */
  interface PantryItemFieldRefs {
    readonly id: FieldRef<'PantryItem', 'String'>;
    readonly userId: FieldRef<'PantryItem', 'String'>;
    readonly ingredientId: FieldRef<'PantryItem', 'Int'>;
    readonly name: FieldRef<'PantryItem', 'String'>;
    readonly amount: FieldRef<'PantryItem', 'Float'>;
    readonly unit: FieldRef<'PantryItem', 'String'>;
    readonly createdAt: FieldRef<'PantryItem', 'DateTime'>;
    readonly updatedAt: FieldRef<'PantryItem', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * PantryItem findUnique
   */
  export type PantryItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null;
    /**
     * Filter, which PantryItem to fetch.
     */
    where: PantryItemWhereUniqueInput;
  };

  /**
   * PantryItem findUniqueOrThrow
   */
  export type PantryItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null;
    /**
     * Filter, which PantryItem to fetch.
     */
    where: PantryItemWhereUniqueInput;
  };

  /**
   * PantryItem findFirst
   */
  export type PantryItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null;
    /**
     * Filter, which PantryItem to fetch.
     */
    where?: PantryItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PantryItems to fetch.
     */
    orderBy?:
      | PantryItemOrderByWithRelationInput
      | PantryItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PantryItems.
     */
    cursor?: PantryItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PantryItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PantryItems.
     */
    distinct?: PantryItemScalarFieldEnum | PantryItemScalarFieldEnum[];
  };

  /**
   * PantryItem findFirstOrThrow
   */
  export type PantryItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null;
    /**
     * Filter, which PantryItem to fetch.
     */
    where?: PantryItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PantryItems to fetch.
     */
    orderBy?:
      | PantryItemOrderByWithRelationInput
      | PantryItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PantryItems.
     */
    cursor?: PantryItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PantryItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PantryItems.
     */
    distinct?: PantryItemScalarFieldEnum | PantryItemScalarFieldEnum[];
  };

  /**
   * PantryItem findMany
   */
  export type PantryItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null;
    /**
     * Filter, which PantryItems to fetch.
     */
    where?: PantryItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PantryItems to fetch.
     */
    orderBy?:
      | PantryItemOrderByWithRelationInput
      | PantryItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PantryItems.
     */
    cursor?: PantryItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PantryItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PantryItems.
     */
    skip?: number;
    distinct?: PantryItemScalarFieldEnum | PantryItemScalarFieldEnum[];
  };

  /**
   * PantryItem create
   */
  export type PantryItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null;
    /**
     * The data needed to create a PantryItem.
     */
    data: XOR<PantryItemCreateInput, PantryItemUncheckedCreateInput>;
  };

  /**
   * PantryItem createMany
   */
  export type PantryItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many PantryItems.
     */
    data: PantryItemCreateManyInput | PantryItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * PantryItem createManyAndReturn
   */
  export type PantryItemCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null;
    /**
     * The data used to create many PantryItems.
     */
    data: PantryItemCreateManyInput | PantryItemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PantryItem update
   */
  export type PantryItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null;
    /**
     * The data needed to update a PantryItem.
     */
    data: XOR<PantryItemUpdateInput, PantryItemUncheckedUpdateInput>;
    /**
     * Choose, which PantryItem to update.
     */
    where: PantryItemWhereUniqueInput;
  };

  /**
   * PantryItem updateMany
   */
  export type PantryItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update PantryItems.
     */
    data: XOR<
      PantryItemUpdateManyMutationInput,
      PantryItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which PantryItems to update
     */
    where?: PantryItemWhereInput;
    /**
     * Limit how many PantryItems to update.
     */
    limit?: number;
  };

  /**
   * PantryItem updateManyAndReturn
   */
  export type PantryItemUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null;
    /**
     * The data used to update PantryItems.
     */
    data: XOR<
      PantryItemUpdateManyMutationInput,
      PantryItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which PantryItems to update
     */
    where?: PantryItemWhereInput;
    /**
     * Limit how many PantryItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * PantryItem upsert
   */
  export type PantryItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null;
    /**
     * The filter to search for the PantryItem to update in case it exists.
     */
    where: PantryItemWhereUniqueInput;
    /**
     * In case the PantryItem found by the `where` argument doesn't exist, create a new PantryItem with this data.
     */
    create: XOR<PantryItemCreateInput, PantryItemUncheckedCreateInput>;
    /**
     * In case the PantryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PantryItemUpdateInput, PantryItemUncheckedUpdateInput>;
  };

  /**
   * PantryItem delete
   */
  export type PantryItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null;
    /**
     * Filter which PantryItem to delete.
     */
    where: PantryItemWhereUniqueInput;
  };

  /**
   * PantryItem deleteMany
   */
  export type PantryItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which PantryItems to delete
     */
    where?: PantryItemWhereInput;
    /**
     * Limit how many PantryItems to delete.
     */
    limit?: number;
  };

  /**
   * PantryItem without action
   */
  export type PantryItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the PantryItem
     */
    select?: PantryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PantryItem
     */
    omit?: PantryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantryItemInclude<ExtArgs> | null;
  };

  /**
   * Model CollectionEntity
   */

  export type AggregateCollection = {
    _count: CollectionCountAggregateOutputType | null;
    _avg: CollectionAvgAggregateOutputType | null;
    _sum: CollectionSumAggregateOutputType | null;
    _min: CollectionMinAggregateOutputType | null;
    _max: CollectionMaxAggregateOutputType | null;
  };

  export type CollectionAvgAggregateOutputType = {
    recipeIds: number | null;
  };

  export type CollectionSumAggregateOutputType = {
    recipeIds: number[];
  };

  export type CollectionMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CollectionMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type CollectionCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    recipeIds: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type CollectionAvgAggregateInputType = {
    recipeIds?: true;
  };

  export type CollectionSumAggregateInputType = {
    recipeIds?: true;
  };

  export type CollectionMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CollectionMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type CollectionCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    recipeIds?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type CollectionAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which CollectionEntity to aggregate.
     */
    where?: CollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collections to fetch.
     */
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Collections
     **/
    _count?: true | CollectionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CollectionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CollectionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CollectionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CollectionMaxAggregateInputType;
  };

  export type GetCollectionAggregateType<T extends CollectionAggregateArgs> = {
    [P in keyof T & keyof AggregateCollection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollection[P]>
      : GetScalarType<T[P], AggregateCollection[P]>;
  };

  export type CollectionGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CollectionWhereInput;
    orderBy?:
      | CollectionOrderByWithAggregationInput
      | CollectionOrderByWithAggregationInput[];
    by: CollectionScalarFieldEnum[] | CollectionScalarFieldEnum;
    having?: CollectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CollectionCountAggregateInputType | true;
    _avg?: CollectionAvgAggregateInputType;
    _sum?: CollectionSumAggregateInputType;
    _min?: CollectionMinAggregateInputType;
    _max?: CollectionMaxAggregateInputType;
  };

  export type CollectionGroupByOutputType = {
    id: string;
    userId: string;
    name: string;
    recipeIds: number[];
    createdAt: Date;
    updatedAt: Date;
    _count: CollectionCountAggregateOutputType | null;
    _avg: CollectionAvgAggregateOutputType | null;
    _sum: CollectionSumAggregateOutputType | null;
    _min: CollectionMinAggregateOutputType | null;
    _max: CollectionMaxAggregateOutputType | null;
  };

  type GetCollectionGroupByPayload<T extends CollectionGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CollectionGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CollectionGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollectionGroupByOutputType[P]>
            : GetScalarType<T[P], CollectionGroupByOutputType[P]>;
        }
      >
    >;

  export type CollectionSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      name?: boolean;
      recipeIds?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['collection']
  >;

  export type CollectionSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      name?: boolean;
      recipeIds?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['collection']
  >;

  export type CollectionSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      name?: boolean;
      recipeIds?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['collection']
  >;

  export type CollectionSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    recipeIds?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type CollectionOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'name' | 'recipeIds' | 'createdAt' | 'updatedAt',
    ExtArgs['result']['collection']
  >;
  export type CollectionInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type CollectionIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type CollectionIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $CollectionPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Collection';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        name: string;
        recipeIds: number[];
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['collection']
    >;
    composites: {};
  };

  type CollectionGetPayload<
    S extends boolean | null | undefined | CollectionDefaultArgs,
  > = $Result.GetResult<Prisma.$CollectionPayload, S>;

  type CollectionCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    CollectionFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: CollectionCountAggregateInputType | true;
  };

  export interface CollectionDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Collection'];
      meta: { name: 'Collection' };
    };
    /**
     * Find zero or one CollectionEntity that matches the filter.
     * @param {CollectionFindUniqueArgs} args - Arguments to find a CollectionEntity
     * @example
     * // Get one CollectionEntity
     * const collection = await prisma.collection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollectionFindUniqueArgs>(
      args: SelectSubset<T, CollectionFindUniqueArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one CollectionEntity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollectionFindUniqueOrThrowArgs} args - Arguments to find a CollectionEntity
     * @example
     * // Get one CollectionEntity
     * const collection = await prisma.collection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollectionFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CollectionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CollectionEntity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstArgs} args - Arguments to find a CollectionEntity
     * @example
     * // Get one CollectionEntity
     * const collection = await prisma.collection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollectionFindFirstArgs>(
      args?: SelectSubset<T, CollectionFindFirstArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first CollectionEntity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindFirstOrThrowArgs} args - Arguments to find a CollectionEntity
     * @example
     * // Get one CollectionEntity
     * const collection = await prisma.collection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CollectionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Collections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collections
     * const collections = await prisma.collection.findMany()
     *
     * // Get first 10 Collections
     * const collections = await prisma.collection.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const collectionWithIdOnly = await prisma.collection.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CollectionFindManyArgs>(
      args?: SelectSubset<T, CollectionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a CollectionEntity.
     * @param {CollectionCreateArgs} args - Arguments to create a CollectionEntity.
     * @example
     * // Create one CollectionEntity
     * const CollectionEntity = await prisma.collection.create({
     *   data: {
     *     // ... data to create a CollectionEntity
     *   }
     * })
     *
     */
    create<T extends CollectionCreateArgs>(
      args: SelectSubset<T, CollectionCreateArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Collections.
     * @param {CollectionCreateManyArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CollectionCreateManyArgs>(
      args?: SelectSubset<T, CollectionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Collections and returns the data saved in the database.
     * @param {CollectionCreateManyAndReturnArgs} args - Arguments to create many Collections.
     * @example
     * // Create many Collections
     * const collection = await prisma.collection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CollectionCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CollectionCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a CollectionEntity.
     * @param {CollectionDeleteArgs} args - Arguments to delete one CollectionEntity.
     * @example
     * // Delete one CollectionEntity
     * const CollectionEntity = await prisma.collection.delete({
     *   where: {
     *     // ... filter to delete one CollectionEntity
     *   }
     * })
     *
     */
    delete<T extends CollectionDeleteArgs>(
      args: SelectSubset<T, CollectionDeleteArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one CollectionEntity.
     * @param {CollectionUpdateArgs} args - Arguments to update one CollectionEntity.
     * @example
     * // Update one CollectionEntity
     * const collection = await prisma.collection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CollectionUpdateArgs>(
      args: SelectSubset<T, CollectionUpdateArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Collections.
     * @param {CollectionDeleteManyArgs} args - Arguments to filter Collections to delete.
     * @example
     * // Delete a few Collections
     * const { count } = await prisma.collection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CollectionDeleteManyArgs>(
      args?: SelectSubset<T, CollectionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CollectionUpdateManyArgs>(
      args: SelectSubset<T, CollectionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Collections and returns the data updated in the database.
     * @param {CollectionUpdateManyAndReturnArgs} args - Arguments to update many Collections.
     * @example
     * // Update many Collections
     * const collection = await prisma.collection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Collections and only return the `id`
     * const collectionWithIdOnly = await prisma.collection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends CollectionUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CollectionUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one CollectionEntity.
     * @param {CollectionUpsertArgs} args - Arguments to update or create a CollectionEntity.
     * @example
     * // Update or create a CollectionEntity
     * const collection = await prisma.collection.upsert({
     *   create: {
     *     // ... data to create a CollectionEntity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CollectionEntity we want to update
     *   }
     * })
     */
    upsert<T extends CollectionUpsertArgs>(
      args: SelectSubset<T, CollectionUpsertArgs<ExtArgs>>,
    ): Prisma__CollectionClient<
      $Result.GetResult<
        Prisma.$CollectionPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Collections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionCountArgs} args - Arguments to filter Collections to count.
     * @example
     * // Count the number of Collections
     * const count = await prisma.collection.count({
     *   where: {
     *     // ... the filter for the Collections we want to count
     *   }
     * })
     **/
    count<T extends CollectionCountArgs>(
      args?: Subset<T, CollectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollectionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a CollectionEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CollectionAggregateArgs>(
      args: Subset<T, CollectionAggregateArgs>,
    ): Prisma.PrismaPromise<GetCollectionAggregateType<T>>;

    /**
     * Group by CollectionEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CollectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollectionGroupByArgs['orderBy'] }
        : { orderBy?: CollectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CollectionGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCollectionGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the CollectionEntity model
     */
    readonly fields: CollectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CollectionEntity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollectionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the CollectionEntity model
   */
  interface CollectionFieldRefs {
    readonly id: FieldRef<'Collection', 'String'>;
    readonly userId: FieldRef<'Collection', 'String'>;
    readonly name: FieldRef<'Collection', 'String'>;
    readonly recipeIds: FieldRef<'Collection', 'Int[]'>;
    readonly createdAt: FieldRef<'Collection', 'DateTime'>;
    readonly updatedAt: FieldRef<'Collection', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * CollectionEntity findUnique
   */
  export type CollectionFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionEntity
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectionEntity
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which CollectionEntity to fetch.
     */
    where: CollectionWhereUniqueInput;
  };

  /**
   * CollectionEntity findUniqueOrThrow
   */
  export type CollectionFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionEntity
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectionEntity
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which CollectionEntity to fetch.
     */
    where: CollectionWhereUniqueInput;
  };

  /**
   * CollectionEntity findFirst
   */
  export type CollectionFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionEntity
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectionEntity
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which CollectionEntity to fetch.
     */
    where?: CollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collections to fetch.
     */
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * CollectionEntity findFirstOrThrow
   */
  export type CollectionFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionEntity
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectionEntity
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which CollectionEntity to fetch.
     */
    where?: CollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collections to fetch.
     */
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Collections.
     */
    cursor?: CollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Collections.
     */
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * CollectionEntity findMany
   */
  export type CollectionFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionEntity
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectionEntity
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter, which Collections to fetch.
     */
    where?: CollectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Collections to fetch.
     */
    orderBy?:
      | CollectionOrderByWithRelationInput
      | CollectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Collections.
     */
    cursor?: CollectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Collections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Collections.
     */
    skip?: number;
    distinct?: CollectionScalarFieldEnum | CollectionScalarFieldEnum[];
  };

  /**
   * CollectionEntity create
   */
  export type CollectionCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionEntity
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectionEntity
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * The data needed to create a CollectionEntity.
     */
    data: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>;
  };

  /**
   * CollectionEntity createMany
   */
  export type CollectionCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * CollectionEntity createManyAndReturn
   */
  export type CollectionCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionEntity
     */
    select?: CollectionSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectionEntity
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * The data used to create many Collections.
     */
    data: CollectionCreateManyInput | CollectionCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CollectionEntity update
   */
  export type CollectionUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionEntity
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectionEntity
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * The data needed to update a CollectionEntity.
     */
    data: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>;
    /**
     * Choose, which CollectionEntity to update.
     */
    where: CollectionWhereUniqueInput;
  };

  /**
   * CollectionEntity updateMany
   */
  export type CollectionUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Collections.
     */
    data: XOR<
      CollectionUpdateManyMutationInput,
      CollectionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput;
    /**
     * Limit how many Collections to update.
     */
    limit?: number;
  };

  /**
   * CollectionEntity updateManyAndReturn
   */
  export type CollectionUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionEntity
     */
    select?: CollectionSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectionEntity
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * The data used to update Collections.
     */
    data: XOR<
      CollectionUpdateManyMutationInput,
      CollectionUncheckedUpdateManyInput
    >;
    /**
     * Filter which Collections to update
     */
    where?: CollectionWhereInput;
    /**
     * Limit how many Collections to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * CollectionEntity upsert
   */
  export type CollectionUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionEntity
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectionEntity
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * The filter to search for the CollectionEntity to update in case it exists.
     */
    where: CollectionWhereUniqueInput;
    /**
     * In case the CollectionEntity found by the `where` argument doesn't exist, create a new CollectionEntity with this data.
     */
    create: XOR<CollectionCreateInput, CollectionUncheckedCreateInput>;
    /**
     * In case the CollectionEntity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollectionUpdateInput, CollectionUncheckedUpdateInput>;
  };

  /**
   * CollectionEntity delete
   */
  export type CollectionDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionEntity
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectionEntity
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
    /**
     * Filter which CollectionEntity to delete.
     */
    where: CollectionWhereUniqueInput;
  };

  /**
   * CollectionEntity deleteMany
   */
  export type CollectionDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Collections to delete
     */
    where?: CollectionWhereInput;
    /**
     * Limit how many Collections to delete.
     */
    limit?: number;
  };

  /**
   * CollectionEntity without action
   */
  export type CollectionDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CollectionEntity
     */
    select?: CollectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the CollectionEntity
     */
    omit?: CollectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollectionInclude<ExtArgs> | null;
  };

  /**
   * Model GroceryItemEntity
   */

  export type AggregateGroceryItem = {
    _count: GroceryItemCountAggregateOutputType | null;
    _avg: GroceryItemAvgAggregateOutputType | null;
    _sum: GroceryItemSumAggregateOutputType | null;
    _min: GroceryItemMinAggregateOutputType | null;
    _max: GroceryItemMaxAggregateOutputType | null;
  };

  export type GroceryItemAvgAggregateOutputType = {
    amount: number | null;
  };

  export type GroceryItemSumAggregateOutputType = {
    amount: number | null;
  };

  export type GroceryItemMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    amount: number | null;
    unit: string | null;
    checked: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type GroceryItemMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    name: string | null;
    amount: number | null;
    unit: string | null;
    checked: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type GroceryItemCountAggregateOutputType = {
    id: number;
    userId: number;
    name: number;
    amount: number;
    unit: number;
    checked: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type GroceryItemAvgAggregateInputType = {
    amount?: true;
  };

  export type GroceryItemSumAggregateInputType = {
    amount?: true;
  };

  export type GroceryItemMinAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    amount?: true;
    unit?: true;
    checked?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type GroceryItemMaxAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    amount?: true;
    unit?: true;
    checked?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type GroceryItemCountAggregateInputType = {
    id?: true;
    userId?: true;
    name?: true;
    amount?: true;
    unit?: true;
    checked?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type GroceryItemAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which GroceryItemEntity to aggregate.
     */
    where?: GroceryItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GroceryItems to fetch.
     */
    orderBy?:
      | GroceryItemOrderByWithRelationInput
      | GroceryItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: GroceryItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GroceryItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GroceryItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned GroceryItems
     **/
    _count?: true | GroceryItemCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: GroceryItemAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: GroceryItemSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GroceryItemMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GroceryItemMaxAggregateInputType;
  };

  export type GetGroceryItemAggregateType<T extends GroceryItemAggregateArgs> =
    {
      [P in keyof T & keyof AggregateGroceryItem]: P extends '_count' | 'count'
        ? T[P] extends true
          ? number
          : GetScalarType<T[P], AggregateGroceryItem[P]>
        : GetScalarType<T[P], AggregateGroceryItem[P]>;
    };

  export type GroceryItemGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: GroceryItemWhereInput;
    orderBy?:
      | GroceryItemOrderByWithAggregationInput
      | GroceryItemOrderByWithAggregationInput[];
    by: GroceryItemScalarFieldEnum[] | GroceryItemScalarFieldEnum;
    having?: GroceryItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GroceryItemCountAggregateInputType | true;
    _avg?: GroceryItemAvgAggregateInputType;
    _sum?: GroceryItemSumAggregateInputType;
    _min?: GroceryItemMinAggregateInputType;
    _max?: GroceryItemMaxAggregateInputType;
  };

  export type GroceryItemGroupByOutputType = {
    id: string;
    userId: string;
    name: string;
    amount: number | null;
    unit: string | null;
    checked: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: GroceryItemCountAggregateOutputType | null;
    _avg: GroceryItemAvgAggregateOutputType | null;
    _sum: GroceryItemSumAggregateOutputType | null;
    _min: GroceryItemMinAggregateOutputType | null;
    _max: GroceryItemMaxAggregateOutputType | null;
  };

  type GetGroceryItemGroupByPayload<T extends GroceryItemGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<GroceryItemGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof GroceryItemGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroceryItemGroupByOutputType[P]>
            : GetScalarType<T[P], GroceryItemGroupByOutputType[P]>;
        }
      >
    >;

  export type GroceryItemSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      name?: boolean;
      amount?: boolean;
      unit?: boolean;
      checked?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['groceryItem']
  >;

  export type GroceryItemSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      name?: boolean;
      amount?: boolean;
      unit?: boolean;
      checked?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['groceryItem']
  >;

  export type GroceryItemSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      name?: boolean;
      amount?: boolean;
      unit?: boolean;
      checked?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['groceryItem']
  >;

  export type GroceryItemSelectScalar = {
    id?: boolean;
    userId?: boolean;
    name?: boolean;
    amount?: boolean;
    unit?: boolean;
    checked?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type GroceryItemOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'userId'
    | 'name'
    | 'amount'
    | 'unit'
    | 'checked'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['groceryItem']
  >;
  export type GroceryItemInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type GroceryItemIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type GroceryItemIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $GroceryItemPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'GroceryItem';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        name: string;
        amount: number | null;
        unit: string | null;
        checked: boolean;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['groceryItem']
    >;
    composites: {};
  };

  type GroceryItemGetPayload<
    S extends boolean | null | undefined | GroceryItemDefaultArgs,
  > = $Result.GetResult<Prisma.$GroceryItemPayload, S>;

  type GroceryItemCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    GroceryItemFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: GroceryItemCountAggregateInputType | true;
  };

  export interface GroceryItemDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['GroceryItem'];
      meta: { name: 'GroceryItem' };
    };
    /**
     * Find zero or one GroceryItemEntity that matches the filter.
     * @param {GroceryItemFindUniqueArgs} args - Arguments to find a GroceryItemEntity
     * @example
     * // Get one GroceryItemEntity
     * const groceryItem = await prisma.groceryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroceryItemFindUniqueArgs>(
      args: SelectSubset<T, GroceryItemFindUniqueArgs<ExtArgs>>,
    ): Prisma__GroceryItemClient<
      $Result.GetResult<
        Prisma.$GroceryItemPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one GroceryItemEntity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroceryItemFindUniqueOrThrowArgs} args - Arguments to find a GroceryItemEntity
     * @example
     * // Get one GroceryItemEntity
     * const groceryItem = await prisma.groceryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroceryItemFindUniqueOrThrowArgs>(
      args: SelectSubset<T, GroceryItemFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__GroceryItemClient<
      $Result.GetResult<
        Prisma.$GroceryItemPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first GroceryItemEntity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemFindFirstArgs} args - Arguments to find a GroceryItemEntity
     * @example
     * // Get one GroceryItemEntity
     * const groceryItem = await prisma.groceryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroceryItemFindFirstArgs>(
      args?: SelectSubset<T, GroceryItemFindFirstArgs<ExtArgs>>,
    ): Prisma__GroceryItemClient<
      $Result.GetResult<
        Prisma.$GroceryItemPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first GroceryItemEntity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemFindFirstOrThrowArgs} args - Arguments to find a GroceryItemEntity
     * @example
     * // Get one GroceryItemEntity
     * const groceryItem = await prisma.groceryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroceryItemFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GroceryItemFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__GroceryItemClient<
      $Result.GetResult<
        Prisma.$GroceryItemPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more GroceryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroceryItems
     * const groceryItems = await prisma.groceryItem.findMany()
     *
     * // Get first 10 GroceryItems
     * const groceryItems = await prisma.groceryItem.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const groceryItemWithIdOnly = await prisma.groceryItem.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GroceryItemFindManyArgs>(
      args?: SelectSubset<T, GroceryItemFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GroceryItemPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a GroceryItemEntity.
     * @param {GroceryItemCreateArgs} args - Arguments to create a GroceryItemEntity.
     * @example
     * // Create one GroceryItemEntity
     * const GroceryItemEntity = await prisma.groceryItem.create({
     *   data: {
     *     // ... data to create a GroceryItemEntity
     *   }
     * })
     *
     */
    create<T extends GroceryItemCreateArgs>(
      args: SelectSubset<T, GroceryItemCreateArgs<ExtArgs>>,
    ): Prisma__GroceryItemClient<
      $Result.GetResult<
        Prisma.$GroceryItemPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many GroceryItems.
     * @param {GroceryItemCreateManyArgs} args - Arguments to create many GroceryItems.
     * @example
     * // Create many GroceryItems
     * const groceryItem = await prisma.groceryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GroceryItemCreateManyArgs>(
      args?: SelectSubset<T, GroceryItemCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many GroceryItems and returns the data saved in the database.
     * @param {GroceryItemCreateManyAndReturnArgs} args - Arguments to create many GroceryItems.
     * @example
     * // Create many GroceryItems
     * const groceryItem = await prisma.groceryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many GroceryItems and only return the `id`
     * const groceryItemWithIdOnly = await prisma.groceryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GroceryItemCreateManyAndReturnArgs>(
      args?: SelectSubset<T, GroceryItemCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GroceryItemPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a GroceryItemEntity.
     * @param {GroceryItemDeleteArgs} args - Arguments to delete one GroceryItemEntity.
     * @example
     * // Delete one GroceryItemEntity
     * const GroceryItemEntity = await prisma.groceryItem.delete({
     *   where: {
     *     // ... filter to delete one GroceryItemEntity
     *   }
     * })
     *
     */
    delete<T extends GroceryItemDeleteArgs>(
      args: SelectSubset<T, GroceryItemDeleteArgs<ExtArgs>>,
    ): Prisma__GroceryItemClient<
      $Result.GetResult<
        Prisma.$GroceryItemPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one GroceryItemEntity.
     * @param {GroceryItemUpdateArgs} args - Arguments to update one GroceryItemEntity.
     * @example
     * // Update one GroceryItemEntity
     * const groceryItem = await prisma.groceryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GroceryItemUpdateArgs>(
      args: SelectSubset<T, GroceryItemUpdateArgs<ExtArgs>>,
    ): Prisma__GroceryItemClient<
      $Result.GetResult<
        Prisma.$GroceryItemPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more GroceryItems.
     * @param {GroceryItemDeleteManyArgs} args - Arguments to filter GroceryItems to delete.
     * @example
     * // Delete a few GroceryItems
     * const { count } = await prisma.groceryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GroceryItemDeleteManyArgs>(
      args?: SelectSubset<T, GroceryItemDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more GroceryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroceryItems
     * const groceryItem = await prisma.groceryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GroceryItemUpdateManyArgs>(
      args: SelectSubset<T, GroceryItemUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more GroceryItems and returns the data updated in the database.
     * @param {GroceryItemUpdateManyAndReturnArgs} args - Arguments to update many GroceryItems.
     * @example
     * // Update many GroceryItems
     * const groceryItem = await prisma.groceryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more GroceryItems and only return the `id`
     * const groceryItemWithIdOnly = await prisma.groceryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends GroceryItemUpdateManyAndReturnArgs>(
      args: SelectSubset<T, GroceryItemUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GroceryItemPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one GroceryItemEntity.
     * @param {GroceryItemUpsertArgs} args - Arguments to update or create a GroceryItemEntity.
     * @example
     * // Update or create a GroceryItemEntity
     * const groceryItem = await prisma.groceryItem.upsert({
     *   create: {
     *     // ... data to create a GroceryItemEntity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroceryItemEntity we want to update
     *   }
     * })
     */
    upsert<T extends GroceryItemUpsertArgs>(
      args: SelectSubset<T, GroceryItemUpsertArgs<ExtArgs>>,
    ): Prisma__GroceryItemClient<
      $Result.GetResult<
        Prisma.$GroceryItemPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of GroceryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemCountArgs} args - Arguments to filter GroceryItems to count.
     * @example
     * // Count the number of GroceryItems
     * const count = await prisma.groceryItem.count({
     *   where: {
     *     // ... the filter for the GroceryItems we want to count
     *   }
     * })
     **/
    count<T extends GroceryItemCountArgs>(
      args?: Subset<T, GroceryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroceryItemCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a GroceryItemEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GroceryItemAggregateArgs>(
      args: Subset<T, GroceryItemAggregateArgs>,
    ): Prisma.PrismaPromise<GetGroceryItemAggregateType<T>>;

    /**
     * Group by GroceryItemEntity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends GroceryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroceryItemGroupByArgs['orderBy'] }
        : { orderBy?: GroceryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, GroceryItemGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetGroceryItemGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the GroceryItemEntity model
     */
    readonly fields: GroceryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroceryItemEntity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroceryItemClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the GroceryItemEntity model
   */
  interface GroceryItemFieldRefs {
    readonly id: FieldRef<'GroceryItem', 'String'>;
    readonly userId: FieldRef<'GroceryItem', 'String'>;
    readonly name: FieldRef<'GroceryItem', 'String'>;
    readonly amount: FieldRef<'GroceryItem', 'Float'>;
    readonly unit: FieldRef<'GroceryItem', 'String'>;
    readonly checked: FieldRef<'GroceryItem', 'Boolean'>;
    readonly createdAt: FieldRef<'GroceryItem', 'DateTime'>;
    readonly updatedAt: FieldRef<'GroceryItem', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * GroceryItemEntity findUnique
   */
  export type GroceryItemFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroceryItemEntity
     */
    select?: GroceryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroceryItemEntity
     */
    omit?: GroceryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null;
    /**
     * Filter, which GroceryItemEntity to fetch.
     */
    where: GroceryItemWhereUniqueInput;
  };

  /**
   * GroceryItemEntity findUniqueOrThrow
   */
  export type GroceryItemFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroceryItemEntity
     */
    select?: GroceryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroceryItemEntity
     */
    omit?: GroceryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null;
    /**
     * Filter, which GroceryItemEntity to fetch.
     */
    where: GroceryItemWhereUniqueInput;
  };

  /**
   * GroceryItemEntity findFirst
   */
  export type GroceryItemFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroceryItemEntity
     */
    select?: GroceryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroceryItemEntity
     */
    omit?: GroceryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null;
    /**
     * Filter, which GroceryItemEntity to fetch.
     */
    where?: GroceryItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GroceryItems to fetch.
     */
    orderBy?:
      | GroceryItemOrderByWithRelationInput
      | GroceryItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GroceryItems.
     */
    cursor?: GroceryItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GroceryItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GroceryItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GroceryItems.
     */
    distinct?: GroceryItemScalarFieldEnum | GroceryItemScalarFieldEnum[];
  };

  /**
   * GroceryItemEntity findFirstOrThrow
   */
  export type GroceryItemFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroceryItemEntity
     */
    select?: GroceryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroceryItemEntity
     */
    omit?: GroceryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null;
    /**
     * Filter, which GroceryItemEntity to fetch.
     */
    where?: GroceryItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GroceryItems to fetch.
     */
    orderBy?:
      | GroceryItemOrderByWithRelationInput
      | GroceryItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for GroceryItems.
     */
    cursor?: GroceryItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GroceryItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GroceryItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of GroceryItems.
     */
    distinct?: GroceryItemScalarFieldEnum | GroceryItemScalarFieldEnum[];
  };

  /**
   * GroceryItemEntity findMany
   */
  export type GroceryItemFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroceryItemEntity
     */
    select?: GroceryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroceryItemEntity
     */
    omit?: GroceryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null;
    /**
     * Filter, which GroceryItems to fetch.
     */
    where?: GroceryItemWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of GroceryItems to fetch.
     */
    orderBy?:
      | GroceryItemOrderByWithRelationInput
      | GroceryItemOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing GroceryItems.
     */
    cursor?: GroceryItemWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` GroceryItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` GroceryItems.
     */
    skip?: number;
    distinct?: GroceryItemScalarFieldEnum | GroceryItemScalarFieldEnum[];
  };

  /**
   * GroceryItemEntity create
   */
  export type GroceryItemCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroceryItemEntity
     */
    select?: GroceryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroceryItemEntity
     */
    omit?: GroceryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null;
    /**
     * The data needed to create a GroceryItemEntity.
     */
    data: XOR<GroceryItemCreateInput, GroceryItemUncheckedCreateInput>;
  };

  /**
   * GroceryItemEntity createMany
   */
  export type GroceryItemCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many GroceryItems.
     */
    data: GroceryItemCreateManyInput | GroceryItemCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * GroceryItemEntity createManyAndReturn
   */
  export type GroceryItemCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroceryItemEntity
     */
    select?: GroceryItemSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GroceryItemEntity
     */
    omit?: GroceryItemOmit<ExtArgs> | null;
    /**
     * The data used to create many GroceryItems.
     */
    data: GroceryItemCreateManyInput | GroceryItemCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * GroceryItemEntity update
   */
  export type GroceryItemUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroceryItemEntity
     */
    select?: GroceryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroceryItemEntity
     */
    omit?: GroceryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null;
    /**
     * The data needed to update a GroceryItemEntity.
     */
    data: XOR<GroceryItemUpdateInput, GroceryItemUncheckedUpdateInput>;
    /**
     * Choose, which GroceryItemEntity to update.
     */
    where: GroceryItemWhereUniqueInput;
  };

  /**
   * GroceryItemEntity updateMany
   */
  export type GroceryItemUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update GroceryItems.
     */
    data: XOR<
      GroceryItemUpdateManyMutationInput,
      GroceryItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which GroceryItems to update
     */
    where?: GroceryItemWhereInput;
    /**
     * Limit how many GroceryItems to update.
     */
    limit?: number;
  };

  /**
   * GroceryItemEntity updateManyAndReturn
   */
  export type GroceryItemUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroceryItemEntity
     */
    select?: GroceryItemSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the GroceryItemEntity
     */
    omit?: GroceryItemOmit<ExtArgs> | null;
    /**
     * The data used to update GroceryItems.
     */
    data: XOR<
      GroceryItemUpdateManyMutationInput,
      GroceryItemUncheckedUpdateManyInput
    >;
    /**
     * Filter which GroceryItems to update
     */
    where?: GroceryItemWhereInput;
    /**
     * Limit how many GroceryItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * GroceryItemEntity upsert
   */
  export type GroceryItemUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroceryItemEntity
     */
    select?: GroceryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroceryItemEntity
     */
    omit?: GroceryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null;
    /**
     * The filter to search for the GroceryItemEntity to update in case it exists.
     */
    where: GroceryItemWhereUniqueInput;
    /**
     * In case the GroceryItemEntity found by the `where` argument doesn't exist, create a new GroceryItemEntity with this data.
     */
    create: XOR<GroceryItemCreateInput, GroceryItemUncheckedCreateInput>;
    /**
     * In case the GroceryItemEntity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroceryItemUpdateInput, GroceryItemUncheckedUpdateInput>;
  };

  /**
   * GroceryItemEntity delete
   */
  export type GroceryItemDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroceryItemEntity
     */
    select?: GroceryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroceryItemEntity
     */
    omit?: GroceryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null;
    /**
     * Filter which GroceryItemEntity to delete.
     */
    where: GroceryItemWhereUniqueInput;
  };

  /**
   * GroceryItemEntity deleteMany
   */
  export type GroceryItemDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which GroceryItems to delete
     */
    where?: GroceryItemWhereInput;
    /**
     * Limit how many GroceryItems to delete.
     */
    limit?: number;
  };

  /**
   * GroceryItemEntity without action
   */
  export type GroceryItemDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the GroceryItemEntity
     */
    select?: GroceryItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the GroceryItemEntity
     */
    omit?: GroceryItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroceryItemInclude<ExtArgs> | null;
  };

  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null;
    _min: RefreshTokenMinAggregateOutputType | null;
    _max: RefreshTokenMaxAggregateOutputType | null;
  };

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
  };

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    tokenHash: string | null;
    expiresAt: Date | null;
    createdAt: Date | null;
  };

  export type RefreshTokenCountAggregateOutputType = {
    id: number;
    userId: number;
    tokenHash: number;
    expiresAt: number;
    createdAt: number;
    _all: number;
  };

  export type RefreshTokenMinAggregateInputType = {
    id?: true;
    userId?: true;
    tokenHash?: true;
    expiresAt?: true;
    createdAt?: true;
  };

  export type RefreshTokenMaxAggregateInputType = {
    id?: true;
    userId?: true;
    tokenHash?: true;
    expiresAt?: true;
    createdAt?: true;
  };

  export type RefreshTokenCountAggregateInputType = {
    id?: true;
    userId?: true;
    tokenHash?: true;
    expiresAt?: true;
    createdAt?: true;
    _all?: true;
  };

  export type RefreshTokenAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RefreshTokens
     **/
    _count?: true | RefreshTokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RefreshTokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RefreshTokenMaxAggregateInputType;
  };

  export type GetRefreshTokenAggregateType<
    T extends RefreshTokenAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>;
  };

  export type RefreshTokenGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RefreshTokenWhereInput;
    orderBy?:
      | RefreshTokenOrderByWithAggregationInput
      | RefreshTokenOrderByWithAggregationInput[];
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum;
    having?: RefreshTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RefreshTokenCountAggregateInputType | true;
    _min?: RefreshTokenMinAggregateInputType;
    _max?: RefreshTokenMaxAggregateInputType;
  };

  export type RefreshTokenGroupByOutputType = {
    id: string;
    userId: string;
    tokenHash: string;
    expiresAt: Date;
    createdAt: Date;
    _count: RefreshTokenCountAggregateOutputType | null;
    _min: RefreshTokenMinAggregateOutputType | null;
    _max: RefreshTokenMaxAggregateOutputType | null;
  };

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RefreshTokenGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof RefreshTokenGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>;
        }
      >
    >;

  export type RefreshTokenSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      tokenHash?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['refreshToken']
  >;

  export type RefreshTokenSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      tokenHash?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['refreshToken']
  >;

  export type RefreshTokenSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      userId?: boolean;
      tokenHash?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['refreshToken']
  >;

  export type RefreshTokenSelectScalar = {
    id?: boolean;
    userId?: boolean;
    tokenHash?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
  };

  export type RefreshTokenOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'userId' | 'tokenHash' | 'expiresAt' | 'createdAt',
    ExtArgs['result']['refreshToken']
  >;
  export type RefreshTokenInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type RefreshTokenIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type RefreshTokenIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $RefreshTokenPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'RefreshToken';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        userId: string;
        tokenHash: string;
        expiresAt: Date;
        createdAt: Date;
      },
      ExtArgs['result']['refreshToken']
    >;
    composites: {};
  };

  type RefreshTokenGetPayload<
    S extends boolean | null | undefined | RefreshTokenDefaultArgs,
  > = $Result.GetResult<Prisma.$RefreshTokenPayload, S>;

  type RefreshTokenCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    RefreshTokenFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: RefreshTokenCountAggregateInputType | true;
  };

  export interface RefreshTokenDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'];
      meta: { name: 'RefreshToken' };
    };
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(
      args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(
      args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     *
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RefreshTokenFindManyArgs>(
      args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     *
     */
    create<T extends RefreshTokenCreateArgs>(
      args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RefreshTokenCreateManyArgs>(
      args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(
      args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     *
     */
    delete<T extends RefreshTokenDeleteArgs>(
      args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RefreshTokenUpdateArgs>(
      args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(
      args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(
      args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(
      args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(
      args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>,
    ): Prisma__RefreshTokenClient<
      $Result.GetResult<
        Prisma.$RefreshTokenPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
     **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RefreshTokenAggregateArgs>(
      args: Subset<T, RefreshTokenAggregateArgs>,
    ): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>;

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      'Field ',
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetRefreshTokenGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RefreshToken model
     */
    readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<'RefreshToken', 'String'>;
    readonly userId: FieldRef<'RefreshToken', 'String'>;
    readonly tokenHash: FieldRef<'RefreshToken', 'String'>;
    readonly expiresAt: FieldRef<'RefreshToken', 'DateTime'>;
    readonly createdAt: FieldRef<'RefreshToken', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?:
      | RefreshTokenOrderByWithRelationInput
      | RefreshTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RefreshTokens.
     */
    skip?: number;
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[];
  };

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>;
  };

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>;
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<
      RefreshTokenUpdateManyMutationInput,
      RefreshTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput;
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number;
  };

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<
      RefreshTokenUpdateManyMutationInput,
      RefreshTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput;
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput;
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>;
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>;
  };

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput;
  };

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput;
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number;
  };

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    passwordHash: 'passwordHash';
    name: 'name';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const ProfileScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    diet: 'diet';
    intolerances: 'intolerances';
    cuisines: 'cuisines';
    goals: 'goals';
  };

  export type ProfileScalarFieldEnum =
    (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];

  export const PantryItemScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    ingredientId: 'ingredientId';
    name: 'name';
    amount: 'amount';
    unit: 'unit';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type PantryItemScalarFieldEnum =
    (typeof PantryItemScalarFieldEnum)[keyof typeof PantryItemScalarFieldEnum];

  export const CollectionScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    name: 'name';
    recipeIds: 'recipeIds';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type CollectionScalarFieldEnum =
    (typeof CollectionScalarFieldEnum)[keyof typeof CollectionScalarFieldEnum];

  export const GroceryItemScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    name: 'name';
    amount: 'amount';
    unit: 'unit';
    checked: 'checked';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type GroceryItemScalarFieldEnum =
    (typeof GroceryItemScalarFieldEnum)[keyof typeof GroceryItemScalarFieldEnum];

  export const RefreshTokenScalarFieldEnum: {
    id: 'id';
    userId: 'userId';
    tokenHash: 'tokenHash';
    expiresAt: 'expiresAt';
    createdAt: 'createdAt';
  };

  export type RefreshTokenScalarFieldEnum =
    (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    passwordHash?: StringNullableFilter<'User'> | string | null;
    name?: StringNullableFilter<'User'> | string | null;
    createdAt?: DateTimeFilter<'User'> | Date | string;
    updatedAt?: DateTimeFilter<'User'> | Date | string;
    profile?: XOR<
      ProfileNullableScalarRelationFilter,
      ProfileWhereInput
    > | null;
    pantryItems?: PantryItemListRelationFilter;
    collections?: CollectionListRelationFilter;
    groceryItems?: GroceryItemListRelationFilter;
    refreshTokens?: RefreshTokenListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    profile?: ProfileOrderByWithRelationInput;
    pantryItems?: PantryItemOrderByRelationAggregateInput;
    collections?: CollectionOrderByRelationAggregateInput;
    groceryItems?: GroceryItemOrderByRelationAggregateInput;
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      passwordHash?: StringNullableFilter<'User'> | string | null;
      name?: StringNullableFilter<'User'> | string | null;
      createdAt?: DateTimeFilter<'User'> | Date | string;
      updatedAt?: DateTimeFilter<'User'> | Date | string;
      profile?: XOR<
        ProfileNullableScalarRelationFilter,
        ProfileWhereInput
      > | null;
      pantryItems?: PantryItemListRelationFilter;
      collections?: CollectionListRelationFilter;
      groceryItems?: GroceryItemListRelationFilter;
      refreshTokens?: RefreshTokenListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrderInput | SortOrder;
    name?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    passwordHash?: StringNullableWithAggregatesFilter<'User'> | string | null;
    name?: StringNullableWithAggregatesFilter<'User'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[];
    OR?: ProfileWhereInput[];
    NOT?: ProfileWhereInput | ProfileWhereInput[];
    id?: StringFilter<'Profile'> | string;
    userId?: StringFilter<'Profile'> | string;
    diet?: StringNullableListFilter<'Profile'>;
    intolerances?: StringNullableListFilter<'Profile'>;
    cuisines?: StringNullableListFilter<'Profile'>;
    goals?: StringNullableListFilter<'Profile'>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    diet?: SortOrder;
    intolerances?: SortOrder;
    cuisines?: SortOrder;
    goals?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type ProfileWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId?: string;
      AND?: ProfileWhereInput | ProfileWhereInput[];
      OR?: ProfileWhereInput[];
      NOT?: ProfileWhereInput | ProfileWhereInput[];
      diet?: StringNullableListFilter<'Profile'>;
      intolerances?: StringNullableListFilter<'Profile'>;
      cuisines?: StringNullableListFilter<'Profile'>;
      goals?: StringNullableListFilter<'Profile'>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'userId'
  >;

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    diet?: SortOrder;
    intolerances?: SortOrder;
    cuisines?: SortOrder;
    goals?: SortOrder;
    _count?: ProfileCountOrderByAggregateInput;
    _max?: ProfileMaxOrderByAggregateInput;
    _min?: ProfileMinOrderByAggregateInput;
  };

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?:
      | ProfileScalarWhereWithAggregatesInput
      | ProfileScalarWhereWithAggregatesInput[];
    OR?: ProfileScalarWhereWithAggregatesInput[];
    NOT?:
      | ProfileScalarWhereWithAggregatesInput
      | ProfileScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Profile'> | string;
    userId?: StringWithAggregatesFilter<'Profile'> | string;
    diet?: StringNullableListFilter<'Profile'>;
    intolerances?: StringNullableListFilter<'Profile'>;
    cuisines?: StringNullableListFilter<'Profile'>;
    goals?: StringNullableListFilter<'Profile'>;
  };

  export type PantryItemWhereInput = {
    AND?: PantryItemWhereInput | PantryItemWhereInput[];
    OR?: PantryItemWhereInput[];
    NOT?: PantryItemWhereInput | PantryItemWhereInput[];
    id?: StringFilter<'PantryItem'> | string;
    userId?: StringFilter<'PantryItem'> | string;
    ingredientId?: IntFilter<'PantryItem'> | number;
    name?: StringFilter<'PantryItem'> | string;
    amount?: FloatNullableFilter<'PantryItem'> | number | null;
    unit?: StringNullableFilter<'PantryItem'> | string | null;
    createdAt?: DateTimeFilter<'PantryItem'> | Date | string;
    updatedAt?: DateTimeFilter<'PantryItem'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type PantryItemOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    ingredientId?: SortOrder;
    name?: SortOrder;
    amount?: SortOrderInput | SortOrder;
    unit?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type PantryItemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      userId_ingredientId?: PantryItemUserIdIngredientIdCompoundUniqueInput;
      AND?: PantryItemWhereInput | PantryItemWhereInput[];
      OR?: PantryItemWhereInput[];
      NOT?: PantryItemWhereInput | PantryItemWhereInput[];
      userId?: StringFilter<'PantryItem'> | string;
      ingredientId?: IntFilter<'PantryItem'> | number;
      name?: StringFilter<'PantryItem'> | string;
      amount?: FloatNullableFilter<'PantryItem'> | number | null;
      unit?: StringNullableFilter<'PantryItem'> | string | null;
      createdAt?: DateTimeFilter<'PantryItem'> | Date | string;
      updatedAt?: DateTimeFilter<'PantryItem'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'userId_ingredientId'
  >;

  export type PantryItemOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    ingredientId?: SortOrder;
    name?: SortOrder;
    amount?: SortOrderInput | SortOrder;
    unit?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: PantryItemCountOrderByAggregateInput;
    _avg?: PantryItemAvgOrderByAggregateInput;
    _max?: PantryItemMaxOrderByAggregateInput;
    _min?: PantryItemMinOrderByAggregateInput;
    _sum?: PantryItemSumOrderByAggregateInput;
  };

  export type PantryItemScalarWhereWithAggregatesInput = {
    AND?:
      | PantryItemScalarWhereWithAggregatesInput
      | PantryItemScalarWhereWithAggregatesInput[];
    OR?: PantryItemScalarWhereWithAggregatesInput[];
    NOT?:
      | PantryItemScalarWhereWithAggregatesInput
      | PantryItemScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'PantryItem'> | string;
    userId?: StringWithAggregatesFilter<'PantryItem'> | string;
    ingredientId?: IntWithAggregatesFilter<'PantryItem'> | number;
    name?: StringWithAggregatesFilter<'PantryItem'> | string;
    amount?: FloatNullableWithAggregatesFilter<'PantryItem'> | number | null;
    unit?: StringNullableWithAggregatesFilter<'PantryItem'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'PantryItem'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'PantryItem'> | Date | string;
  };

  export type CollectionWhereInput = {
    AND?: CollectionWhereInput | CollectionWhereInput[];
    OR?: CollectionWhereInput[];
    NOT?: CollectionWhereInput | CollectionWhereInput[];
    id?: StringFilter<'Collection'> | string;
    userId?: StringFilter<'Collection'> | string;
    name?: StringFilter<'Collection'> | string;
    recipeIds?: IntNullableListFilter<'Collection'>;
    createdAt?: DateTimeFilter<'Collection'> | Date | string;
    updatedAt?: DateTimeFilter<'Collection'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type CollectionOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    recipeIds?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type CollectionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: CollectionWhereInput | CollectionWhereInput[];
      OR?: CollectionWhereInput[];
      NOT?: CollectionWhereInput | CollectionWhereInput[];
      userId?: StringFilter<'Collection'> | string;
      name?: StringFilter<'Collection'> | string;
      recipeIds?: IntNullableListFilter<'Collection'>;
      createdAt?: DateTimeFilter<'Collection'> | Date | string;
      updatedAt?: DateTimeFilter<'Collection'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type CollectionOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    recipeIds?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: CollectionCountOrderByAggregateInput;
    _avg?: CollectionAvgOrderByAggregateInput;
    _max?: CollectionMaxOrderByAggregateInput;
    _min?: CollectionMinOrderByAggregateInput;
    _sum?: CollectionSumOrderByAggregateInput;
  };

  export type CollectionScalarWhereWithAggregatesInput = {
    AND?:
      | CollectionScalarWhereWithAggregatesInput
      | CollectionScalarWhereWithAggregatesInput[];
    OR?: CollectionScalarWhereWithAggregatesInput[];
    NOT?:
      | CollectionScalarWhereWithAggregatesInput
      | CollectionScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'Collection'> | string;
    userId?: StringWithAggregatesFilter<'Collection'> | string;
    name?: StringWithAggregatesFilter<'Collection'> | string;
    recipeIds?: IntNullableListFilter<'Collection'>;
    createdAt?: DateTimeWithAggregatesFilter<'Collection'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Collection'> | Date | string;
  };

  export type GroceryItemWhereInput = {
    AND?: GroceryItemWhereInput | GroceryItemWhereInput[];
    OR?: GroceryItemWhereInput[];
    NOT?: GroceryItemWhereInput | GroceryItemWhereInput[];
    id?: StringFilter<'GroceryItem'> | string;
    userId?: StringFilter<'GroceryItem'> | string;
    name?: StringFilter<'GroceryItem'> | string;
    amount?: FloatNullableFilter<'GroceryItem'> | number | null;
    unit?: StringNullableFilter<'GroceryItem'> | string | null;
    checked?: BoolFilter<'GroceryItem'> | boolean;
    createdAt?: DateTimeFilter<'GroceryItem'> | Date | string;
    updatedAt?: DateTimeFilter<'GroceryItem'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type GroceryItemOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    amount?: SortOrderInput | SortOrder;
    unit?: SortOrderInput | SortOrder;
    checked?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type GroceryItemWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: GroceryItemWhereInput | GroceryItemWhereInput[];
      OR?: GroceryItemWhereInput[];
      NOT?: GroceryItemWhereInput | GroceryItemWhereInput[];
      userId?: StringFilter<'GroceryItem'> | string;
      name?: StringFilter<'GroceryItem'> | string;
      amount?: FloatNullableFilter<'GroceryItem'> | number | null;
      unit?: StringNullableFilter<'GroceryItem'> | string | null;
      checked?: BoolFilter<'GroceryItem'> | boolean;
      createdAt?: DateTimeFilter<'GroceryItem'> | Date | string;
      updatedAt?: DateTimeFilter<'GroceryItem'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id'
  >;

  export type GroceryItemOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    amount?: SortOrderInput | SortOrder;
    unit?: SortOrderInput | SortOrder;
    checked?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: GroceryItemCountOrderByAggregateInput;
    _avg?: GroceryItemAvgOrderByAggregateInput;
    _max?: GroceryItemMaxOrderByAggregateInput;
    _min?: GroceryItemMinOrderByAggregateInput;
    _sum?: GroceryItemSumOrderByAggregateInput;
  };

  export type GroceryItemScalarWhereWithAggregatesInput = {
    AND?:
      | GroceryItemScalarWhereWithAggregatesInput
      | GroceryItemScalarWhereWithAggregatesInput[];
    OR?: GroceryItemScalarWhereWithAggregatesInput[];
    NOT?:
      | GroceryItemScalarWhereWithAggregatesInput
      | GroceryItemScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'GroceryItem'> | string;
    userId?: StringWithAggregatesFilter<'GroceryItem'> | string;
    name?: StringWithAggregatesFilter<'GroceryItem'> | string;
    amount?: FloatNullableWithAggregatesFilter<'GroceryItem'> | number | null;
    unit?: StringNullableWithAggregatesFilter<'GroceryItem'> | string | null;
    checked?: BoolWithAggregatesFilter<'GroceryItem'> | boolean;
    createdAt?: DateTimeWithAggregatesFilter<'GroceryItem'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'GroceryItem'> | Date | string;
  };

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
    OR?: RefreshTokenWhereInput[];
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
    id?: StringFilter<'RefreshToken'> | string;
    userId?: StringFilter<'RefreshToken'> | string;
    tokenHash?: StringFilter<'RefreshToken'> | string;
    expiresAt?: DateTimeFilter<'RefreshToken'> | Date | string;
    createdAt?: DateTimeFilter<'RefreshToken'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      tokenHash?: string;
      AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
      OR?: RefreshTokenWhereInput[];
      NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[];
      userId?: StringFilter<'RefreshToken'> | string;
      expiresAt?: DateTimeFilter<'RefreshToken'> | Date | string;
      createdAt?: DateTimeFilter<'RefreshToken'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'id' | 'tokenHash'
  >;

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    _count?: RefreshTokenCountOrderByAggregateInput;
    _max?: RefreshTokenMaxOrderByAggregateInput;
    _min?: RefreshTokenMinOrderByAggregateInput;
  };

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?:
      | RefreshTokenScalarWhereWithAggregatesInput
      | RefreshTokenScalarWhereWithAggregatesInput[];
    OR?: RefreshTokenScalarWhereWithAggregatesInput[];
    NOT?:
      | RefreshTokenScalarWhereWithAggregatesInput
      | RefreshTokenScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<'RefreshToken'> | string;
    userId?: StringWithAggregatesFilter<'RefreshToken'> | string;
    tokenHash?: StringWithAggregatesFilter<'RefreshToken'> | string;
    expiresAt?: DateTimeWithAggregatesFilter<'RefreshToken'> | Date | string;
    createdAt?: DateTimeWithAggregatesFilter<'RefreshToken'> | Date | string;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    pantryItems?: PantryItemCreateNestedManyWithoutUserInput;
    collections?: CollectionCreateNestedManyWithoutUserInput;
    groceryItems?: GroceryItemCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    pantryItems?: PantryItemUncheckedCreateNestedManyWithoutUserInput;
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput;
    groceryItems?: GroceryItemUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    pantryItems?: PantryItemUpdateManyWithoutUserNestedInput;
    collections?: CollectionUpdateManyWithoutUserNestedInput;
    groceryItems?: GroceryItemUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    pantryItems?: PantryItemUncheckedUpdateManyWithoutUserNestedInput;
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
    groceryItems?: GroceryItemUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProfileCreateInput = {
    id?: string;
    diet?: ProfileCreatedietInput | string[];
    intolerances?: ProfileCreateintolerancesInput | string[];
    cuisines?: ProfileCreatecuisinesInput | string[];
    goals?: ProfileCreategoalsInput | string[];
    user: UserCreateNestedOneWithoutProfileInput;
  };

  export type ProfileUncheckedCreateInput = {
    id?: string;
    userId: string;
    diet?: ProfileCreatedietInput | string[];
    intolerances?: ProfileCreateintolerancesInput | string[];
    cuisines?: ProfileCreatecuisinesInput | string[];
    goals?: ProfileCreategoalsInput | string[];
  };

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diet?: ProfileUpdatedietInput | string[];
    intolerances?: ProfileUpdateintolerancesInput | string[];
    cuisines?: ProfileUpdatecuisinesInput | string[];
    goals?: ProfileUpdategoalsInput | string[];
    user?: UserUpdateOneRequiredWithoutProfileNestedInput;
  };

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    diet?: ProfileUpdatedietInput | string[];
    intolerances?: ProfileUpdateintolerancesInput | string[];
    cuisines?: ProfileUpdatecuisinesInput | string[];
    goals?: ProfileUpdategoalsInput | string[];
  };

  export type ProfileCreateManyInput = {
    id?: string;
    userId: string;
    diet?: ProfileCreatedietInput | string[];
    intolerances?: ProfileCreateintolerancesInput | string[];
    cuisines?: ProfileCreatecuisinesInput | string[];
    goals?: ProfileCreategoalsInput | string[];
  };

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diet?: ProfileUpdatedietInput | string[];
    intolerances?: ProfileUpdateintolerancesInput | string[];
    cuisines?: ProfileUpdatecuisinesInput | string[];
    goals?: ProfileUpdategoalsInput | string[];
  };

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    diet?: ProfileUpdatedietInput | string[];
    intolerances?: ProfileUpdateintolerancesInput | string[];
    cuisines?: ProfileUpdatecuisinesInput | string[];
    goals?: ProfileUpdategoalsInput | string[];
  };

  export type PantryItemCreateInput = {
    id?: string;
    ingredientId: number;
    name: string;
    amount?: number | null;
    unit?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutPantryItemsInput;
  };

  export type PantryItemUncheckedCreateInput = {
    id?: string;
    userId: string;
    ingredientId: number;
    name: string;
    amount?: number | null;
    unit?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PantryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ingredientId?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutPantryItemsNestedInput;
  };

  export type PantryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    ingredientId?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PantryItemCreateManyInput = {
    id?: string;
    userId: string;
    ingredientId: number;
    name: string;
    amount?: number | null;
    unit?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PantryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ingredientId?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PantryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    ingredientId?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CollectionCreateInput = {
    id?: string;
    name: string;
    recipeIds?: CollectionCreaterecipeIdsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutCollectionsInput;
  };

  export type CollectionUncheckedCreateInput = {
    id?: string;
    userId: string;
    name: string;
    recipeIds?: CollectionCreaterecipeIdsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CollectionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    recipeIds?: CollectionUpdaterecipeIdsInput | number[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutCollectionsNestedInput;
  };

  export type CollectionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    recipeIds?: CollectionUpdaterecipeIdsInput | number[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CollectionCreateManyInput = {
    id?: string;
    userId: string;
    name: string;
    recipeIds?: CollectionCreaterecipeIdsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CollectionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    recipeIds?: CollectionUpdaterecipeIdsInput | number[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CollectionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    recipeIds?: CollectionUpdaterecipeIdsInput | number[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GroceryItemCreateInput = {
    id?: string;
    name: string;
    amount?: number | null;
    unit?: string | null;
    checked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: UserCreateNestedOneWithoutGroceryItemsInput;
  };

  export type GroceryItemUncheckedCreateInput = {
    id?: string;
    userId: string;
    name: string;
    amount?: number | null;
    unit?: string | null;
    checked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type GroceryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    checked?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutGroceryItemsNestedInput;
  };

  export type GroceryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    checked?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GroceryItemCreateManyInput = {
    id?: string;
    userId: string;
    name: string;
    amount?: number | null;
    unit?: string | null;
    checked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type GroceryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    checked?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GroceryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    checked?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenCreateInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
    user: UserCreateNestedOneWithoutRefreshTokensInput;
  };

  export type RefreshTokenUncheckedCreateInput = {
    id?: string;
    userId: string;
    tokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput;
  };

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenCreateManyInput = {
    id?: string;
    userId: string;
    tokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null;
    isNot?: ProfileWhereInput | null;
  };

  export type PantryItemListRelationFilter = {
    every?: PantryItemWhereInput;
    some?: PantryItemWhereInput;
    none?: PantryItemWhereInput;
  };

  export type CollectionListRelationFilter = {
    every?: CollectionWhereInput;
    some?: CollectionWhereInput;
    none?: CollectionWhereInput;
  };

  export type GroceryItemListRelationFilter = {
    every?: GroceryItemWhereInput;
    some?: GroceryItemWhereInput;
    none?: GroceryItemWhereInput;
  };

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput;
    some?: RefreshTokenWhereInput;
    none?: RefreshTokenWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type PantryItemOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CollectionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type GroceryItemOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    passwordHash?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    diet?: SortOrder;
    intolerances?: SortOrder;
    cuisines?: SortOrder;
    goals?: SortOrder;
  };

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type PantryItemUserIdIngredientIdCompoundUniqueInput = {
    userId: string;
    ingredientId: number;
  };

  export type PantryItemCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    ingredientId?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    unit?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PantryItemAvgOrderByAggregateInput = {
    ingredientId?: SortOrder;
    amount?: SortOrder;
  };

  export type PantryItemMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    ingredientId?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    unit?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PantryItemMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    ingredientId?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    unit?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type PantryItemSumOrderByAggregateInput = {
    ingredientId?: SortOrder;
    amount?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    has?: number | IntFieldRefInput<$PrismaModel> | null;
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>;
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
  };

  export type CollectionCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    recipeIds?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CollectionAvgOrderByAggregateInput = {
    recipeIds?: SortOrder;
  };

  export type CollectionMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CollectionMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type CollectionSumOrderByAggregateInput = {
    recipeIds?: SortOrder;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type GroceryItemCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    unit?: SortOrder;
    checked?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type GroceryItemAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type GroceryItemMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    unit?: SortOrder;
    checked?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type GroceryItemMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    name?: SortOrder;
    amount?: SortOrder;
    unit?: SortOrder;
    checked?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type GroceryItemSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
    tokenHash?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
  };

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    connect?: ProfileWhereUniqueInput;
  };

  export type PantryItemCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PantryItemCreateWithoutUserInput,
          PantryItemUncheckedCreateWithoutUserInput
        >
      | PantryItemCreateWithoutUserInput[]
      | PantryItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PantryItemCreateOrConnectWithoutUserInput
      | PantryItemCreateOrConnectWithoutUserInput[];
    createMany?: PantryItemCreateManyUserInputEnvelope;
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[];
  };

  export type CollectionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CollectionCreateWithoutUserInput,
          CollectionUncheckedCreateWithoutUserInput
        >
      | CollectionCreateWithoutUserInput[]
      | CollectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutUserInput
      | CollectionCreateOrConnectWithoutUserInput[];
    createMany?: CollectionCreateManyUserInputEnvelope;
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
  };

  export type GroceryItemCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          GroceryItemCreateWithoutUserInput,
          GroceryItemUncheckedCreateWithoutUserInput
        >
      | GroceryItemCreateWithoutUserInput[]
      | GroceryItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | GroceryItemCreateOrConnectWithoutUserInput
      | GroceryItemCreateOrConnectWithoutUserInput[];
    createMany?: GroceryItemCreateManyUserInputEnvelope;
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[];
  };

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
  };

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    connect?: ProfileWhereUniqueInput;
  };

  export type PantryItemUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          PantryItemCreateWithoutUserInput,
          PantryItemUncheckedCreateWithoutUserInput
        >
      | PantryItemCreateWithoutUserInput[]
      | PantryItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PantryItemCreateOrConnectWithoutUserInput
      | PantryItemCreateOrConnectWithoutUserInput[];
    createMany?: PantryItemCreateManyUserInputEnvelope;
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[];
  };

  export type CollectionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          CollectionCreateWithoutUserInput,
          CollectionUncheckedCreateWithoutUserInput
        >
      | CollectionCreateWithoutUserInput[]
      | CollectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutUserInput
      | CollectionCreateOrConnectWithoutUserInput[];
    createMany?: CollectionCreateManyUserInputEnvelope;
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
  };

  export type GroceryItemUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          GroceryItemCreateWithoutUserInput,
          GroceryItemUncheckedCreateWithoutUserInput
        >
      | GroceryItemCreateWithoutUserInput[]
      | GroceryItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | GroceryItemCreateOrConnectWithoutUserInput
      | GroceryItemCreateOrConnectWithoutUserInput[];
    createMany?: GroceryItemCreateManyUserInputEnvelope;
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[];
  };

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    upsert?: ProfileUpsertWithoutUserInput;
    disconnect?: ProfileWhereInput | boolean;
    delete?: ProfileWhereInput | boolean;
    connect?: ProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        ProfileUpdateToOneWithWhereWithoutUserInput,
        ProfileUpdateWithoutUserInput
      >,
      ProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type PantryItemUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PantryItemCreateWithoutUserInput,
          PantryItemUncheckedCreateWithoutUserInput
        >
      | PantryItemCreateWithoutUserInput[]
      | PantryItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PantryItemCreateOrConnectWithoutUserInput
      | PantryItemCreateOrConnectWithoutUserInput[];
    upsert?:
      | PantryItemUpsertWithWhereUniqueWithoutUserInput
      | PantryItemUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PantryItemCreateManyUserInputEnvelope;
    set?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[];
    disconnect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[];
    delete?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[];
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[];
    update?:
      | PantryItemUpdateWithWhereUniqueWithoutUserInput
      | PantryItemUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PantryItemUpdateManyWithWhereWithoutUserInput
      | PantryItemUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[];
  };

  export type CollectionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CollectionCreateWithoutUserInput,
          CollectionUncheckedCreateWithoutUserInput
        >
      | CollectionCreateWithoutUserInput[]
      | CollectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutUserInput
      | CollectionCreateOrConnectWithoutUserInput[];
    upsert?:
      | CollectionUpsertWithWhereUniqueWithoutUserInput
      | CollectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CollectionCreateManyUserInputEnvelope;
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    update?:
      | CollectionUpdateWithWhereUniqueWithoutUserInput
      | CollectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CollectionUpdateManyWithWhereWithoutUserInput
      | CollectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
  };

  export type GroceryItemUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          GroceryItemCreateWithoutUserInput,
          GroceryItemUncheckedCreateWithoutUserInput
        >
      | GroceryItemCreateWithoutUserInput[]
      | GroceryItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | GroceryItemCreateOrConnectWithoutUserInput
      | GroceryItemCreateOrConnectWithoutUserInput[];
    upsert?:
      | GroceryItemUpsertWithWhereUniqueWithoutUserInput
      | GroceryItemUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: GroceryItemCreateManyUserInputEnvelope;
    set?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[];
    disconnect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[];
    delete?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[];
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[];
    update?:
      | GroceryItemUpdateWithWhereUniqueWithoutUserInput
      | GroceryItemUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | GroceryItemUpdateManyWithWhereWithoutUserInput
      | GroceryItemUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[];
  };

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    update?:
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RefreshTokenUpdateManyWithWhereWithoutUserInput
      | RefreshTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
  };

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput;
    upsert?: ProfileUpsertWithoutUserInput;
    disconnect?: ProfileWhereInput | boolean;
    delete?: ProfileWhereInput | boolean;
    connect?: ProfileWhereUniqueInput;
    update?: XOR<
      XOR<
        ProfileUpdateToOneWithWhereWithoutUserInput,
        ProfileUpdateWithoutUserInput
      >,
      ProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type PantryItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          PantryItemCreateWithoutUserInput,
          PantryItemUncheckedCreateWithoutUserInput
        >
      | PantryItemCreateWithoutUserInput[]
      | PantryItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | PantryItemCreateOrConnectWithoutUserInput
      | PantryItemCreateOrConnectWithoutUserInput[];
    upsert?:
      | PantryItemUpsertWithWhereUniqueWithoutUserInput
      | PantryItemUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: PantryItemCreateManyUserInputEnvelope;
    set?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[];
    disconnect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[];
    delete?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[];
    connect?: PantryItemWhereUniqueInput | PantryItemWhereUniqueInput[];
    update?:
      | PantryItemUpdateWithWhereUniqueWithoutUserInput
      | PantryItemUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | PantryItemUpdateManyWithWhereWithoutUserInput
      | PantryItemUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[];
  };

  export type CollectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          CollectionCreateWithoutUserInput,
          CollectionUncheckedCreateWithoutUserInput
        >
      | CollectionCreateWithoutUserInput[]
      | CollectionUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | CollectionCreateOrConnectWithoutUserInput
      | CollectionCreateOrConnectWithoutUserInput[];
    upsert?:
      | CollectionUpsertWithWhereUniqueWithoutUserInput
      | CollectionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: CollectionCreateManyUserInputEnvelope;
    set?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    disconnect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    delete?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    connect?: CollectionWhereUniqueInput | CollectionWhereUniqueInput[];
    update?:
      | CollectionUpdateWithWhereUniqueWithoutUserInput
      | CollectionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | CollectionUpdateManyWithWhereWithoutUserInput
      | CollectionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
  };

  export type GroceryItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          GroceryItemCreateWithoutUserInput,
          GroceryItemUncheckedCreateWithoutUserInput
        >
      | GroceryItemCreateWithoutUserInput[]
      | GroceryItemUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | GroceryItemCreateOrConnectWithoutUserInput
      | GroceryItemCreateOrConnectWithoutUserInput[];
    upsert?:
      | GroceryItemUpsertWithWhereUniqueWithoutUserInput
      | GroceryItemUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: GroceryItemCreateManyUserInputEnvelope;
    set?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[];
    disconnect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[];
    delete?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[];
    connect?: GroceryItemWhereUniqueInput | GroceryItemWhereUniqueInput[];
    update?:
      | GroceryItemUpdateWithWhereUniqueWithoutUserInput
      | GroceryItemUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | GroceryItemUpdateManyWithWhereWithoutUserInput
      | GroceryItemUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[];
  };

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          RefreshTokenCreateWithoutUserInput,
          RefreshTokenUncheckedCreateWithoutUserInput
        >
      | RefreshTokenCreateWithoutUserInput[]
      | RefreshTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | RefreshTokenCreateOrConnectWithoutUserInput
      | RefreshTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput
      | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: RefreshTokenCreateManyUserInputEnvelope;
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[];
    update?:
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput
      | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | RefreshTokenUpdateManyWithWhereWithoutUserInput
      | RefreshTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
  };

  export type ProfileCreatedietInput = {
    set: string[];
  };

  export type ProfileCreateintolerancesInput = {
    set: string[];
  };

  export type ProfileCreatecuisinesInput = {
    set: string[];
  };

  export type ProfileCreategoalsInput = {
    set: string[];
  };

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;
    connect?: UserWhereUniqueInput;
  };

  export type ProfileUpdatedietInput = {
    set?: string[];
    push?: string | string[];
  };

  export type ProfileUpdateintolerancesInput = {
    set?: string[];
    push?: string | string[];
  };

  export type ProfileUpdatecuisinesInput = {
    set?: string[];
    push?: string | string[];
  };

  export type ProfileUpdategoalsInput = {
    set?: string[];
    push?: string | string[];
  };

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput;
    upsert?: UserUpsertWithoutProfileInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutProfileInput,
        UserUpdateWithoutProfileInput
      >,
      UserUncheckedUpdateWithoutProfileInput
    >;
  };

  export type UserCreateNestedOneWithoutPantryItemsInput = {
    create?: XOR<
      UserCreateWithoutPantryItemsInput,
      UserUncheckedCreateWithoutPantryItemsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPantryItemsInput;
    connect?: UserWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type UserUpdateOneRequiredWithoutPantryItemsNestedInput = {
    create?: XOR<
      UserCreateWithoutPantryItemsInput,
      UserUncheckedCreateWithoutPantryItemsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPantryItemsInput;
    upsert?: UserUpsertWithoutPantryItemsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPantryItemsInput,
        UserUpdateWithoutPantryItemsInput
      >,
      UserUncheckedUpdateWithoutPantryItemsInput
    >;
  };

  export type CollectionCreaterecipeIdsInput = {
    set: number[];
  };

  export type UserCreateNestedOneWithoutCollectionsInput = {
    create?: XOR<
      UserCreateWithoutCollectionsInput,
      UserUncheckedCreateWithoutCollectionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput;
    connect?: UserWhereUniqueInput;
  };

  export type CollectionUpdaterecipeIdsInput = {
    set?: number[];
    push?: number | number[];
  };

  export type UserUpdateOneRequiredWithoutCollectionsNestedInput = {
    create?: XOR<
      UserCreateWithoutCollectionsInput,
      UserUncheckedCreateWithoutCollectionsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCollectionsInput;
    upsert?: UserUpsertWithoutCollectionsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCollectionsInput,
        UserUpdateWithoutCollectionsInput
      >,
      UserUncheckedUpdateWithoutCollectionsInput
    >;
  };

  export type UserCreateNestedOneWithoutGroceryItemsInput = {
    create?: XOR<
      UserCreateWithoutGroceryItemsInput,
      UserUncheckedCreateWithoutGroceryItemsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutGroceryItemsInput;
    connect?: UserWhereUniqueInput;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UserUpdateOneRequiredWithoutGroceryItemsNestedInput = {
    create?: XOR<
      UserCreateWithoutGroceryItemsInput,
      UserUncheckedCreateWithoutGroceryItemsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutGroceryItemsInput;
    upsert?: UserUpsertWithoutGroceryItemsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutGroceryItemsInput,
        UserUpdateWithoutGroceryItemsInput
      >,
      UserUncheckedUpdateWithoutGroceryItemsInput
    >;
  };

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput;
    upsert?: UserUpsertWithoutRefreshTokensInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutRefreshTokensInput,
        UserUpdateWithoutRefreshTokensInput
      >,
      UserUncheckedUpdateWithoutRefreshTokensInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedFloatNullableFilter<$PrismaModel>;
    _min?: NestedFloatNullableFilter<$PrismaModel>;
    _max?: NestedFloatNullableFilter<$PrismaModel>;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type ProfileCreateWithoutUserInput = {
    id?: string;
    diet?: ProfileCreatedietInput | string[];
    intolerances?: ProfileCreateintolerancesInput | string[];
    cuisines?: ProfileCreatecuisinesInput | string[];
    goals?: ProfileCreategoalsInput | string[];
  };

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string;
    diet?: ProfileCreatedietInput | string[];
    intolerances?: ProfileCreateintolerancesInput | string[];
    cuisines?: ProfileCreatecuisinesInput | string[];
    goals?: ProfileCreategoalsInput | string[];
  };

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput;
    create: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
  };

  export type PantryItemCreateWithoutUserInput = {
    id?: string;
    ingredientId: number;
    name: string;
    amount?: number | null;
    unit?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PantryItemUncheckedCreateWithoutUserInput = {
    id?: string;
    ingredientId: number;
    name: string;
    amount?: number | null;
    unit?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PantryItemCreateOrConnectWithoutUserInput = {
    where: PantryItemWhereUniqueInput;
    create: XOR<
      PantryItemCreateWithoutUserInput,
      PantryItemUncheckedCreateWithoutUserInput
    >;
  };

  export type PantryItemCreateManyUserInputEnvelope = {
    data: PantryItemCreateManyUserInput | PantryItemCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type CollectionCreateWithoutUserInput = {
    id?: string;
    name: string;
    recipeIds?: CollectionCreaterecipeIdsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CollectionUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    recipeIds?: CollectionCreaterecipeIdsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CollectionCreateOrConnectWithoutUserInput = {
    where: CollectionWhereUniqueInput;
    create: XOR<
      CollectionCreateWithoutUserInput,
      CollectionUncheckedCreateWithoutUserInput
    >;
  };

  export type CollectionCreateManyUserInputEnvelope = {
    data: CollectionCreateManyUserInput | CollectionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type GroceryItemCreateWithoutUserInput = {
    id?: string;
    name: string;
    amount?: number | null;
    unit?: string | null;
    checked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type GroceryItemUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    amount?: number | null;
    unit?: string | null;
    checked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type GroceryItemCreateOrConnectWithoutUserInput = {
    where: GroceryItemWhereUniqueInput;
    create: XOR<
      GroceryItemCreateWithoutUserInput,
      GroceryItemUncheckedCreateWithoutUserInput
    >;
  };

  export type GroceryItemCreateManyUserInputEnvelope = {
    data: GroceryItemCreateManyUserInput | GroceryItemCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput;
    create: XOR<
      RefreshTokenCreateWithoutUserInput,
      RefreshTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<
      ProfileUpdateWithoutUserInput,
      ProfileUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ProfileCreateWithoutUserInput,
      ProfileUncheckedCreateWithoutUserInput
    >;
    where?: ProfileWhereInput;
  };

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput;
    data: XOR<
      ProfileUpdateWithoutUserInput,
      ProfileUncheckedUpdateWithoutUserInput
    >;
  };

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diet?: ProfileUpdatedietInput | string[];
    intolerances?: ProfileUpdateintolerancesInput | string[];
    cuisines?: ProfileUpdatecuisinesInput | string[];
    goals?: ProfileUpdategoalsInput | string[];
  };

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diet?: ProfileUpdatedietInput | string[];
    intolerances?: ProfileUpdateintolerancesInput | string[];
    cuisines?: ProfileUpdatecuisinesInput | string[];
    goals?: ProfileUpdategoalsInput | string[];
  };

  export type PantryItemUpsertWithWhereUniqueWithoutUserInput = {
    where: PantryItemWhereUniqueInput;
    update: XOR<
      PantryItemUpdateWithoutUserInput,
      PantryItemUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      PantryItemCreateWithoutUserInput,
      PantryItemUncheckedCreateWithoutUserInput
    >;
  };

  export type PantryItemUpdateWithWhereUniqueWithoutUserInput = {
    where: PantryItemWhereUniqueInput;
    data: XOR<
      PantryItemUpdateWithoutUserInput,
      PantryItemUncheckedUpdateWithoutUserInput
    >;
  };

  export type PantryItemUpdateManyWithWhereWithoutUserInput = {
    where: PantryItemScalarWhereInput;
    data: XOR<
      PantryItemUpdateManyMutationInput,
      PantryItemUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type PantryItemScalarWhereInput = {
    AND?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[];
    OR?: PantryItemScalarWhereInput[];
    NOT?: PantryItemScalarWhereInput | PantryItemScalarWhereInput[];
    id?: StringFilter<'PantryItem'> | string;
    userId?: StringFilter<'PantryItem'> | string;
    ingredientId?: IntFilter<'PantryItem'> | number;
    name?: StringFilter<'PantryItem'> | string;
    amount?: FloatNullableFilter<'PantryItem'> | number | null;
    unit?: StringNullableFilter<'PantryItem'> | string | null;
    createdAt?: DateTimeFilter<'PantryItem'> | Date | string;
    updatedAt?: DateTimeFilter<'PantryItem'> | Date | string;
  };

  export type CollectionUpsertWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput;
    update: XOR<
      CollectionUpdateWithoutUserInput,
      CollectionUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      CollectionCreateWithoutUserInput,
      CollectionUncheckedCreateWithoutUserInput
    >;
  };

  export type CollectionUpdateWithWhereUniqueWithoutUserInput = {
    where: CollectionWhereUniqueInput;
    data: XOR<
      CollectionUpdateWithoutUserInput,
      CollectionUncheckedUpdateWithoutUserInput
    >;
  };

  export type CollectionUpdateManyWithWhereWithoutUserInput = {
    where: CollectionScalarWhereInput;
    data: XOR<
      CollectionUpdateManyMutationInput,
      CollectionUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type CollectionScalarWhereInput = {
    AND?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
    OR?: CollectionScalarWhereInput[];
    NOT?: CollectionScalarWhereInput | CollectionScalarWhereInput[];
    id?: StringFilter<'Collection'> | string;
    userId?: StringFilter<'Collection'> | string;
    name?: StringFilter<'Collection'> | string;
    recipeIds?: IntNullableListFilter<'Collection'>;
    createdAt?: DateTimeFilter<'Collection'> | Date | string;
    updatedAt?: DateTimeFilter<'Collection'> | Date | string;
  };

  export type GroceryItemUpsertWithWhereUniqueWithoutUserInput = {
    where: GroceryItemWhereUniqueInput;
    update: XOR<
      GroceryItemUpdateWithoutUserInput,
      GroceryItemUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      GroceryItemCreateWithoutUserInput,
      GroceryItemUncheckedCreateWithoutUserInput
    >;
  };

  export type GroceryItemUpdateWithWhereUniqueWithoutUserInput = {
    where: GroceryItemWhereUniqueInput;
    data: XOR<
      GroceryItemUpdateWithoutUserInput,
      GroceryItemUncheckedUpdateWithoutUserInput
    >;
  };

  export type GroceryItemUpdateManyWithWhereWithoutUserInput = {
    where: GroceryItemScalarWhereInput;
    data: XOR<
      GroceryItemUpdateManyMutationInput,
      GroceryItemUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type GroceryItemScalarWhereInput = {
    AND?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[];
    OR?: GroceryItemScalarWhereInput[];
    NOT?: GroceryItemScalarWhereInput | GroceryItemScalarWhereInput[];
    id?: StringFilter<'GroceryItem'> | string;
    userId?: StringFilter<'GroceryItem'> | string;
    name?: StringFilter<'GroceryItem'> | string;
    amount?: FloatNullableFilter<'GroceryItem'> | number | null;
    unit?: StringNullableFilter<'GroceryItem'> | string | null;
    checked?: BoolFilter<'GroceryItem'> | boolean;
    createdAt?: DateTimeFilter<'GroceryItem'> | Date | string;
    updatedAt?: DateTimeFilter<'GroceryItem'> | Date | string;
  };

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput;
    update: XOR<
      RefreshTokenUpdateWithoutUserInput,
      RefreshTokenUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      RefreshTokenCreateWithoutUserInput,
      RefreshTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput;
    data: XOR<
      RefreshTokenUpdateWithoutUserInput,
      RefreshTokenUncheckedUpdateWithoutUserInput
    >;
  };

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput;
    data: XOR<
      RefreshTokenUpdateManyMutationInput,
      RefreshTokenUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
    OR?: RefreshTokenScalarWhereInput[];
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[];
    id?: StringFilter<'RefreshToken'> | string;
    userId?: StringFilter<'RefreshToken'> | string;
    tokenHash?: StringFilter<'RefreshToken'> | string;
    expiresAt?: DateTimeFilter<'RefreshToken'> | Date | string;
    createdAt?: DateTimeFilter<'RefreshToken'> | Date | string;
  };

  export type UserCreateWithoutProfileInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pantryItems?: PantryItemCreateNestedManyWithoutUserInput;
    collections?: CollectionCreateNestedManyWithoutUserInput;
    groceryItems?: GroceryItemCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    pantryItems?: PantryItemUncheckedCreateNestedManyWithoutUserInput;
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput;
    groceryItems?: GroceryItemUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
  };

  export type UserUpsertWithoutProfileInput = {
    update: XOR<
      UserUpdateWithoutProfileInput,
      UserUncheckedUpdateWithoutProfileInput
    >;
    create: XOR<
      UserCreateWithoutProfileInput,
      UserUncheckedCreateWithoutProfileInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutProfileInput,
      UserUncheckedUpdateWithoutProfileInput
    >;
  };

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pantryItems?: PantryItemUpdateManyWithoutUserNestedInput;
    collections?: CollectionUpdateManyWithoutUserNestedInput;
    groceryItems?: GroceryItemUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    pantryItems?: PantryItemUncheckedUpdateManyWithoutUserNestedInput;
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
    groceryItems?: GroceryItemUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutPantryItemsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    collections?: CollectionCreateNestedManyWithoutUserInput;
    groceryItems?: GroceryItemCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPantryItemsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput;
    groceryItems?: GroceryItemUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPantryItemsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPantryItemsInput,
      UserUncheckedCreateWithoutPantryItemsInput
    >;
  };

  export type UserUpsertWithoutPantryItemsInput = {
    update: XOR<
      UserUpdateWithoutPantryItemsInput,
      UserUncheckedUpdateWithoutPantryItemsInput
    >;
    create: XOR<
      UserCreateWithoutPantryItemsInput,
      UserUncheckedCreateWithoutPantryItemsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPantryItemsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPantryItemsInput,
      UserUncheckedUpdateWithoutPantryItemsInput
    >;
  };

  export type UserUpdateWithoutPantryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    collections?: CollectionUpdateManyWithoutUserNestedInput;
    groceryItems?: GroceryItemUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPantryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
    groceryItems?: GroceryItemUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutCollectionsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    pantryItems?: PantryItemCreateNestedManyWithoutUserInput;
    groceryItems?: GroceryItemCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCollectionsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    pantryItems?: PantryItemUncheckedCreateNestedManyWithoutUserInput;
    groceryItems?: GroceryItemUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCollectionsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCollectionsInput,
      UserUncheckedCreateWithoutCollectionsInput
    >;
  };

  export type UserUpsertWithoutCollectionsInput = {
    update: XOR<
      UserUpdateWithoutCollectionsInput,
      UserUncheckedUpdateWithoutCollectionsInput
    >;
    create: XOR<
      UserCreateWithoutCollectionsInput,
      UserUncheckedCreateWithoutCollectionsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCollectionsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCollectionsInput,
      UserUncheckedUpdateWithoutCollectionsInput
    >;
  };

  export type UserUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    pantryItems?: PantryItemUpdateManyWithoutUserNestedInput;
    groceryItems?: GroceryItemUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCollectionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    pantryItems?: PantryItemUncheckedUpdateManyWithoutUserNestedInput;
    groceryItems?: GroceryItemUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutGroceryItemsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    pantryItems?: PantryItemCreateNestedManyWithoutUserInput;
    collections?: CollectionCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutGroceryItemsInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    pantryItems?: PantryItemUncheckedCreateNestedManyWithoutUserInput;
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput;
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutGroceryItemsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutGroceryItemsInput,
      UserUncheckedCreateWithoutGroceryItemsInput
    >;
  };

  export type UserUpsertWithoutGroceryItemsInput = {
    update: XOR<
      UserUpdateWithoutGroceryItemsInput,
      UserUncheckedUpdateWithoutGroceryItemsInput
    >;
    create: XOR<
      UserCreateWithoutGroceryItemsInput,
      UserUncheckedCreateWithoutGroceryItemsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutGroceryItemsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutGroceryItemsInput,
      UserUncheckedUpdateWithoutGroceryItemsInput
    >;
  };

  export type UserUpdateWithoutGroceryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    pantryItems?: PantryItemUpdateManyWithoutUserNestedInput;
    collections?: CollectionUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutGroceryItemsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    pantryItems?: PantryItemUncheckedUpdateManyWithoutUserNestedInput;
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: ProfileCreateNestedOneWithoutUserInput;
    pantryItems?: PantryItemCreateNestedManyWithoutUserInput;
    collections?: CollectionCreateNestedManyWithoutUserInput;
    groceryItems?: GroceryItemCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string;
    email: string;
    passwordHash?: string | null;
    name?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput;
    pantryItems?: PantryItemUncheckedCreateNestedManyWithoutUserInput;
    collections?: CollectionUncheckedCreateNestedManyWithoutUserInput;
    groceryItems?: GroceryItemUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
  };

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<
      UserUpdateWithoutRefreshTokensInput,
      UserUncheckedUpdateWithoutRefreshTokensInput
    >;
    create: XOR<
      UserCreateWithoutRefreshTokensInput,
      UserUncheckedCreateWithoutRefreshTokensInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutRefreshTokensInput,
      UserUncheckedUpdateWithoutRefreshTokensInput
    >;
  };

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: ProfileUpdateOneWithoutUserNestedInput;
    pantryItems?: PantryItemUpdateManyWithoutUserNestedInput;
    collections?: CollectionUpdateManyWithoutUserNestedInput;
    groceryItems?: GroceryItemUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput;
    pantryItems?: PantryItemUncheckedUpdateManyWithoutUserNestedInput;
    collections?: CollectionUncheckedUpdateManyWithoutUserNestedInput;
    groceryItems?: GroceryItemUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type PantryItemCreateManyUserInput = {
    id?: string;
    ingredientId: number;
    name: string;
    amount?: number | null;
    unit?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type CollectionCreateManyUserInput = {
    id?: string;
    name: string;
    recipeIds?: CollectionCreaterecipeIdsInput | number[];
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type GroceryItemCreateManyUserInput = {
    id?: string;
    name: string;
    amount?: number | null;
    unit?: string | null;
    checked?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type RefreshTokenCreateManyUserInput = {
    id?: string;
    tokenHash: string;
    expiresAt: Date | string;
    createdAt?: Date | string;
  };

  export type PantryItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ingredientId?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PantryItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ingredientId?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PantryItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    ingredientId?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CollectionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    recipeIds?: CollectionUpdaterecipeIdsInput | number[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CollectionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    recipeIds?: CollectionUpdaterecipeIdsInput | number[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CollectionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    recipeIds?: CollectionUpdaterecipeIdsInput | number[];
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GroceryItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    checked?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GroceryItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    checked?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GroceryItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    amount?: NullableFloatFieldUpdateOperationsInput | number | null;
    unit?: NullableStringFieldUpdateOperationsInput | string | null;
    checked?: BoolFieldUpdateOperationsInput | boolean;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    tokenHash?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
