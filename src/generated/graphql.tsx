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
  roleSettings?: Maybe<Array<RoleSettings>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
};

export type AdminRoleListResponse = {
  __typename?: 'AdminRoleListResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  adminRoles?: Maybe<Array<AdminRole>>;
};

export type AdminRoleResponse = {
  __typename?: 'AdminRoleResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  adminRole?: Maybe<AdminRole>;
};

export type AdsSettingsInput = {
  header?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  biolinkPageHeader?: Maybe<Scalars['String']>;
  biolinkPageFooter?: Maybe<Scalars['String']>;
};

export type AdsSettingsResponse = {
  __typename?: 'AdsSettingsResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  settings?: Maybe<AdsSystemSettings>;
};

export type AdsSystemSettings = {
  __typename?: 'AdsSystemSettings';
  header?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  biolinkPageHeader?: Maybe<Scalars['String']>;
  biolinkPageFooter?: Maybe<Scalars['String']>;
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
  profilePhotoUrl?: Maybe<Scalars['String']>;
  coverPhotoUrl?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  bio?: Maybe<Scalars['String']>;
  settings?: Maybe<BiolinkSettings>;
  verificationStatus?: Maybe<Scalars['String']>;
  verifiedGovernmentId?: Maybe<Scalars['Boolean']>;
  verifiedEmail?: Maybe<Scalars['Boolean']>;
  verifiedPhoneNumber?: Maybe<Scalars['Boolean']>;
  verifiedWorkEmail?: Maybe<Scalars['Boolean']>;
  featured?: Maybe<Scalars['Boolean']>;
  changedUsername?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  username?: Maybe<Username>;
  user?: Maybe<User>;
  links?: Maybe<Array<Link>>;
  category?: Maybe<Category>;
};

export type BiolinkConnection = {
  __typename?: 'BiolinkConnection';
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<Array<BiolinkEdge>>;
};

