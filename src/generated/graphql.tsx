import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AdminRole = {
  __typename?: 'AdminRole';
  id?: Maybe<Scalars['Int']>;
  roleName?: Maybe<Scalars['String']>;
  roleDescription?: Maybe<Scalars['String']>;
  roleSettings?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type AdminRoleResponse = {
  __typename?: 'AdminRoleResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  adminRoles?: Maybe<Array<AdminRole>>;
};

export type Billing = {
  __typename?: 'Billing';
  type?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
};

export type Biolink = {
  __typename?: 'Biolink';
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  profilePhotoUrl?: Maybe<Scalars['String']>;
  coverPhotoUrl?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  settings?: Maybe<BiolinkSettings>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  links?: Maybe<Array<Link>>;
  category?: Maybe<Category>;
  verificationId?: Maybe<Scalars['String']>;
};

export type BiolinkSettings = {
  __typename?: 'BiolinkSettings';
  enableDarkMode?: Maybe<Scalars['Boolean']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  enableColoredContactButtons?: Maybe<Scalars['Boolean']>;
  addedToDirectory?: Maybe<Scalars['Boolean']>;
  directoryBio?: Maybe<Scalars['String']>;
  enableColoredSocialMediaIcons?: Maybe<Scalars['Boolean']>;
  socialAccounts?: Maybe<Array<SocialMediaProps>>;
  enableFacebookPixel?: Maybe<Scalars['Boolean']>;
  facebookPixelId?: Maybe<Scalars['String']>;
  enableGoogleAnalytics?: Maybe<Scalars['Boolean']>;
  googleAnalyticsCode?: Maybe<Scalars['String']>;
  enableUtmParameters?: Maybe<Scalars['Boolean']>;
  utmSource?: Maybe<Scalars['String']>;
  utmMedium?: Maybe<Scalars['String']>;
  utmCampaign?: Maybe<Scalars['String']>;
  blockSearchEngineIndexing?: Maybe<Scalars['Boolean']>;
  pageTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  opengraphImageUrl?: Maybe<Scalars['String']>;
  removeDefaultBranding?: Maybe<Scalars['Boolean']>;
  enableCustomBranding?: Maybe<Scalars['Boolean']>;
  customBrandingName?: Maybe<Scalars['String']>;
  customBrandingUrl?: Maybe<Scalars['String']>;
  enablePasswordProtection?: Maybe<Scalars['Boolean']>;
  enableSensitiveContentWarning?: Maybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['Int']>;
  categoryName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  pageInfo: PageInfo;
  edges: Array<CategoryEdge>;
};

export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  node: Category;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type Code = {
  __typename?: 'Code';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['String']>;
  expireDate?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
};

export type ConnectionArgs = {
  /** Paginate before created at timestamp as opaque cursor */
  before?: Maybe<Scalars['String']>;
  /** Paginate after created at timestamp as opaque cursor */
  after?: Maybe<Scalars['String']>;
  /** Search query */
  query?: Maybe<Scalars['String']>;
  /** Paginate first */
  first?: Maybe<Scalars['Float']>;
};

export type DefaultResponse = {
  __typename?: 'DefaultResponse';
  errors?: Maybe<Array<ErrorResponse>>;
};

export type Domain = {
  __typename?: 'Domain';
  id: Scalars['String'];
  scheme?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  customIndexUrl?: Maybe<Scalars['String']>;
  enabledStatus?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type EmailInput = {
  email: Scalars['String'];
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  errorCode: Scalars['Int'];
  field?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type Link = {
  __typename?: 'Link';
  id: Scalars['String'];
  linkType?: Maybe<Scalars['String']>;
  linkTitle?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  shortenedUrl?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  enablePasswordProtection?: Maybe<Scalars['Boolean']>;
  note?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  biolink?: Maybe<Biolink>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: UserResponse;
  sendForgotPasswordEmail: DefaultResponse;
  logout: DefaultResponse;
  addNewUser?: Maybe<DefaultResponse>;
};


export type MutationLoginArgs = {
  options: LoginInput;
};


export type MutationSendForgotPasswordEmailArgs = {
  options: EmailInput;
};


export type MutationAddNewUserArgs = {
  options: NewUserInput;
};

export type NewUserInput = {
  email: Scalars['String'];
  adminRoleId?: Maybe<Scalars['Float']>;
  username: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Float']>;
  planId?: Maybe<Scalars['Float']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export type Payment = {
  __typename?: 'Payment';
  id?: Maybe<Scalars['String']>;
  clientIp?: Maybe<Scalars['String']>;
  stripePaymentCreatedAt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  methodType?: Maybe<Scalars['String']>;
  cardBrand?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  cvcCheck?: Maybe<Scalars['String']>;
  expMonth?: Maybe<Scalars['String']>;
  expYear?: Maybe<Scalars['String']>;
  funding?: Maybe<Scalars['String']>;
  cardId?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
};

export type Plan = {
  __typename?: 'Plan';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  monthlyPrice?: Maybe<Scalars['Float']>;
  monthlyPriceStripeId?: Maybe<Scalars['String']>;
  annualPrice?: Maybe<Scalars['Float']>;
  annualPriceStripeId?: Maybe<Scalars['String']>;
  settings?: Maybe<PlanSettings>;
  enabledStatus?: Maybe<Scalars['String']>;
  visibilityStatus?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
};

export type PlanResponse = {
  __typename?: 'PlanResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  plans?: Maybe<Array<Plan>>;
};

export type PlanSettings = {
  __typename?: 'PlanSettings';
  totalBiolinksLimit?: Maybe<Scalars['Int']>;
  totalLinksLimit?: Maybe<Scalars['Int']>;
  totalCustomDomainLimit?: Maybe<Scalars['Int']>;
  darkModeEnabled?: Maybe<Scalars['Boolean']>;
  addedToDirectoryEnabled?: Maybe<Scalars['Boolean']>;
  customBackHalfEnabled?: Maybe<Scalars['Boolean']>;
  noAdsEnabled?: Maybe<Scalars['Boolean']>;
  removableBrandingEnabled?: Maybe<Scalars['Boolean']>;
  customFooterBrandingEnabled?: Maybe<Scalars['Boolean']>;
  coloredLinksEnabled?: Maybe<Scalars['Boolean']>;
  googleAnalyticsEnabled?: Maybe<Scalars['Boolean']>;
  facebookPixelEnabled?: Maybe<Scalars['Boolean']>;
  verifiedCheckmarkEnabled?: Maybe<Scalars['Boolean']>;
  linksSchedulingEnabled?: Maybe<Scalars['Boolean']>;
  seoEnabled?: Maybe<Scalars['Boolean']>;
  socialEnabled?: Maybe<Scalars['Boolean']>;
  utmParametersEnabled?: Maybe<Scalars['Boolean']>;
  passwordProtectionEnabled?: Maybe<Scalars['Boolean']>;
  sensitiveContentWarningEnabled?: Maybe<Scalars['Boolean']>;
  leapLinkEnabled?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  getAllAdminRoles: AdminRoleResponse;
  me?: Maybe<User>;
  getAllCategories?: Maybe<CategoryConnection>;
  getAllPlans: PlanResponse;
  getAllUsers?: Maybe<UserConnection>;
  getAllAdmins?: Maybe<UserConnection>;
};


export type QueryGetAllCategoriesArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllUsersArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllAdminsArgs = {
  options: ConnectionArgs;
};

export type Referral = {
  __typename?: 'Referral';
  id: Scalars['String'];
  referredByEmail?: Maybe<Scalars['String']>;
  referredByName?: Maybe<Scalars['String']>;
  referredToEmail?: Maybe<Scalars['String']>;
  referredToName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  referredBy?: Maybe<User>;
};

export type SocialMediaProps = {
  __typename?: 'SocialMediaProps';
  platform?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerifiedAt?: Maybe<Scalars['String']>;
  billing?: Maybe<Billing>;
  accountStatus?: Maybe<Scalars['String']>;
  planExpirationDate?: Maybe<Scalars['String']>;
  planTrialDone?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  lastIPAddress?: Maybe<Scalars['String']>;
  lastUserAgent?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  totalLogin?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  biolinks?: Maybe<Array<Biolink>>;
  domains?: Maybe<Array<Domain>>;
  activities?: Maybe<Array<UserLogs>>;
  links?: Maybe<Array<Link>>;
  plan?: Maybe<Plan>;
  payments?: Maybe<Array<Payment>>;
  codes?: Maybe<Array<Code>>;
  referrals?: Maybe<Array<Referral>>;
  adminRole?: Maybe<AdminRole>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<Array<UserEdge>>;
  errors?: Maybe<Array<ErrorResponse>>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  node: User;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type UserLogs = {
  __typename?: 'UserLogs';
  id?: Maybe<Scalars['String']>;
  ipAddress?: Maybe<Scalars['String']>;
  cityName?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  browserName?: Maybe<Scalars['String']>;
  browserLanguage?: Maybe<Scalars['String']>;
  deviceType?: Maybe<Scalars['String']>;
  osName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  user?: Maybe<User>;
};

export type CurrentUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email'>
);

export type PageInfoFragment = (
  { __typename?: 'PageInfo' }
  & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
);

export type ReceivedErrorsFragment = (
  { __typename?: 'ErrorResponse' }
  & Pick<ErrorResponse, 'errorCode' | 'field' | 'message'>
);

export type AddNewUserMutationVariables = Exact<{
  options: NewUserInput;
}>;


export type AddNewUserMutation = (
  { __typename?: 'Mutation' }
  & { addNewUser?: Maybe<(
    { __typename?: 'DefaultResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>> }
  )> }
);

export type SendForgotPasswordEmailMutationVariables = Exact<{
  options: EmailInput;
}>;


export type SendForgotPasswordEmailMutation = (
  { __typename?: 'Mutation' }
  & { sendForgotPasswordEmail: (
    { __typename?: 'DefaultResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>> }
  ) }
);

export type LoginMutationVariables = Exact<{
  options: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & CurrentUserFragment
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & { logout: (
    { __typename?: 'DefaultResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>> }
  ) }
);

export type GetAllAdminRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAdminRolesQuery = (
  { __typename?: 'Query' }
  & { getAllAdminRoles: (
    { __typename?: 'AdminRoleResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, adminRoles?: Maybe<Array<(
      { __typename?: 'AdminRole' }
      & Pick<AdminRole, 'id' | 'roleName' | 'roleDescription' | 'createdAt' | 'updatedAt'>
    )>> }
  ) }
);

export type GetAllAdminsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllAdminsQuery = (
  { __typename?: 'Query' }
  & { getAllAdmins?: Maybe<(
    { __typename?: 'UserConnection' }
    & { pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'UserEdge' }
      & Pick<UserEdge, 'cursor'>
      & { node: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email' | 'language' | 'lastIPAddress' | 'country'>
        & { adminRole?: Maybe<(
          { __typename?: 'AdminRole' }
          & Pick<AdminRole, 'roleName'>
        )> }
      ) }
    )>>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>> }
  )> }
);

export type GetAlLCategoriesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAlLCategoriesQuery = (
  { __typename?: 'Query' }
  & { getAllCategories?: Maybe<(
    { __typename?: 'CategoryConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | 'endCursor'>
    ), edges: Array<(
      { __typename?: 'CategoryEdge' }
      & Pick<CategoryEdge, 'cursor'>
      & { node: (
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'categoryName' | 'createdAt' | 'updatedAt' | 'deletedAt'>
      ) }
    )> }
  )> }
);

export type GetAllPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPlansQuery = (
  { __typename?: 'Query' }
  & { getAllPlans: (
    { __typename?: 'PlanResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'errorCode' | 'field' | 'message'>
    )>>, plans?: Maybe<Array<(
      { __typename?: 'Plan' }
      & Pick<Plan, 'id' | 'name' | 'monthlyPrice' | 'annualPrice' | 'enabledStatus' | 'visibilityStatus'>
    )>> }
  ) }
);

export type GetAllUsersQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllUsersQuery = (
  { __typename?: 'Query' }
  & { getAllUsers?: Maybe<(
    { __typename?: 'UserConnection' }
    & { pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'UserEdge' }
      & Pick<UserEdge, 'cursor'>
      & { node: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email' | 'emailVerifiedAt' | 'accountStatus' | 'language' | 'lastIPAddress' | 'country'>
        & { plan?: Maybe<(
          { __typename?: 'Plan' }
          & Pick<Plan, 'name'>
        )> }
      ) }
    )>>, errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>> }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & CurrentUserFragment
  )> }
);

