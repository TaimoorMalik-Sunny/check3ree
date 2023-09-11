import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: any;
  AWSDateTime: any;
  AWSJSON: string;
}

export enum BlockChainType {
  Ethereum = 'ETHEREUM'
}

export interface CalcWalletAttributesInput {
  appliedInterestRate: Scalars['Int'];
  blockchainType: BlockChainType;
  loanRequired_eth: Scalars['Float'];
  purpose?: InputMaybe<Scalars['String']>;
  repaymentDays: Scalars['Int'];
  walletAddress: Scalars['String'];
}

export interface GetWalletAttributesInput {
  walletAddress: Scalars['String'];
}

export interface Mutation {
  __typename?: 'Mutation';
  calcWalletAttributes: WalletAttributes;
}


export interface MutationCalcWalletAttributesArgs {
  input: CalcWalletAttributesInput;
}

export interface PredictCreditScoreInput {
  walletAddress: Scalars['String'];
}

export interface Query {
  __typename?: 'Query';
  getWalletAttributes: WalletAttributes;
  predictCreditScore?: Maybe<Scalars['AWSJSON']>;
}


export interface QueryGetWalletAttributesArgs {
  input: GetWalletAttributesInput;
}


export interface QueryPredictCreditScoreArgs {
  input: PredictCreditScoreInput;
}

export interface Response {
  __typename?: 'Response';
  message: Scalars['String'];
}

export interface WalletAttributes {
  __typename?: 'WalletAttributes';
  attrs: Scalars['AWSJSON'];
  createdAt: Scalars['AWSDateTime'];
  id: Scalars['ID'];
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AWSDate: ResolverTypeWrapper<Scalars['AWSDate']>;
  AWSDateTime: ResolverTypeWrapper<Scalars['AWSDateTime']>;
  AWSJSON: ResolverTypeWrapper<Scalars['AWSJSON']>;
  BlockChainType: BlockChainType;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CalcWalletAttributesInput: CalcWalletAttributesInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GetWalletAttributesInput: GetWalletAttributesInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  PredictCreditScoreInput: PredictCreditScoreInput;
  Query: ResolverTypeWrapper<{}>;
  Response: ResolverTypeWrapper<Response>;
  String: ResolverTypeWrapper<Scalars['String']>;
  WalletAttributes: ResolverTypeWrapper<WalletAttributes>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AWSDate: Scalars['AWSDate'];
  AWSDateTime: Scalars['AWSDateTime'];
  AWSJSON: Scalars['AWSJSON'];
  Boolean: Scalars['Boolean'];
  CalcWalletAttributesInput: CalcWalletAttributesInput;
  Float: Scalars['Float'];
  GetWalletAttributesInput: GetWalletAttributesInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  PredictCreditScoreInput: PredictCreditScoreInput;
  Query: {};
  Response: Response;
  String: Scalars['String'];
  WalletAttributes: WalletAttributes;
};

export interface AwsDateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSDate'], any> {
  name: 'AWSDate';
}

export interface AwsDateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSDateTime'], any> {
  name: 'AWSDateTime';
}

export interface AwsjsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['AWSJSON'], any> {
  name: 'AWSJSON';
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  calcWalletAttributes?: Resolver<ResolversTypes['WalletAttributes'], ParentType, ContextType, RequireFields<MutationCalcWalletAttributesArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getWalletAttributes?: Resolver<ResolversTypes['WalletAttributes'], ParentType, ContextType, RequireFields<QueryGetWalletAttributesArgs, 'input'>>;
  predictCreditScore?: Resolver<Maybe<ResolversTypes['AWSJSON']>, ParentType, ContextType, RequireFields<QueryPredictCreditScoreArgs, 'input'>>;
};

export type ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = {
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WalletAttributesResolvers<ContextType = any, ParentType extends ResolversParentTypes['WalletAttributes'] = ResolversParentTypes['WalletAttributes']> = {
  attrs?: Resolver<ResolversTypes['AWSJSON'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['AWSDateTime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AWSDate?: GraphQLScalarType;
  AWSDateTime?: GraphQLScalarType;
  AWSJSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Response?: ResponseResolvers<ContextType>;
  WalletAttributes?: WalletAttributesResolvers<ContextType>;
};