export type BiolinkEdge = {
  __typename?: 'BiolinkEdge';
  node: Biolink;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type BiolinkResponse = {
  __typename?: 'BiolinkResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  biolink?: Maybe<Biolink>;
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
  socialAccountStyleType?: Maybe<Scalars['String']>;
  socialAccounts?: Maybe<Array<SocialMediaProps>>;
  enableFacebookPixel?: Maybe<Scalars['Boolean']>;
  facebookPixelId?: Maybe<Scalars['String']>;
  enableGoogleAnalytics?: Maybe<Scalars['Boolean']>;
  googleAnalyticsCode?: Maybe<Scalars['String']>;
  enableEmailCapture?: Maybe<Scalars['Boolean']>;
  emailCaptureId?: Maybe<Scalars['String']>;
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
  paypalLink?: Maybe<Scalars['String']>;
  venmoLink?: Maybe<Scalars['String']>;
  payoneerLink?: Maybe<Scalars['String']>;
};

export type BlackList = {
  __typename?: 'BlackList';
  id?: Maybe<Scalars['Int']>;
  blacklistType?: Maybe<Scalars['String']>;
  keyword?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
};

export type BlackListConnection = {
  __typename?: 'BlackListConnection';
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<Array<BlackListEdge>>;
};

export type BlackListEdge = {
  __typename?: 'BlackListEdge';
  node: BlackList;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type BlackListResponse = {
  __typename?: 'BlackListResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  blackList?: Maybe<BlackList>;
};

export type BusinessSettingsInput = {
  enableInvoice?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  taxType?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
};

export type BusinessSettingsResponse = {
  __typename?: 'BusinessSettingsResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  settings?: Maybe<BusinessSystemSettings>;
};

export type BusinessSystemSettings = {
  __typename?: 'BusinessSystemSettings';
  enableInvoice?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  taxType?: Maybe<Scalars['String']>;
  taxId?: Maybe<Scalars['String']>;
};

export type CaptchaSettingsInput = {
  captchaType?: Maybe<Scalars['String']>;
  enableCaptchaOnLoginPage?: Maybe<Scalars['Boolean']>;
  enableCaptchaOnRegisterPage?: Maybe<Scalars['Boolean']>;
  enableCaptchaOnLostPasswordPage?: Maybe<Scalars['Boolean']>;
  enableCaptchaOnResendActivationPage?: Maybe<Scalars['Boolean']>;
};

export type CaptchaSettingsResponse = {
  __typename?: 'CaptchaSettingsResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  settings?: Maybe<CaptchaSystemSettings>;
};

export type CaptchaSystemSettings = {
  __typename?: 'CaptchaSystemSettings';
  captchaType?: Maybe<Scalars['String']>;
  enableCaptchaOnLoginPage?: Maybe<Scalars['Boolean']>;
  enableCaptchaOnRegisterPage?: Maybe<Scalars['Boolean']>;
  enableCaptchaOnLostPasswordPage?: Maybe<Scalars['Boolean']>;
  enableCaptchaOnResendActivationPage?: Maybe<Scalars['Boolean']>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['Int']>;
  categoryName?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
};

export type CategoryConnection = {
  __typename?: 'CategoryConnection';
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<Array<CategoryEdge>>;
};

export type CategoryEdge = {
  __typename?: 'CategoryEdge';
  node: Category;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type CategoryResponse = {
  __typename?: 'CategoryResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  category?: Maybe<Category>;
};

export type Code = {
  __typename?: 'Code';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  expireDate?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  referrer?: Maybe<User>;
};

export type CodeConnection = {
  __typename?: 'CodeConnection';
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<Array<CodeEdge>>;
};

export type CodeEdge = {
  __typename?: 'CodeEdge';
  node: Code;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type CodeResponse = {
  __typename?: 'CodeResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  code?: Maybe<Code>;
};

export type ConnectionArgs = {
  /** Paginate before created at timestamp as opaque cursor */
  before?: Maybe<Scalars['String']>;
  /** Paginate after created at timestamp as opaque cursor */
  after?: Maybe<Scalars['String']>;
  /** Search query */
  query?: Maybe<Scalars['String']>;
  /** Paginate first. Do not work for messages. */
  first?: Maybe<Scalars['Float']>;
  /** Paginate last. Works only for messages. */
  last?: Maybe<Scalars['Float']>;
};

export type DashboardTotalCounts = {
  __typename?: 'DashboardTotalCounts';
  totalBiolinks?: Maybe<Scalars['Int']>;
  totalShortenedLinks?: Maybe<Scalars['Int']>;
  totalBiolinkPageViewsTracked?: Maybe<Scalars['Int']>;
  totalLinkClickViewsTracked?: Maybe<Scalars['Int']>;
  totalUsers?: Maybe<Scalars['Int']>;
  totalReferralCodes?: Maybe<Scalars['Int']>;
  totalTransactionsMade?: Maybe<Scalars['Int']>;
  totalEarned?: Maybe<Scalars['Int']>;
};

export type DashboardTotalCountsResponse = {
  __typename?: 'DashboardTotalCountsResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  result?: Maybe<DashboardTotalCounts>;
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
  deletedAt?: Maybe<Scalars['String']>;
};

export type EditUserInput = {
  email: Scalars['String'];
  adminRoleId?: Maybe<Scalars['Float']>;
  planId?: Maybe<Scalars['Float']>;
};

export type EmailInput = {
  email: Scalars['String'];
};

export type EmailSettingsInput = {
  fromName?: Maybe<Scalars['String']>;
  fromEmail?: Maybe<Scalars['String']>;
};

export type EmailSettingsResponse = {
  __typename?: 'EmailSettingsResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  settings?: Maybe<EmailSystemSettings>;
};

export type EmailSystemSettings = {
  __typename?: 'EmailSystemSettings';
  fromName?: Maybe<Scalars['String']>;
  fromEmail?: Maybe<Scalars['String']>;
};

export type ErrorResponse = {
  __typename?: 'ErrorResponse';
  errorCode: Scalars['Int'];
  field?: Maybe<Scalars['String']>;
  message: Scalars['String'];
};

export type FacebookSettingsInput = {
  enableFacebookLogin?: Maybe<Scalars['Boolean']>;
};

export type FacebookSettingsResponse = {
  __typename?: 'FacebookSettingsResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  settings?: Maybe<FacebookSystemSettings>;
};

export type FacebookSystemSettings = {
  __typename?: 'FacebookSystemSettings';
  enableFacebookLogin?: Maybe<Scalars['Boolean']>;
};

export type Link = {
  __typename?: 'Link';
  id: Scalars['String'];
  linkType?: Maybe<Scalars['String']>;
  linkTitle?: Maybe<Scalars['String']>;
  linkColor?: Maybe<Scalars['String']>;
  linkImageUrl?: Maybe<Scalars['String']>;
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

export type LinkConnection = {
  __typename?: 'LinkConnection';
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<Array<LinkEdge>>;
};

export type LinkEdge = {
  __typename?: 'LinkEdge';
  node: Link;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type LinkSettingsInput = {
  branding?: Maybe<Scalars['String']>;
  enableLinkShortenerSystem?: Maybe<Scalars['Boolean']>;
  enablePhishtank?: Maybe<Scalars['Boolean']>;
  enableGoogleSafeBrowsing?: Maybe<Scalars['Boolean']>;
};

export type LinkSettingsResponse = {
  __typename?: 'LinkSettingsResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  settings?: Maybe<LinkSystemSettings>;
};

export type LinkSystemSettings = {
  __typename?: 'LinkSystemSettings';
  branding?: Maybe<Scalars['String']>;
  enableLinkShortenerSystem?: Maybe<Scalars['Boolean']>;
  enablePhishtank?: Maybe<Scalars['Boolean']>;
  enableGoogleSafeBrowsing?: Maybe<Scalars['Boolean']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MainSettingsInput = {
  title?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Scalars['String']>;
  defaultTimezone?: Maybe<Scalars['String']>;
  enableEmailConfirmation?: Maybe<Scalars['Boolean']>;
  enableNewUserRegistration?: Maybe<Scalars['Boolean']>;
  termsAndConditionsUrl?: Maybe<Scalars['String']>;
  privacyPolicyUrl?: Maybe<Scalars['String']>;
};

export type MainSettingsResponse = {
  __typename?: 'MainSettingsResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  settings?: Maybe<MainSystemSettings>;
};

export type MainSystemSettings = {
  __typename?: 'MainSystemSettings';
  title?: Maybe<Scalars['String']>;
  defaultLanguage?: Maybe<Scalars['String']>;
  defaultTimezone?: Maybe<Scalars['String']>;
  enableEmailConfirmation?: Maybe<Scalars['Boolean']>;
  enableNewUserRegistration?: Maybe<Scalars['Boolean']>;
  termsAndConditionsUrl?: Maybe<Scalars['String']>;
  privacyPolicyUrl?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdminRole: AdminRoleResponse;
  editAdminRole: AdminRoleResponse;
  login: UserResponse;
  sendForgotPasswordEmail: DefaultResponse;
  logout: DefaultResponse;
  addBlackList?: Maybe<BlackListResponse>;
  editBlackList?: Maybe<BlackListResponse>;
  createCategory?: Maybe<CategoryResponse>;
  editCategory?: Maybe<CategoryResponse>;
  addCode?: Maybe<CodeResponse>;
  editCode?: Maybe<CodeResponse>;
  createPlan: PlanResponse;
  editPlan: PlanResponse;
  changeReportStatus?: Maybe<ReportResponse>;
  editAdsSettings: AdsSettingsResponse;
  editBusinessSettings: BusinessSettingsResponse;
  editCaptchaSettings: CaptchaSettingsResponse;
  editEmailSettings: EmailSettingsResponse;
  editFacebookSettings: FacebookSettingsResponse;
  editLinkSettings: LinkSettingsResponse;
  editMainSettings: MainSettingsResponse;
  editNotificationSettings: NotificationSettingsResponse;
  editPaymentSettings: PaymentSettingsResponse;
  editSocialSettings: SocialSettingsResponse;
  editSupport?: Maybe<SupportResponse>;
  addTax?: Maybe<TaxResponse>;
  editTax?: Maybe<TaxResponse>;
  addNewUser?: Maybe<DefaultResponse>;
  editUser?: Maybe<DefaultResponse>;
  addUsername?: Maybe<UsernameResponse>;
  editUsername?: Maybe<UsernameResponse>;
  changeVerificationStatus?: Maybe<VerificationResponse>;
};


export type MutationCreateAdminRoleArgs = {
  options: NewAdminRoleInput;
};


export type MutationEditAdminRoleArgs = {
  options: NewAdminRoleInput;
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  options: LoginInput;
};


export type MutationSendForgotPasswordEmailArgs = {
  options: EmailInput;
};


export type MutationAddBlackListArgs = {
  options: NewBlackListInput;
};


export type MutationEditBlackListArgs = {
  options: NewBlackListInput;
  blackListId: Scalars['Int'];
};


export type MutationCreateCategoryArgs = {
  options: NewCategoryInput;
};


export type MutationEditCategoryArgs = {
  options: NewCategoryInput;
  id: Scalars['Int'];
};


export type MutationAddCodeArgs = {
  options: NewCodeInput;
};


export type MutationEditCodeArgs = {
  options: NewCodeInput;
  codeId: Scalars['String'];
};


export type MutationCreatePlanArgs = {
  options: PlanInput;
};


export type MutationEditPlanArgs = {
  options: PlanInput;
  id: Scalars['Int'];
};


export type MutationChangeReportStatusArgs = {
  options: ReportStatusInput;
  reportId: Scalars['String'];
};


export type MutationEditAdsSettingsArgs = {
  options: AdsSettingsInput;
};


export type MutationEditBusinessSettingsArgs = {
  options: BusinessSettingsInput;
};


export type MutationEditCaptchaSettingsArgs = {
  options: CaptchaSettingsInput;
};


export type MutationEditEmailSettingsArgs = {
  options: EmailSettingsInput;
};


export type MutationEditFacebookSettingsArgs = {
  options: FacebookSettingsInput;
};


export type MutationEditLinkSettingsArgs = {
  options: LinkSettingsInput;
};


export type MutationEditMainSettingsArgs = {
  options: MainSettingsInput;
};


export type MutationEditNotificationSettingsArgs = {
  options: NotificationSettingsInput;
};


export type MutationEditPaymentSettingsArgs = {
  options: PaymentSettingsInput;
};


export type MutationEditSocialSettingsArgs = {
  options: SocialSettingsInput;
};


export type MutationEditSupportArgs = {
  options: SupportAdminInput;
  supportId: Scalars['String'];
};


export type MutationAddTaxArgs = {
  options: NewTaxInput;
};


export type MutationEditTaxArgs = {
  options: NewTaxInput;
  taxId: Scalars['Int'];
};


export type MutationAddNewUserArgs = {
  options: NewUserInput;
};


export type MutationEditUserArgs = {
  options: EditUserInput;
  id: Scalars['String'];
};


export type MutationAddUsernameArgs = {
  options: NewUsernameInput;
};


export type MutationEditUsernameArgs = {
  options: NewUsernameInput;
  usernameId: Scalars['String'];
};


export type MutationChangeVerificationStatusArgs = {
  options: VerificationStatusInput;
  verificationId: Scalars['String'];
};

export type NewAdminRoleInput = {
  roleName: Scalars['String'];
  roleDescription: Scalars['String'];
  roleSettings?: Maybe<Array<RoleSettingsInput>>;
};

export type NewBlackListInput = {
  blacklistType?: Maybe<Scalars['String']>;
  keyword?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
};

export type NewCategoryInput = {
  categoryName?: Maybe<Scalars['String']>;
};

export type NewCodeInput = {
  type?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Float']>;
  expireDate?: Maybe<Scalars['String']>;
  referrerId?: Maybe<Scalars['String']>;
};

export type NewTaxInput = {
  internalName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Float']>;
  valueType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  billingFor?: Maybe<Scalars['String']>;
  countries?: Maybe<Scalars['String']>;
};

export type NewUserInput = {
  email: Scalars['String'];
  adminRoleId?: Maybe<Scalars['Float']>;
  username: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['Float']>;
  planId?: Maybe<Scalars['Float']>;
};

export type NewUsernameInput = {
  username?: Maybe<Scalars['String']>;
  premiumType?: Maybe<Scalars['String']>;
  ownerId?: Maybe<Scalars['String']>;
};

export type NotificationSettingsInput = {
  emailsToBeNotified?: Maybe<Array<Scalars['String']>>;
  emailOnNewUser?: Maybe<Scalars['Boolean']>;
  emailOnNewPayment?: Maybe<Scalars['Boolean']>;
};

export type NotificationSettingsResponse = {
  __typename?: 'NotificationSettingsResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  settings?: Maybe<NotificationSystemSettings>;
};

export type NotificationSystemSettings = {
  __typename?: 'NotificationSystemSettings';
  emailsToBeNotified?: Maybe<Array<Scalars['String']>>;
  emailOnNewUser?: Maybe<Scalars['Boolean']>;
  emailOnNewPayment?: Maybe<Scalars['Boolean']>;
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
  paymentType?: Maybe<Scalars['String']>;
  stripeAmountDue?: Maybe<Scalars['Int']>;
  stripeAmountPaid?: Maybe<Scalars['Int']>;
  stripeAmountRemaining?: Maybe<Scalars['Int']>;
  stripeChargeId?: Maybe<Scalars['String']>;
  stripeInvoiceCreated?: Maybe<Scalars['String']>;
  stripePaymentCurrency?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  stripeCustomerAddress?: Maybe<Scalars['String']>;
  stripeCustomerEmail?: Maybe<Scalars['String']>;
  stripeCustomerName?: Maybe<Scalars['String']>;
  stripeCustomerPhone?: Maybe<Scalars['String']>;
  stripeCustomerShipping?: Maybe<Scalars['String']>;
  stripeDiscount?: Maybe<Scalars['String']>;
  stripeInvoicePdfUrl?: Maybe<Scalars['String']>;
  stripeInvoiceUrl?: Maybe<Scalars['String']>;
  stripePriceId?: Maybe<Scalars['String']>;
  stripeSubscriptionId?: Maybe<Scalars['String']>;
  stripeInvoiceNumber?: Maybe<Scalars['String']>;
  stripePeriodStart?: Maybe<Scalars['String']>;
  stripePeriodEnd?: Maybe<Scalars['String']>;
  stripeStatus?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<Array<PaymentEdge>>;
};

export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  node: Payment;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type PaymentResponse = {
  __typename?: 'PaymentResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  payment?: Maybe<Payment>;
};

export type PaymentSettingsInput = {
  enablePaymentSystem?: Maybe<Scalars['Boolean']>;
  enabledPaymentType?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  enableDiscountOrRedeemableCode?: Maybe<Scalars['Boolean']>;
  enableTaxesAndBilling?: Maybe<Scalars['Boolean']>;
  enablePaypal?: Maybe<Scalars['Boolean']>;
  enableStripe?: Maybe<Scalars['Boolean']>;
};

export type PaymentSettingsResponse = {
  __typename?: 'PaymentSettingsResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  settings?: Maybe<PaymentSystemSettings>;
};

export type PaymentSystemSettings = {
  __typename?: 'PaymentSystemSettings';
  enablePaymentSystem?: Maybe<Scalars['Boolean']>;
  enabledPaymentType?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  enableDiscountOrRedeemableCode?: Maybe<Scalars['Boolean']>;
  enableTaxesAndBilling?: Maybe<Scalars['Boolean']>;
  enablePaypal?: Maybe<Scalars['Boolean']>;
  enableStripe?: Maybe<Scalars['Boolean']>;
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

export type PlanInput = {
  name?: Maybe<Scalars['String']>;
  monthlyPrice?: Maybe<Scalars['Float']>;
  monthlyPriceStripeId?: Maybe<Scalars['String']>;
  annualPrice?: Maybe<Scalars['Float']>;
  annualPriceStripeId?: Maybe<Scalars['String']>;
  visibilityStatus?: Maybe<Scalars['Boolean']>;
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
  emailCaptureEnabled?: Maybe<Scalars['Boolean']>;
  verifiedCheckmarkEnabled?: Maybe<Scalars['Boolean']>;
  linksSchedulingEnabled?: Maybe<Scalars['Boolean']>;
  seoEnabled?: Maybe<Scalars['Boolean']>;
  socialEnabled?: Maybe<Scalars['Boolean']>;
  utmParametersEnabled?: Maybe<Scalars['Boolean']>;
  passwordProtectionEnabled?: Maybe<Scalars['Boolean']>;
  sensitiveContentWarningEnabled?: Maybe<Scalars['Boolean']>;
  leapLinkEnabled?: Maybe<Scalars['Boolean']>;
  donationLinkEnabled?: Maybe<Scalars['Boolean']>;
};

export type PlanListResponse = {
  __typename?: 'PlanListResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  plans?: Maybe<Array<Plan>>;
};

export type PlanResponse = {
  __typename?: 'PlanResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  plan?: Maybe<Plan>;
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
  emailCaptureEnabled?: Maybe<Scalars['Boolean']>;
  verifiedCheckmarkEnabled?: Maybe<Scalars['Boolean']>;
  linksSchedulingEnabled?: Maybe<Scalars['Boolean']>;
  seoEnabled?: Maybe<Scalars['Boolean']>;
  socialEnabled?: Maybe<Scalars['Boolean']>;
  utmParametersEnabled?: Maybe<Scalars['Boolean']>;
  passwordProtectionEnabled?: Maybe<Scalars['Boolean']>;
  sensitiveContentWarningEnabled?: Maybe<Scalars['Boolean']>;
  leapLinkEnabled?: Maybe<Scalars['Boolean']>;
  donationLinkEnabled?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  getAllAdminRoles: AdminRoleListResponse;
  getAdminRole: AdminRoleResponse;
  me?: Maybe<User>;
  getAllBiolinks?: Maybe<BiolinkConnection>;
  getAllDirectories?: Maybe<BiolinkConnection>;
  getBiolink?: Maybe<BiolinkResponse>;
  getAllBlackListedBadWords?: Maybe<BlackListConnection>;
  getAllBlackListedEmails?: Maybe<BlackListConnection>;
  getAllBlackListedUsernames?: Maybe<BlackListConnection>;
  getBlackList?: Maybe<BlackListResponse>;
  getAllCategories?: Maybe<CategoryConnection>;
  getCategory?: Maybe<CategoryResponse>;
  getAllDiscounts?: Maybe<CodeConnection>;
  getAllReferrals?: Maybe<CodeConnection>;
  getCode?: Maybe<CodeResponse>;
  getDashboardTotalCounts: DashboardTotalCountsResponse;
  getAllLinks?: Maybe<LinkConnection>;
  getAllEmbeds?: Maybe<LinkConnection>;
  getAllStripePayments?: Maybe<PaymentConnection>;
  getPayment?: Maybe<PaymentResponse>;
  getAllPlans: PlanListResponse;
  getPlan: PlanResponse;
  getAllPendingReports?: Maybe<ReportConnection>;
  getAllResolvedReports?: Maybe<ReportConnection>;
  getAllDismissedReports?: Maybe<ReportConnection>;
  getReport?: Maybe<ReportResponse>;
  getAdsSettings: AdsSettingsResponse;
  getBusinessSettings: BusinessSettingsResponse;
  getCaptchaSettings: CaptchaSettingsResponse;
  getEmailSettings: EmailSettingsResponse;
  getFacebookSettings: FacebookSettingsResponse;
  getLinkSettings: LinkSettingsResponse;
  getMainSettings: MainSettingsResponse;
  getNotificationSettings: NotificationSettingsResponse;
  getPaymentSettings: PaymentSettingsResponse;
  getSocialSettings: SocialSettingsResponse;
  getAllPendingSupports?: Maybe<SupportConnection>;
  getAllResolvedSupports?: Maybe<SupportConnection>;
  getAllDismissedSupports?: Maybe<SupportConnection>;
  getSupport?: Maybe<SupportResponse>;
  getAllTaxes?: Maybe<TaxConnection>;
  getTax?: Maybe<TaxResponse>;
  getAllUsers?: Maybe<UserConnection>;
  getAllAdmins?: Maybe<UserConnection>;
  getUser?: Maybe<UserResponse>;
  getUserSummaryCounts?: Maybe<UserTotalCountsResponse>;
  getAllUsernames?: Maybe<UsernameConnection>;
  getAllPremiumUsernames?: Maybe<UsernameConnection>;
  getAllTrademarkUsernames?: Maybe<UsernameConnection>;
  getUsername?: Maybe<UsernameResponse>;
  getAllPendingVerifications?: Maybe<VerificationConnection>;
  getAllVerifiedVerifications?: Maybe<VerificationConnection>;
  getAllRejectedVerifications?: Maybe<VerificationConnection>;
  getVerification?: Maybe<VerificationResponse>;
};


export type QueryGetAdminRoleArgs = {
  id: Scalars['Int'];
};


export type QueryGetAllBiolinksArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllDirectoriesArgs = {
  categoryIds?: Maybe<Array<Scalars['Int']>>;
  options: ConnectionArgs;
};


export type QueryGetBiolinkArgs = {
  id: Scalars['String'];
};


export type QueryGetAllBlackListedBadWordsArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllBlackListedEmailsArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllBlackListedUsernamesArgs = {
  options: ConnectionArgs;
};


export type QueryGetBlackListArgs = {
  blackListId: Scalars['Int'];
};


export type QueryGetAllCategoriesArgs = {
  options: ConnectionArgs;
};


export type QueryGetCategoryArgs = {
  id: Scalars['Int'];
};


export type QueryGetAllDiscountsArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllReferralsArgs = {
  options: ConnectionArgs;
};


export type QueryGetCodeArgs = {
  codeId: Scalars['String'];
};


export type QueryGetAllLinksArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllEmbedsArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllStripePaymentsArgs = {
  options: ConnectionArgs;
};


export type QueryGetPaymentArgs = {
  paymentId: Scalars['String'];
};


export type QueryGetPlanArgs = {
  id: Scalars['Int'];
};


export type QueryGetAllPendingReportsArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllResolvedReportsArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllDismissedReportsArgs = {
  options: ConnectionArgs;
};


export type QueryGetReportArgs = {
  reportId: Scalars['String'];
};


export type QueryGetAllPendingSupportsArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllResolvedSupportsArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllDismissedSupportsArgs = {
  options: ConnectionArgs;
};


export type QueryGetSupportArgs = {
  supportId: Scalars['String'];
};


export type QueryGetAllTaxesArgs = {
  options: ConnectionArgs;
};


export type QueryGetTaxArgs = {
  taxId: Scalars['Int'];
};


export type QueryGetAllUsersArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllAdminsArgs = {
  options: ConnectionArgs;
};


export type QueryGetUserArgs = {
  id: Scalars['String'];
};


export type QueryGetUserSummaryCountsArgs = {
  userId: Scalars['String'];
};


export type QueryGetAllUsernamesArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllPremiumUsernamesArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllTrademarkUsernamesArgs = {
  options: ConnectionArgs;
};


export type QueryGetUsernameArgs = {
  usernameId: Scalars['String'];
};


export type QueryGetAllPendingVerificationsArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllVerifiedVerificationsArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllRejectedVerificationsArgs = {
  options: ConnectionArgs;
};


export type QueryGetVerificationArgs = {
  verificationId: Scalars['String'];
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

export type Report = {
  __typename?: 'Report';
  id: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  reportedUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  reporter?: Maybe<User>;
};

export type ReportConnection = {
  __typename?: 'ReportConnection';
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<Array<ReportEdge>>;
};

export type ReportEdge = {
  __typename?: 'ReportEdge';
  node: Report;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type ReportResponse = {
  __typename?: 'ReportResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  report?: Maybe<Report>;
};

export type ReportStatusInput = {
  status?: Maybe<Scalars['String']>;
};

export type RoleSettings = {
  __typename?: 'RoleSettings';
  resource?: Maybe<Scalars['String']>;
  canShowList?: Maybe<Scalars['Boolean']>;
  canShow?: Maybe<Scalars['Boolean']>;
  canCreate?: Maybe<Scalars['Boolean']>;
  canEdit?: Maybe<Scalars['Boolean']>;
  canDelete?: Maybe<Scalars['Boolean']>;
};

export type RoleSettingsInput = {
  resource?: Maybe<Scalars['String']>;
  canShowList?: Maybe<Scalars['Boolean']>;
  canShow?: Maybe<Scalars['Boolean']>;
  canCreate?: Maybe<Scalars['Boolean']>;
  canEdit?: Maybe<Scalars['Boolean']>;
  canDelete?: Maybe<Scalars['Boolean']>;
};

export type SocialMediaProps = {
  __typename?: 'SocialMediaProps';
  platform?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
};

export type SocialSettingsInput = {
  youtube?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
};

export type SocialSettingsResponse = {
  __typename?: 'SocialSettingsResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  settings?: Maybe<SocialSystemSettings>;
};

export type SocialSystemSettings = {
  __typename?: 'SocialSystemSettings';
  youtube?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
};

export type Support = {
  __typename?: 'Support';
  id: Scalars['String'];
  fullName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  company?: Maybe<Scalars['String']>;
  subject?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  supportReply?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type SupportAdminInput = {
  status?: Maybe<Scalars['String']>;
  supportReply?: Maybe<Scalars['String']>;
};

export type SupportConnection = {
  __typename?: 'SupportConnection';
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<Array<SupportEdge>>;
};

export type SupportEdge = {
  __typename?: 'SupportEdge';
  node: Support;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type SupportResponse = {
  __typename?: 'SupportResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  support?: Maybe<Support>;
};

export type Tax = {
  __typename?: 'Tax';
  id?: Maybe<Scalars['Int']>;
  internalName?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['Int']>;
  valueType?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  billingFor?: Maybe<Scalars['String']>;
  countries?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
};

export type TaxConnection = {
  __typename?: 'TaxConnection';
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<Array<TaxEdge>>;
};

export type TaxEdge = {
  __typename?: 'TaxEdge';
  node: Tax;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type TaxResponse = {
  __typename?: 'TaxResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  tax?: Maybe<Tax>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerifiedAt?: Maybe<Scalars['String']>;
  billing?: Maybe<Billing>;
  lastActiveTill?: Maybe<Scalars['String']>;
  planExpirationDate?: Maybe<Scalars['String']>;
  planTrialDone?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  lastIPAddress?: Maybe<Scalars['String']>;
  lastUserAgent?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  totalLogin?: Maybe<Scalars['Int']>;
  currentBiolinkId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  biolinks?: Maybe<Array<Biolink>>;
  domains?: Maybe<Array<Domain>>;
  activities?: Maybe<Array<UserLogs>>;
  links?: Maybe<Array<Link>>;
  plan?: Maybe<Plan>;
  usernames?: Maybe<Array<Username>>;
  payments?: Maybe<Array<Payment>>;
  codes?: Maybe<Array<Code>>;
  referrals?: Maybe<Array<Referral>>;
  reports?: Maybe<Array<Report>>;
  supports?: Maybe<Array<Support>>;
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
  showInActivity?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  user?: Maybe<User>;
};

export type UserTotalCounts = {
  __typename?: 'UserTotalCounts';
  totalBiolinks?: Maybe<Scalars['Int']>;
  totalShortenedLinks?: Maybe<Scalars['Int']>;
  totalReferralCodes?: Maybe<Scalars['Int']>;
  totalPayed?: Maybe<Scalars['Int']>;
};

export type UserTotalCountsResponse = {
  __typename?: 'UserTotalCountsResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  result?: Maybe<UserTotalCounts>;
};

export type Username = {
  __typename?: 'Username';
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  premiumType?: Maybe<Scalars['String']>;
  expireDate?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  owner?: Maybe<User>;
  biolink?: Maybe<Biolink>;
};

export type UsernameConnection = {
  __typename?: 'UsernameConnection';
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<Array<UsernameEdge>>;
};

export type UsernameEdge = {
  __typename?: 'UsernameEdge';
  node: Username;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type UsernameResponse = {
  __typename?: 'UsernameResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  username?: Maybe<Username>;
};

export type Verification = {
  __typename?: 'Verification';
  id?: Maybe<Scalars['String']>;
  verificationStatus?: Maybe<Scalars['String']>;
  verifiedGovernmentId?: Maybe<Scalars['Boolean']>;
  verifiedEmail?: Maybe<Scalars['Boolean']>;
  verifiedPhoneNumber?: Maybe<Scalars['Boolean']>;
  verifiedWorkEmail?: Maybe<Scalars['Boolean']>;
  username?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  mobileNumber?: Maybe<Scalars['String']>;
  workNumber?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  websiteLink?: Maybe<Scalars['String']>;
  instagramUrl?: Maybe<Scalars['String']>;
  twitterUrl?: Maybe<Scalars['String']>;
  linkedinUrl?: Maybe<Scalars['String']>;
  photoIdUrl?: Maybe<Scalars['String']>;
  businessDocumentUrl?: Maybe<Scalars['String']>;
  otherDocumentsUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  biolink?: Maybe<Biolink>;
  category?: Maybe<Category>;
};

export type VerificationConnection = {
  __typename?: 'VerificationConnection';
  errors?: Maybe<Array<ErrorResponse>>;
  pageInfo?: Maybe<PageInfo>;
  edges?: Maybe<Array<VerificationEdge>>;
};

export type VerificationEdge = {
  __typename?: 'VerificationEdge';
  node: Verification;
  /** Used in `before` and `after` args */
  cursor: Scalars['String'];
};

export type VerificationResponse = {
  __typename?: 'VerificationResponse';
  errors?: Maybe<Array<ErrorResponse>>;
  verification?: Maybe<Verification>;
};

export type VerificationStatusInput = {
  status?: Maybe<Scalars['String']>;
  verifiedGovernmentId?: Maybe<Scalars['Boolean']>;
  verifiedEmail?: Maybe<Scalars['Boolean']>;
  verifiedPhoneNumber?: Maybe<Scalars['Boolean']>;
  verifiedWorkEmail?: Maybe<Scalars['Boolean']>;
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

export type AddBlackListMutationVariables = Exact<{
  options: NewBlackListInput;
}>;


export type AddBlackListMutation = (
  { __typename?: 'Mutation' }
  & { addBlackList?: Maybe<(
    { __typename?: 'BlackListResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, blackList?: Maybe<(
      { __typename?: 'BlackList' }
      & Pick<BlackList, 'id' | 'blacklistType' | 'keyword' | 'reason' | 'createdAt'>
    )> }
  )> }
);

export type AddCodeMutationVariables = Exact<{
  options: NewCodeInput;
}>;


export type AddCodeMutation = (
  { __typename?: 'Mutation' }
  & { addCode?: Maybe<(
    { __typename?: 'CodeResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, code?: Maybe<(
      { __typename?: 'Code' }
      & Pick<Code, 'id' | 'type' | 'code' | 'discount' | 'quantity' | 'expireDate' | 'createdAt' | 'updatedAt'>
      & { referrer?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      )> }
    )> }
  )> }
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

export type AddTaxMutationVariables = Exact<{
  options: NewTaxInput;
}>;


export type AddTaxMutation = (
  { __typename?: 'Mutation' }
  & { addTax?: Maybe<(
    { __typename?: 'TaxResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, tax?: Maybe<(
      { __typename?: 'Tax' }
      & Pick<Tax, 'id' | 'internalName' | 'name' | 'description' | 'value' | 'valueType' | 'type' | 'billingFor' | 'countries' | 'createdAt'>
    )> }
  )> }
);

export type AddUsernameMutationVariables = Exact<{
  options: NewUsernameInput;
}>;


export type AddUsernameMutation = (
  { __typename?: 'Mutation' }
  & { addUsername?: Maybe<(
    { __typename?: 'UsernameResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, username?: Maybe<(
      { __typename?: 'Username' }
      & Pick<Username, 'id' | 'username' | 'premiumType' | 'expireDate' | 'createdAt'>
      & { owner?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      )>, biolink?: Maybe<(
        { __typename?: 'Biolink' }
        & Pick<Biolink, 'id' | 'profilePhotoUrl' | 'displayName'>
      )> }
    )> }
  )> }
);

export type ChangeReportStatusMutationVariables = Exact<{
  reportId: Scalars['String'];
  options: ReportStatusInput;
}>;


export type ChangeReportStatusMutation = (
  { __typename?: 'Mutation' }
  & { changeReportStatus?: Maybe<(
    { __typename?: 'ReportResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, report?: Maybe<(
      { __typename?: 'Report' }
      & Pick<Report, 'id' | 'firstName' | 'lastName' | 'email' | 'reportedUrl' | 'description' | 'status' | 'createdAt'>
      & { reporter?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      )> }
    )> }
  )> }
);

export type ChangeVerificationStatusMutationVariables = Exact<{
  verificationId: Scalars['String'];
  options: VerificationStatusInput;
}>;


export type ChangeVerificationStatusMutation = (
  { __typename?: 'Mutation' }
  & { changeVerificationStatus?: Maybe<(
    { __typename?: 'VerificationResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>> }
  )> }
);

export type CreateAdminRoleMutationVariables = Exact<{
  options: NewAdminRoleInput;
}>;


export type CreateAdminRoleMutation = (
  { __typename?: 'Mutation' }
  & { createAdminRole: (
    { __typename?: 'AdminRoleResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, adminRole?: Maybe<(
      { __typename?: 'AdminRole' }
      & Pick<AdminRole, 'id' | 'roleName' | 'roleDescription' | 'createdAt' | 'updatedAt'>
      & { roleSettings?: Maybe<Array<(
        { __typename?: 'RoleSettings' }
        & Pick<RoleSettings, 'resource' | 'canShowList' | 'canShow' | 'canCreate' | 'canEdit' | 'canDelete'>
      )>> }
    )> }
  ) }
);

export type CreateCategoryMutationVariables = Exact<{
  options: NewCategoryInput;
}>;


export type CreateCategoryMutation = (
  { __typename?: 'Mutation' }
  & { createCategory?: Maybe<(
    { __typename?: 'CategoryResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'categoryName' | 'createdAt' | 'updatedAt'>
    )> }
  )> }
);

export type CreatePlanMutationVariables = Exact<{
  options: PlanInput;
}>;


export type CreatePlanMutation = (
  { __typename?: 'Mutation' }
  & { createPlan: (
    { __typename?: 'PlanResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, plan?: Maybe<(
      { __typename?: 'Plan' }
      & Pick<Plan, 'id' | 'name' | 'monthlyPrice' | 'monthlyPriceStripeId' | 'annualPrice' | 'annualPriceStripeId' | 'visibilityStatus' | 'createdAt' | 'updatedAt' | 'deletedAt'>
      & { settings?: Maybe<(
        { __typename?: 'PlanSettings' }
        & Pick<PlanSettings, 'totalBiolinksLimit' | 'totalLinksLimit' | 'totalCustomDomainLimit' | 'darkModeEnabled' | 'addedToDirectoryEnabled' | 'customBackHalfEnabled' | 'noAdsEnabled' | 'removableBrandingEnabled' | 'customFooterBrandingEnabled' | 'coloredLinksEnabled' | 'googleAnalyticsEnabled' | 'facebookPixelEnabled' | 'emailCaptureEnabled' | 'verifiedCheckmarkEnabled' | 'linksSchedulingEnabled' | 'seoEnabled' | 'socialEnabled' | 'utmParametersEnabled' | 'passwordProtectionEnabled' | 'sensitiveContentWarningEnabled' | 'leapLinkEnabled' | 'donationLinkEnabled'>
      )> }
    )> }
  ) }
);

export type EditAdminRoleMutationVariables = Exact<{
  id: Scalars['Int'];
  options: NewAdminRoleInput;
}>;


export type EditAdminRoleMutation = (
  { __typename?: 'Mutation' }
  & { editAdminRole: (
    { __typename?: 'AdminRoleResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, adminRole?: Maybe<(
      { __typename?: 'AdminRole' }
      & Pick<AdminRole, 'id' | 'roleName' | 'roleDescription' | 'createdAt' | 'updatedAt'>
      & { roleSettings?: Maybe<Array<(
        { __typename?: 'RoleSettings' }
        & Pick<RoleSettings, 'resource' | 'canShowList' | 'canShow' | 'canCreate' | 'canEdit' | 'canDelete'>
      )>> }
    )> }
  ) }
);

export type EditAdsSettingsMutationVariables = Exact<{
  options: AdsSettingsInput;
}>;


export type EditAdsSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editAdsSettings: (
    { __typename?: 'AdsSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'AdsSystemSettings' }
      & Pick<AdsSystemSettings, 'header' | 'footer' | 'biolinkPageHeader' | 'biolinkPageFooter'>
    )> }
  ) }
);

export type EditBlackListMutationVariables = Exact<{
  blackListId: Scalars['Int'];
  options: NewBlackListInput;
}>;


export type EditBlackListMutation = (
  { __typename?: 'Mutation' }
  & { editBlackList?: Maybe<(
    { __typename?: 'BlackListResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, blackList?: Maybe<(
      { __typename?: 'BlackList' }
      & Pick<BlackList, 'id' | 'blacklistType' | 'keyword' | 'reason' | 'createdAt'>
    )> }
  )> }
);

export type EditBusinessSettingsMutationVariables = Exact<{
  options: BusinessSettingsInput;
}>;


export type EditBusinessSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editBusinessSettings: (
    { __typename?: 'BusinessSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'BusinessSystemSettings' }
      & Pick<BusinessSystemSettings, 'enableInvoice' | 'name' | 'address' | 'city' | 'country' | 'zipCode' | 'email' | 'phone' | 'taxType' | 'taxId'>
    )> }
  ) }
);