export const CurrentUserFragmentDoc = gql`
    fragment CurrentUser on User {
  id
  email
}
    `;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on PageInfo {
  hasNextPage
  hasPreviousPage
  startCursor
  endCursor
}
    `;
export const ReceivedErrorsFragmentDoc = gql`
    fragment ReceivedErrors on ErrorResponse {
  errorCode
  field
  message
}
    `;
export const AddNewUserDocument = gql`
    mutation AddNewUser($options: NewUserInput!) {
  addNewUser(options: $options) {
    errors {
      ...ReceivedErrors
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useAddNewUserMutation() {
  return Urql.useMutation<AddNewUserMutation, AddNewUserMutationVariables>(AddNewUserDocument);
};
export const SendForgotPasswordEmailDocument = gql`
    mutation SendForgotPasswordEmail($options: EmailInput!) {
  sendForgotPasswordEmail(options: $options) {
    errors {
      ...ReceivedErrors
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useSendForgotPasswordEmailMutation() {
  return Urql.useMutation<SendForgotPasswordEmailMutation, SendForgotPasswordEmailMutationVariables>(SendForgotPasswordEmailDocument);
};
export const LoginDocument = gql`
    mutation Login($options: LoginInput!) {
  login(options: $options) {
    errors {
      ...ReceivedErrors
    }
    user {
      ...CurrentUser
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${CurrentUserFragmentDoc}`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    errors {
      ...ReceivedErrors
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const GetAllAdminRolesDocument = gql`
    query GetAllAdminRoles {
  getAllAdminRoles {
    errors {
      ...ReceivedErrors
    }
    adminRoles {
      id
      roleName
      roleDescription
      createdAt
      updatedAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetAllAdminRolesQuery(options: Omit<Urql.UseQueryArgs<GetAllAdminRolesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllAdminRolesQuery>({ query: GetAllAdminRolesDocument, ...options });
};
export const GetAllAdminsDocument = gql`
    query GetAllAdmins($options: ConnectionArgs!) {
  getAllAdmins(options: $options) {
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        email
        language
        lastIPAddress
        country
        adminRole {
          roleName
        }
      }
      cursor
    }
    errors {
      ...ReceivedErrors
    }
  }
}
    ${PageInfoFragmentDoc}
${ReceivedErrorsFragmentDoc}`;

export function useGetAllAdminsQuery(options: Omit<Urql.UseQueryArgs<GetAllAdminsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllAdminsQuery>({ query: GetAllAdminsDocument, ...options });
};
export const GetAlLCategoriesDocument = gql`
    query GetAlLCategories($options: ConnectionArgs!) {
  getAllCategories(options: $options) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      node {
        id
        categoryName
        createdAt
        updatedAt
        deletedAt
      }
      cursor
    }
  }
}
    `;

export function useGetAlLCategoriesQuery(options: Omit<Urql.UseQueryArgs<GetAlLCategoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAlLCategoriesQuery>({ query: GetAlLCategoriesDocument, ...options });
};
export const GetAllPlansDocument = gql`
    query GetAllPlans {
  getAllPlans {
    errors {
      errorCode
      field
      message
    }
    plans {
      id
      name
      monthlyPrice
      annualPrice
      enabledStatus
      visibilityStatus
    }
  }
}
    `;

export function useGetAllPlansQuery(options: Omit<Urql.UseQueryArgs<GetAllPlansQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllPlansQuery>({ query: GetAllPlansDocument, ...options });
};
export const GetAllUsersDocument = gql`
    query GetAllUsers($options: ConnectionArgs!) {
  getAllUsers(options: $options) {
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        email
        emailVerifiedAt
        accountStatus
        language
        lastIPAddress
        country
        plan {
          name
        }
      }
      cursor
    }
    errors {
      ...ReceivedErrors
    }
  }
}
    ${PageInfoFragmentDoc}
${ReceivedErrorsFragmentDoc}`;

export function useGetAllUsersQuery(options: Omit<Urql.UseQueryArgs<GetAllUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllUsersQuery>({ query: GetAllUsersDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    ...CurrentUser
  }
}
    ${CurrentUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};