export type EditCaptchaSettingsMutationVariables = Exact<{
  options: CaptchaSettingsInput;
}>;


export type EditCaptchaSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editCaptchaSettings: (
    { __typename?: 'CaptchaSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'CaptchaSystemSettings' }
      & Pick<CaptchaSystemSettings, 'captchaType' | 'enableCaptchaOnLoginPage' | 'enableCaptchaOnRegisterPage' | 'enableCaptchaOnLostPasswordPage' | 'enableCaptchaOnResendActivationPage'>
    )> }
  ) }
);

export type EditCategoryMutationVariables = Exact<{
  id: Scalars['Int'];
  options: NewCategoryInput;
}>;


export type EditCategoryMutation = (
  { __typename?: 'Mutation' }
  & { editCategory?: Maybe<(
    { __typename?: 'CategoryResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'categoryName' | 'createdAt' | 'updatedAt'>
    )> }
  )> }
);

export type EditCodeMutationVariables = Exact<{
  codeId: Scalars['String'];
  options: NewCodeInput;
}>;


export type EditCodeMutation = (
  { __typename?: 'Mutation' }
  & { editCode?: Maybe<(
    { __typename?: 'CodeResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, code?: Maybe<(
      { __typename?: 'Code' }
      & Pick<Code, 'id' | 'type' | 'code' | 'discount' | 'quantity' | 'expireDate' | 'createdAt' | 'updatedAt'>
      & { referrer?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      )> }
    )> }
  )> }
);

export type EditEmailSettingsMutationVariables = Exact<{
  options: EmailSettingsInput;
}>;


export type EditEmailSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editEmailSettings: (
    { __typename?: 'EmailSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'EmailSystemSettings' }
      & Pick<EmailSystemSettings, 'fromName' | 'fromEmail'>
    )> }
  ) }
);

export type EditFacebookSettingsMutationVariables = Exact<{
  options: FacebookSettingsInput;
}>;


export type EditFacebookSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editFacebookSettings: (
    { __typename?: 'FacebookSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'FacebookSystemSettings' }
      & Pick<FacebookSystemSettings, 'enableFacebookLogin'>
    )> }
  ) }
);

export type EditLinkSettingsMutationVariables = Exact<{
  options: LinkSettingsInput;
}>;


export type EditLinkSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editLinkSettings: (
    { __typename?: 'LinkSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'LinkSystemSettings' }
      & Pick<LinkSystemSettings, 'branding' | 'enableLinkShortenerSystem' | 'enablePhishtank' | 'enableGoogleSafeBrowsing'>
    )> }
  ) }
);

export type EditMainSettingsMutationVariables = Exact<{
  options: MainSettingsInput;
}>;


export type EditMainSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editMainSettings: (
    { __typename?: 'MainSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'MainSystemSettings' }
      & Pick<MainSystemSettings, 'title' | 'defaultLanguage' | 'defaultTimezone' | 'enableEmailConfirmation' | 'enableNewUserRegistration' | 'termsAndConditionsUrl' | 'privacyPolicyUrl'>
    )> }
  ) }
);

export type EditNotificationSettingsMutationVariables = Exact<{
  options: NotificationSettingsInput;
}>;


export type EditNotificationSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editNotificationSettings: (
    { __typename?: 'NotificationSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'NotificationSystemSettings' }
      & Pick<NotificationSystemSettings, 'emailsToBeNotified' | 'emailOnNewUser' | 'emailOnNewPayment'>
    )> }
  ) }
);

export type EditPaymentSettingsMutationVariables = Exact<{
  options: PaymentSettingsInput;
}>;


export type EditPaymentSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editPaymentSettings: (
    { __typename?: 'PaymentSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'PaymentSystemSettings' }
      & Pick<PaymentSystemSettings, 'enablePaymentSystem' | 'enabledPaymentType' | 'brandName' | 'currency' | 'enableDiscountOrRedeemableCode' | 'enableTaxesAndBilling' | 'enablePaypal' | 'enableStripe'>
    )> }
  ) }
);

export type EditPlanMutationVariables = Exact<{
  id: Scalars['Int'];
  options: PlanInput;
}>;


export type EditPlanMutation = (
  { __typename?: 'Mutation' }
  & { editPlan: (
    { __typename?: 'PlanResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'errorCode' | 'field' | 'message'>
    )>>, plan?: Maybe<(
      { __typename?: 'Plan' }
      & Pick<Plan, 'id' | 'name' | 'monthlyPrice' | 'monthlyPriceStripeId' | 'annualPrice' | 'annualPriceStripeId' | 'visibilityStatus' | 'createdAt' | 'updatedAt' | 'deletedAt'>
      & { settings?: Maybe<(
        { __typename?: 'PlanSettings' }
        & Pick<PlanSettings, 'totalBiolinksLimit' | 'totalLinksLimit' | 'totalCustomDomainLimit' | 'darkModeEnabled' | 'addedToDirectoryEnabled' | 'customBackHalfEnabled' | 'noAdsEnabled' | 'removableBrandingEnabled' | 'customFooterBrandingEnabled' | 'coloredLinksEnabled' | 'googleAnalyticsEnabled' | 'facebookPixelEnabled' | 'emailCaptureEnabled' | 'verifiedCheckmarkEnabled' | 'linksSchedulingEnabled' | 'seoEnabled' | 'socialEnabled' | 'utmParametersEnabled' | 'passwordProtectionEnabled' | 'sensitiveContentWarningEnabled' | 'leapLinkEnabled' | 'donationLinkEnabled'>
      )> }
    )> }
  ) }
);

export type EditSocialSettingsMutationVariables = Exact<{
  options: SocialSettingsInput;
}>;


export type EditSocialSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editSocialSettings: (
    { __typename?: 'SocialSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'SocialSystemSettings' }
      & Pick<SocialSystemSettings, 'youtube' | 'facebook' | 'twitter' | 'instagram'>
    )> }
  ) }
);

export type EditSupportMutationVariables = Exact<{
  supportId: Scalars['String'];
  options: SupportAdminInput;
}>;


export type EditSupportMutation = (
  { __typename?: 'Mutation' }
  & { editSupport?: Maybe<(
    { __typename?: 'SupportResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, support?: Maybe<(
      { __typename?: 'Support' }
      & Pick<Support, 'id' | 'fullName' | 'email' | 'phoneNumber' | 'company' | 'subject' | 'message' | 'status' | 'supportReply' | 'createdAt'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      )> }
    )> }
  )> }
);

export type EditTaxMutationVariables = Exact<{
  taxId: Scalars['Int'];
  options: NewTaxInput;
}>;


export type EditTaxMutation = (
  { __typename?: 'Mutation' }
  & { editTax?: Maybe<(
    { __typename?: 'TaxResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, tax?: Maybe<(
      { __typename?: 'Tax' }
      & Pick<Tax, 'id' | 'internalName' | 'name' | 'description' | 'value' | 'valueType' | 'type' | 'billingFor' | 'countries' | 'createdAt'>
    )> }
  )> }
);

export type EditUserMutationVariables = Exact<{
  id: Scalars['String'];
  options: EditUserInput;
}>;


export type EditUserMutation = (
  { __typename?: 'Mutation' }
  & { editUser?: Maybe<(
    { __typename?: 'DefaultResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>> }
  )> }
);

export type EditUsernameMutationVariables = Exact<{
  usernameId: Scalars['String'];
  options: NewUsernameInput;
}>;


export type EditUsernameMutation = (
  { __typename?: 'Mutation' }
  & { editUsername?: Maybe<(
    { __typename?: 'UsernameResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, username?: Maybe<(
      { __typename?: 'Username' }
      & Pick<Username, 'id' | 'username' | 'premiumType' | 'expireDate' | 'createdAt'>
      & { owner?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      )>, biolink?: Maybe<(
        { __typename?: 'Biolink' }
        & Pick<Biolink, 'id' | 'profilePhotoUrl' | 'displayName'>
      )> }
    )> }
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

export type GetAdminRoleQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetAdminRoleQuery = (
  { __typename?: 'Query' }
  & { getAdminRole: (
    { __typename?: 'AdminRoleResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, adminRole?: Maybe<(
      { __typename?: 'AdminRole' }
      & Pick<AdminRole, 'id' | 'roleName' | 'roleDescription' | 'createdAt' | 'updatedAt'>
      & { roleSettings?: Maybe<Array<(
        { __typename?: 'RoleSettings' }
        & Pick<RoleSettings, 'resource' | 'canShowList' | 'canShow' | 'canCreate' | 'canEdit' | 'canDelete'>
      )>> }
    )> }
  ) }
);

export type GetAdsSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAdsSettingsQuery = (
  { __typename?: 'Query' }
  & { getAdsSettings: (
    { __typename?: 'AdsSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'AdsSystemSettings' }
      & Pick<AdsSystemSettings, 'header' | 'footer' | 'biolinkPageHeader' | 'biolinkPageFooter'>
    )> }
  ) }
);

export type GetAllAdminRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAdminRolesQuery = (
  { __typename?: 'Query' }
  & { getAllAdminRoles: (
    { __typename?: 'AdminRoleListResponse' }
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
        & Pick<User, 'id' | 'email' | 'language' | 'lastIPAddress' | 'country' | 'createdAt'>
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

export type GetAllBiolinksQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllBiolinksQuery = (
  { __typename?: 'Query' }
  & { getAllBiolinks?: Maybe<(
    { __typename?: 'BiolinkConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'BiolinkEdge' }
      & Pick<BiolinkEdge, 'cursor'>
      & { node: (
        { __typename?: 'Biolink' }
        & Pick<Biolink, 'id' | 'profilePhotoUrl' | 'displayName' | 'city' | 'state' | 'country' | 'verificationStatus' | 'createdAt'>
        & { username?: Maybe<(
          { __typename?: 'Username' }
          & Pick<Username, 'id' | 'username'>
        )>, user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )>, category?: Maybe<(
          { __typename?: 'Category' }
          & Pick<Category, 'id' | 'categoryName'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllBlackListedBadWordsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllBlackListedBadWordsQuery = (
  { __typename?: 'Query' }
  & { getAllBlackListedBadWords?: Maybe<(
    { __typename?: 'BlackListConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'BlackListEdge' }
      & Pick<BlackListEdge, 'cursor'>
      & { node: (
        { __typename?: 'BlackList' }
        & Pick<BlackList, 'id' | 'keyword' | 'reason' | 'createdAt'>
      ) }
    )>> }
  )> }
);

export type GetAllBlackListedEmailsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllBlackListedEmailsQuery = (
  { __typename?: 'Query' }
  & { getAllBlackListedEmails?: Maybe<(
    { __typename?: 'BlackListConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'BlackListEdge' }
      & Pick<BlackListEdge, 'cursor'>
      & { node: (
        { __typename?: 'BlackList' }
        & Pick<BlackList, 'id' | 'keyword' | 'reason' | 'createdAt'>
      ) }
    )>> }
  )> }
);

export type GetAllBlackListedUsernamesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllBlackListedUsernamesQuery = (
  { __typename?: 'Query' }
  & { getAllBlackListedUsernames?: Maybe<(
    { __typename?: 'BlackListConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'BlackListEdge' }
      & Pick<BlackListEdge, 'cursor'>
      & { node: (
        { __typename?: 'BlackList' }
        & Pick<BlackList, 'id' | 'keyword' | 'reason' | 'createdAt'>
      ) }
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
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'CategoryEdge' }
      & Pick<CategoryEdge, 'cursor'>
      & { node: (
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'categoryName' | 'createdAt' | 'updatedAt' | 'deletedAt'>
      ) }
    )>> }
  )> }
);

export type GetAllDirectoriesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllDirectoriesQuery = (
  { __typename?: 'Query' }
  & { getAllDirectories?: Maybe<(
    { __typename?: 'BiolinkConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'BiolinkEdge' }
      & Pick<BiolinkEdge, 'cursor'>
      & { node: (
        { __typename?: 'Biolink' }
        & Pick<Biolink, 'id' | 'profilePhotoUrl' | 'displayName' | 'city' | 'state' | 'country' | 'verificationStatus' | 'createdAt'>
        & { username?: Maybe<(
          { __typename?: 'Username' }
          & Pick<Username, 'id' | 'username'>
        )>, user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )>, category?: Maybe<(
          { __typename?: 'Category' }
          & Pick<Category, 'id' | 'categoryName'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllDiscountsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllDiscountsQuery = (
  { __typename?: 'Query' }
  & { getAllDiscounts?: Maybe<(
    { __typename?: 'CodeConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'CodeEdge' }
      & Pick<CodeEdge, 'cursor'>
      & { node: (
        { __typename?: 'Code' }
        & Pick<Code, 'id' | 'code' | 'discount' | 'quantity' | 'expireDate' | 'createdAt' | 'updatedAt'>
        & { referrer?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllDismissedReportsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllDismissedReportsQuery = (
  { __typename?: 'Query' }
  & { getAllDismissedReports?: Maybe<(
    { __typename?: 'ReportConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'ReportEdge' }
      & Pick<ReportEdge, 'cursor'>
      & { node: (
        { __typename?: 'Report' }
        & Pick<Report, 'id' | 'firstName' | 'lastName' | 'email' | 'reportedUrl' | 'createdAt'>
        & { reporter?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllDismissedSupportsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllDismissedSupportsQuery = (
  { __typename?: 'Query' }
  & { getAllDismissedSupports?: Maybe<(
    { __typename?: 'SupportConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'SupportEdge' }
      & Pick<SupportEdge, 'cursor'>
      & { node: (
        { __typename?: 'Support' }
        & Pick<Support, 'id' | 'fullName' | 'email' | 'phoneNumber' | 'company' | 'subject' | 'createdAt'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllEmbedsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllEmbedsQuery = (
  { __typename?: 'Query' }
  & { getAllEmbeds?: Maybe<(
    { __typename?: 'LinkConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'LinkEdge' }
      & Pick<LinkEdge, 'cursor'>
      & { node: (
        { __typename?: 'Link' }
        & Pick<Link, 'id' | 'linkTitle' | 'linkImageUrl' | 'url' | 'shortenedUrl' | 'createdAt'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllLinksQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllLinksQuery = (
  { __typename?: 'Query' }
  & { getAllLinks?: Maybe<(
    { __typename?: 'LinkConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'LinkEdge' }
      & Pick<LinkEdge, 'cursor'>
      & { node: (
        { __typename?: 'Link' }
        & Pick<Link, 'id' | 'linkTitle' | 'linkImageUrl' | 'url' | 'shortenedUrl' | 'createdAt'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllPendingReportsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllPendingReportsQuery = (
  { __typename?: 'Query' }
  & { getAllPendingReports?: Maybe<(
    { __typename?: 'ReportConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'ReportEdge' }
      & Pick<ReportEdge, 'cursor'>
      & { node: (
        { __typename?: 'Report' }
        & Pick<Report, 'id' | 'firstName' | 'lastName' | 'email' | 'reportedUrl' | 'createdAt'>
        & { reporter?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllPendingSupportsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllPendingSupportsQuery = (
  { __typename?: 'Query' }
  & { getAllPendingSupports?: Maybe<(
    { __typename?: 'SupportConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'SupportEdge' }
      & Pick<SupportEdge, 'cursor'>
      & { node: (
        { __typename?: 'Support' }
        & Pick<Support, 'id' | 'fullName' | 'email' | 'phoneNumber' | 'company' | 'subject' | 'createdAt'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllPendingVerificationsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllPendingVerificationsQuery = (
  { __typename?: 'Query' }
  & { getAllPendingVerifications?: Maybe<(
    { __typename?: 'VerificationConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'VerificationEdge' }
      & Pick<VerificationEdge, 'cursor'>
      & { node: (
        { __typename?: 'Verification' }
        & Pick<Verification, 'id' | 'verifiedGovernmentId' | 'verifiedEmail' | 'verifiedPhoneNumber' | 'verifiedWorkEmail' | 'username' | 'firstName' | 'lastName' | 'mobileNumber' | 'workNumber' | 'email' | 'websiteLink' | 'createdAt'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )>, biolink?: Maybe<(
          { __typename?: 'Biolink' }
          & Pick<Biolink, 'id'>
          & { username?: Maybe<(
            { __typename?: 'Username' }
            & Pick<Username, 'id' | 'username'>
          )> }
        )>, category?: Maybe<(
          { __typename?: 'Category' }
          & Pick<Category, 'id' | 'categoryName'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPlansQuery = (
  { __typename?: 'Query' }
  & { getAllPlans: (
    { __typename?: 'PlanListResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, plans?: Maybe<Array<(
      { __typename?: 'Plan' }
      & Pick<Plan, 'id' | 'name' | 'monthlyPrice' | 'annualPrice' | 'enabledStatus' | 'visibilityStatus'>
    )>> }
  ) }
);

export type GetAllPremiumUsernamesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllPremiumUsernamesQuery = (
  { __typename?: 'Query' }
  & { getAllPremiumUsernames?: Maybe<(
    { __typename?: 'UsernameConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'UsernameEdge' }
      & Pick<UsernameEdge, 'cursor'>
      & { node: (
        { __typename?: 'Username' }
        & Pick<Username, 'id' | 'username' | 'expireDate' | 'createdAt' | 'updatedAt'>
        & { owner?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )>, biolink?: Maybe<(
          { __typename?: 'Biolink' }
          & Pick<Biolink, 'id'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllReferralsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllReferralsQuery = (
  { __typename?: 'Query' }
  & { getAllReferrals?: Maybe<(
    { __typename?: 'CodeConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'CodeEdge' }
      & Pick<CodeEdge, 'cursor'>
      & { node: (
        { __typename?: 'Code' }
        & Pick<Code, 'id' | 'code' | 'discount' | 'quantity' | 'expireDate' | 'createdAt' | 'updatedAt'>
        & { referrer?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllRejectedVerificationsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllRejectedVerificationsQuery = (
  { __typename?: 'Query' }
  & { getAllRejectedVerifications?: Maybe<(
    { __typename?: 'VerificationConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'VerificationEdge' }
      & Pick<VerificationEdge, 'cursor'>
      & { node: (
        { __typename?: 'Verification' }
        & Pick<Verification, 'id' | 'verifiedGovernmentId' | 'verifiedEmail' | 'verifiedPhoneNumber' | 'verifiedWorkEmail' | 'username' | 'firstName' | 'lastName' | 'mobileNumber' | 'workNumber' | 'email' | 'websiteLink' | 'createdAt'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )>, biolink?: Maybe<(
          { __typename?: 'Biolink' }
          & Pick<Biolink, 'id'>
          & { username?: Maybe<(
            { __typename?: 'Username' }
            & Pick<Username, 'id' | 'username'>
          )> }
        )>, category?: Maybe<(
          { __typename?: 'Category' }
          & Pick<Category, 'id' | 'categoryName'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllResolvedReportsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllResolvedReportsQuery = (
  { __typename?: 'Query' }
  & { getAllResolvedReports?: Maybe<(
    { __typename?: 'ReportConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'ReportEdge' }
      & Pick<ReportEdge, 'cursor'>
      & { node: (
        { __typename?: 'Report' }
        & Pick<Report, 'id' | 'firstName' | 'lastName' | 'email' | 'reportedUrl' | 'createdAt'>
        & { reporter?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllResolvedSupportsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllResolvedSupportsQuery = (
  { __typename?: 'Query' }
  & { getAllResolvedSupports?: Maybe<(
    { __typename?: 'SupportConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'SupportEdge' }
      & Pick<SupportEdge, 'cursor'>
      & { node: (
        { __typename?: 'Support' }
        & Pick<Support, 'id' | 'fullName' | 'email' | 'phoneNumber' | 'company' | 'subject' | 'createdAt'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllStripePaymentsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllStripePaymentsQuery = (
  { __typename?: 'Query' }
  & { getAllStripePayments?: Maybe<(
    { __typename?: 'PaymentConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'PaymentEdge' }
      & Pick<PaymentEdge, 'cursor'>
      & { node: (
        { __typename?: 'Payment' }
        & Pick<Payment, 'id' | 'stripeInvoiceNumber' | 'stripeAmountDue' | 'stripeAmountPaid' | 'stripeAmountRemaining' | 'stripeDiscount' | 'stripeChargeId' | 'stripeInvoiceCreated' | 'stripeCustomerId' | 'stripeCustomerEmail' | 'stripeCustomerName' | 'stripeCustomerPhone' | 'stripePriceId' | 'stripeSubscriptionId' | 'stripeStatus' | 'createdAt'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllTaxesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllTaxesQuery = (
  { __typename?: 'Query' }
  & { getAllTaxes?: Maybe<(
    { __typename?: 'TaxConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'TaxEdge' }
      & Pick<TaxEdge, 'cursor'>
      & { node: (
        { __typename?: 'Tax' }
        & Pick<Tax, 'id' | 'internalName' | 'name' | 'value' | 'valueType' | 'type' | 'billingFor' | 'createdAt'>
      ) }
    )>> }
  )> }
);

export type GetAllTrademarkUsernamesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllTrademarkUsernamesQuery = (
  { __typename?: 'Query' }
  & { getAllTrademarkUsernames?: Maybe<(
    { __typename?: 'UsernameConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'UsernameEdge' }
      & Pick<UsernameEdge, 'cursor'>
      & { node: (
        { __typename?: 'Username' }
        & Pick<Username, 'id' | 'username' | 'expireDate' | 'createdAt' | 'updatedAt'>
        & { owner?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )>, biolink?: Maybe<(
          { __typename?: 'Biolink' }
          & Pick<Biolink, 'id'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetAllUsernamesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllUsernamesQuery = (
  { __typename?: 'Query' }
  & { getAllUsernames?: Maybe<(
    { __typename?: 'UsernameConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'UsernameEdge' }
      & Pick<UsernameEdge, 'cursor'>
      & { node: (
        { __typename?: 'Username' }
        & Pick<Username, 'id' | 'username' | 'expireDate' | 'createdAt' | 'updatedAt'>
        & { owner?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )>, biolink?: Maybe<(
          { __typename?: 'Biolink' }
          & Pick<Biolink, 'id'>
        )> }
      ) }
    )>> }
  )> }
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
        & Pick<User, 'id' | 'email' | 'lastActiveTill' | 'language' | 'lastIPAddress' | 'country' | 'createdAt'>
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

export type GetAllVerifiedVerificationsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllVerifiedVerificationsQuery = (
  { __typename?: 'Query' }
  & { getAllVerifiedVerifications?: Maybe<(
    { __typename?: 'VerificationConnection' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, pageInfo?: Maybe<(
      { __typename?: 'PageInfo' }
      & PageInfoFragment
    )>, edges?: Maybe<Array<(
      { __typename?: 'VerificationEdge' }
      & Pick<VerificationEdge, 'cursor'>
      & { node: (
        { __typename?: 'Verification' }
        & Pick<Verification, 'id' | 'verifiedGovernmentId' | 'verifiedEmail' | 'verifiedPhoneNumber' | 'verifiedWorkEmail' | 'username' | 'firstName' | 'lastName' | 'mobileNumber' | 'workNumber' | 'email' | 'websiteLink' | 'createdAt'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'email'>
        )>, biolink?: Maybe<(
          { __typename?: 'Biolink' }
          & Pick<Biolink, 'id'>
          & { username?: Maybe<(
            { __typename?: 'Username' }
            & Pick<Username, 'id' | 'username'>
          )> }
        )>, category?: Maybe<(
          { __typename?: 'Category' }
          & Pick<Category, 'id' | 'categoryName'>
        )> }
      ) }
    )>> }
  )> }
);

export type GetBiolinkQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetBiolinkQuery = (
  { __typename?: 'Query' }
  & { getBiolink?: Maybe<(
    { __typename?: 'BiolinkResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, biolink?: Maybe<(
      { __typename?: 'Biolink' }
      & Pick<Biolink, 'id' | 'profilePhotoUrl' | 'coverPhotoUrl' | 'displayName' | 'city' | 'state' | 'country' | 'latitude' | 'longitude' | 'bio' | 'verificationStatus' | 'verifiedGovernmentId' | 'verifiedEmail' | 'verifiedPhoneNumber' | 'verifiedWorkEmail' | 'featured' | 'changedUsername' | 'createdAt'>
      & { settings?: Maybe<(
        { __typename?: 'BiolinkSettings' }
        & Pick<BiolinkSettings, 'enableDarkMode' | 'showEmail' | 'email' | 'showPhone' | 'phone' | 'enableColoredContactButtons' | 'addedToDirectory' | 'directoryBio' | 'enableColoredSocialMediaIcons' | 'socialAccountStyleType' | 'enableFacebookPixel' | 'facebookPixelId' | 'enableGoogleAnalytics' | 'googleAnalyticsCode' | 'enableEmailCapture' | 'emailCaptureId' | 'enableUtmParameters' | 'utmSource' | 'utmMedium' | 'utmCampaign' | 'blockSearchEngineIndexing' | 'pageTitle' | 'metaDescription' | 'opengraphImageUrl' | 'removeDefaultBranding' | 'enableCustomBranding' | 'customBrandingName' | 'customBrandingUrl' | 'enablePasswordProtection' | 'enableSensitiveContentWarning'>
        & { socialAccounts?: Maybe<Array<(
          { __typename?: 'SocialMediaProps' }
          & Pick<SocialMediaProps, 'platform' | 'icon' | 'link'>
        )>> }
      )>, username?: Maybe<(
        { __typename?: 'Username' }
        & Pick<Username, 'id' | 'username'>
      )>, user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      )>, category?: Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'categoryName'>
      )> }
    )> }
  )> }
);

export type GetBlackListQueryVariables = Exact<{
  blackListId: Scalars['Int'];
}>;


export type GetBlackListQuery = (
  { __typename?: 'Query' }
  & { getBlackList?: Maybe<(
    { __typename?: 'BlackListResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, blackList?: Maybe<(
      { __typename?: 'BlackList' }
      & Pick<BlackList, 'id' | 'blacklistType' | 'keyword' | 'reason' | 'createdAt'>
    )> }
  )> }
);

export type GetBusinessSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBusinessSettingsQuery = (
  { __typename?: 'Query' }
  & { getBusinessSettings: (
    { __typename?: 'BusinessSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'BusinessSystemSettings' }
      & Pick<BusinessSystemSettings, 'enableInvoice' | 'name' | 'address' | 'city' | 'country' | 'zipCode' | 'email' | 'phone' | 'taxType' | 'taxId'>
    )> }
  ) }
);

export type GetCaptchaSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCaptchaSettingsQuery = (
  { __typename?: 'Query' }
  & { getCaptchaSettings: (
    { __typename?: 'CaptchaSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'CaptchaSystemSettings' }
      & Pick<CaptchaSystemSettings, 'captchaType' | 'enableCaptchaOnLoginPage' | 'enableCaptchaOnRegisterPage' | 'enableCaptchaOnLostPasswordPage' | 'enableCaptchaOnResendActivationPage'>
    )> }
  ) }
);

export type GetCategoryQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetCategoryQuery = (
  { __typename?: 'Query' }
  & { getCategory?: Maybe<(
    { __typename?: 'CategoryResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'categoryName' | 'createdAt' | 'updatedAt'>
    )> }
  )> }
);

export type GetCodeQueryVariables = Exact<{
  codeId: Scalars['String'];
}>;


export type GetCodeQuery = (
  { __typename?: 'Query' }
  & { getCode?: Maybe<(
    { __typename?: 'CodeResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, code?: Maybe<(
      { __typename?: 'Code' }
      & Pick<Code, 'id' | 'type' | 'code' | 'discount' | 'quantity' | 'expireDate' | 'createdAt' | 'updatedAt'>
      & { referrer?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      )> }
    )> }
  )> }
);

export type GetDashboardTotalCountsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDashboardTotalCountsQuery = (
  { __typename?: 'Query' }
  & { getDashboardTotalCounts: (
    { __typename?: 'DashboardTotalCountsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, result?: Maybe<(
      { __typename?: 'DashboardTotalCounts' }
      & Pick<DashboardTotalCounts, 'totalBiolinkPageViewsTracked' | 'totalBiolinks' | 'totalEarned' | 'totalLinkClickViewsTracked' | 'totalReferralCodes' | 'totalShortenedLinks' | 'totalTransactionsMade' | 'totalUsers'>
    )> }
  ) }
);

export type GetEmailSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEmailSettingsQuery = (
  { __typename?: 'Query' }
  & { getEmailSettings: (
    { __typename?: 'EmailSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'EmailSystemSettings' }
      & Pick<EmailSystemSettings, 'fromName' | 'fromEmail'>
    )> }
  ) }
);

export type GetFacebookSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFacebookSettingsQuery = (
  { __typename?: 'Query' }
  & { getFacebookSettings: (
    { __typename?: 'FacebookSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'FacebookSystemSettings' }
      & Pick<FacebookSystemSettings, 'enableFacebookLogin'>
    )> }
  ) }
);

export type GetLinkSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLinkSettingsQuery = (
  { __typename?: 'Query' }
  & { getLinkSettings: (
    { __typename?: 'LinkSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'LinkSystemSettings' }
      & Pick<LinkSystemSettings, 'branding' | 'enableLinkShortenerSystem' | 'enablePhishtank' | 'enableGoogleSafeBrowsing'>
    )> }
  ) }
);

export type GetMainSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMainSettingsQuery = (
  { __typename?: 'Query' }
  & { getMainSettings: (
    { __typename?: 'MainSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'MainSystemSettings' }
      & Pick<MainSystemSettings, 'title' | 'defaultLanguage' | 'defaultTimezone' | 'enableEmailConfirmation' | 'enableNewUserRegistration' | 'termsAndConditionsUrl' | 'privacyPolicyUrl'>
    )> }
  ) }
);

export type GetNotificationSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotificationSettingsQuery = (
  { __typename?: 'Query' }
  & { getNotificationSettings: (
    { __typename?: 'NotificationSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'NotificationSystemSettings' }
      & Pick<NotificationSystemSettings, 'emailsToBeNotified' | 'emailOnNewUser' | 'emailOnNewPayment'>
    )> }
  ) }
);

export type GetPaymentQueryVariables = Exact<{
  paymentId: Scalars['String'];
}>;


export type GetPaymentQuery = (
  { __typename?: 'Query' }
  & { getPayment?: Maybe<(
    { __typename?: 'PaymentResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, payment?: Maybe<(
      { __typename?: 'Payment' }
      & Pick<Payment, 'id' | 'stripeInvoiceNumber' | 'paymentType' | 'stripeAmountDue' | 'stripeAmountPaid' | 'stripeAmountRemaining' | 'stripeChargeId' | 'stripeInvoiceCreated' | 'stripePaymentCurrency' | 'stripePriceId' | 'stripeDiscount' | 'stripeStatus' | 'stripeInvoicePdfUrl' | 'stripeInvoiceUrl' | 'stripeCustomerId' | 'stripeCustomerName' | 'stripeCustomerEmail' | 'stripeCustomerPhone' | 'stripeCustomerAddress' | 'stripeCustomerShipping' | 'stripeSubscriptionId' | 'stripePeriodStart' | 'stripePeriodEnd' | 'createdAt'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      )> }
    )> }
  )> }
);

export type GetPaymentSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPaymentSettingsQuery = (
  { __typename?: 'Query' }
  & { getPaymentSettings: (
    { __typename?: 'PaymentSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'PaymentSystemSettings' }
      & Pick<PaymentSystemSettings, 'enablePaymentSystem' | 'enabledPaymentType' | 'brandName' | 'currency' | 'enableDiscountOrRedeemableCode' | 'enableTaxesAndBilling' | 'enablePaypal' | 'enableStripe'>
    )> }
  ) }
);

export type GetPlanQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetPlanQuery = (
  { __typename?: 'Query' }
  & { getPlan: (
    { __typename?: 'PlanResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, plan?: Maybe<(
      { __typename?: 'Plan' }
      & Pick<Plan, 'id' | 'name' | 'monthlyPrice' | 'monthlyPriceStripeId' | 'annualPrice' | 'annualPriceStripeId' | 'visibilityStatus' | 'createdAt' | 'updatedAt' | 'deletedAt'>
      & { settings?: Maybe<(
        { __typename?: 'PlanSettings' }
        & Pick<PlanSettings, 'totalBiolinksLimit' | 'totalLinksLimit' | 'totalCustomDomainLimit' | 'darkModeEnabled' | 'addedToDirectoryEnabled' | 'customBackHalfEnabled' | 'noAdsEnabled' | 'removableBrandingEnabled' | 'customFooterBrandingEnabled' | 'coloredLinksEnabled' | 'googleAnalyticsEnabled' | 'facebookPixelEnabled' | 'emailCaptureEnabled' | 'verifiedCheckmarkEnabled' | 'linksSchedulingEnabled' | 'seoEnabled' | 'socialEnabled' | 'utmParametersEnabled' | 'passwordProtectionEnabled' | 'sensitiveContentWarningEnabled' | 'leapLinkEnabled' | 'donationLinkEnabled'>
      )> }
    )> }
  ) }
);

export type GetReportQueryVariables = Exact<{
  reportId: Scalars['String'];
}>;


export type GetReportQuery = (
  { __typename?: 'Query' }
  & { getReport?: Maybe<(
    { __typename?: 'ReportResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, report?: Maybe<(
      { __typename?: 'Report' }
      & Pick<Report, 'id' | 'firstName' | 'lastName' | 'email' | 'reportedUrl' | 'description' | 'status' | 'createdAt'>
      & { reporter?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      )> }
    )> }
  )> }
);

export type GetSocialSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSocialSettingsQuery = (
  { __typename?: 'Query' }
  & { getSocialSettings: (
    { __typename?: 'SocialSettingsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, settings?: Maybe<(
      { __typename?: 'SocialSystemSettings' }
      & Pick<SocialSystemSettings, 'youtube' | 'facebook' | 'twitter' | 'instagram'>
    )> }
  ) }
);

export type GetSupportQueryVariables = Exact<{
  supportId: Scalars['String'];
}>;


export type GetSupportQuery = (
  { __typename?: 'Query' }
  & { getSupport?: Maybe<(
    { __typename?: 'SupportResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, support?: Maybe<(
      { __typename?: 'Support' }
      & Pick<Support, 'id' | 'fullName' | 'email' | 'phoneNumber' | 'company' | 'subject' | 'message' | 'status' | 'supportReply' | 'createdAt' | 'updatedAt'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      )> }
    )> }
  )> }
);

export type GetTaxQueryVariables = Exact<{
  taxId: Scalars['Int'];
}>;


export type GetTaxQuery = (
  { __typename?: 'Query' }
  & { getTax?: Maybe<(
    { __typename?: 'TaxResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, tax?: Maybe<(
      { __typename?: 'Tax' }
      & Pick<Tax, 'id' | 'internalName' | 'name' | 'description' | 'value' | 'valueType' | 'type' | 'billingFor' | 'countries' | 'createdAt'>
    )> }
  )> }
);

export type GetUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser?: Maybe<(
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'emailVerifiedAt' | 'lastActiveTill' | 'planExpirationDate' | 'planTrialDone' | 'language' | 'timezone' | 'lastIPAddress' | 'lastUserAgent' | 'country' | 'totalLogin' | 'createdAt' | 'updatedAt' | 'deletedAt'>
      & { billing?: Maybe<(
        { __typename?: 'Billing' }
        & Pick<Billing, 'type' | 'name' | 'address1' | 'address2' | 'city' | 'state' | 'country' | 'zip' | 'phone'>
      )>, biolinks?: Maybe<Array<(
        { __typename?: 'Biolink' }
        & Pick<Biolink, 'id' | 'profilePhotoUrl' | 'displayName'>
        & { username?: Maybe<(
          { __typename?: 'Username' }
          & Pick<Username, 'id' | 'username'>
        )> }
      )>>, activities?: Maybe<Array<(
        { __typename?: 'UserLogs' }
        & Pick<UserLogs, 'id' | 'ipAddress' | 'cityName' | 'countryCode' | 'browserName' | 'browserLanguage' | 'deviceType' | 'osName' | 'description' | 'createdAt'>
      )>>, links?: Maybe<Array<(
        { __typename?: 'Link' }
        & Pick<Link, 'id' | 'linkType' | 'linkTitle' | 'url' | 'shortenedUrl' | 'note' | 'createdAt' | 'updatedAt'>
      )>>, plan?: Maybe<(
        { __typename?: 'Plan' }
        & Pick<Plan, 'id' | 'name'>
      )>, adminRole?: Maybe<(
        { __typename?: 'AdminRole' }
        & Pick<AdminRole, 'id' | 'roleName'>
      )> }
    )> }
  )> }
);

export type GetUserSummaryCountsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserSummaryCountsQuery = (
  { __typename?: 'Query' }
  & { getUserSummaryCounts?: Maybe<(
    { __typename?: 'UserTotalCountsResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, result?: Maybe<(
      { __typename?: 'UserTotalCounts' }
      & Pick<UserTotalCounts, 'totalBiolinks' | 'totalShortenedLinks' | 'totalReferralCodes' | 'totalPayed'>
    )> }
  )> }
);

export type GetUsernameQueryVariables = Exact<{
  usernameId: Scalars['String'];
}>;


export type GetUsernameQuery = (
  { __typename?: 'Query' }
  & { getUsername?: Maybe<(
    { __typename?: 'UsernameResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & ReceivedErrorsFragment
    )>>, username?: Maybe<(
      { __typename?: 'Username' }
      & Pick<Username, 'id' | 'username' | 'premiumType' | 'expireDate' | 'createdAt'>
      & { owner?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      )>, biolink?: Maybe<(
        { __typename?: 'Biolink' }
        & Pick<Biolink, 'id' | 'profilePhotoUrl' | 'displayName'>
      )> }
    )> }
  )> }
);

export type GetVerificationQueryVariables = Exact<{
  verificationId: Scalars['String'];
}>;


export type GetVerificationQuery = (
  { __typename?: 'Query' }
  & { getVerification?: Maybe<(
    { __typename?: 'VerificationResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'ErrorResponse' }
      & Pick<ErrorResponse, 'errorCode' | 'field' | 'message'>
    )>>, verification?: Maybe<(
      { __typename?: 'Verification' }
      & Pick<Verification, 'id' | 'firstName' | 'lastName' | 'username' | 'email' | 'mobileNumber' | 'workNumber' | 'websiteLink' | 'instagramUrl' | 'twitterUrl' | 'linkedinUrl' | 'photoIdUrl' | 'businessDocumentUrl' | 'otherDocumentsUrl' | 'verificationStatus' | 'verifiedGovernmentId' | 'verifiedEmail' | 'verifiedPhoneNumber' | 'verifiedWorkEmail' | 'createdAt'>
      & { user?: Maybe<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'email'>
      )>, biolink?: Maybe<(
        { __typename?: 'Biolink' }
        & Pick<Biolink, 'id' | 'profilePhotoUrl'>
        & { username?: Maybe<(
          { __typename?: 'Username' }
          & Pick<Username, 'id' | 'username'>
        )> }
      )>, category?: Maybe<(
        { __typename?: 'Category' }
        & Pick<Category, 'id' | 'categoryName'>
      )> }
    )> }
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
export const AddBlackListDocument = gql`
    mutation AddBlackList($options: NewBlackListInput!) {
  addBlackList(options: $options) {
    errors {
      ...ReceivedErrors
    }
    blackList {
      id
      blacklistType
      keyword
      reason
      createdAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useAddBlackListMutation() {
  return Urql.useMutation<AddBlackListMutation, AddBlackListMutationVariables>(AddBlackListDocument);
};
export const AddCodeDocument = gql`
    mutation AddCode($options: NewCodeInput!) {
  addCode(options: $options) {
    errors {
      ...ReceivedErrors
    }
    code {
      id
      type
      code
      discount
      quantity
      expireDate
      createdAt
      updatedAt
      referrer {
        id
        email
      }
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useAddCodeMutation() {
  return Urql.useMutation<AddCodeMutation, AddCodeMutationVariables>(AddCodeDocument);
};
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
export const AddTaxDocument = gql`
    mutation AddTax($options: NewTaxInput!) {
  addTax(options: $options) {
    errors {
      ...ReceivedErrors
    }
    tax {
      id
      internalName
      name
      description
      value
      valueType
      type
      billingFor
      countries
      createdAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useAddTaxMutation() {
  return Urql.useMutation<AddTaxMutation, AddTaxMutationVariables>(AddTaxDocument);
};
export const AddUsernameDocument = gql`
    mutation AddUsername($options: NewUsernameInput!) {
  addUsername(options: $options) {
    errors {
      ...ReceivedErrors
    }
    username {
      id
      username
      premiumType
      expireDate
      createdAt
      owner {
        id
        email
      }
      biolink {
        id
        profilePhotoUrl
        displayName
      }
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useAddUsernameMutation() {
  return Urql.useMutation<AddUsernameMutation, AddUsernameMutationVariables>(AddUsernameDocument);
};
export const ChangeReportStatusDocument = gql`
    mutation ChangeReportStatus($reportId: String!, $options: ReportStatusInput!) {
  changeReportStatus(reportId: $reportId, options: $options) {
    errors {
      ...ReceivedErrors
    }
    report {
      id
      firstName
      lastName
      email
      reportedUrl
      description
      status
      createdAt
      reporter {
        id
        email
      }
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useChangeReportStatusMutation() {
  return Urql.useMutation<ChangeReportStatusMutation, ChangeReportStatusMutationVariables>(ChangeReportStatusDocument);
};
export const ChangeVerificationStatusDocument = gql`
    mutation ChangeVerificationStatus($verificationId: String!, $options: VerificationStatusInput!) {
  changeVerificationStatus(verificationId: $verificationId, options: $options) {
    errors {
      ...ReceivedErrors
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useChangeVerificationStatusMutation() {
  return Urql.useMutation<ChangeVerificationStatusMutation, ChangeVerificationStatusMutationVariables>(ChangeVerificationStatusDocument);
};
export const CreateAdminRoleDocument = gql`
    mutation CreateAdminRole($options: NewAdminRoleInput!) {
  createAdminRole(options: $options) {
    errors {
      ...ReceivedErrors
    }
    adminRole {
      id
      roleName
      roleDescription
      roleSettings {
        resource
        canShowList
        canShow
        canCreate
        canEdit
        canDelete
      }
      createdAt
      updatedAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useCreateAdminRoleMutation() {
  return Urql.useMutation<CreateAdminRoleMutation, CreateAdminRoleMutationVariables>(CreateAdminRoleDocument);
};
export const CreateCategoryDocument = gql`
    mutation CreateCategory($options: NewCategoryInput!) {
  createCategory(options: $options) {
    errors {
      ...ReceivedErrors
    }
    category {
      id
      categoryName
      createdAt
      updatedAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useCreateCategoryMutation() {
  return Urql.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument);
};
export const CreatePlanDocument = gql`
    mutation CreatePlan($options: PlanInput!) {
  createPlan(options: $options) {
    errors {
      ...ReceivedErrors
    }
    plan {
      id
      name
      monthlyPrice
      monthlyPriceStripeId
      annualPrice
      annualPriceStripeId
      settings {
        totalBiolinksLimit
        totalLinksLimit
        totalCustomDomainLimit
        darkModeEnabled
        addedToDirectoryEnabled
        customBackHalfEnabled
        noAdsEnabled
        removableBrandingEnabled
        customFooterBrandingEnabled
        coloredLinksEnabled
        googleAnalyticsEnabled
        facebookPixelEnabled
        emailCaptureEnabled
        verifiedCheckmarkEnabled
        linksSchedulingEnabled
        seoEnabled
        socialEnabled
        utmParametersEnabled
        passwordProtectionEnabled
        sensitiveContentWarningEnabled
        leapLinkEnabled
        donationLinkEnabled
      }
      visibilityStatus
      createdAt
      updatedAt
      deletedAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useCreatePlanMutation() {
  return Urql.useMutation<CreatePlanMutation, CreatePlanMutationVariables>(CreatePlanDocument);
};
export const EditAdminRoleDocument = gql`
    mutation EditAdminRole($id: Int!, $options: NewAdminRoleInput!) {
  editAdminRole(id: $id, options: $options) {
    errors {
      ...ReceivedErrors
    }
    adminRole {
      id
      roleName
      roleDescription
      roleSettings {
        resource
        canShowList
        canShow
        canCreate
        canEdit
        canDelete
      }
      createdAt
      updatedAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditAdminRoleMutation() {
  return Urql.useMutation<EditAdminRoleMutation, EditAdminRoleMutationVariables>(EditAdminRoleDocument);
};
export const EditAdsSettingsDocument = gql`
    mutation EditAdsSettings($options: AdsSettingsInput!) {
  editAdsSettings(options: $options) {
    errors {
      ...ReceivedErrors
    }
    settings {
      header
      footer
      biolinkPageHeader
      biolinkPageFooter
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditAdsSettingsMutation() {
  return Urql.useMutation<EditAdsSettingsMutation, EditAdsSettingsMutationVariables>(EditAdsSettingsDocument);
};
export const EditBlackListDocument = gql`
    mutation EditBlackList($blackListId: Int!, $options: NewBlackListInput!) {
  editBlackList(blackListId: $blackListId, options: $options) {
    errors {
      ...ReceivedErrors
    }
    blackList {
      id
      blacklistType
      keyword
      reason
      createdAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditBlackListMutation() {
  return Urql.useMutation<EditBlackListMutation, EditBlackListMutationVariables>(EditBlackListDocument);
};
export const EditBusinessSettingsDocument = gql`
    mutation EditBusinessSettings($options: BusinessSettingsInput!) {
  editBusinessSettings(options: $options) {
    errors {
      ...ReceivedErrors
    }
    settings {
      enableInvoice
      name
      address
      city
      country
      zipCode
      email
      phone
      taxType
      taxId
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditBusinessSettingsMutation() {
  return Urql.useMutation<EditBusinessSettingsMutation, EditBusinessSettingsMutationVariables>(EditBusinessSettingsDocument);
};
export const EditCaptchaSettingsDocument = gql`
    mutation EditCaptchaSettings($options: CaptchaSettingsInput!) {
  editCaptchaSettings(options: $options) {
    errors {
      ...ReceivedErrors
    }
    settings {
      captchaType
      enableCaptchaOnLoginPage
      enableCaptchaOnRegisterPage
      enableCaptchaOnLostPasswordPage
      enableCaptchaOnResendActivationPage
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditCaptchaSettingsMutation() {
  return Urql.useMutation<EditCaptchaSettingsMutation, EditCaptchaSettingsMutationVariables>(EditCaptchaSettingsDocument);
};
export const EditCategoryDocument = gql`
    mutation EditCategory($id: Int!, $options: NewCategoryInput!) {
  editCategory(id: $id, options: $options) {
    errors {
      ...ReceivedErrors
    }
    category {
      id
      categoryName
      createdAt
      updatedAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditCategoryMutation() {
  return Urql.useMutation<EditCategoryMutation, EditCategoryMutationVariables>(EditCategoryDocument);
};
export const EditCodeDocument = gql`
    mutation EditCode($codeId: String!, $options: NewCodeInput!) {
  editCode(codeId: $codeId, options: $options) {
    errors {
      ...ReceivedErrors
    }
    code {
      id
      type
      code
      discount
      quantity
      expireDate
      createdAt
      updatedAt
      referrer {
        id
        email
      }
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditCodeMutation() {
  return Urql.useMutation<EditCodeMutation, EditCodeMutationVariables>(EditCodeDocument);
};
export const EditEmailSettingsDocument = gql`
    mutation EditEmailSettings($options: EmailSettingsInput!) {
  editEmailSettings(options: $options) {
    errors {
      ...ReceivedErrors
    }
    settings {
      fromName
      fromEmail
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditEmailSettingsMutation() {
  return Urql.useMutation<EditEmailSettingsMutation, EditEmailSettingsMutationVariables>(EditEmailSettingsDocument);
};
export const EditFacebookSettingsDocument = gql`
    mutation EditFacebookSettings($options: FacebookSettingsInput!) {
  editFacebookSettings(options: $options) {
    errors {
      ...ReceivedErrors
    }
    settings {
      enableFacebookLogin
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditFacebookSettingsMutation() {
  return Urql.useMutation<EditFacebookSettingsMutation, EditFacebookSettingsMutationVariables>(EditFacebookSettingsDocument);
};
export const EditLinkSettingsDocument = gql`
    mutation EditLinkSettings($options: LinkSettingsInput!) {
  editLinkSettings(options: $options) {
    errors {
      ...ReceivedErrors
    }
    settings {
      branding
      enableLinkShortenerSystem
      enablePhishtank
      enableGoogleSafeBrowsing
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditLinkSettingsMutation() {
  return Urql.useMutation<EditLinkSettingsMutation, EditLinkSettingsMutationVariables>(EditLinkSettingsDocument);
};
export const EditMainSettingsDocument = gql`
    mutation EditMainSettings($options: MainSettingsInput!) {
  editMainSettings(options: $options) {
    errors {
      ...ReceivedErrors
    }
    settings {
      title
      defaultLanguage
      defaultTimezone
      enableEmailConfirmation
      enableNewUserRegistration
      termsAndConditionsUrl
      privacyPolicyUrl
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditMainSettingsMutation() {
  return Urql.useMutation<EditMainSettingsMutation, EditMainSettingsMutationVariables>(EditMainSettingsDocument);
};
export const EditNotificationSettingsDocument = gql`
    mutation EditNotificationSettings($options: NotificationSettingsInput!) {
  editNotificationSettings(options: $options) {
    errors {
      ...ReceivedErrors
    }
    settings {
      emailsToBeNotified
      emailOnNewUser
      emailOnNewPayment
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditNotificationSettingsMutation() {
  return Urql.useMutation<EditNotificationSettingsMutation, EditNotificationSettingsMutationVariables>(EditNotificationSettingsDocument);
};
export const EditPaymentSettingsDocument = gql`
    mutation EditPaymentSettings($options: PaymentSettingsInput!) {
  editPaymentSettings(options: $options) {
    errors {
      ...ReceivedErrors
    }
    settings {
      enablePaymentSystem
      enabledPaymentType
      brandName
      currency
      enableDiscountOrRedeemableCode
      enableTaxesAndBilling
      enablePaypal
      enableStripe
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditPaymentSettingsMutation() {
  return Urql.useMutation<EditPaymentSettingsMutation, EditPaymentSettingsMutationVariables>(EditPaymentSettingsDocument);
};
export const EditPlanDocument = gql`
    mutation EditPlan($id: Int!, $options: PlanInput!) {
  editPlan(id: $id, options: $options) {
    errors {
      errorCode
      field
      message
    }
    plan {
      id
      name
      monthlyPrice
      monthlyPriceStripeId
      annualPrice
      annualPriceStripeId
      settings {
        totalBiolinksLimit
        totalLinksLimit
        totalCustomDomainLimit
        darkModeEnabled
        addedToDirectoryEnabled
        customBackHalfEnabled
        noAdsEnabled
        removableBrandingEnabled
        customFooterBrandingEnabled
        coloredLinksEnabled
        googleAnalyticsEnabled
        facebookPixelEnabled
        emailCaptureEnabled
        verifiedCheckmarkEnabled
        linksSchedulingEnabled
        seoEnabled
        socialEnabled
        utmParametersEnabled
        passwordProtectionEnabled
        sensitiveContentWarningEnabled
        leapLinkEnabled
        donationLinkEnabled
      }
      visibilityStatus
      createdAt
      updatedAt
      deletedAt
    }
  }
}
    `;

export function useEditPlanMutation() {
  return Urql.useMutation<EditPlanMutation, EditPlanMutationVariables>(EditPlanDocument);
};
export const EditSocialSettingsDocument = gql`
    mutation EditSocialSettings($options: SocialSettingsInput!) {
  editSocialSettings(options: $options) {
    errors {
      ...ReceivedErrors
    }
    settings {
      youtube
      facebook
      twitter
      instagram
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditSocialSettingsMutation() {
  return Urql.useMutation<EditSocialSettingsMutation, EditSocialSettingsMutationVariables>(EditSocialSettingsDocument);
};
export const EditSupportDocument = gql`
    mutation EditSupport($supportId: String!, $options: SupportAdminInput!) {
  editSupport(supportId: $supportId, options: $options) {
    errors {
      ...ReceivedErrors
    }
    support {
      id
      fullName
      email
      phoneNumber
      company
      subject
      message
      status
      supportReply
      createdAt
      user {
        id
        email
      }
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditSupportMutation() {
  return Urql.useMutation<EditSupportMutation, EditSupportMutationVariables>(EditSupportDocument);
};
export const EditTaxDocument = gql`
    mutation EditTax($taxId: Int!, $options: NewTaxInput!) {
  editTax(taxId: $taxId, options: $options) {
    errors {
      ...ReceivedErrors
    }
    tax {
      id
      internalName
      name
      description
      value
      valueType
      type
      billingFor
      countries
      createdAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditTaxMutation() {
  return Urql.useMutation<EditTaxMutation, EditTaxMutationVariables>(EditTaxDocument);
};
export const EditUserDocument = gql`
    mutation EditUser($id: String!, $options: EditUserInput!) {
  editUser(id: $id, options: $options) {
    errors {
      ...ReceivedErrors
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditUserMutation() {
  return Urql.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument);
};
export const EditUsernameDocument = gql`
    mutation EditUsername($usernameId: String!, $options: NewUsernameInput!) {
  editUsername(usernameId: $usernameId, options: $options) {
    errors {
      ...ReceivedErrors
    }
    username {
      id
      username
      premiumType
      expireDate
      createdAt
      owner {
        id
        email
      }
      biolink {
        id
        profilePhotoUrl
        displayName
      }
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useEditUsernameMutation() {
  return Urql.useMutation<EditUsernameMutation, EditUsernameMutationVariables>(EditUsernameDocument);
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
export const GetAdminRoleDocument = gql`
    query GetAdminRole($id: Int!) {
  getAdminRole(id: $id) {
    errors {
      ...ReceivedErrors
    }
    adminRole {
      id
      roleName
      roleDescription
      roleSettings {
        resource
        canShowList
        canShow
        canCreate
        canEdit
        canDelete
      }
      createdAt
      updatedAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetAdminRoleQuery(options: Omit<Urql.UseQueryArgs<GetAdminRoleQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAdminRoleQuery>({ query: GetAdminRoleDocument, ...options });
};
export const GetAdsSettingsDocument = gql`
    query GetAdsSettings {
  getAdsSettings {
    errors {
      ...ReceivedErrors
    }
    settings {
      header
      footer
      biolinkPageHeader
      biolinkPageFooter
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetAdsSettingsQuery(options: Omit<Urql.UseQueryArgs<GetAdsSettingsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAdsSettingsQuery>({ query: GetAdsSettingsDocument, ...options });
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
        createdAt
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
export const GetAllBiolinksDocument = gql`
    query GetAllBiolinks($options: ConnectionArgs!) {
  getAllBiolinks(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        username {
          id
          username
        }
        profilePhotoUrl
        displayName
        city
        state
        country
        verificationStatus
        createdAt
        user {
          id
          email
        }
        category {
          id
          categoryName
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllBiolinksQuery(options: Omit<Urql.UseQueryArgs<GetAllBiolinksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllBiolinksQuery>({ query: GetAllBiolinksDocument, ...options });
};
export const GetAllBlackListedBadWordsDocument = gql`
    query GetAllBlackListedBadWords($options: ConnectionArgs!) {
  getAllBlackListedBadWords(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        keyword
        reason
        createdAt
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllBlackListedBadWordsQuery(options: Omit<Urql.UseQueryArgs<GetAllBlackListedBadWordsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllBlackListedBadWordsQuery>({ query: GetAllBlackListedBadWordsDocument, ...options });
};
export const GetAllBlackListedEmailsDocument = gql`
    query GetAllBlackListedEmails($options: ConnectionArgs!) {
  getAllBlackListedEmails(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        keyword
        reason
        createdAt
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllBlackListedEmailsQuery(options: Omit<Urql.UseQueryArgs<GetAllBlackListedEmailsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllBlackListedEmailsQuery>({ query: GetAllBlackListedEmailsDocument, ...options });
};
export const GetAllBlackListedUsernamesDocument = gql`
    query GetAllBlackListedUsernames($options: ConnectionArgs!) {
  getAllBlackListedUsernames(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        keyword
        reason
        createdAt
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllBlackListedUsernamesQuery(options: Omit<Urql.UseQueryArgs<GetAllBlackListedUsernamesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllBlackListedUsernamesQuery>({ query: GetAllBlackListedUsernamesDocument, ...options });
};
export const GetAlLCategoriesDocument = gql`
    query GetAlLCategories($options: ConnectionArgs!) {
  getAllCategories(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
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
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAlLCategoriesQuery(options: Omit<Urql.UseQueryArgs<GetAlLCategoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAlLCategoriesQuery>({ query: GetAlLCategoriesDocument, ...options });
};
export const GetAllDirectoriesDocument = gql`
    query GetAllDirectories($options: ConnectionArgs!) {
  getAllDirectories(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        username {
          id
          username
        }
        profilePhotoUrl
        displayName
        city
        state
        country
        verificationStatus
        createdAt
        user {
          id
          email
        }
        category {
          id
          categoryName
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllDirectoriesQuery(options: Omit<Urql.UseQueryArgs<GetAllDirectoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllDirectoriesQuery>({ query: GetAllDirectoriesDocument, ...options });
};
export const GetAllDiscountsDocument = gql`
    query GetAllDiscounts($options: ConnectionArgs!) {
  getAllDiscounts(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        code
        discount
        quantity
        expireDate
        createdAt
        updatedAt
        referrer {
          id
          email
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllDiscountsQuery(options: Omit<Urql.UseQueryArgs<GetAllDiscountsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllDiscountsQuery>({ query: GetAllDiscountsDocument, ...options });
};
export const GetAllDismissedReportsDocument = gql`
    query GetAllDismissedReports($options: ConnectionArgs!) {
  getAllDismissedReports(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        firstName
        lastName
        email
        reportedUrl
        reporter {
          id
          email
        }
        createdAt
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllDismissedReportsQuery(options: Omit<Urql.UseQueryArgs<GetAllDismissedReportsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllDismissedReportsQuery>({ query: GetAllDismissedReportsDocument, ...options });
};
export const GetAllDismissedSupportsDocument = gql`
    query GetAllDismissedSupports($options: ConnectionArgs!) {
  getAllDismissedSupports(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        fullName
        email
        phoneNumber
        company
        subject
        createdAt
        user {
          id
          email
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllDismissedSupportsQuery(options: Omit<Urql.UseQueryArgs<GetAllDismissedSupportsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllDismissedSupportsQuery>({ query: GetAllDismissedSupportsDocument, ...options });
};
export const GetAllEmbedsDocument = gql`
    query GetAllEmbeds($options: ConnectionArgs!) {
  getAllEmbeds(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        linkTitle
        linkImageUrl
        url
        shortenedUrl
        createdAt
        user {
          id
          email
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllEmbedsQuery(options: Omit<Urql.UseQueryArgs<GetAllEmbedsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllEmbedsQuery>({ query: GetAllEmbedsDocument, ...options });
};
export const GetAllLinksDocument = gql`
    query GetAllLinks($options: ConnectionArgs!) {
  getAllLinks(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        linkTitle
        linkImageUrl
        url
        shortenedUrl
        createdAt
        user {
          id
          email
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllLinksQuery(options: Omit<Urql.UseQueryArgs<GetAllLinksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllLinksQuery>({ query: GetAllLinksDocument, ...options });
};
export const GetAllPendingReportsDocument = gql`
    query GetAllPendingReports($options: ConnectionArgs!) {
  getAllPendingReports(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        firstName
        lastName
        email
        reportedUrl
        reporter {
          id
          email
        }
        createdAt
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllPendingReportsQuery(options: Omit<Urql.UseQueryArgs<GetAllPendingReportsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllPendingReportsQuery>({ query: GetAllPendingReportsDocument, ...options });
};
export const GetAllPendingSupportsDocument = gql`
    query GetAllPendingSupports($options: ConnectionArgs!) {
  getAllPendingSupports(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        fullName
        email
        phoneNumber
        company
        subject
        createdAt
        user {
          id
          email
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllPendingSupportsQuery(options: Omit<Urql.UseQueryArgs<GetAllPendingSupportsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllPendingSupportsQuery>({ query: GetAllPendingSupportsDocument, ...options });
};
export const GetAllPendingVerificationsDocument = gql`
    query GetAllPendingVerifications($options: ConnectionArgs!) {
  getAllPendingVerifications(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        verifiedGovernmentId
        verifiedEmail
        verifiedPhoneNumber
        verifiedWorkEmail
        username
        firstName
        lastName
        mobileNumber
        workNumber
        email
        websiteLink
        createdAt
        user {
          id
          email
        }
        biolink {
          id
          username {
            id
            username
          }
        }
        category {
          id
          categoryName
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllPendingVerificationsQuery(options: Omit<Urql.UseQueryArgs<GetAllPendingVerificationsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllPendingVerificationsQuery>({ query: GetAllPendingVerificationsDocument, ...options });
};
export const GetAllPlansDocument = gql`
    query GetAllPlans {
  getAllPlans {
    errors {
      ...ReceivedErrors
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
    ${ReceivedErrorsFragmentDoc}`;

export function useGetAllPlansQuery(options: Omit<Urql.UseQueryArgs<GetAllPlansQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllPlansQuery>({ query: GetAllPlansDocument, ...options });
};
export const GetAllPremiumUsernamesDocument = gql`
    query GetAllPremiumUsernames($options: ConnectionArgs!) {
  getAllPremiumUsernames(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        username
        expireDate
        createdAt
        updatedAt
        owner {
          id
          email
        }
        biolink {
          id
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllPremiumUsernamesQuery(options: Omit<Urql.UseQueryArgs<GetAllPremiumUsernamesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllPremiumUsernamesQuery>({ query: GetAllPremiumUsernamesDocument, ...options });
};
export const GetAllReferralsDocument = gql`
    query GetAllReferrals($options: ConnectionArgs!) {
  getAllReferrals(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        code
        discount
        quantity
        expireDate
        createdAt
        updatedAt
        referrer {
          id
          email
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllReferralsQuery(options: Omit<Urql.UseQueryArgs<GetAllReferralsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllReferralsQuery>({ query: GetAllReferralsDocument, ...options });
};
export const GetAllRejectedVerificationsDocument = gql`
    query GetAllRejectedVerifications($options: ConnectionArgs!) {
  getAllRejectedVerifications(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        verifiedGovernmentId
        verifiedEmail
        verifiedPhoneNumber
        verifiedWorkEmail
        username
        firstName
        lastName
        mobileNumber
        workNumber
        email
        websiteLink
        createdAt
        user {
          id
          email
        }
        biolink {
          id
          username {
            id
            username
          }
        }
        category {
          id
          categoryName
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllRejectedVerificationsQuery(options: Omit<Urql.UseQueryArgs<GetAllRejectedVerificationsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllRejectedVerificationsQuery>({ query: GetAllRejectedVerificationsDocument, ...options });
};
export const GetAllResolvedReportsDocument = gql`
    query GetAllResolvedReports($options: ConnectionArgs!) {
  getAllResolvedReports(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        firstName
        lastName
        email
        reportedUrl
        reporter {
          id
          email
        }
        createdAt
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllResolvedReportsQuery(options: Omit<Urql.UseQueryArgs<GetAllResolvedReportsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllResolvedReportsQuery>({ query: GetAllResolvedReportsDocument, ...options });
};
export const GetAllResolvedSupportsDocument = gql`
    query GetAllResolvedSupports($options: ConnectionArgs!) {
  getAllResolvedSupports(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        fullName
        email
        phoneNumber
        company
        subject
        createdAt
        user {
          id
          email
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllResolvedSupportsQuery(options: Omit<Urql.UseQueryArgs<GetAllResolvedSupportsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllResolvedSupportsQuery>({ query: GetAllResolvedSupportsDocument, ...options });
};
export const GetAllStripePaymentsDocument = gql`
    query GetAllStripePayments($options: ConnectionArgs!) {
  getAllStripePayments(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        stripeInvoiceNumber
        stripeAmountDue
        stripeAmountPaid
        stripeAmountRemaining
        stripeDiscount
        stripeChargeId
        stripeInvoiceCreated
        stripeCustomerId
        stripeCustomerEmail
        stripeCustomerName
        stripeCustomerPhone
        stripePriceId
        stripeSubscriptionId
        stripeStatus
        user {
          id
          email
        }
        createdAt
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllStripePaymentsQuery(options: Omit<Urql.UseQueryArgs<GetAllStripePaymentsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllStripePaymentsQuery>({ query: GetAllStripePaymentsDocument, ...options });
};
export const GetAllTaxesDocument = gql`
    query GetAllTaxes($options: ConnectionArgs!) {
  getAllTaxes(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        internalName
        name
        value
        valueType
        type
        billingFor
        createdAt
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllTaxesQuery(options: Omit<Urql.UseQueryArgs<GetAllTaxesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllTaxesQuery>({ query: GetAllTaxesDocument, ...options });
};
export const GetAllTrademarkUsernamesDocument = gql`
    query GetAllTrademarkUsernames($options: ConnectionArgs!) {
  getAllTrademarkUsernames(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        username
        expireDate
        createdAt
        updatedAt
        owner {
          id
          email
        }
        biolink {
          id
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllTrademarkUsernamesQuery(options: Omit<Urql.UseQueryArgs<GetAllTrademarkUsernamesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllTrademarkUsernamesQuery>({ query: GetAllTrademarkUsernamesDocument, ...options });
};
export const GetAllUsernamesDocument = gql`
    query GetAllUsernames($options: ConnectionArgs!) {
  getAllUsernames(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        username
        expireDate
        createdAt
        updatedAt
        owner {
          id
          email
        }
        biolink {
          id
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllUsernamesQuery(options: Omit<Urql.UseQueryArgs<GetAllUsernamesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllUsernamesQuery>({ query: GetAllUsernamesDocument, ...options });
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
        lastActiveTill
        language
        lastIPAddress
        country
        plan {
          name
        }
        createdAt
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
export const GetAllVerifiedVerificationsDocument = gql`
    query GetAllVerifiedVerifications($options: ConnectionArgs!) {
  getAllVerifiedVerifications(options: $options) {
    errors {
      ...ReceivedErrors
    }
    pageInfo {
      ...PageInfo
    }
    edges {
      node {
        id
        verifiedGovernmentId
        verifiedEmail
        verifiedPhoneNumber
        verifiedWorkEmail
        username
        firstName
        lastName
        mobileNumber
        workNumber
        email
        websiteLink
        createdAt
        user {
          id
          email
        }
        biolink {
          id
          username {
            id
            username
          }
        }
        category {
          id
          categoryName
        }
      }
      cursor
    }
  }
}
    ${ReceivedErrorsFragmentDoc}
${PageInfoFragmentDoc}`;

export function useGetAllVerifiedVerificationsQuery(options: Omit<Urql.UseQueryArgs<GetAllVerifiedVerificationsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllVerifiedVerificationsQuery>({ query: GetAllVerifiedVerificationsDocument, ...options });
};
export const GetBiolinkDocument = gql`
    query GetBiolink($id: String!) {
  getBiolink(id: $id) {
    errors {
      ...ReceivedErrors
    }
    biolink {
      id
      profilePhotoUrl
      coverPhotoUrl
      displayName
      city
      state
      country
      latitude
      longitude
      bio
      settings {
        enableDarkMode
        showEmail
        email
        showPhone
        phone
        enableColoredContactButtons
        addedToDirectory
        directoryBio
        enableColoredSocialMediaIcons
        socialAccountStyleType
        socialAccounts {
          platform
          icon
          link
        }
        enableFacebookPixel
        facebookPixelId
        enableGoogleAnalytics
        googleAnalyticsCode
        enableEmailCapture
        emailCaptureId
        enableUtmParameters
        utmSource
        utmMedium
        utmCampaign
        blockSearchEngineIndexing
        pageTitle
        metaDescription
        opengraphImageUrl
        removeDefaultBranding
        enableCustomBranding
        customBrandingName
        customBrandingUrl
        enablePasswordProtection
        enableSensitiveContentWarning
      }
      verificationStatus
      verifiedGovernmentId
      verifiedEmail
      verifiedPhoneNumber
      verifiedWorkEmail
      featured
      changedUsername
      createdAt
      username {
        id
        username
      }
      user {
        id
        email
      }
      category {
        id
        categoryName
      }
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetBiolinkQuery(options: Omit<Urql.UseQueryArgs<GetBiolinkQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetBiolinkQuery>({ query: GetBiolinkDocument, ...options });
};
export const GetBlackListDocument = gql`
    query GetBlackList($blackListId: Int!) {
  getBlackList(blackListId: $blackListId) {
    errors {
      ...ReceivedErrors
    }
    blackList {
      id
      blacklistType
      keyword
      reason
      createdAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetBlackListQuery(options: Omit<Urql.UseQueryArgs<GetBlackListQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetBlackListQuery>({ query: GetBlackListDocument, ...options });
};
export const GetBusinessSettingsDocument = gql`
    query GetBusinessSettings {
  getBusinessSettings {
    errors {
      ...ReceivedErrors
    }
    settings {
      enableInvoice
      name
      address
      city
      country
      zipCode
      email
      phone
      taxType
      taxId
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetBusinessSettingsQuery(options: Omit<Urql.UseQueryArgs<GetBusinessSettingsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetBusinessSettingsQuery>({ query: GetBusinessSettingsDocument, ...options });
};
export const GetCaptchaSettingsDocument = gql`
    query GetCaptchaSettings {
  getCaptchaSettings {
    errors {
      ...ReceivedErrors
    }
    settings {
      captchaType
      enableCaptchaOnLoginPage
      enableCaptchaOnRegisterPage
      enableCaptchaOnLostPasswordPage
      enableCaptchaOnResendActivationPage
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetCaptchaSettingsQuery(options: Omit<Urql.UseQueryArgs<GetCaptchaSettingsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetCaptchaSettingsQuery>({ query: GetCaptchaSettingsDocument, ...options });
};
export const GetCategoryDocument = gql`
    query GetCategory($id: Int!) {
  getCategory(id: $id) {
    errors {
      ...ReceivedErrors
    }
    category {
      id
      categoryName
      createdAt
      updatedAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetCategoryQuery(options: Omit<Urql.UseQueryArgs<GetCategoryQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetCategoryQuery>({ query: GetCategoryDocument, ...options });
};
export const GetCodeDocument = gql`
    query GetCode($codeId: String!) {
  getCode(codeId: $codeId) {
    errors {
      ...ReceivedErrors
    }
    code {
      id
      type
      code
      discount
      quantity
      expireDate
      createdAt
      updatedAt
      referrer {
        id
        email
      }
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetCodeQuery(options: Omit<Urql.UseQueryArgs<GetCodeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetCodeQuery>({ query: GetCodeDocument, ...options });
};
export const GetDashboardTotalCountsDocument = gql`
    query GetDashboardTotalCounts {
  getDashboardTotalCounts {
    errors {
      ...ReceivedErrors
    }
    result {
      totalBiolinkPageViewsTracked
      totalBiolinks
      totalEarned
      totalLinkClickViewsTracked
      totalReferralCodes
      totalShortenedLinks
      totalTransactionsMade
      totalUsers
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetDashboardTotalCountsQuery(options: Omit<Urql.UseQueryArgs<GetDashboardTotalCountsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetDashboardTotalCountsQuery>({ query: GetDashboardTotalCountsDocument, ...options });
};
export const GetEmailSettingsDocument = gql`
    query GetEmailSettings {
  getEmailSettings {
    errors {
      ...ReceivedErrors
    }
    settings {
      fromName
      fromEmail
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetEmailSettingsQuery(options: Omit<Urql.UseQueryArgs<GetEmailSettingsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetEmailSettingsQuery>({ query: GetEmailSettingsDocument, ...options });
};
export const GetFacebookSettingsDocument = gql`
    query GetFacebookSettings {
  getFacebookSettings {
    errors {
      ...ReceivedErrors
    }
    settings {
      enableFacebookLogin
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetFacebookSettingsQuery(options: Omit<Urql.UseQueryArgs<GetFacebookSettingsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetFacebookSettingsQuery>({ query: GetFacebookSettingsDocument, ...options });
};
export const GetLinkSettingsDocument = gql`
    query GetLinkSettings {
  getLinkSettings {
    errors {
      ...ReceivedErrors
    }
    settings {
      branding
      enableLinkShortenerSystem
      enablePhishtank
      enableGoogleSafeBrowsing
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetLinkSettingsQuery(options: Omit<Urql.UseQueryArgs<GetLinkSettingsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetLinkSettingsQuery>({ query: GetLinkSettingsDocument, ...options });
};
export const GetMainSettingsDocument = gql`
    query GetMainSettings {
  getMainSettings {
    errors {
      ...ReceivedErrors
    }
    settings {
      title
      defaultLanguage
      defaultTimezone
      enableEmailConfirmation
      enableNewUserRegistration
      termsAndConditionsUrl
      privacyPolicyUrl
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetMainSettingsQuery(options: Omit<Urql.UseQueryArgs<GetMainSettingsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMainSettingsQuery>({ query: GetMainSettingsDocument, ...options });
};
export const GetNotificationSettingsDocument = gql`
    query GetNotificationSettings {
  getNotificationSettings {
    errors {
      ...ReceivedErrors
    }
    settings {
      emailsToBeNotified
      emailOnNewUser
      emailOnNewPayment
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetNotificationSettingsQuery(options: Omit<Urql.UseQueryArgs<GetNotificationSettingsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetNotificationSettingsQuery>({ query: GetNotificationSettingsDocument, ...options });
};
export const GetPaymentDocument = gql`
    query GetPayment($paymentId: String!) {
  getPayment(paymentId: $paymentId) {
    errors {
      ...ReceivedErrors
    }
    payment {
      id
      stripeInvoiceNumber
      paymentType
      stripeAmountDue
      stripeAmountPaid
      stripeAmountRemaining
      stripeChargeId
      stripeInvoiceCreated
      stripePaymentCurrency
      stripePriceId
      stripeDiscount
      stripeStatus
      stripeInvoicePdfUrl
      stripeInvoiceUrl
      stripeCustomerId
      stripeCustomerName
      stripeCustomerEmail
      stripeCustomerPhone
      stripeCustomerAddress
      stripeCustomerShipping
      stripeSubscriptionId
      stripePeriodStart
      stripePeriodEnd
      createdAt
      user {
        id
        email
      }
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetPaymentQuery(options: Omit<Urql.UseQueryArgs<GetPaymentQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPaymentQuery>({ query: GetPaymentDocument, ...options });
};
export const GetPaymentSettingsDocument = gql`
    query GetPaymentSettings {
  getPaymentSettings {
    errors {
      ...ReceivedErrors
    }
    settings {
      enablePaymentSystem
      enabledPaymentType
      brandName
      currency
      enableDiscountOrRedeemableCode
      enableTaxesAndBilling
      enablePaypal
      enableStripe
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetPaymentSettingsQuery(options: Omit<Urql.UseQueryArgs<GetPaymentSettingsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPaymentSettingsQuery>({ query: GetPaymentSettingsDocument, ...options });
};
export const GetPlanDocument = gql`
    query GetPlan($id: Int!) {
  getPlan(id: $id) {
    errors {
      ...ReceivedErrors
    }
    plan {
      id
      name
      monthlyPrice
      monthlyPriceStripeId
      annualPrice
      annualPriceStripeId
      settings {
        totalBiolinksLimit
        totalLinksLimit
        totalCustomDomainLimit
        darkModeEnabled
        addedToDirectoryEnabled
        customBackHalfEnabled
        noAdsEnabled
        removableBrandingEnabled
        customFooterBrandingEnabled
        coloredLinksEnabled
        googleAnalyticsEnabled
        facebookPixelEnabled
        emailCaptureEnabled
        verifiedCheckmarkEnabled
        linksSchedulingEnabled
        seoEnabled
        socialEnabled
        utmParametersEnabled
        passwordProtectionEnabled
        sensitiveContentWarningEnabled
        leapLinkEnabled
        donationLinkEnabled
      }
      visibilityStatus
      createdAt
      updatedAt
      deletedAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetPlanQuery(options: Omit<Urql.UseQueryArgs<GetPlanQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPlanQuery>({ query: GetPlanDocument, ...options });
};
export const GetReportDocument = gql`
    query GetReport($reportId: String!) {
  getReport(reportId: $reportId) {
    errors {
      ...ReceivedErrors
    }
    report {
      id
      firstName
      lastName
      email
      reportedUrl
      description
      status
      createdAt
      reporter {
        id
        email
      }
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetReportQuery(options: Omit<Urql.UseQueryArgs<GetReportQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetReportQuery>({ query: GetReportDocument, ...options });
};
export const GetSocialSettingsDocument = gql`
    query GetSocialSettings {
  getSocialSettings {
    errors {
      ...ReceivedErrors
    }
    settings {
      youtube
      facebook
      twitter
      instagram
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetSocialSettingsQuery(options: Omit<Urql.UseQueryArgs<GetSocialSettingsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetSocialSettingsQuery>({ query: GetSocialSettingsDocument, ...options });
};
export const GetSupportDocument = gql`
    query GetSupport($supportId: String!) {
  getSupport(supportId: $supportId) {
    errors {
      ...ReceivedErrors
    }
    support {
      id
      fullName
      email
      phoneNumber
      company
      subject
      message
      status
      supportReply
      createdAt
      updatedAt
      user {
        id
        email
      }
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetSupportQuery(options: Omit<Urql.UseQueryArgs<GetSupportQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetSupportQuery>({ query: GetSupportDocument, ...options });
};
export const GetTaxDocument = gql`
    query GetTax($taxId: Int!) {
  getTax(taxId: $taxId) {
    errors {
      ...ReceivedErrors
    }
    tax {
      id
      internalName
      name
      description
      value
      valueType
      type
      billingFor
      countries
      createdAt
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetTaxQuery(options: Omit<Urql.UseQueryArgs<GetTaxQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetTaxQuery>({ query: GetTaxDocument, ...options });
};
export const GetUserDocument = gql`
    query GetUser($id: String!) {
  getUser(id: $id) {
    errors {
      ...ReceivedErrors
    }
    user {
      id
      email
      emailVerifiedAt
      billing {
        type
        name
        address1
        address2
        city
        state
        country
        zip
        phone
      }
      lastActiveTill
      planExpirationDate
      planTrialDone
      language
      timezone
      lastIPAddress
      lastUserAgent
      country
      totalLogin
      createdAt
      updatedAt
      deletedAt
      biolinks {
        id
        username {
          id
          username
        }
        profilePhotoUrl
        displayName
      }
      activities {
        id
        ipAddress
        cityName
        countryCode
        browserName
        browserLanguage
        deviceType
        osName
        description
        createdAt
      }
      links {
        id
        linkType
        linkTitle
        url
        shortenedUrl
        note
        createdAt
        updatedAt
      }
      plan {
        id
        name
      }
      adminRole {
        id
        roleName
      }
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserQuery>({ query: GetUserDocument, ...options });
};
export const GetUserSummaryCountsDocument = gql`
    query GetUserSummaryCounts($userId: String!) {
  getUserSummaryCounts(userId: $userId) {
    errors {
      ...ReceivedErrors
    }
    result {
      totalBiolinks
      totalShortenedLinks
      totalReferralCodes
      totalPayed
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetUserSummaryCountsQuery(options: Omit<Urql.UseQueryArgs<GetUserSummaryCountsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserSummaryCountsQuery>({ query: GetUserSummaryCountsDocument, ...options });
};
export const GetUsernameDocument = gql`
    query GetUsername($usernameId: String!) {
  getUsername(usernameId: $usernameId) {
    errors {
      ...ReceivedErrors
    }
    username {
      id
      username
      premiumType
      expireDate
      createdAt
      owner {
        id
        email
      }
      biolink {
        id
        profilePhotoUrl
        displayName
      }
    }
  }
}
    ${ReceivedErrorsFragmentDoc}`;

export function useGetUsernameQuery(options: Omit<Urql.UseQueryArgs<GetUsernameQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUsernameQuery>({ query: GetUsernameDocument, ...options });
};
export const GetVerificationDocument = gql`
    query GetVerification($verificationId: String!) {
  getVerification(verificationId: $verificationId) {
    errors {
      errorCode
      field
      message
    }
    verification {
      id
      firstName
      lastName
      username
      email
      mobileNumber
      workNumber
      websiteLink
      instagramUrl
      twitterUrl
      linkedinUrl
      photoIdUrl
      businessDocumentUrl
      otherDocumentsUrl
      verificationStatus
      verifiedGovernmentId
      verifiedEmail
      verifiedPhoneNumber
      verifiedWorkEmail
      createdAt
      user {
        id
        email
      }
      biolink {
        id
        profilePhotoUrl
        username {
          id
          username
        }
      }
      category {
        id
        categoryName
      }
    }
  }
}
    `;

export function useGetVerificationQuery(options: Omit<Urql.UseQueryArgs<GetVerificationQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetVerificationQuery>({ query: GetVerificationDocument, ...options });
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