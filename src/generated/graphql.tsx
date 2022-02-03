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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AccessAndRefreshToken = {
  __typename?: 'AccessAndRefreshToken';
  access?: Maybe<AuthToken>;
  refresh?: Maybe<AuthToken>;
};

export type Address = {
  __typename?: 'Address';
  address_line_1?: Maybe<Scalars['String']>;
  address_line_2?: Maybe<Scalars['String']>;
  admin_area_2?: Maybe<Scalars['String']>;
  admin_area_1?: Maybe<Scalars['String']>;
  postal_code?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
};

export type AdminRole = {
  __typename?: 'AdminRole';
  id?: Maybe<Scalars['String']>;
  roleName?: Maybe<Scalars['String']>;
  roleDescription?: Maybe<Scalars['String']>;
  roleSettings?: Maybe<Array<RoleSettings>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
};

export type AdsSettingsInput = {
  header?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  biolinkPageHeader?: Maybe<Scalars['String']>;
  biolinkPageFooter?: Maybe<Scalars['String']>;
};

export type AdsSystemSettings = {
  __typename?: 'AdsSystemSettings';
  header?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  biolinkPageHeader?: Maybe<Scalars['String']>;
  biolinkPageFooter?: Maybe<Scalars['String']>;
};

export type Amount = {
  __typename?: 'Amount';
  currency_code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type AuthToken = {
  __typename?: 'AuthToken';
  token?: Maybe<Scalars['String']>;
  expires?: Maybe<Scalars['Int']>;
};

export type AutomaticTax = {
  __typename?: 'AutomaticTax';
  enabled?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['String']>;
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
  category?: Maybe<Category>;
};

export type BiolinkAdminInput = {
  bio?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  changedUsername?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  coverPhoto?: Maybe<Scalars['Upload']>;
  displayName?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  profilePhoto?: Maybe<Scalars['Upload']>;
  removeDefaultBranding?: Maybe<Scalars['Boolean']>;
  enableCustomBranding?: Maybe<Scalars['Boolean']>;
  customBrandingName?: Maybe<Scalars['String']>;
  customBrandingUrl?: Maybe<Scalars['String']>;
  showEmail?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  showPhone?: Maybe<Scalars['Boolean']>;
  phone?: Maybe<Scalars['String']>;
  enableColoredContactButtons?: Maybe<Scalars['Boolean']>;
  enableDarkMode?: Maybe<Scalars['Boolean']>;
  addedToDirectory?: Maybe<Scalars['Boolean']>;
  directoryBio?: Maybe<Scalars['String']>;
  paypalLink?: Maybe<Scalars['String']>;
  venmoLink?: Maybe<Scalars['String']>;
  payoneerLink?: Maybe<Scalars['String']>;
  enableFacebookPixel?: Maybe<Scalars['Boolean']>;
  facebookPixelId?: Maybe<Scalars['String']>;
  enableGoogleAnalytics?: Maybe<Scalars['Boolean']>;
  googleAnalyticsCode?: Maybe<Scalars['String']>;
  enableEmailCapture?: Maybe<Scalars['Boolean']>;
  emailCaptureId?: Maybe<Scalars['String']>;
  enablePasswordProtection?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  enableSensitiveContentWarning?: Maybe<Scalars['Boolean']>;
  blockSearchEngineIndexing?: Maybe<Scalars['Boolean']>;
  pageTitle?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  opengraphImageUrl?: Maybe<Scalars['String']>;
  enableColoredSocialMediaIcons?: Maybe<Scalars['Boolean']>;
  socialAccountStyleType?: Maybe<Scalars['String']>;
  enableUtmParameters?: Maybe<Scalars['Boolean']>;
  utmSource?: Maybe<Scalars['String']>;
  utmMedium?: Maybe<Scalars['String']>;
  utmCampaign?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  verificationStatus?: Maybe<Scalars['String']>;
  verifiedEmail?: Maybe<Scalars['Boolean']>;
  verifiedGovernmentId?: Maybe<Scalars['Boolean']>;
  verifiedPhoneNumber?: Maybe<Scalars['Boolean']>;
  verifiedWorkEmail?: Maybe<Scalars['Boolean']>;
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
  id?: Maybe<Scalars['String']>;
  blacklistType?: Maybe<Scalars['String']>;
  keyword?: Maybe<Scalars['String']>;
  reason?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
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

export type CaptchaSystemSettings = {
  __typename?: 'CaptchaSystemSettings';
  captchaType?: Maybe<Scalars['String']>;
  enableCaptchaOnLoginPage?: Maybe<Scalars['Boolean']>;
  enableCaptchaOnRegisterPage?: Maybe<Scalars['Boolean']>;
  enableCaptchaOnLostPasswordPage?: Maybe<Scalars['Boolean']>;
  enableCaptchaOnResendActivationPage?: Maybe<Scalars['Boolean']>;
};

export type Capture = {
  __typename?: 'Capture';
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  amount?: Maybe<Amount>;
  seller_protection?: Maybe<SellerProtection>;
  final_capture?: Maybe<Scalars['Boolean']>;
  disbursement_mode?: Maybe<Scalars['String']>;
  seller_receivable_breakdown?: Maybe<SellerReceivableBreakdown>;
  create_time?: Maybe<Scalars['DateTime']>;
  update_time?: Maybe<Scalars['DateTime']>;
  links?: Maybe<Array<PaypalLink>>;
};

export type Category = {
  __typename?: 'Category';
  id?: Maybe<Scalars['String']>;
  categoryName?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
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

export type ConnectionArgs = {
  beforeCursor?: Maybe<Scalars['String']>;
  afterCursor?: Maybe<Scalars['String']>;
  /** Search query */
  query?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Float']>;
  order?: Maybe<Scalars['String']>;
};

export type Cursor = {
  __typename?: 'Cursor';
  beforeCursor?: Maybe<Scalars['String']>;
  afterCursor?: Maybe<Scalars['String']>;
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

export type Data = {
  __typename?: 'Data';
  id?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  discount_amounts?: Maybe<Array<Scalars['String']>>;
  discountable?: Maybe<Scalars['Boolean']>;
  discounts?: Maybe<Array<Scalars['String']>>;
  livemode?: Maybe<Scalars['Boolean']>;
  period?: Maybe<Period>;
  plan?: Maybe<StripePlan>;
  price?: Maybe<Price>;
  proration?: Maybe<Scalars['Boolean']>;
  quantity?: Maybe<Scalars['Int']>;
  subscription?: Maybe<Scalars['String']>;
  subscription_item?: Maybe<Scalars['String']>;
  tax_amounts?: Maybe<Array<Scalars['String']>>;
  tax_rates?: Maybe<Array<Scalars['String']>>;
  type?: Maybe<Scalars['String']>;
};


export type EarningChartResponse = {
  __typename?: 'EarningChartResponse';
  result?: Maybe<Array<EarningChartValue>>;
};

export type EarningChartValue = {
  __typename?: 'EarningChartValue';
  earned?: Maybe<Scalars['Int']>;
  date?: Maybe<Scalars['String']>;
};

export type EmailInput = {
  email: Scalars['String'];
};

export type EmailSettingsInput = {
  fromName?: Maybe<Scalars['String']>;
  fromEmail?: Maybe<Scalars['String']>;
};

export type EmailSystemSettings = {
  __typename?: 'EmailSystemSettings';
  fromName?: Maybe<Scalars['String']>;
  fromEmail?: Maybe<Scalars['String']>;
};

export type FacebookSettingsInput = {
  enableFacebookLogin?: Maybe<Scalars['Boolean']>;
};

export type FacebookSystemSettings = {
  __typename?: 'FacebookSystemSettings';
  enableFacebookLogin?: Maybe<Scalars['Boolean']>;
};

export type GrossAmount = {
  __typename?: 'GrossAmount';
  currency_code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Lines = {
  __typename?: 'Lines';
  object?: Maybe<Scalars['String']>;
  data?: Maybe<Array<Data>>;
  has_more?: Maybe<Scalars['Boolean']>;
  total_count?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
};

export type Link = {
  __typename?: 'Link';
  id?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  linkTitle?: Maybe<Scalars['String']>;
  linkColor?: Maybe<Scalars['String']>;
  linkImageUrl?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  iconColorful?: Maybe<Scalars['String']>;
  iconMinimal?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
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

export type LinkAdminInput = {
  linkType?: Maybe<Scalars['String']>;
  biolinkId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  linkTitle?: Maybe<Scalars['String']>;
  linkColor?: Maybe<Scalars['String']>;
  linkImage?: Maybe<Scalars['Upload']>;
  note?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  enablePasswordProtection?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  platform?: Maybe<Scalars['String']>;
};

export type LinkSettingsInput = {
  branding?: Maybe<Scalars['String']>;
  enableLinkShortenerSystem?: Maybe<Scalars['Boolean']>;
  enablePhishtank?: Maybe<Scalars['Boolean']>;
  enableGoogleSafeBrowsing?: Maybe<Scalars['Boolean']>;
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
  registerUser: UserWithTokens;
  login: UserWithTokens;
  logout?: Maybe<Scalars['Boolean']>;
  refreshToken: AccessAndRefreshToken;
  sendForgotPasswordEmail?: Maybe<Scalars['Boolean']>;
  verifyForgotPassword?: Maybe<Scalars['Boolean']>;
  sendEmailForVerification?: Maybe<Scalars['Boolean']>;
  verifyUserEmailByActivationCode?: Maybe<Scalars['Boolean']>;
  createAdminRole: AdminRole;
  editAdminRole: AdminRole;
  deleteAdminRole: AdminRole;
  loginAdmin: UserWithTokens;
  createBiolink: Biolink;
  editBiolink: Biolink;
  removeBiolink: Biolink;
  addBlackList?: Maybe<BlackList>;
  editBlackList?: Maybe<BlackList>;
  deleteBlackList?: Maybe<BlackList>;
  createCategory?: Maybe<Category>;
  editCategory?: Maybe<Category>;
  deleteCategory?: Maybe<Category>;
  addCode?: Maybe<Code>;
  editCode?: Maybe<Code>;
  deleteCode?: Maybe<Code>;
  createLink?: Maybe<Link>;
  editLink?: Maybe<Link>;
  deleteLink?: Maybe<Link>;
  createPlan: Plan;
  editPlan: Plan;
  deletePlan: Plan;
  changeReportStatus?: Maybe<Report>;
  editAdsSettings: Settings;
  editBusinessSettings: Settings;
  editCaptchaSettings: Settings;
  editEmailSettings: Settings;
  editFacebookSettings: Settings;
  editLinkSettings: Settings;
  editMainSettings: Settings;
  editNotificationSettings: Settings;
  editPaymentSettings: Settings;
  editSocialSettings: Settings;
  replyToSupport?: Maybe<Support>;
  addTax?: Maybe<Tax>;
  editTax?: Maybe<Tax>;
  deleteTax?: Maybe<Tax>;
  addNewUser?: Maybe<User>;
  editUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
  addUsername?: Maybe<Username>;
  editUsername?: Maybe<Username>;
  deleteUsername?: Maybe<Username>;
  changeVerificationStatus?: Maybe<Verification>;
  deleteVerification?: Maybe<Verification>;
};


export type MutationRegisterUserArgs = {
  options: RegisterInput;
};


export type MutationLoginArgs = {
  options: LoginInput;
};


export type MutationSendForgotPasswordEmailArgs = {
  options: EmailInput;
};


export type MutationVerifyForgotPasswordArgs = {
  forgotPasswordToken: Scalars['String'];
  options: PasswordInput;
};


export type MutationVerifyUserEmailByActivationCodeArgs = {
  emailActivationCode: Scalars['String'];
};


export type MutationCreateAdminRoleArgs = {
  options: NewAdminRoleInput;
};


export type MutationEditAdminRoleArgs = {
  options: NewAdminRoleInput;
  id: Scalars['String'];
};


export type MutationDeleteAdminRoleArgs = {
  id: Scalars['String'];
};


export type MutationLoginAdminArgs = {
  options: LoginInput;
};


export type MutationCreateBiolinkArgs = {
  options: BiolinkAdminInput;
};


export type MutationEditBiolinkArgs = {
  options: BiolinkAdminInput;
  id: Scalars['String'];
};


export type MutationRemoveBiolinkArgs = {
  id: Scalars['String'];
};


export type MutationAddBlackListArgs = {
  options: NewBlackListInput;
};


export type MutationEditBlackListArgs = {
  options: NewBlackListInput;
  blackListId: Scalars['String'];
};


export type MutationDeleteBlackListArgs = {
  blackListId: Scalars['String'];
};


export type MutationCreateCategoryArgs = {
  options: NewCategoryInput;
};


export type MutationEditCategoryArgs = {
  options: NewCategoryInput;
  id: Scalars['String'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String'];
};


export type MutationAddCodeArgs = {
  options: NewCodeInput;
};


export type MutationEditCodeArgs = {
  options: NewCodeInput;
  codeId: Scalars['String'];
};


export type MutationDeleteCodeArgs = {
  codeId: Scalars['String'];
};


export type MutationCreateLinkArgs = {
  options: LinkAdminInput;
};


export type MutationEditLinkArgs = {
  options: LinkAdminInput;
  linkId: Scalars['String'];
};


export type MutationDeleteLinkArgs = {
  linkId: Scalars['String'];
};


export type MutationCreatePlanArgs = {
  options: PlanInput;
};


export type MutationEditPlanArgs = {
  options: PlanInput;
  id: Scalars['String'];
};


export type MutationDeletePlanArgs = {
  id: Scalars['String'];
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


export type MutationReplyToSupportArgs = {
  options: SupportAdminInput;
  supportId: Scalars['String'];
};


export type MutationAddTaxArgs = {
  options: NewTaxInput;
};


export type MutationEditTaxArgs = {
  options: NewTaxInput;
  taxId: Scalars['String'];
};


export type MutationDeleteTaxArgs = {
  taxId: Scalars['String'];
};


export type MutationAddNewUserArgs = {
  options: NewUserInput;
};


export type MutationEditUserArgs = {
  options: NewUserInput;
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationAddUsernameArgs = {
  options: NewUsernameInput;
};


export type MutationEditUsernameArgs = {
  options: NewUsernameInput;
  usernameId: Scalars['String'];
};


export type MutationDeleteUsernameArgs = {
  usernameId: Scalars['String'];
};


export type MutationChangeVerificationStatusArgs = {
  options: VerificationStatusInput;
  verificationId: Scalars['String'];
};


export type MutationDeleteVerificationArgs = {
  verificationId: Scalars['String'];
};

export type Name = {
  __typename?: 'Name';
  given_name?: Maybe<Scalars['String']>;
  surname?: Maybe<Scalars['String']>;
};

export type NetAmount = {
  __typename?: 'NetAmount';
  currency_code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
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
  featured?: Maybe<Scalars['Boolean']>;
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
  adminRoleId?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  billingType?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  planId?: Maybe<Scalars['String']>;
  planExpirationDate?: Maybe<Scalars['DateTime']>;
  planTrialDone?: Maybe<Scalars['Boolean']>;
  planType?: Maybe<Scalars['String']>;
  registeredByCodeId?: Maybe<Scalars['String']>;
  usedReferralsToPurchasePlan?: Maybe<Scalars['Boolean']>;
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

export type NotificationSystemSettings = {
  __typename?: 'NotificationSystemSettings';
  emailsToBeNotified?: Maybe<Array<Scalars['String']>>;
  emailOnNewUser?: Maybe<Scalars['Boolean']>;
  emailOnNewPayment?: Maybe<Scalars['Boolean']>;
};

export type Order = {
  __typename?: 'Order';
  id?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  orderCompleted?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  service?: Maybe<Service>;
  buyer?: Maybe<User>;
  payment?: Maybe<Payment>;
};

export type PaginatedAdminRoleResponse = {
  __typename?: 'PaginatedAdminRoleResponse';
  data: Array<AdminRole>;
  cursor: Cursor;
};

export type PaginatedBiolinkResponse = {
  __typename?: 'PaginatedBiolinkResponse';
  data: Array<Biolink>;
  cursor: Cursor;
};

export type PaginatedBlackListResponse = {
  __typename?: 'PaginatedBlackListResponse';
  data: Array<BlackList>;
  cursor: Cursor;
};

export type PaginatedCategoryResponse = {
  __typename?: 'PaginatedCategoryResponse';
  data: Array<Category>;
  cursor: Cursor;
};

export type PaginatedCodeResponse = {
  __typename?: 'PaginatedCodeResponse';
  data: Array<Code>;
  cursor: Cursor;
};

export type PaginatedLinkResponse = {
  __typename?: 'PaginatedLinkResponse';
  data: Array<Link>;
  cursor: Cursor;
};

export type PaginatedPaymentResponse = {
  __typename?: 'PaginatedPaymentResponse';
  data: Array<Payment>;
  cursor: Cursor;
};

export type PaginatedPlanResponse = {
  __typename?: 'PaginatedPlanResponse';
  data: Array<Plan>;
  cursor: Cursor;
};

export type PaginatedReportResponse = {
  __typename?: 'PaginatedReportResponse';
  data: Array<Report>;
  cursor: Cursor;
};

export type PaginatedSupportResponse = {
  __typename?: 'PaginatedSupportResponse';
  data: Array<Support>;
  cursor: Cursor;
};

export type PaginatedTaxResponse = {
  __typename?: 'PaginatedTaxResponse';
  data: Array<Tax>;
  cursor: Cursor;
};

export type PaginatedUserResponse = {
  __typename?: 'PaginatedUserResponse';
  data: Array<User>;
  cursor: Cursor;
};

export type PaginatedUsernameResponse = {
  __typename?: 'PaginatedUsernameResponse';
  data: Array<Username>;
  cursor: Cursor;
};

export type PaginatedVerificationResponse = {
  __typename?: 'PaginatedVerificationResponse';
  data: Array<Verification>;
  cursor: Cursor;
};

export type PasswordInput = {
  password: Scalars['String'];
};

export type Payer = {
  __typename?: 'Payer';
  name?: Maybe<Name>;
  email_address?: Maybe<Scalars['String']>;
  payer_id?: Maybe<Scalars['String']>;
};

export type Payment = {
  __typename?: 'Payment';
  id?: Maybe<Scalars['String']>;
  paymentType?: Maybe<Scalars['String']>;
  paymentProvider?: Maybe<Scalars['String']>;
  amountPaid?: Maybe<Scalars['Float']>;
  paymentCurrency?: Maybe<Scalars['String']>;
  paymentDetails?: Maybe<PaymentRecord>;
  createdAt?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  order?: Maybe<Order>;
  plan?: Maybe<Plan>;
};

export type PaymentRecord = StripeInvoiceObject | PaypalPaymentRecord;

export type PaymentSettings = {
  __typename?: 'PaymentSettings';
  payment_method_options?: Maybe<Scalars['String']>;
  payment_method_types?: Maybe<Scalars['String']>;
};

export type PaymentSettingsInput = {
  enablePaymentSystem?: Maybe<Scalars['Boolean']>;
  enabledAcceptingPaymentType?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  enableDiscountOrRedeemableCode?: Maybe<Scalars['Boolean']>;
  enableTaxesAndBilling?: Maybe<Scalars['Boolean']>;
  enablePaypal?: Maybe<Scalars['Boolean']>;
  enableStripe?: Maybe<Scalars['Boolean']>;
};

export type PaymentSystemSettings = {
  __typename?: 'PaymentSystemSettings';
  enablePaymentSystem?: Maybe<Scalars['Boolean']>;
  enabledAcceptingPaymentType?: Maybe<Scalars['String']>;
  brandName?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  enableDiscountOrRedeemableCode?: Maybe<Scalars['Boolean']>;
  enableTaxesAndBilling?: Maybe<Scalars['Boolean']>;
  enablePaypal?: Maybe<Scalars['Boolean']>;
  enableStripe?: Maybe<Scalars['Boolean']>;
};

export type Payments = {
  __typename?: 'Payments';
  captures?: Maybe<Array<Capture>>;
};

export type PaypalFee = {
  __typename?: 'PaypalFee';
  currency_code?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PaypalLink = {
  __typename?: 'PaypalLink';
  href?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  method?: Maybe<Scalars['String']>;
};

export type PaypalPaymentRecord = {
  __typename?: 'PaypalPaymentRecord';
  id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  payer?: Maybe<Payer>;
  purchase_units?: Maybe<Array<PurchaseUnit>>;
  links?: Maybe<Array<PaypalLink>>;
};

export type Period = {
  __typename?: 'Period';
  end?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
};

export type Plan = {
  __typename?: 'Plan';
  id?: Maybe<Scalars['String']>;
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
  enabledStatus?: Maybe<Scalars['String']>;
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

export type Price = {
  __typename?: 'Price';
  id?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  billing_scheme?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  livemode?: Maybe<Scalars['Boolean']>;
  lookup_key?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  recurring?: Maybe<Recurring>;
  tax_behavior?: Maybe<Scalars['String']>;
  tiers_mode?: Maybe<Scalars['String']>;
  transform_quantity?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  unit_amount?: Maybe<Scalars['Int']>;
  unit_amount_decimal?: Maybe<Scalars['String']>;
};

export type PurchaseUnit = {
  __typename?: 'PurchaseUnit';
  reference_id?: Maybe<Scalars['String']>;
  shipping?: Maybe<Shipping>;
  payments?: Maybe<Payments>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  getAllAdminRoles: PaginatedAdminRoleResponse;
  getAdminRole: AdminRole;
  getAllBiolinks?: Maybe<PaginatedBiolinkResponse>;
  getAllDirectories?: Maybe<PaginatedBiolinkResponse>;
  getBiolink?: Maybe<Biolink>;
  getAllBlackListedBadWords?: Maybe<PaginatedBlackListResponse>;
  getAllBlackListedEmails?: Maybe<PaginatedBlackListResponse>;
  getAllBlackListedUsernames?: Maybe<PaginatedBlackListResponse>;
  getBlackList?: Maybe<BlackList>;
  getAllCategories?: Maybe<PaginatedCategoryResponse>;
  getCategory?: Maybe<Category>;
  getAllDiscounts?: Maybe<PaginatedCodeResponse>;
  getAllReferrals?: Maybe<PaginatedCodeResponse>;
  getAllCodes?: Maybe<PaginatedCodeResponse>;
  getCode?: Maybe<Code>;
  getDashboardTotalCounts: DashboardTotalCounts;
  getLast30DaysEarningChartData: EarningChartResponse;
  getUsersAndAdminsCountData: UsersAdminsCountResponse;
  getAllLinks?: Maybe<PaginatedLinkResponse>;
  getAllEmbeds?: Maybe<PaginatedLinkResponse>;
  getAllSocialLinks?: Maybe<PaginatedLinkResponse>;
  getLink?: Maybe<Link>;
  getAllPayments?: Maybe<PaginatedPaymentResponse>;
  getPayment?: Maybe<Payment>;
  getAllPlans: PaginatedPlanResponse;
  getPlan: Plan;
  getAllPendingReports?: Maybe<PaginatedReportResponse>;
  getAllResolvedReports?: Maybe<PaginatedReportResponse>;
  getAllDismissedReports?: Maybe<PaginatedReportResponse>;
  getReport?: Maybe<Report>;
  getSettingsByKey: SettingsRecord;
  getAllPendingSupports?: Maybe<PaginatedSupportResponse>;
  getAllResolvedSupports?: Maybe<PaginatedSupportResponse>;
  getAllDismissedSupports?: Maybe<PaginatedSupportResponse>;
  getSupport?: Maybe<Support>;
  getAllTaxes?: Maybe<PaginatedTaxResponse>;
  getTax?: Maybe<Tax>;
  getAllUsers?: Maybe<PaginatedUserResponse>;
  getAllAdmins?: Maybe<PaginatedUserResponse>;
  getUser?: Maybe<User>;
  getUserSummaryCounts?: Maybe<UserTotalCountsResponse>;
  getAllUsernames?: Maybe<PaginatedUsernameResponse>;
  getAllPremiumUsernames?: Maybe<PaginatedUsernameResponse>;
  getAllTrademarkUsernames?: Maybe<PaginatedUsernameResponse>;
  getUsername?: Maybe<Username>;
  getAllPendingVerifications?: Maybe<PaginatedVerificationResponse>;
  getAllVerifiedVerifications?: Maybe<PaginatedVerificationResponse>;
  getAllRejectedVerifications?: Maybe<PaginatedVerificationResponse>;
  getVerification?: Maybe<Verification>;
};


export type QueryGetAllAdminRolesArgs = {
  options: ConnectionArgs;
};


export type QueryGetAdminRoleArgs = {
  id: Scalars['String'];
};


export type QueryGetAllBiolinksArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllDirectoriesArgs = {
  categoryIds?: Maybe<Array<Scalars['String']>>;
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
  blackListId: Scalars['String'];
};


export type QueryGetAllCategoriesArgs = {
  options: ConnectionArgs;
};


export type QueryGetCategoryArgs = {
  id: Scalars['String'];
};


export type QueryGetAllDiscountsArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllReferralsArgs = {
  options: ConnectionArgs;
};


export type QueryGetAllCodesArgs = {
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


export type QueryGetAllSocialLinksArgs = {
  options: ConnectionArgs;
};


export type QueryGetLinkArgs = {
  linkId: Scalars['String'];
};


export type QueryGetAllPaymentsArgs = {
  options: ConnectionArgs;
};


export type QueryGetPaymentArgs = {
  paymentId: Scalars['String'];
};


export type QueryGetAllPlansArgs = {
  options: ConnectionArgs;
};


export type QueryGetPlanArgs = {
  id: Scalars['String'];
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


export type QueryGetSettingsByKeyArgs = {
  key: Scalars['String'];
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
  taxId: Scalars['String'];
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

export type Recurring = {
  __typename?: 'Recurring';
  aggregate_usage?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  interval_count?: Maybe<Scalars['Int']>;
  trial_period_days?: Maybe<Scalars['String']>;
  usage_type?: Maybe<Scalars['String']>;
};

export type RegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
  referralToken?: Maybe<Scalars['String']>;
};

export type Report = {
  __typename?: 'Report';
  id?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  reportedUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  reporter?: Maybe<User>;
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

export type SellerProtection = {
  __typename?: 'SellerProtection';
  status?: Maybe<Scalars['String']>;
  dispute_categories?: Maybe<Array<Scalars['String']>>;
};

export type SellerReceivableBreakdown = {
  __typename?: 'SellerReceivableBreakdown';
  gross_amount?: Maybe<GrossAmount>;
  paypal_fee?: Maybe<PaypalFee>;
  net_amount?: Maybe<NetAmount>;
};

export type Service = {
  __typename?: 'Service';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  blacklisted?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  seller?: Maybe<User>;
};

export type Settings = {
  __typename?: 'Settings';
  id?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type SettingsRecord = AdsSystemSettings | LinkSystemSettings | MainSystemSettings | EmailSystemSettings | SocialSystemSettings | CaptchaSystemSettings | PaymentSystemSettings | BusinessSystemSettings | FacebookSystemSettings | NotificationSystemSettings;

export type Shipping = {
  __typename?: 'Shipping';
  address?: Maybe<Address>;
};

export type SocialSettingsInput = {
  youtube?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
};

export type SocialSystemSettings = {
  __typename?: 'SocialSystemSettings';
  youtube?: Maybe<Scalars['String']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
};

export type StatusTransitions = {
  __typename?: 'StatusTransitions';
  finalized_at?: Maybe<Scalars['Int']>;
  marked_uncollectible_at?: Maybe<Scalars['String']>;
  paid_at?: Maybe<Scalars['Int']>;
  voided_at?: Maybe<Scalars['String']>;
};

export type StripeInvoiceObject = {
  __typename?: 'StripeInvoiceObject';
  id?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['String']>;
  account_country?: Maybe<Scalars['String']>;
  account_name?: Maybe<Scalars['String']>;
  account_tax_ids?: Maybe<Scalars['String']>;
  amount_due?: Maybe<Scalars['Int']>;
  amount_paid?: Maybe<Scalars['Int']>;
  amount_remaining?: Maybe<Scalars['Int']>;
  application_fee_amount?: Maybe<Scalars['String']>;
  attempt_count?: Maybe<Scalars['Int']>;
  attempted?: Maybe<Scalars['Boolean']>;
  auto_advance?: Maybe<Scalars['Boolean']>;
  automatic_tax?: Maybe<AutomaticTax>;
  billing_reason?: Maybe<Scalars['String']>;
  charge?: Maybe<Scalars['String']>;
  collection_method?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  custom_fields?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  customer_address?: Maybe<Scalars['String']>;
  customer_email?: Maybe<Scalars['String']>;
  customer_name?: Maybe<Scalars['String']>;
  customer_phone?: Maybe<Scalars['String']>;
  customer_shipping?: Maybe<Scalars['String']>;
  customer_tax_exempt?: Maybe<Scalars['String']>;
  customer_tax_ids?: Maybe<Array<Scalars['String']>>;
  default_payment_method?: Maybe<Scalars['String']>;
  default_source?: Maybe<Scalars['String']>;
  default_tax_rates?: Maybe<Array<Scalars['String']>>;
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Scalars['String']>;
  discounts?: Maybe<Array<Scalars['String']>>;
  due_date?: Maybe<Scalars['String']>;
  ending_balance?: Maybe<Scalars['Int']>;
  footer?: Maybe<Scalars['String']>;
  hosted_invoice_url?: Maybe<Scalars['String']>;
  invoice_pdf?: Maybe<Scalars['String']>;
  last_finalization_error?: Maybe<Scalars['String']>;
  lines?: Maybe<Lines>;
  livemode?: Maybe<Scalars['Boolean']>;
  next_payment_attempt?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['String']>;
  on_behalf_of?: Maybe<Scalars['String']>;
  paid?: Maybe<Scalars['Boolean']>;
  payment_intent?: Maybe<Scalars['String']>;
  payment_settings?: Maybe<PaymentSettings>;
  period_end?: Maybe<Scalars['Int']>;
  period_start?: Maybe<Scalars['Int']>;
  post_payment_credit_notes_amount?: Maybe<Scalars['Int']>;
  pre_payment_credit_notes_amount?: Maybe<Scalars['Int']>;
  quote?: Maybe<Scalars['String']>;
  receipt_number?: Maybe<Scalars['String']>;
  starting_balance?: Maybe<Scalars['Int']>;
  statement_descriptor?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  status_transitions?: Maybe<StatusTransitions>;
  subscription?: Maybe<Scalars['String']>;
  subtotal?: Maybe<Scalars['Int']>;
  tax?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  total_discount_amounts?: Maybe<Array<Scalars['String']>>;
  total_tax_amounts?: Maybe<Array<Scalars['String']>>;
  transfer_data?: Maybe<Scalars['String']>;
  webhooks_delivered_at?: Maybe<Scalars['Int']>;
};

export type StripePlan = {
  __typename?: 'StripePlan';
  id?: Maybe<Scalars['String']>;
  object?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  aggregate_usage?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Int']>;
  amount_decimal?: Maybe<Scalars['String']>;
  billing_scheme?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  interval?: Maybe<Scalars['String']>;
  interval_count?: Maybe<Scalars['Int']>;
  livemode?: Maybe<Scalars['Boolean']>;
  nickname?: Maybe<Scalars['String']>;
  product?: Maybe<Scalars['String']>;
  tiers_mode?: Maybe<Scalars['String']>;
  transform_usage?: Maybe<Scalars['String']>;
  trial_period_days?: Maybe<Scalars['String']>;
  usage_type?: Maybe<Scalars['String']>;
};

export type Support = {
  __typename?: 'Support';
  id?: Maybe<Scalars['String']>;
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

export type Tax = {
  __typename?: 'Tax';
  id?: Maybe<Scalars['String']>;
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


export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
  /** The name field is only for the admins. */
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailVerifiedAt?: Maybe<Scalars['String']>;
  billing?: Maybe<Billing>;
  lastActiveTill?: Maybe<Scalars['String']>;
  planExpirationDate?: Maybe<Scalars['String']>;
  planTrialDone?: Maybe<Scalars['Boolean']>;
  planType?: Maybe<Scalars['String']>;
  usedReferralsToPurchasePlan?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Scalars['String']>;
  timezone?: Maybe<Scalars['String']>;
  lastIPAddress?: Maybe<Scalars['String']>;
  lastUserAgent?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  totalLogin?: Maybe<Scalars['Int']>;
  currentBiolinkId?: Maybe<Scalars['String']>;
  availableBalance?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  plan?: Maybe<Plan>;
  adminRole?: Maybe<AdminRole>;
  registeredByCode?: Maybe<Code>;
};

export type UserTotalCountsResponse = {
  __typename?: 'UserTotalCountsResponse';
  totalBiolinks?: Maybe<Scalars['Int']>;
  totalShortenedLinks?: Maybe<Scalars['Int']>;
  totalReferralCodes?: Maybe<Scalars['Int']>;
  totalPayed?: Maybe<Scalars['Int']>;
};

export type UserWithTokens = {
  __typename?: 'UserWithTokens';
  user?: Maybe<User>;
  access?: Maybe<AuthToken>;
  refresh?: Maybe<AuthToken>;
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

export type UsersAdminsCountResponse = {
  __typename?: 'UsersAdminsCountResponse';
  totalUsers?: Maybe<Scalars['Int']>;
  totalAdmins?: Maybe<Scalars['Int']>;
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

export type VerificationStatusInput = {
  status?: Maybe<Scalars['String']>;
  verifiedGovernmentId?: Maybe<Scalars['Boolean']>;
  verifiedEmail?: Maybe<Scalars['Boolean']>;
  verifiedPhoneNumber?: Maybe<Scalars['Boolean']>;
  verifiedWorkEmail?: Maybe<Scalars['Boolean']>;
};

export type AdminRoleFragmentFragment = (
  { __typename?: 'AdminRole' }
  & Pick<AdminRole, 'id' | 'roleName' | 'roleDescription' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { roleSettings?: Maybe<Array<(
    { __typename?: 'RoleSettings' }
    & Pick<RoleSettings, 'resource' | 'canShowList' | 'canShow' | 'canCreate' | 'canEdit' | 'canDelete'>
  )>> }
);

export type GetAllAdminRolesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllAdminRolesQuery = (
  { __typename?: 'Query' }
  & { getAllAdminRoles: (
    { __typename?: 'PaginatedAdminRoleResponse' }
    & { data: Array<(
      { __typename?: 'AdminRole' }
      & AdminRoleFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  ) }
);

export type GetAdminRoleQueryVariables = Exact<{
  roleId: Scalars['String'];
}>;


export type GetAdminRoleQuery = (
  { __typename?: 'Query' }
  & { getAdminRole: (
    { __typename?: 'AdminRole' }
    & AdminRoleFragmentFragment
  ) }
);

export type CreateAdminRoleMutationVariables = Exact<{
  input: NewAdminRoleInput;
}>;


export type CreateAdminRoleMutation = (
  { __typename?: 'Mutation' }
  & { createAdminRole: (
    { __typename?: 'AdminRole' }
    & AdminRoleFragmentFragment
  ) }
);

export type EditAdminRoleMutationVariables = Exact<{
  roleId: Scalars['String'];
  input: NewAdminRoleInput;
}>;


export type EditAdminRoleMutation = (
  { __typename?: 'Mutation' }
  & { editAdminRole: (
    { __typename?: 'AdminRole' }
    & AdminRoleFragmentFragment
  ) }
);

export type DeleteAdminRoleMutationVariables = Exact<{
  roleId: Scalars['String'];
}>;


export type DeleteAdminRoleMutation = (
  { __typename?: 'Mutation' }
  & { deleteAdminRole: (
    { __typename?: 'AdminRole' }
    & AdminRoleFragmentFragment
  ) }
);

export type AuthUserFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email'>
  & { adminRole?: Maybe<(
    { __typename?: 'AdminRole' }
    & Pick<AdminRole, 'id' | 'roleName' | 'roleDescription'>
    & { roleSettings?: Maybe<Array<(
      { __typename?: 'RoleSettings' }
      & Pick<RoleSettings, 'resource' | 'canShowList' | 'canShow' | 'canCreate' | 'canEdit' | 'canDelete'>
    )>> }
  )> }
);

export type LoginAdminMutationVariables = Exact<{
  options: LoginInput;
}>;


export type LoginAdminMutation = (
  { __typename?: 'Mutation' }
  & { loginAdmin: (
    { __typename?: 'UserWithTokens' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & AuthUserFragment
    )>, access?: Maybe<(
      { __typename?: 'AuthToken' }
      & Pick<AuthToken, 'token' | 'expires'>
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & AuthUserFragment
  )> }
);

export type RefreshTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshTokenMutation = (
  { __typename?: 'Mutation' }
  & { refreshToken: (
    { __typename?: 'AccessAndRefreshToken' }
    & { access?: Maybe<(
      { __typename?: 'AuthToken' }
      & Pick<AuthToken, 'token' | 'expires'>
    )> }
  ) }
);

export type BiolinkDetailsFragment = (
  { __typename?: 'Biolink' }
  & Pick<Biolink, 'id' | 'profilePhotoUrl' | 'coverPhotoUrl' | 'displayName' | 'city' | 'state' | 'country' | 'bio' | 'verificationStatus' | 'verifiedGovernmentId' | 'verifiedEmail' | 'verifiedPhoneNumber' | 'verifiedWorkEmail' | 'featured' | 'changedUsername' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { settings?: Maybe<(
    { __typename?: 'BiolinkSettings' }
    & Pick<BiolinkSettings, 'enableDarkMode' | 'showEmail' | 'email' | 'showPhone' | 'phone' | 'enableColoredContactButtons' | 'addedToDirectory' | 'directoryBio' | 'enableColoredSocialMediaIcons' | 'socialAccountStyleType' | 'enableFacebookPixel' | 'facebookPixelId' | 'enableGoogleAnalytics' | 'googleAnalyticsCode' | 'enableEmailCapture' | 'emailCaptureId' | 'enableUtmParameters' | 'utmSource' | 'utmMedium' | 'utmCampaign' | 'blockSearchEngineIndexing' | 'pageTitle' | 'metaDescription' | 'opengraphImageUrl' | 'removeDefaultBranding' | 'enableCustomBranding' | 'customBrandingName' | 'customBrandingUrl' | 'enablePasswordProtection' | 'enableSensitiveContentWarning' | 'paypalLink' | 'venmoLink' | 'payoneerLink'>
  )>, username?: Maybe<(
    { __typename?: 'Username' }
    & Pick<Username, 'id' | 'username'>
  )>, user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )>, category?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'categoryName'>
  )> }
);

export type BiolinkListItemsFragment = (
  { __typename?: 'Biolink' }
  & Pick<Biolink, 'id' | 'profilePhotoUrl' | 'displayName' | 'city' | 'state' | 'country' | 'verificationStatus' | 'verifiedGovernmentId' | 'verifiedEmail' | 'verifiedPhoneNumber' | 'verifiedWorkEmail' | 'featured' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { username?: Maybe<(
    { __typename?: 'Username' }
    & Pick<Username, 'id' | 'username'>
  )>, user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )>, category?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'categoryName'>
  )> }
);

export type GetAllBiolinksQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllBiolinksQuery = (
  { __typename?: 'Query' }
  & { getAllBiolinks?: Maybe<(
    { __typename?: 'PaginatedBiolinkResponse' }
    & { data: Array<(
      { __typename?: 'Biolink' }
      & BiolinkListItemsFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllDirectoriesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllDirectoriesQuery = (
  { __typename?: 'Query' }
  & { getAllDirectories?: Maybe<(
    { __typename?: 'PaginatedBiolinkResponse' }
    & { data: Array<(
      { __typename?: 'Biolink' }
      & BiolinkListItemsFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetBiolinkQueryVariables = Exact<{
  biolinkId: Scalars['String'];
}>;


export type GetBiolinkQuery = (
  { __typename?: 'Query' }
  & { getBiolink?: Maybe<(
    { __typename?: 'Biolink' }
    & BiolinkDetailsFragment
  )> }
);

export type CreateBiolinkMutationVariables = Exact<{
  input: BiolinkAdminInput;
}>;


export type CreateBiolinkMutation = (
  { __typename?: 'Mutation' }
  & { createBiolink: (
    { __typename?: 'Biolink' }
    & BiolinkDetailsFragment
  ) }
);

export type EditBiolinkMutationVariables = Exact<{
  id: Scalars['String'];
  input: BiolinkAdminInput;
}>;


export type EditBiolinkMutation = (
  { __typename?: 'Mutation' }
  & { editBiolink: (
    { __typename?: 'Biolink' }
    & BiolinkDetailsFragment
  ) }
);

export type DeleteBiolinkMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteBiolinkMutation = (
  { __typename?: 'Mutation' }
  & { removeBiolink: (
    { __typename?: 'Biolink' }
    & BiolinkDetailsFragment
  ) }
);

export type BlacklistFragmentFragment = (
  { __typename?: 'BlackList' }
  & Pick<BlackList, 'id' | 'blacklistType' | 'keyword' | 'reason' | 'createdAt' | 'updatedAt' | 'deletedAt'>
);

export type GetAllBlacklistedEmailsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllBlacklistedEmailsQuery = (
  { __typename?: 'Query' }
  & { getAllBlackListedEmails?: Maybe<(
    { __typename?: 'PaginatedBlackListResponse' }
    & { data: Array<(
      { __typename?: 'BlackList' }
      & BlacklistFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllBlacklistedBadWordsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllBlacklistedBadWordsQuery = (
  { __typename?: 'Query' }
  & { getAllBlackListedBadWords?: Maybe<(
    { __typename?: 'PaginatedBlackListResponse' }
    & { data: Array<(
      { __typename?: 'BlackList' }
      & BlacklistFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllBlacklistedUsernamesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllBlacklistedUsernamesQuery = (
  { __typename?: 'Query' }
  & { getAllBlackListedUsernames?: Maybe<(
    { __typename?: 'PaginatedBlackListResponse' }
    & { data: Array<(
      { __typename?: 'BlackList' }
      & BlacklistFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetBlacklistQueryVariables = Exact<{
  blacklistId: Scalars['String'];
}>;


export type GetBlacklistQuery = (
  { __typename?: 'Query' }
  & { getBlackList?: Maybe<(
    { __typename?: 'BlackList' }
    & BlacklistFragmentFragment
  )> }
);

export type AddBlacklistMutationVariables = Exact<{
  input: NewBlackListInput;
}>;


export type AddBlacklistMutation = (
  { __typename?: 'Mutation' }
  & { addBlackList?: Maybe<(
    { __typename?: 'BlackList' }
    & BlacklistFragmentFragment
  )> }
);

export type EditBlacklistMutationVariables = Exact<{
  blacklistId: Scalars['String'];
  input: NewBlackListInput;
}>;


export type EditBlacklistMutation = (
  { __typename?: 'Mutation' }
  & { editBlackList?: Maybe<(
    { __typename?: 'BlackList' }
    & BlacklistFragmentFragment
  )> }
);

export type DeleteBlacklistMutationVariables = Exact<{
  blacklistId: Scalars['String'];
}>;


export type DeleteBlacklistMutation = (
  { __typename?: 'Mutation' }
  & { deleteBlackList?: Maybe<(
    { __typename?: 'BlackList' }
    & BlacklistFragmentFragment
  )> }
);

export type CategoryFragmentFragment = (
  { __typename?: 'Category' }
  & Pick<Category, 'id' | 'categoryName' | 'featured' | 'createdAt' | 'updatedAt' | 'deletedAt'>
);

export type GetAllCategoriesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllCategoriesQuery = (
  { __typename?: 'Query' }
  & { getAllCategories?: Maybe<(
    { __typename?: 'PaginatedCategoryResponse' }
    & { data: Array<(
      { __typename?: 'Category' }
      & CategoryFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetCategoryQueryVariables = Exact<{
  categoryId: Scalars['String'];
}>;


export type GetCategoryQuery = (
  { __typename?: 'Query' }
  & { getCategory?: Maybe<(
    { __typename?: 'Category' }
    & CategoryFragmentFragment
  )> }
);

export type CreateCategoryMutationVariables = Exact<{
  input: NewCategoryInput;
}>;


export type CreateCategoryMutation = (
  { __typename?: 'Mutation' }
  & { createCategory?: Maybe<(
    { __typename?: 'Category' }
    & CategoryFragmentFragment
  )> }
);

export type EditCategoryMutationVariables = Exact<{
  categoryId: Scalars['String'];
  input: NewCategoryInput;
}>;


export type EditCategoryMutation = (
  { __typename?: 'Mutation' }
  & { editCategory?: Maybe<(
    { __typename?: 'Category' }
    & CategoryFragmentFragment
  )> }
);

export type DeleteCategoryMutationVariables = Exact<{
  categoryId: Scalars['String'];
}>;


export type DeleteCategoryMutation = (
  { __typename?: 'Mutation' }
  & { deleteCategory?: Maybe<(
    { __typename?: 'Category' }
    & CategoryFragmentFragment
  )> }
);

export type CodeFragmentFragment = (
  { __typename?: 'Code' }
  & Pick<Code, 'id' | 'type' | 'code' | 'discount' | 'quantity' | 'expireDate' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { referrer?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);

export type GetAllDiscountsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllDiscountsQuery = (
  { __typename?: 'Query' }
  & { getAllDiscounts?: Maybe<(
    { __typename?: 'PaginatedCodeResponse' }
    & { data: Array<(
      { __typename?: 'Code' }
      & CodeFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllReferralsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllReferralsQuery = (
  { __typename?: 'Query' }
  & { getAllReferrals?: Maybe<(
    { __typename?: 'PaginatedCodeResponse' }
    & { data: Array<(
      { __typename?: 'Code' }
      & CodeFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllCodesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllCodesQuery = (
  { __typename?: 'Query' }
  & { getAllCodes?: Maybe<(
    { __typename?: 'PaginatedCodeResponse' }
    & { data: Array<(
      { __typename?: 'Code' }
      & CodeFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetCodeQueryVariables = Exact<{
  codeId: Scalars['String'];
}>;


export type GetCodeQuery = (
  { __typename?: 'Query' }
  & { getCode?: Maybe<(
    { __typename?: 'Code' }
    & CodeFragmentFragment
  )> }
);

export type CreateCodeMutationVariables = Exact<{
  input: NewCodeInput;
}>;


export type CreateCodeMutation = (
  { __typename?: 'Mutation' }
  & { addCode?: Maybe<(
    { __typename?: 'Code' }
    & CodeFragmentFragment
  )> }
);

export type EditCodeMutationVariables = Exact<{
  codeId: Scalars['String'];
  input: NewCodeInput;
}>;


export type EditCodeMutation = (
  { __typename?: 'Mutation' }
  & { editCode?: Maybe<(
    { __typename?: 'Code' }
    & CodeFragmentFragment
  )> }
);

export type DeleteCodeMutationVariables = Exact<{
  codeId: Scalars['String'];
}>;


export type DeleteCodeMutation = (
  { __typename?: 'Mutation' }
  & { deleteCode?: Maybe<(
    { __typename?: 'Code' }
    & CodeFragmentFragment
  )> }
);

export type GetDashboardTotalCountsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDashboardTotalCountsQuery = (
  { __typename?: 'Query' }
  & { getDashboardTotalCounts: (
    { __typename?: 'DashboardTotalCounts' }
    & Pick<DashboardTotalCounts, 'totalBiolinkPageViewsTracked' | 'totalBiolinks' | 'totalEarned' | 'totalLinkClickViewsTracked' | 'totalReferralCodes' | 'totalShortenedLinks' | 'totalTransactionsMade' | 'totalUsers'>
  ) }
);

export type GetLast30DaysEarningChartDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLast30DaysEarningChartDataQuery = (
  { __typename?: 'Query' }
  & { getLast30DaysEarningChartData: (
    { __typename?: 'EarningChartResponse' }
    & { result?: Maybe<Array<(
      { __typename?: 'EarningChartValue' }
      & Pick<EarningChartValue, 'earned' | 'date'>
    )>> }
  ) }
);

export type GetUsersAndAdminsCountDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersAndAdminsCountDataQuery = (
  { __typename?: 'Query' }
  & { getUsersAndAdminsCountData: (
    { __typename?: 'UsersAdminsCountResponse' }
    & Pick<UsersAdminsCountResponse, 'totalUsers' | 'totalAdmins'>
  ) }
);

export type LinkDetailsFragment = (
  { __typename?: 'Link' }
  & Pick<Link, 'id' | 'linkType' | 'linkTitle' | 'linkImageUrl' | 'platform' | 'iconColorful' | 'iconMinimal' | 'featured' | 'url' | 'shortenedUrl' | 'startDate' | 'endDate' | 'enablePasswordProtection' | 'note' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )>, biolink?: Maybe<(
    { __typename?: 'Biolink' }
    & Pick<Biolink, 'id' | 'profilePhotoUrl'>
    & { username?: Maybe<(
      { __typename?: 'Username' }
      & Pick<Username, 'id' | 'username'>
    )> }
  )> }
);

export type LinkListItemsFragment = (
  { __typename?: 'Link' }
  & Pick<Link, 'id' | 'linkType' | 'linkTitle' | 'linkImageUrl' | 'platform' | 'featured' | 'url' | 'shortenedUrl' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )>, biolink?: Maybe<(
    { __typename?: 'Biolink' }
    & Pick<Biolink, 'id' | 'profilePhotoUrl'>
    & { username?: Maybe<(
      { __typename?: 'Username' }
      & Pick<Username, 'id' | 'username'>
    )> }
  )> }
);

export type GetAllLinksQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllLinksQuery = (
  { __typename?: 'Query' }
  & { getAllLinks?: Maybe<(
    { __typename?: 'PaginatedLinkResponse' }
    & { data: Array<(
      { __typename?: 'Link' }
      & LinkListItemsFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllEmbedsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllEmbedsQuery = (
  { __typename?: 'Query' }
  & { getAllEmbeds?: Maybe<(
    { __typename?: 'PaginatedLinkResponse' }
    & { data: Array<(
      { __typename?: 'Link' }
      & LinkListItemsFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllSocialLinksQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllSocialLinksQuery = (
  { __typename?: 'Query' }
  & { getAllSocialLinks?: Maybe<(
    { __typename?: 'PaginatedLinkResponse' }
    & { data: Array<(
      { __typename?: 'Link' }
      & LinkListItemsFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetLinkQueryVariables = Exact<{
  linkId: Scalars['String'];
}>;


export type GetLinkQuery = (
  { __typename?: 'Query' }
  & { getLink?: Maybe<(
    { __typename?: 'Link' }
    & LinkDetailsFragment
  )> }
);

export type CreateLinkMutationVariables = Exact<{
  input: LinkAdminInput;
}>;


export type CreateLinkMutation = (
  { __typename?: 'Mutation' }
  & { createLink?: Maybe<(
    { __typename?: 'Link' }
    & LinkDetailsFragment
  )> }
);

export type EditLinkMutationVariables = Exact<{
  id: Scalars['String'];
  input: LinkAdminInput;
}>;


export type EditLinkMutation = (
  { __typename?: 'Mutation' }
  & { editLink?: Maybe<(
    { __typename?: 'Link' }
    & LinkDetailsFragment
  )> }
);

export type DeleteLinkMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteLinkMutation = (
  { __typename?: 'Mutation' }
  & { deleteLink?: Maybe<(
    { __typename?: 'Link' }
    & LinkDetailsFragment
  )> }
);

export type PaymentDetailsFragment = (
  { __typename?: 'Payment' }
  & Pick<Payment, 'id' | 'paymentType' | 'paymentProvider' | 'amountPaid' | 'paymentCurrency' | 'createdAt'>
  & { paymentDetails?: Maybe<(
    { __typename?: 'StripeInvoiceObject' }
    & Pick<StripeInvoiceObject, 'id' | 'object' | 'account_country' | 'account_name' | 'account_tax_ids' | 'amount_due' | 'amount_paid' | 'amount_remaining' | 'application_fee_amount' | 'attempt_count' | 'attempted' | 'auto_advance' | 'billing_reason' | 'charge' | 'collection_method' | 'created' | 'currency' | 'custom_fields' | 'customer' | 'customer_address' | 'customer_email' | 'customer_name' | 'customer_phone' | 'customer_shipping' | 'customer_tax_exempt' | 'customer_tax_ids' | 'default_payment_method' | 'default_source' | 'default_tax_rates' | 'description' | 'discount' | 'discounts' | 'due_date' | 'ending_balance' | 'footer' | 'hosted_invoice_url' | 'invoice_pdf' | 'last_finalization_error' | 'livemode' | 'next_payment_attempt' | 'number' | 'on_behalf_of' | 'paid' | 'payment_intent' | 'period_end' | 'period_start' | 'post_payment_credit_notes_amount' | 'pre_payment_credit_notes_amount' | 'quote' | 'receipt_number' | 'starting_balance' | 'statement_descriptor' | 'status' | 'subscription' | 'subtotal' | 'tax' | 'total' | 'total_discount_amounts' | 'total_tax_amounts' | 'transfer_data' | 'webhooks_delivered_at'>
    & { automatic_tax?: Maybe<(
      { __typename?: 'AutomaticTax' }
      & Pick<AutomaticTax, 'enabled' | 'status'>
    )>, lines?: Maybe<(
      { __typename?: 'Lines' }
      & Pick<Lines, 'object' | 'has_more' | 'total_count' | 'url'>
      & { data?: Maybe<Array<(
        { __typename?: 'Data' }
        & Pick<Data, 'id' | 'object' | 'amount' | 'currency' | 'description' | 'discount_amounts' | 'discountable' | 'discounts' | 'livemode' | 'proration' | 'quantity' | 'subscription' | 'subscription_item' | 'tax_amounts' | 'tax_rates' | 'type'>
        & { period?: Maybe<(
          { __typename?: 'Period' }
          & Pick<Period, 'end' | 'start'>
        )>, plan?: Maybe<(
          { __typename?: 'StripePlan' }
          & Pick<StripePlan, 'id' | 'object' | 'active' | 'aggregate_usage' | 'amount' | 'amount_decimal' | 'billing_scheme' | 'created' | 'currency' | 'interval' | 'interval_count' | 'livemode' | 'nickname' | 'product' | 'tiers_mode' | 'transform_usage' | 'trial_period_days' | 'usage_type'>
        )>, price?: Maybe<(
          { __typename?: 'Price' }
          & Pick<Price, 'id' | 'object' | 'active' | 'billing_scheme' | 'created' | 'currency' | 'livemode' | 'lookup_key' | 'nickname' | 'product' | 'tax_behavior' | 'tiers_mode' | 'transform_quantity' | 'type' | 'unit_amount' | 'unit_amount_decimal'>
          & { recurring?: Maybe<(
            { __typename?: 'Recurring' }
            & Pick<Recurring, 'aggregate_usage' | 'interval' | 'interval_count' | 'trial_period_days' | 'usage_type'>
          )> }
        )> }
      )>> }
    )>, payment_settings?: Maybe<(
      { __typename?: 'PaymentSettings' }
      & Pick<PaymentSettings, 'payment_method_options' | 'payment_method_types'>
    )>, status_transitions?: Maybe<(
      { __typename?: 'StatusTransitions' }
      & Pick<StatusTransitions, 'finalized_at' | 'marked_uncollectible_at' | 'paid_at' | 'voided_at'>
    )> }
  ) | (
    { __typename?: 'PaypalPaymentRecord' }
    & Pick<PaypalPaymentRecord, 'id' | 'status'>
    & { payer?: Maybe<(
      { __typename?: 'Payer' }
      & Pick<Payer, 'email_address' | 'payer_id'>
      & { name?: Maybe<(
        { __typename?: 'Name' }
        & Pick<Name, 'given_name' | 'surname'>
      )> }
    )>, purchase_units?: Maybe<Array<(
      { __typename?: 'PurchaseUnit' }
      & Pick<PurchaseUnit, 'reference_id'>
      & { shipping?: Maybe<(
        { __typename?: 'Shipping' }
        & { address?: Maybe<(
          { __typename?: 'Address' }
          & Pick<Address, 'address_line_1' | 'address_line_2' | 'admin_area_2' | 'admin_area_1' | 'postal_code' | 'country_code'>
        )> }
      )>, payments?: Maybe<(
        { __typename?: 'Payments' }
        & { captures?: Maybe<Array<(
          { __typename?: 'Capture' }
          & Pick<Capture, 'id' | 'status' | 'final_capture' | 'disbursement_mode' | 'create_time' | 'update_time'>
          & { amount?: Maybe<(
            { __typename?: 'Amount' }
            & Pick<Amount, 'currency_code' | 'value'>
          )>, seller_protection?: Maybe<(
            { __typename?: 'SellerProtection' }
            & Pick<SellerProtection, 'status' | 'dispute_categories'>
          )>, seller_receivable_breakdown?: Maybe<(
            { __typename?: 'SellerReceivableBreakdown' }
            & { gross_amount?: Maybe<(
              { __typename?: 'GrossAmount' }
              & Pick<GrossAmount, 'currency_code' | 'value'>
            )>, paypal_fee?: Maybe<(
              { __typename?: 'PaypalFee' }
              & Pick<PaypalFee, 'currency_code' | 'value'>
            )>, net_amount?: Maybe<(
              { __typename?: 'NetAmount' }
              & Pick<NetAmount, 'currency_code' | 'value'>
            )> }
          )>, links?: Maybe<Array<(
            { __typename?: 'PaypalLink' }
            & Pick<PaypalLink, 'href' | 'rel' | 'method'>
          )>> }
        )>> }
      )> }
    )>>, links?: Maybe<Array<(
      { __typename?: 'PaypalLink' }
      & Pick<PaypalLink, 'href' | 'rel' | 'method'>
    )>> }
  )>, user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )>, order?: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'description' | 'price'>
  )>, plan?: Maybe<(
    { __typename?: 'Plan' }
    & Pick<Plan, 'id' | 'name'>
  )> }
);

export type PaymentListDetailsFragment = (
  { __typename?: 'Payment' }
  & Pick<Payment, 'id' | 'paymentType' | 'paymentProvider' | 'amountPaid' | 'paymentCurrency' | 'createdAt'>
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);

export type GetAllPaymentsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllPaymentsQuery = (
  { __typename?: 'Query' }
  & { getAllPayments?: Maybe<(
    { __typename?: 'PaginatedPaymentResponse' }
    & { data: Array<(
      { __typename?: 'Payment' }
      & PaymentListDetailsFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetPaymentQueryVariables = Exact<{
  paymentId: Scalars['String'];
}>;


export type GetPaymentQuery = (
  { __typename?: 'Query' }
  & { getPayment?: Maybe<(
    { __typename?: 'Payment' }
    & PaymentDetailsFragment
  )> }
);

export type PlanDetailsFragment = (
  { __typename?: 'Plan' }
  & Pick<Plan, 'id' | 'name' | 'monthlyPrice' | 'monthlyPriceStripeId' | 'annualPrice' | 'annualPriceStripeId' | 'enabledStatus' | 'visibilityStatus' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { settings?: Maybe<(
    { __typename?: 'PlanSettings' }
    & Pick<PlanSettings, 'totalBiolinksLimit' | 'totalLinksLimit' | 'totalCustomDomainLimit' | 'darkModeEnabled' | 'addedToDirectoryEnabled' | 'customBackHalfEnabled' | 'noAdsEnabled' | 'removableBrandingEnabled' | 'customFooterBrandingEnabled' | 'coloredLinksEnabled' | 'googleAnalyticsEnabled' | 'facebookPixelEnabled' | 'emailCaptureEnabled' | 'verifiedCheckmarkEnabled' | 'linksSchedulingEnabled' | 'seoEnabled' | 'socialEnabled' | 'utmParametersEnabled' | 'passwordProtectionEnabled' | 'sensitiveContentWarningEnabled' | 'leapLinkEnabled' | 'donationLinkEnabled'>
  )> }
);

export type PlanListDetailsFragment = (
  { __typename?: 'Plan' }
  & Pick<Plan, 'id' | 'name' | 'monthlyPrice' | 'annualPrice' | 'enabledStatus' | 'visibilityStatus' | 'createdAt' | 'updatedAt' | 'deletedAt'>
);

export type GetAllPlansQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllPlansQuery = (
  { __typename?: 'Query' }
  & { getAllPlans: (
    { __typename?: 'PaginatedPlanResponse' }
    & { data: Array<(
      { __typename?: 'Plan' }
      & PlanListDetailsFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  ) }
);

export type GetPlanQueryVariables = Exact<{
  planId: Scalars['String'];
}>;


export type GetPlanQuery = (
  { __typename?: 'Query' }
  & { getPlan: (
    { __typename?: 'Plan' }
    & PlanDetailsFragment
  ) }
);

export type CreatePlanMutationVariables = Exact<{
  input: PlanInput;
}>;


export type CreatePlanMutation = (
  { __typename?: 'Mutation' }
  & { createPlan: (
    { __typename?: 'Plan' }
    & PlanDetailsFragment
  ) }
);

export type EditPlanMutationVariables = Exact<{
  planId: Scalars['String'];
  input: PlanInput;
}>;


export type EditPlanMutation = (
  { __typename?: 'Mutation' }
  & { editPlan: (
    { __typename?: 'Plan' }
    & PlanDetailsFragment
  ) }
);

export type DeletePlanMutationVariables = Exact<{
  planId: Scalars['String'];
}>;


export type DeletePlanMutation = (
  { __typename?: 'Mutation' }
  & { deletePlan: (
    { __typename?: 'Plan' }
    & PlanDetailsFragment
  ) }
);

export type ReportFragmentFragment = (
  { __typename?: 'Report' }
  & Pick<Report, 'id' | 'firstName' | 'lastName' | 'email' | 'reportedUrl' | 'description' | 'status' | 'createdAt'>
  & { reporter?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);

export type GetAllPendingReportsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllPendingReportsQuery = (
  { __typename?: 'Query' }
  & { getAllPendingReports?: Maybe<(
    { __typename?: 'PaginatedReportResponse' }
    & { data: Array<(
      { __typename?: 'Report' }
      & ReportFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllResolvedReportsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllResolvedReportsQuery = (
  { __typename?: 'Query' }
  & { getAllResolvedReports?: Maybe<(
    { __typename?: 'PaginatedReportResponse' }
    & { data: Array<(
      { __typename?: 'Report' }
      & ReportFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllDismissedReportsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllDismissedReportsQuery = (
  { __typename?: 'Query' }
  & { getAllDismissedReports?: Maybe<(
    { __typename?: 'PaginatedReportResponse' }
    & { data: Array<(
      { __typename?: 'Report' }
      & ReportFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetReportQueryVariables = Exact<{
  reportId: Scalars['String'];
}>;


export type GetReportQuery = (
  { __typename?: 'Query' }
  & { getReport?: Maybe<(
    { __typename?: 'Report' }
    & ReportFragmentFragment
  )> }
);

export type ChangeReportStatusMutationVariables = Exact<{
  reportId: Scalars['String'];
  input: ReportStatusInput;
}>;


export type ChangeReportStatusMutation = (
  { __typename?: 'Mutation' }
  & { changeReportStatus?: Maybe<(
    { __typename?: 'Report' }
    & ReportFragmentFragment
  )> }
);

export type EditAdsSettingsMutationVariables = Exact<{
  options: AdsSettingsInput;
}>;


export type EditAdsSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editAdsSettings: (
    { __typename?: 'Settings' }
    & Pick<Settings, 'id' | 'key' | 'value'>
  ) }
);

export type EditBusinessSettingsMutationVariables = Exact<{
  options: BusinessSettingsInput;
}>;


export type EditBusinessSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editBusinessSettings: (
    { __typename?: 'Settings' }
    & Pick<Settings, 'id' | 'key' | 'value'>
  ) }
);

export type EditCaptchaSettingsMutationVariables = Exact<{
  options: CaptchaSettingsInput;
}>;


export type EditCaptchaSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editCaptchaSettings: (
    { __typename?: 'Settings' }
    & Pick<Settings, 'id' | 'key' | 'value'>
  ) }
);

export type EditEmailSettingsMutationVariables = Exact<{
  options: EmailSettingsInput;
}>;


export type EditEmailSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editEmailSettings: (
    { __typename?: 'Settings' }
    & Pick<Settings, 'id' | 'key' | 'value'>
  ) }
);

export type EditFacebookSettingsMutationVariables = Exact<{
  options: FacebookSettingsInput;
}>;


export type EditFacebookSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editFacebookSettings: (
    { __typename?: 'Settings' }
    & Pick<Settings, 'id' | 'key' | 'value'>
  ) }
);

export type EditLinkSettingsMutationVariables = Exact<{
  options: LinkSettingsInput;
}>;


export type EditLinkSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editLinkSettings: (
    { __typename?: 'Settings' }
    & Pick<Settings, 'id' | 'key' | 'value'>
  ) }
);

export type EditMainSettingsMutationVariables = Exact<{
  options: MainSettingsInput;
}>;


export type EditMainSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editMainSettings: (
    { __typename?: 'Settings' }
    & Pick<Settings, 'id' | 'key' | 'value'>
  ) }
);

export type EditNotificationSettingsMutationVariables = Exact<{
  options: NotificationSettingsInput;
}>;


export type EditNotificationSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editNotificationSettings: (
    { __typename?: 'Settings' }
    & Pick<Settings, 'id' | 'key' | 'value'>
  ) }
);

export type EditPaymentSettingsMutationVariables = Exact<{
  options: PaymentSettingsInput;
}>;


export type EditPaymentSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editPaymentSettings: (
    { __typename?: 'Settings' }
    & Pick<Settings, 'id' | 'key' | 'value'>
  ) }
);

export type EditSocialSettingsMutationVariables = Exact<{
  options: SocialSettingsInput;
}>;


export type EditSocialSettingsMutation = (
  { __typename?: 'Mutation' }
  & { editSocialSettings: (
    { __typename?: 'Settings' }
    & Pick<Settings, 'id' | 'key' | 'value'>
  ) }
);

export type GetSettingsByKeyQueryVariables = Exact<{
  key: Scalars['String'];
}>;


export type GetSettingsByKeyQuery = (
  { __typename?: 'Query' }
  & { getSettingsByKey: (
    { __typename?: 'AdsSystemSettings' }
    & Pick<AdsSystemSettings, 'header' | 'footer' | 'biolinkPageHeader' | 'biolinkPageFooter'>
  ) | (
    { __typename?: 'LinkSystemSettings' }
    & Pick<LinkSystemSettings, 'branding' | 'enableLinkShortenerSystem' | 'enablePhishtank' | 'enableGoogleSafeBrowsing'>
  ) | (
    { __typename?: 'MainSystemSettings' }
    & Pick<MainSystemSettings, 'title' | 'defaultLanguage' | 'defaultTimezone' | 'enableEmailConfirmation' | 'enableNewUserRegistration' | 'termsAndConditionsUrl' | 'privacyPolicyUrl'>
  ) | (
    { __typename?: 'EmailSystemSettings' }
    & Pick<EmailSystemSettings, 'fromName' | 'fromEmail'>
  ) | (
    { __typename?: 'SocialSystemSettings' }
    & Pick<SocialSystemSettings, 'youtube' | 'facebook' | 'twitter' | 'instagram'>
  ) | (
    { __typename?: 'CaptchaSystemSettings' }
    & Pick<CaptchaSystemSettings, 'captchaType' | 'enableCaptchaOnLoginPage' | 'enableCaptchaOnRegisterPage' | 'enableCaptchaOnLostPasswordPage' | 'enableCaptchaOnResendActivationPage'>
  ) | (
    { __typename?: 'PaymentSystemSettings' }
    & Pick<PaymentSystemSettings, 'enablePaymentSystem' | 'enabledAcceptingPaymentType' | 'brandName' | 'currency' | 'enableDiscountOrRedeemableCode' | 'enableTaxesAndBilling' | 'enablePaypal' | 'enableStripe'>
  ) | (
    { __typename?: 'BusinessSystemSettings' }
    & Pick<BusinessSystemSettings, 'enableInvoice' | 'name' | 'address' | 'city' | 'country' | 'zipCode' | 'email' | 'phone' | 'taxType' | 'taxId'>
  ) | (
    { __typename?: 'FacebookSystemSettings' }
    & Pick<FacebookSystemSettings, 'enableFacebookLogin'>
  ) | (
    { __typename?: 'NotificationSystemSettings' }
    & Pick<NotificationSystemSettings, 'emailsToBeNotified' | 'emailOnNewUser' | 'emailOnNewPayment'>
  ) }
);

export type SupportFragmentFragment = (
  { __typename?: 'Support' }
  & Pick<Support, 'id' | 'fullName' | 'email' | 'phoneNumber' | 'company' | 'subject' | 'message' | 'status' | 'supportReply' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )> }
);

export type GetAllPendingSupportsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllPendingSupportsQuery = (
  { __typename?: 'Query' }
  & { getAllPendingSupports?: Maybe<(
    { __typename?: 'PaginatedSupportResponse' }
    & { data: Array<(
      { __typename?: 'Support' }
      & SupportFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllResolvedSupportsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllResolvedSupportsQuery = (
  { __typename?: 'Query' }
  & { getAllResolvedSupports?: Maybe<(
    { __typename?: 'PaginatedSupportResponse' }
    & { data: Array<(
      { __typename?: 'Support' }
      & SupportFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllDismissedSupportsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllDismissedSupportsQuery = (
  { __typename?: 'Query' }
  & { getAllDismissedSupports?: Maybe<(
    { __typename?: 'PaginatedSupportResponse' }
    & { data: Array<(
      { __typename?: 'Support' }
      & SupportFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetSupportQueryVariables = Exact<{
  supportId: Scalars['String'];
}>;


export type GetSupportQuery = (
  { __typename?: 'Query' }
  & { getSupport?: Maybe<(
    { __typename?: 'Support' }
    & SupportFragmentFragment
  )> }
);

export type ReplyToSupportMutationVariables = Exact<{
  supportId: Scalars['String'];
  input: SupportAdminInput;
}>;


export type ReplyToSupportMutation = (
  { __typename?: 'Mutation' }
  & { replyToSupport?: Maybe<(
    { __typename?: 'Support' }
    & SupportFragmentFragment
  )> }
);

export type TaxFragmentFragment = (
  { __typename?: 'Tax' }
  & Pick<Tax, 'id' | 'internalName' | 'name' | 'description' | 'value' | 'valueType' | 'type' | 'billingFor' | 'countries' | 'createdAt' | 'updatedAt' | 'deletedAt'>
);

export type GetAllTaxesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllTaxesQuery = (
  { __typename?: 'Query' }
  & { getAllTaxes?: Maybe<(
    { __typename?: 'PaginatedTaxResponse' }
    & { data: Array<(
      { __typename?: 'Tax' }
      & TaxFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetTaxQueryVariables = Exact<{
  taxId: Scalars['String'];
}>;


export type GetTaxQuery = (
  { __typename?: 'Query' }
  & { getTax?: Maybe<(
    { __typename?: 'Tax' }
    & TaxFragmentFragment
  )> }
);

export type AddTaxMutationVariables = Exact<{
  input: NewTaxInput;
}>;


export type AddTaxMutation = (
  { __typename?: 'Mutation' }
  & { addTax?: Maybe<(
    { __typename?: 'Tax' }
    & TaxFragmentFragment
  )> }
);

export type EditTaxMutationVariables = Exact<{
  taxId: Scalars['String'];
  input: NewTaxInput;
}>;


export type EditTaxMutation = (
  { __typename?: 'Mutation' }
  & { editTax?: Maybe<(
    { __typename?: 'Tax' }
    & TaxFragmentFragment
  )> }
);

export type DeleteTaxMutationVariables = Exact<{
  taxId: Scalars['String'];
}>;


export type DeleteTaxMutation = (
  { __typename?: 'Mutation' }
  & { deleteTax?: Maybe<(
    { __typename?: 'Tax' }
    & TaxFragmentFragment
  )> }
);

export type UserDetailsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'emailVerifiedAt' | 'lastActiveTill' | 'planExpirationDate' | 'planTrialDone' | 'planType' | 'usedReferralsToPurchasePlan' | 'language' | 'timezone' | 'lastIPAddress' | 'lastUserAgent' | 'country' | 'totalLogin' | 'currentBiolinkId' | 'availableBalance' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { billing?: Maybe<(
    { __typename?: 'Billing' }
    & Pick<Billing, 'type' | 'name' | 'address1' | 'address2' | 'city' | 'state' | 'country' | 'zip' | 'phone'>
  )>, plan?: Maybe<(
    { __typename?: 'Plan' }
    & Pick<Plan, 'id' | 'name'>
  )>, adminRole?: Maybe<(
    { __typename?: 'AdminRole' }
    & Pick<AdminRole, 'id' | 'roleName'>
  )>, registeredByCode?: Maybe<(
    { __typename?: 'Code' }
    & Pick<Code, 'id' | 'code'>
  )> }
);

export type UserListDetailsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'name' | 'email' | 'emailVerifiedAt' | 'lastActiveTill' | 'planExpirationDate' | 'planType' | 'country' | 'availableBalance' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { plan?: Maybe<(
    { __typename?: 'Plan' }
    & Pick<Plan, 'id' | 'name'>
  )>, adminRole?: Maybe<(
    { __typename?: 'AdminRole' }
    & Pick<AdminRole, 'id' | 'roleName'>
  )> }
);

export type GetAllUsersQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllUsersQuery = (
  { __typename?: 'Query' }
  & { getAllUsers?: Maybe<(
    { __typename?: 'PaginatedUserResponse' }
    & { data: Array<(
      { __typename?: 'User' }
      & UserListDetailsFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllAdminsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllAdminsQuery = (
  { __typename?: 'Query' }
  & { getAllAdmins?: Maybe<(
    { __typename?: 'PaginatedUserResponse' }
    & { data: Array<(
      { __typename?: 'User' }
      & UserListDetailsFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { getUser?: Maybe<(
    { __typename?: 'User' }
    & UserDetailsFragment
  )> }
);

export type GetUserSummaryCountsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserSummaryCountsQuery = (
  { __typename?: 'Query' }
  & { getUserSummaryCounts?: Maybe<(
    { __typename?: 'UserTotalCountsResponse' }
    & Pick<UserTotalCountsResponse, 'totalBiolinks' | 'totalShortenedLinks' | 'totalReferralCodes' | 'totalPayed'>
  )> }
);

export type CreateUserMutationVariables = Exact<{
  input: NewUserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { addNewUser?: Maybe<(
    { __typename?: 'User' }
    & UserDetailsFragment
  )> }
);

export type EditUserMutationVariables = Exact<{
  userId: Scalars['String'];
  input: NewUserInput;
}>;


export type EditUserMutation = (
  { __typename?: 'Mutation' }
  & { editUser?: Maybe<(
    { __typename?: 'User' }
    & UserDetailsFragment
  )> }
);

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['String'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser?: Maybe<(
    { __typename?: 'User' }
    & UserDetailsFragment
  )> }
);

export type UsernameFragmentFragment = (
  { __typename?: 'Username' }
  & Pick<Username, 'id' | 'username' | 'premiumType' | 'expireDate' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { owner?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )>, biolink?: Maybe<(
    { __typename?: 'Biolink' }
    & Pick<Biolink, 'id' | 'profilePhotoUrl'>
  )> }
);

export type GetAllUsernamesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllUsernamesQuery = (
  { __typename?: 'Query' }
  & { getAllUsernames?: Maybe<(
    { __typename?: 'PaginatedUsernameResponse' }
    & { data: Array<(
      { __typename?: 'Username' }
      & UsernameFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllPremiumUsernamesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllPremiumUsernamesQuery = (
  { __typename?: 'Query' }
  & { getAllPremiumUsernames?: Maybe<(
    { __typename?: 'PaginatedUsernameResponse' }
    & { data: Array<(
      { __typename?: 'Username' }
      & UsernameFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllTrademarkUsernamesQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllTrademarkUsernamesQuery = (
  { __typename?: 'Query' }
  & { getAllTrademarkUsernames?: Maybe<(
    { __typename?: 'PaginatedUsernameResponse' }
    & { data: Array<(
      { __typename?: 'Username' }
      & UsernameFragmentFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetUsernameQueryVariables = Exact<{
  usernameId: Scalars['String'];
}>;


export type GetUsernameQuery = (
  { __typename?: 'Query' }
  & { getUsername?: Maybe<(
    { __typename?: 'Username' }
    & UsernameFragmentFragment
  )> }
);

export type AddUsernameMutationVariables = Exact<{
  input: NewUsernameInput;
}>;


export type AddUsernameMutation = (
  { __typename?: 'Mutation' }
  & { addUsername?: Maybe<(
    { __typename?: 'Username' }
    & UsernameFragmentFragment
  )> }
);

export type EditUsernameMutationVariables = Exact<{
  usernameId: Scalars['String'];
  input: NewUsernameInput;
}>;


export type EditUsernameMutation = (
  { __typename?: 'Mutation' }
  & { editUsername?: Maybe<(
    { __typename?: 'Username' }
    & UsernameFragmentFragment
  )> }
);

export type DeleteUsernameMutationVariables = Exact<{
  usernameId: Scalars['String'];
}>;


export type DeleteUsernameMutation = (
  { __typename?: 'Mutation' }
  & { deleteUsername?: Maybe<(
    { __typename?: 'Username' }
    & UsernameFragmentFragment
  )> }
);

export type VerificationDetailsFragment = (
  { __typename?: 'Verification' }
  & Pick<Verification, 'id' | 'verificationStatus' | 'verifiedGovernmentId' | 'verifiedEmail' | 'verifiedPhoneNumber' | 'verifiedWorkEmail' | 'username' | 'firstName' | 'lastName' | 'mobileNumber' | 'workNumber' | 'email' | 'websiteLink' | 'instagramUrl' | 'twitterUrl' | 'linkedinUrl' | 'photoIdUrl' | 'businessDocumentUrl' | 'otherDocumentsUrl' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )>, biolink?: Maybe<(
    { __typename?: 'Biolink' }
    & Pick<Biolink, 'id' | 'profilePhotoUrl'>
  )>, category?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'categoryName'>
  )> }
);

export type VerificationListDetailsFragment = (
  { __typename?: 'Verification' }
  & Pick<Verification, 'id' | 'verificationStatus' | 'verifiedGovernmentId' | 'verifiedEmail' | 'verifiedPhoneNumber' | 'verifiedWorkEmail' | 'username' | 'createdAt' | 'updatedAt' | 'deletedAt'>
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'name' | 'email'>
  )>, biolink?: Maybe<(
    { __typename?: 'Biolink' }
    & Pick<Biolink, 'id' | 'profilePhotoUrl'>
  )>, category?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'categoryName'>
  )> }
);

export type GetAllPendingVerificationsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllPendingVerificationsQuery = (
  { __typename?: 'Query' }
  & { getAllPendingVerifications?: Maybe<(
    { __typename?: 'PaginatedVerificationResponse' }
    & { data: Array<(
      { __typename?: 'Verification' }
      & VerificationListDetailsFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllVerifiedVerificationsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllVerifiedVerificationsQuery = (
  { __typename?: 'Query' }
  & { getAllVerifiedVerifications?: Maybe<(
    { __typename?: 'PaginatedVerificationResponse' }
    & { data: Array<(
      { __typename?: 'Verification' }
      & VerificationListDetailsFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetAllRejectedVerificationsQueryVariables = Exact<{
  options: ConnectionArgs;
}>;


export type GetAllRejectedVerificationsQuery = (
  { __typename?: 'Query' }
  & { getAllRejectedVerifications?: Maybe<(
    { __typename?: 'PaginatedVerificationResponse' }
    & { data: Array<(
      { __typename?: 'Verification' }
      & VerificationListDetailsFragment
    )>, cursor: (
      { __typename?: 'Cursor' }
      & Pick<Cursor, 'beforeCursor' | 'afterCursor'>
    ) }
  )> }
);

export type GetVerificationQueryVariables = Exact<{
  verificationId: Scalars['String'];
}>;


export type GetVerificationQuery = (
  { __typename?: 'Query' }
  & { getVerification?: Maybe<(
    { __typename?: 'Verification' }
    & VerificationDetailsFragment
  )> }
);

export type ChangeVerificationStatusMutationVariables = Exact<{
  verificationId: Scalars['String'];
  input: VerificationStatusInput;
}>;


export type ChangeVerificationStatusMutation = (
  { __typename?: 'Mutation' }
  & { changeVerificationStatus?: Maybe<(
    { __typename?: 'Verification' }
    & VerificationDetailsFragment
  )> }
);

export type DeleteVerificationMutationVariables = Exact<{
  verificationId: Scalars['String'];
}>;


export type DeleteVerificationMutation = (
  { __typename?: 'Mutation' }
  & { deleteVerification?: Maybe<(
    { __typename?: 'Verification' }
    & VerificationDetailsFragment
  )> }
);

export const AdminRoleFragmentFragmentDoc = gql`
    fragment AdminRoleFragment on AdminRole {
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
  deletedAt
}
    `;
export const AuthUserFragmentDoc = gql`
    fragment AuthUser on User {
  id
  name
  email
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
  }
}
    `;
export const BiolinkDetailsFragmentDoc = gql`
    fragment BiolinkDetails on Biolink {
  id
  profilePhotoUrl
  coverPhotoUrl
  displayName
  city
  state
  country
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
    paypalLink
    venmoLink
    payoneerLink
  }
  verificationStatus
  verifiedGovernmentId
  verifiedEmail
  verifiedPhoneNumber
  verifiedWorkEmail
  featured
  changedUsername
  createdAt
  updatedAt
  deletedAt
  username {
    id
    username
  }
  user {
    id
    name
    email
  }
  category {
    id
    categoryName
  }
}
    `;
export const BiolinkListItemsFragmentDoc = gql`
    fragment BiolinkListItems on Biolink {
  id
  profilePhotoUrl
  displayName
  city
  state
  country
  verificationStatus
  verifiedGovernmentId
  verifiedEmail
  verifiedPhoneNumber
  verifiedWorkEmail
  featured
  createdAt
  updatedAt
  deletedAt
  username {
    id
    username
  }
  user {
    id
    name
    email
  }
  category {
    id
    categoryName
  }
}
    `;
export const BlacklistFragmentFragmentDoc = gql`
    fragment BlacklistFragment on BlackList {
  id
  blacklistType
  keyword
  reason
  createdAt
  updatedAt
  deletedAt
}
    `;
export const CategoryFragmentFragmentDoc = gql`
    fragment CategoryFragment on Category {
  id
  categoryName
  featured
  createdAt
  updatedAt
  deletedAt
}
    `;
export const CodeFragmentFragmentDoc = gql`
    fragment CodeFragment on Code {
  id
  type
  code
  discount
  quantity
  expireDate
  createdAt
  updatedAt
  deletedAt
  referrer {
    id
    name
    email
  }
}
    `;
export const LinkDetailsFragmentDoc = gql`
    fragment LinkDetails on Link {
  id
  linkType
  linkTitle
  linkImageUrl
  platform
  iconColorful
  iconMinimal
  featured
  url
  shortenedUrl
  startDate
  endDate
  enablePasswordProtection
  note
  createdAt
  updatedAt
  deletedAt
  user {
    id
    name
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
}
    `;
export const LinkListItemsFragmentDoc = gql`
    fragment LinkListItems on Link {
  id
  linkType
  linkTitle
  linkImageUrl
  platform
  featured
  url
  shortenedUrl
  createdAt
  updatedAt
  deletedAt
  user {
    id
    name
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
}
    `;
export const PaymentDetailsFragmentDoc = gql`
    fragment PaymentDetails on Payment {
  id
  paymentType
  paymentProvider
  amountPaid
  paymentCurrency
  paymentDetails {
    ... on StripeInvoiceObject {
      id
      object
      account_country
      account_name
      account_tax_ids
      amount_due
      amount_paid
      amount_remaining
      application_fee_amount
      attempt_count
      attempted
      auto_advance
      automatic_tax {
        enabled
        status
      }
      billing_reason
      charge
      collection_method
      created
      currency
      custom_fields
      customer
      customer_address
      customer_email
      customer_name
      customer_phone
      customer_address
      customer_shipping
      customer_tax_exempt
      customer_tax_ids
      default_payment_method
      default_source
      default_tax_rates
      description
      discount
      discounts
      due_date
      ending_balance
      footer
      hosted_invoice_url
      invoice_pdf
      last_finalization_error
      lines {
        object
        data {
          id
          object
          amount
          currency
          description
          discount_amounts
          discountable
          discounts
          livemode
          period {
            end
            start
          }
          plan {
            id
            object
            active
            aggregate_usage
            amount
            amount_decimal
            billing_scheme
            created
            currency
            interval
            interval_count
            livemode
            nickname
            product
            tiers_mode
            transform_usage
            trial_period_days
            usage_type
          }
          price {
            id
            object
            active
            billing_scheme
            created
            currency
            livemode
            lookup_key
            nickname
            product
            recurring {
              aggregate_usage
              interval
              interval_count
              trial_period_days
              usage_type
            }
            tax_behavior
            tiers_mode
            transform_quantity
            type
            unit_amount
            unit_amount_decimal
          }
          proration
          quantity
          subscription
          subscription_item
          tax_amounts
          tax_rates
          type
        }
        has_more
        total_count
        url
      }
      livemode
      next_payment_attempt
      number
      on_behalf_of
      paid
      payment_intent
      payment_settings {
        payment_method_options
        payment_method_types
      }
      period_end
      period_start
      post_payment_credit_notes_amount
      pre_payment_credit_notes_amount
      quote
      receipt_number
      starting_balance
      statement_descriptor
      status
      status_transitions {
        finalized_at
        marked_uncollectible_at
        paid_at
        voided_at
      }
      subscription
      subtotal
      tax
      total
      total_discount_amounts
      total_tax_amounts
      transfer_data
      webhooks_delivered_at
    }
    ... on PaypalPaymentRecord {
      id
      status
      payer {
        name {
          given_name
          surname
        }
        email_address
        payer_id
      }
      purchase_units {
        reference_id
        shipping {
          address {
            address_line_1
            address_line_2
            admin_area_2
            admin_area_1
            postal_code
            country_code
          }
        }
        payments {
          captures {
            id
            status
            amount {
              currency_code
              value
            }
            seller_protection {
              status
              dispute_categories
            }
            final_capture
            disbursement_mode
            seller_receivable_breakdown {
              gross_amount {
                currency_code
                value
              }
              paypal_fee {
                currency_code
                value
              }
              net_amount {
                currency_code
                value
              }
            }
            create_time
            update_time
            links {
              href
              rel
              method
            }
          }
        }
      }
      links {
        href
        rel
        method
      }
    }
  }
  createdAt
  user {
    id
    name
    email
  }
  order {
    id
    description
    price
  }
  plan {
    id
    name
  }
}
    `;
export const PaymentListDetailsFragmentDoc = gql`
    fragment PaymentListDetails on Payment {
  id
  paymentType
  paymentProvider
  amountPaid
  paymentCurrency
  createdAt
  user {
    id
    name
    email
  }
}
    `;
export const PlanDetailsFragmentDoc = gql`
    fragment PlanDetails on Plan {
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
  enabledStatus
  visibilityStatus
  createdAt
  updatedAt
  deletedAt
}
    `;
export const PlanListDetailsFragmentDoc = gql`
    fragment PlanListDetails on Plan {
  id
  name
  monthlyPrice
  annualPrice
  enabledStatus
  visibilityStatus
  createdAt
  updatedAt
  deletedAt
}
    `;
export const ReportFragmentFragmentDoc = gql`
    fragment ReportFragment on Report {
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
    name
    email
  }
}
    `;
export const SupportFragmentFragmentDoc = gql`
    fragment SupportFragment on Support {
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
  deletedAt
  user {
    id
    name
    email
  }
}
    `;
export const TaxFragmentFragmentDoc = gql`
    fragment TaxFragment on Tax {
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
  updatedAt
  deletedAt
}
    `;
export const UserDetailsFragmentDoc = gql`
    fragment UserDetails on User {
  id
  name
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
  planType
  usedReferralsToPurchasePlan
  language
  timezone
  lastIPAddress
  lastUserAgent
  country
  totalLogin
  currentBiolinkId
  availableBalance
  createdAt
  updatedAt
  deletedAt
  plan {
    id
    name
  }
  adminRole {
    id
    roleName
  }
  registeredByCode {
    id
    code
  }
}
    `;
export const UserListDetailsFragmentDoc = gql`
    fragment UserListDetails on User {
  id
  name
  email
  emailVerifiedAt
  lastActiveTill
  planExpirationDate
  planType
  country
  availableBalance
  createdAt
  updatedAt
  deletedAt
  plan {
    id
    name
  }
  adminRole {
    id
    roleName
  }
}
    `;
export const UsernameFragmentFragmentDoc = gql`
    fragment UsernameFragment on Username {
  id
  username
  premiumType
  expireDate
  createdAt
  updatedAt
  deletedAt
  owner {
    id
    name
    email
  }
  biolink {
    id
    profilePhotoUrl
  }
}
    `;
export const VerificationDetailsFragmentDoc = gql`
    fragment VerificationDetails on Verification {
  id
  verificationStatus
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
  instagramUrl
  twitterUrl
  linkedinUrl
  photoIdUrl
  businessDocumentUrl
  otherDocumentsUrl
  createdAt
  updatedAt
  deletedAt
  user {
    id
    name
    email
  }
  biolink {
    id
    profilePhotoUrl
  }
  category {
    id
    categoryName
  }
}
    `;
export const VerificationListDetailsFragmentDoc = gql`
    fragment VerificationListDetails on Verification {
  id
  verificationStatus
  verifiedGovernmentId
  verifiedEmail
  verifiedPhoneNumber
  verifiedWorkEmail
  username
  createdAt
  updatedAt
  deletedAt
  user {
    id
    name
    email
  }
  biolink {
    id
    profilePhotoUrl
  }
  category {
    id
    categoryName
  }
}
    `;
export const GetAllAdminRolesDocument = gql`
    query GetAllAdminRoles($options: ConnectionArgs!) {
  getAllAdminRoles(options: $options) {
    data {
      ...AdminRoleFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${AdminRoleFragmentFragmentDoc}`;

export function useGetAllAdminRolesQuery(options: Omit<Urql.UseQueryArgs<GetAllAdminRolesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllAdminRolesQuery>({ query: GetAllAdminRolesDocument, ...options });
};
export const GetAdminRoleDocument = gql`
    query GetAdminRole($roleId: String!) {
  getAdminRole(id: $roleId) {
    ...AdminRoleFragment
  }
}
    ${AdminRoleFragmentFragmentDoc}`;

export function useGetAdminRoleQuery(options: Omit<Urql.UseQueryArgs<GetAdminRoleQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAdminRoleQuery>({ query: GetAdminRoleDocument, ...options });
};
export const CreateAdminRoleDocument = gql`
    mutation CreateAdminRole($input: NewAdminRoleInput!) {
  createAdminRole(options: $input) {
    ...AdminRoleFragment
  }
}
    ${AdminRoleFragmentFragmentDoc}`;

export function useCreateAdminRoleMutation() {
  return Urql.useMutation<CreateAdminRoleMutation, CreateAdminRoleMutationVariables>(CreateAdminRoleDocument);
};
export const EditAdminRoleDocument = gql`
    mutation EditAdminRole($roleId: String!, $input: NewAdminRoleInput!) {
  editAdminRole(id: $roleId, options: $input) {
    ...AdminRoleFragment
  }
}
    ${AdminRoleFragmentFragmentDoc}`;

export function useEditAdminRoleMutation() {
  return Urql.useMutation<EditAdminRoleMutation, EditAdminRoleMutationVariables>(EditAdminRoleDocument);
};
export const DeleteAdminRoleDocument = gql`
    mutation DeleteAdminRole($roleId: String!) {
  deleteAdminRole(id: $roleId) {
    ...AdminRoleFragment
  }
}
    ${AdminRoleFragmentFragmentDoc}`;

export function useDeleteAdminRoleMutation() {
  return Urql.useMutation<DeleteAdminRoleMutation, DeleteAdminRoleMutationVariables>(DeleteAdminRoleDocument);
};
export const LoginAdminDocument = gql`
    mutation LoginAdmin($options: LoginInput!) {
  loginAdmin(options: $options) {
    user {
      ...AuthUser
    }
    access {
      token
      expires
    }
  }
}
    ${AuthUserFragmentDoc}`;

export function useLoginAdminMutation() {
  return Urql.useMutation<LoginAdminMutation, LoginAdminMutationVariables>(LoginAdminDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const MeDocument = gql`
    query Me {
  me {
    ...AuthUser
  }
}
    ${AuthUserFragmentDoc}`;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const RefreshTokenDocument = gql`
    mutation RefreshToken {
  refreshToken {
    access {
      token
      expires
    }
  }
}
    `;

export function useRefreshTokenMutation() {
  return Urql.useMutation<RefreshTokenMutation, RefreshTokenMutationVariables>(RefreshTokenDocument);
};
export const GetAllBiolinksDocument = gql`
    query GetAllBiolinks($options: ConnectionArgs!) {
  getAllBiolinks(options: $options) {
    data {
      ...BiolinkListItems
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${BiolinkListItemsFragmentDoc}`;

export function useGetAllBiolinksQuery(options: Omit<Urql.UseQueryArgs<GetAllBiolinksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllBiolinksQuery>({ query: GetAllBiolinksDocument, ...options });
};
export const GetAllDirectoriesDocument = gql`
    query GetAllDirectories($options: ConnectionArgs!) {
  getAllDirectories(options: $options) {
    data {
      ...BiolinkListItems
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${BiolinkListItemsFragmentDoc}`;

export function useGetAllDirectoriesQuery(options: Omit<Urql.UseQueryArgs<GetAllDirectoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllDirectoriesQuery>({ query: GetAllDirectoriesDocument, ...options });
};
export const GetBiolinkDocument = gql`
    query GetBiolink($biolinkId: String!) {
  getBiolink(id: $biolinkId) {
    ...BiolinkDetails
  }
}
    ${BiolinkDetailsFragmentDoc}`;

export function useGetBiolinkQuery(options: Omit<Urql.UseQueryArgs<GetBiolinkQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetBiolinkQuery>({ query: GetBiolinkDocument, ...options });
};
export const CreateBiolinkDocument = gql`
    mutation CreateBiolink($input: BiolinkAdminInput!) {
  createBiolink(options: $input) {
    ...BiolinkDetails
  }
}
    ${BiolinkDetailsFragmentDoc}`;

export function useCreateBiolinkMutation() {
  return Urql.useMutation<CreateBiolinkMutation, CreateBiolinkMutationVariables>(CreateBiolinkDocument);
};
export const EditBiolinkDocument = gql`
    mutation EditBiolink($id: String!, $input: BiolinkAdminInput!) {
  editBiolink(id: $id, options: $input) {
    ...BiolinkDetails
  }
}
    ${BiolinkDetailsFragmentDoc}`;

export function useEditBiolinkMutation() {
  return Urql.useMutation<EditBiolinkMutation, EditBiolinkMutationVariables>(EditBiolinkDocument);
};
export const DeleteBiolinkDocument = gql`
    mutation DeleteBiolink($id: String!) {
  removeBiolink(id: $id) {
    ...BiolinkDetails
  }
}
    ${BiolinkDetailsFragmentDoc}`;

export function useDeleteBiolinkMutation() {
  return Urql.useMutation<DeleteBiolinkMutation, DeleteBiolinkMutationVariables>(DeleteBiolinkDocument);
};
export const GetAllBlacklistedEmailsDocument = gql`
    query GetAllBlacklistedEmails($options: ConnectionArgs!) {
  getAllBlackListedEmails(options: $options) {
    data {
      ...BlacklistFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${BlacklistFragmentFragmentDoc}`;

export function useGetAllBlacklistedEmailsQuery(options: Omit<Urql.UseQueryArgs<GetAllBlacklistedEmailsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllBlacklistedEmailsQuery>({ query: GetAllBlacklistedEmailsDocument, ...options });
};
export const GetAllBlacklistedBadWordsDocument = gql`
    query GetAllBlacklistedBadWords($options: ConnectionArgs!) {
  getAllBlackListedBadWords(options: $options) {
    data {
      ...BlacklistFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${BlacklistFragmentFragmentDoc}`;

export function useGetAllBlacklistedBadWordsQuery(options: Omit<Urql.UseQueryArgs<GetAllBlacklistedBadWordsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllBlacklistedBadWordsQuery>({ query: GetAllBlacklistedBadWordsDocument, ...options });
};
export const GetAllBlacklistedUsernamesDocument = gql`
    query GetAllBlacklistedUsernames($options: ConnectionArgs!) {
  getAllBlackListedUsernames(options: $options) {
    data {
      ...BlacklistFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${BlacklistFragmentFragmentDoc}`;

export function useGetAllBlacklistedUsernamesQuery(options: Omit<Urql.UseQueryArgs<GetAllBlacklistedUsernamesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllBlacklistedUsernamesQuery>({ query: GetAllBlacklistedUsernamesDocument, ...options });
};
export const GetBlacklistDocument = gql`
    query GetBlacklist($blacklistId: String!) {
  getBlackList(blackListId: $blacklistId) {
    ...BlacklistFragment
  }
}
    ${BlacklistFragmentFragmentDoc}`;

export function useGetBlacklistQuery(options: Omit<Urql.UseQueryArgs<GetBlacklistQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetBlacklistQuery>({ query: GetBlacklistDocument, ...options });
};
export const AddBlacklistDocument = gql`
    mutation AddBlacklist($input: NewBlackListInput!) {
  addBlackList(options: $input) {
    ...BlacklistFragment
  }
}
    ${BlacklistFragmentFragmentDoc}`;

export function useAddBlacklistMutation() {
  return Urql.useMutation<AddBlacklistMutation, AddBlacklistMutationVariables>(AddBlacklistDocument);
};
export const EditBlacklistDocument = gql`
    mutation EditBlacklist($blacklistId: String!, $input: NewBlackListInput!) {
  editBlackList(blackListId: $blacklistId, options: $input) {
    ...BlacklistFragment
  }
}
    ${BlacklistFragmentFragmentDoc}`;

export function useEditBlacklistMutation() {
  return Urql.useMutation<EditBlacklistMutation, EditBlacklistMutationVariables>(EditBlacklistDocument);
};
export const DeleteBlacklistDocument = gql`
    mutation DeleteBlacklist($blacklistId: String!) {
  deleteBlackList(blackListId: $blacklistId) {
    ...BlacklistFragment
  }
}
    ${BlacklistFragmentFragmentDoc}`;

export function useDeleteBlacklistMutation() {
  return Urql.useMutation<DeleteBlacklistMutation, DeleteBlacklistMutationVariables>(DeleteBlacklistDocument);
};
export const GetAllCategoriesDocument = gql`
    query GetAllCategories($options: ConnectionArgs!) {
  getAllCategories(options: $options) {
    data {
      ...CategoryFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${CategoryFragmentFragmentDoc}`;

export function useGetAllCategoriesQuery(options: Omit<Urql.UseQueryArgs<GetAllCategoriesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllCategoriesQuery>({ query: GetAllCategoriesDocument, ...options });
};
export const GetCategoryDocument = gql`
    query GetCategory($categoryId: String!) {
  getCategory(id: $categoryId) {
    ...CategoryFragment
  }
}
    ${CategoryFragmentFragmentDoc}`;

export function useGetCategoryQuery(options: Omit<Urql.UseQueryArgs<GetCategoryQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetCategoryQuery>({ query: GetCategoryDocument, ...options });
};
export const CreateCategoryDocument = gql`
    mutation CreateCategory($input: NewCategoryInput!) {
  createCategory(options: $input) {
    ...CategoryFragment
  }
}
    ${CategoryFragmentFragmentDoc}`;

export function useCreateCategoryMutation() {
  return Urql.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument);
};
export const EditCategoryDocument = gql`
    mutation EditCategory($categoryId: String!, $input: NewCategoryInput!) {
  editCategory(id: $categoryId, options: $input) {
    ...CategoryFragment
  }
}
    ${CategoryFragmentFragmentDoc}`;

export function useEditCategoryMutation() {
  return Urql.useMutation<EditCategoryMutation, EditCategoryMutationVariables>(EditCategoryDocument);
};
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($categoryId: String!) {
  deleteCategory(id: $categoryId) {
    ...CategoryFragment
  }
}
    ${CategoryFragmentFragmentDoc}`;

export function useDeleteCategoryMutation() {
  return Urql.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument);
};
export const GetAllDiscountsDocument = gql`
    query GetAllDiscounts($options: ConnectionArgs!) {
  getAllDiscounts(options: $options) {
    data {
      ...CodeFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${CodeFragmentFragmentDoc}`;

export function useGetAllDiscountsQuery(options: Omit<Urql.UseQueryArgs<GetAllDiscountsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllDiscountsQuery>({ query: GetAllDiscountsDocument, ...options });
};
export const GetAllReferralsDocument = gql`
    query GetAllReferrals($options: ConnectionArgs!) {
  getAllReferrals(options: $options) {
    data {
      ...CodeFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${CodeFragmentFragmentDoc}`;

export function useGetAllReferralsQuery(options: Omit<Urql.UseQueryArgs<GetAllReferralsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllReferralsQuery>({ query: GetAllReferralsDocument, ...options });
};
export const GetAllCodesDocument = gql`
    query GetAllCodes($options: ConnectionArgs!) {
  getAllCodes(options: $options) {
    data {
      ...CodeFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${CodeFragmentFragmentDoc}`;

export function useGetAllCodesQuery(options: Omit<Urql.UseQueryArgs<GetAllCodesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllCodesQuery>({ query: GetAllCodesDocument, ...options });
};
export const GetCodeDocument = gql`
    query GetCode($codeId: String!) {
  getCode(codeId: $codeId) {
    ...CodeFragment
  }
}
    ${CodeFragmentFragmentDoc}`;

export function useGetCodeQuery(options: Omit<Urql.UseQueryArgs<GetCodeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetCodeQuery>({ query: GetCodeDocument, ...options });
};
export const CreateCodeDocument = gql`
    mutation CreateCode($input: NewCodeInput!) {
  addCode(options: $input) {
    ...CodeFragment
  }
}
    ${CodeFragmentFragmentDoc}`;

export function useCreateCodeMutation() {
  return Urql.useMutation<CreateCodeMutation, CreateCodeMutationVariables>(CreateCodeDocument);
};
export const EditCodeDocument = gql`
    mutation EditCode($codeId: String!, $input: NewCodeInput!) {
  editCode(codeId: $codeId, options: $input) {
    ...CodeFragment
  }
}
    ${CodeFragmentFragmentDoc}`;

export function useEditCodeMutation() {
  return Urql.useMutation<EditCodeMutation, EditCodeMutationVariables>(EditCodeDocument);
};
export const DeleteCodeDocument = gql`
    mutation DeleteCode($codeId: String!) {
  deleteCode(codeId: $codeId) {
    ...CodeFragment
  }
}
    ${CodeFragmentFragmentDoc}`;

export function useDeleteCodeMutation() {
  return Urql.useMutation<DeleteCodeMutation, DeleteCodeMutationVariables>(DeleteCodeDocument);
};
export const GetDashboardTotalCountsDocument = gql`
    query GetDashboardTotalCounts {
  getDashboardTotalCounts {
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
    `;

export function useGetDashboardTotalCountsQuery(options: Omit<Urql.UseQueryArgs<GetDashboardTotalCountsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetDashboardTotalCountsQuery>({ query: GetDashboardTotalCountsDocument, ...options });
};
export const GetLast30DaysEarningChartDataDocument = gql`
    query GetLast30DaysEarningChartData {
  getLast30DaysEarningChartData {
    result {
      earned
      date
    }
  }
}
    `;

export function useGetLast30DaysEarningChartDataQuery(options: Omit<Urql.UseQueryArgs<GetLast30DaysEarningChartDataQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetLast30DaysEarningChartDataQuery>({ query: GetLast30DaysEarningChartDataDocument, ...options });
};
export const GetUsersAndAdminsCountDataDocument = gql`
    query GetUsersAndAdminsCountData {
  getUsersAndAdminsCountData {
    totalUsers
    totalAdmins
  }
}
    `;

export function useGetUsersAndAdminsCountDataQuery(options: Omit<Urql.UseQueryArgs<GetUsersAndAdminsCountDataQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUsersAndAdminsCountDataQuery>({ query: GetUsersAndAdminsCountDataDocument, ...options });
};
export const GetAllLinksDocument = gql`
    query GetAllLinks($options: ConnectionArgs!) {
  getAllLinks(options: $options) {
    data {
      ...LinkListItems
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${LinkListItemsFragmentDoc}`;

export function useGetAllLinksQuery(options: Omit<Urql.UseQueryArgs<GetAllLinksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllLinksQuery>({ query: GetAllLinksDocument, ...options });
};
export const GetAllEmbedsDocument = gql`
    query GetAllEmbeds($options: ConnectionArgs!) {
  getAllEmbeds(options: $options) {
    data {
      ...LinkListItems
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${LinkListItemsFragmentDoc}`;

export function useGetAllEmbedsQuery(options: Omit<Urql.UseQueryArgs<GetAllEmbedsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllEmbedsQuery>({ query: GetAllEmbedsDocument, ...options });
};
export const GetAllSocialLinksDocument = gql`
    query GetAllSocialLinks($options: ConnectionArgs!) {
  getAllSocialLinks(options: $options) {
    data {
      ...LinkListItems
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${LinkListItemsFragmentDoc}`;

export function useGetAllSocialLinksQuery(options: Omit<Urql.UseQueryArgs<GetAllSocialLinksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllSocialLinksQuery>({ query: GetAllSocialLinksDocument, ...options });
};
export const GetLinkDocument = gql`
    query GetLink($linkId: String!) {
  getLink(linkId: $linkId) {
    ...LinkDetails
  }
}
    ${LinkDetailsFragmentDoc}`;

export function useGetLinkQuery(options: Omit<Urql.UseQueryArgs<GetLinkQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetLinkQuery>({ query: GetLinkDocument, ...options });
};
export const CreateLinkDocument = gql`
    mutation CreateLink($input: LinkAdminInput!) {
  createLink(options: $input) {
    ...LinkDetails
  }
}
    ${LinkDetailsFragmentDoc}`;

export function useCreateLinkMutation() {
  return Urql.useMutation<CreateLinkMutation, CreateLinkMutationVariables>(CreateLinkDocument);
};
export const EditLinkDocument = gql`
    mutation EditLink($id: String!, $input: LinkAdminInput!) {
  editLink(linkId: $id, options: $input) {
    ...LinkDetails
  }
}
    ${LinkDetailsFragmentDoc}`;

export function useEditLinkMutation() {
  return Urql.useMutation<EditLinkMutation, EditLinkMutationVariables>(EditLinkDocument);
};
export const DeleteLinkDocument = gql`
    mutation DeleteLink($id: String!) {
  deleteLink(linkId: $id) {
    ...LinkDetails
  }
}
    ${LinkDetailsFragmentDoc}`;

export function useDeleteLinkMutation() {
  return Urql.useMutation<DeleteLinkMutation, DeleteLinkMutationVariables>(DeleteLinkDocument);
};
export const GetAllPaymentsDocument = gql`
    query GetAllPayments($options: ConnectionArgs!) {
  getAllPayments(options: $options) {
    data {
      ...PaymentListDetails
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${PaymentListDetailsFragmentDoc}`;

export function useGetAllPaymentsQuery(options: Omit<Urql.UseQueryArgs<GetAllPaymentsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllPaymentsQuery>({ query: GetAllPaymentsDocument, ...options });
};
export const GetPaymentDocument = gql`
    query GetPayment($paymentId: String!) {
  getPayment(paymentId: $paymentId) {
    ...PaymentDetails
  }
}
    ${PaymentDetailsFragmentDoc}`;

export function useGetPaymentQuery(options: Omit<Urql.UseQueryArgs<GetPaymentQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPaymentQuery>({ query: GetPaymentDocument, ...options });
};
export const GetAllPlansDocument = gql`
    query GetAllPlans($options: ConnectionArgs!) {
  getAllPlans(options: $options) {
    data {
      ...PlanListDetails
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${PlanListDetailsFragmentDoc}`;

export function useGetAllPlansQuery(options: Omit<Urql.UseQueryArgs<GetAllPlansQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllPlansQuery>({ query: GetAllPlansDocument, ...options });
};
export const GetPlanDocument = gql`
    query GetPlan($planId: String!) {
  getPlan(id: $planId) {
    ...PlanDetails
  }
}
    ${PlanDetailsFragmentDoc}`;

export function useGetPlanQuery(options: Omit<Urql.UseQueryArgs<GetPlanQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetPlanQuery>({ query: GetPlanDocument, ...options });
};
export const CreatePlanDocument = gql`
    mutation CreatePlan($input: PlanInput!) {
  createPlan(options: $input) {
    ...PlanDetails
  }
}
    ${PlanDetailsFragmentDoc}`;

export function useCreatePlanMutation() {
  return Urql.useMutation<CreatePlanMutation, CreatePlanMutationVariables>(CreatePlanDocument);
};
export const EditPlanDocument = gql`
    mutation EditPlan($planId: String!, $input: PlanInput!) {
  editPlan(id: $planId, options: $input) {
    ...PlanDetails
  }
}
    ${PlanDetailsFragmentDoc}`;

export function useEditPlanMutation() {
  return Urql.useMutation<EditPlanMutation, EditPlanMutationVariables>(EditPlanDocument);
};
export const DeletePlanDocument = gql`
    mutation DeletePlan($planId: String!) {
  deletePlan(id: $planId) {
    ...PlanDetails
  }
}
    ${PlanDetailsFragmentDoc}`;

export function useDeletePlanMutation() {
  return Urql.useMutation<DeletePlanMutation, DeletePlanMutationVariables>(DeletePlanDocument);
};
export const GetAllPendingReportsDocument = gql`
    query GetAllPendingReports($options: ConnectionArgs!) {
  getAllPendingReports(options: $options) {
    data {
      ...ReportFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${ReportFragmentFragmentDoc}`;

export function useGetAllPendingReportsQuery(options: Omit<Urql.UseQueryArgs<GetAllPendingReportsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllPendingReportsQuery>({ query: GetAllPendingReportsDocument, ...options });
};
export const GetAllResolvedReportsDocument = gql`
    query GetAllResolvedReports($options: ConnectionArgs!) {
  getAllResolvedReports(options: $options) {
    data {
      ...ReportFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${ReportFragmentFragmentDoc}`;

export function useGetAllResolvedReportsQuery(options: Omit<Urql.UseQueryArgs<GetAllResolvedReportsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllResolvedReportsQuery>({ query: GetAllResolvedReportsDocument, ...options });
};
export const GetAllDismissedReportsDocument = gql`
    query GetAllDismissedReports($options: ConnectionArgs!) {
  getAllDismissedReports(options: $options) {
    data {
      ...ReportFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${ReportFragmentFragmentDoc}`;

export function useGetAllDismissedReportsQuery(options: Omit<Urql.UseQueryArgs<GetAllDismissedReportsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllDismissedReportsQuery>({ query: GetAllDismissedReportsDocument, ...options });
};
export const GetReportDocument = gql`
    query GetReport($reportId: String!) {
  getReport(reportId: $reportId) {
    ...ReportFragment
  }
}
    ${ReportFragmentFragmentDoc}`;

export function useGetReportQuery(options: Omit<Urql.UseQueryArgs<GetReportQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetReportQuery>({ query: GetReportDocument, ...options });
};
export const ChangeReportStatusDocument = gql`
    mutation ChangeReportStatus($reportId: String!, $input: ReportStatusInput!) {
  changeReportStatus(reportId: $reportId, options: $input) {
    ...ReportFragment
  }
}
    ${ReportFragmentFragmentDoc}`;

export function useChangeReportStatusMutation() {
  return Urql.useMutation<ChangeReportStatusMutation, ChangeReportStatusMutationVariables>(ChangeReportStatusDocument);
};
export const EditAdsSettingsDocument = gql`
    mutation EditAdsSettings($options: AdsSettingsInput!) {
  editAdsSettings(options: $options) {
    id
    key
    value
  }
}
    `;

export function useEditAdsSettingsMutation() {
  return Urql.useMutation<EditAdsSettingsMutation, EditAdsSettingsMutationVariables>(EditAdsSettingsDocument);
};
export const EditBusinessSettingsDocument = gql`
    mutation EditBusinessSettings($options: BusinessSettingsInput!) {
  editBusinessSettings(options: $options) {
    id
    key
    value
  }
}
    `;

export function useEditBusinessSettingsMutation() {
  return Urql.useMutation<EditBusinessSettingsMutation, EditBusinessSettingsMutationVariables>(EditBusinessSettingsDocument);
};
export const EditCaptchaSettingsDocument = gql`
    mutation EditCaptchaSettings($options: CaptchaSettingsInput!) {
  editCaptchaSettings(options: $options) {
    id
    key
    value
  }
}
    `;

export function useEditCaptchaSettingsMutation() {
  return Urql.useMutation<EditCaptchaSettingsMutation, EditCaptchaSettingsMutationVariables>(EditCaptchaSettingsDocument);
};
export const EditEmailSettingsDocument = gql`
    mutation EditEmailSettings($options: EmailSettingsInput!) {
  editEmailSettings(options: $options) {
    id
    key
    value
  }
}
    `;

export function useEditEmailSettingsMutation() {
  return Urql.useMutation<EditEmailSettingsMutation, EditEmailSettingsMutationVariables>(EditEmailSettingsDocument);
};
export const EditFacebookSettingsDocument = gql`
    mutation EditFacebookSettings($options: FacebookSettingsInput!) {
  editFacebookSettings(options: $options) {
    id
    key
    value
  }
}
    `;

export function useEditFacebookSettingsMutation() {
  return Urql.useMutation<EditFacebookSettingsMutation, EditFacebookSettingsMutationVariables>(EditFacebookSettingsDocument);
};
export const EditLinkSettingsDocument = gql`
    mutation EditLinkSettings($options: LinkSettingsInput!) {
  editLinkSettings(options: $options) {
    id
    key
    value
  }
}
    `;

export function useEditLinkSettingsMutation() {
  return Urql.useMutation<EditLinkSettingsMutation, EditLinkSettingsMutationVariables>(EditLinkSettingsDocument);
};
export const EditMainSettingsDocument = gql`
    mutation EditMainSettings($options: MainSettingsInput!) {
  editMainSettings(options: $options) {
    id
    key
    value
  }
}
    `;

export function useEditMainSettingsMutation() {
  return Urql.useMutation<EditMainSettingsMutation, EditMainSettingsMutationVariables>(EditMainSettingsDocument);
};
export const EditNotificationSettingsDocument = gql`
    mutation EditNotificationSettings($options: NotificationSettingsInput!) {
  editNotificationSettings(options: $options) {
    id
    key
    value
  }
}
    `;

export function useEditNotificationSettingsMutation() {
  return Urql.useMutation<EditNotificationSettingsMutation, EditNotificationSettingsMutationVariables>(EditNotificationSettingsDocument);
};
export const EditPaymentSettingsDocument = gql`
    mutation EditPaymentSettings($options: PaymentSettingsInput!) {
  editPaymentSettings(options: $options) {
    id
    key
    value
  }
}
    `;

export function useEditPaymentSettingsMutation() {
  return Urql.useMutation<EditPaymentSettingsMutation, EditPaymentSettingsMutationVariables>(EditPaymentSettingsDocument);
};
export const EditSocialSettingsDocument = gql`
    mutation EditSocialSettings($options: SocialSettingsInput!) {
  editSocialSettings(options: $options) {
    id
    key
    value
  }
}
    `;

export function useEditSocialSettingsMutation() {
  return Urql.useMutation<EditSocialSettingsMutation, EditSocialSettingsMutationVariables>(EditSocialSettingsDocument);
};
export const GetSettingsByKeyDocument = gql`
    query GetSettingsByKey($key: String!) {
  getSettingsByKey(key: $key) {
    ... on AdsSystemSettings {
      header
      footer
      biolinkPageHeader
      biolinkPageFooter
    }
    ... on LinkSystemSettings {
      branding
      enableLinkShortenerSystem
      enablePhishtank
      enableGoogleSafeBrowsing
    }
    ... on MainSystemSettings {
      title
      defaultLanguage
      defaultTimezone
      enableEmailConfirmation
      enableNewUserRegistration
      termsAndConditionsUrl
      privacyPolicyUrl
    }
    ... on EmailSystemSettings {
      fromName
      fromEmail
    }
    ... on SocialSystemSettings {
      youtube
      facebook
      twitter
      instagram
    }
    ... on CaptchaSystemSettings {
      captchaType
      enableCaptchaOnLoginPage
      enableCaptchaOnRegisterPage
      enableCaptchaOnLostPasswordPage
      enableCaptchaOnResendActivationPage
    }
    ... on PaymentSystemSettings {
      enablePaymentSystem
      enabledAcceptingPaymentType
      brandName
      currency
      enableDiscountOrRedeemableCode
      enableTaxesAndBilling
      enablePaypal
      enableStripe
    }
    ... on BusinessSystemSettings {
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
    ... on FacebookSystemSettings {
      enableFacebookLogin
    }
    ... on NotificationSystemSettings {
      emailsToBeNotified
      emailOnNewUser
      emailOnNewPayment
    }
  }
}
    `;

export function useGetSettingsByKeyQuery(options: Omit<Urql.UseQueryArgs<GetSettingsByKeyQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetSettingsByKeyQuery>({ query: GetSettingsByKeyDocument, ...options });
};
export const GetAllPendingSupportsDocument = gql`
    query GetAllPendingSupports($options: ConnectionArgs!) {
  getAllPendingSupports(options: $options) {
    data {
      ...SupportFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${SupportFragmentFragmentDoc}`;

export function useGetAllPendingSupportsQuery(options: Omit<Urql.UseQueryArgs<GetAllPendingSupportsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllPendingSupportsQuery>({ query: GetAllPendingSupportsDocument, ...options });
};
export const GetAllResolvedSupportsDocument = gql`
    query GetAllResolvedSupports($options: ConnectionArgs!) {
  getAllResolvedSupports(options: $options) {
    data {
      ...SupportFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${SupportFragmentFragmentDoc}`;

export function useGetAllResolvedSupportsQuery(options: Omit<Urql.UseQueryArgs<GetAllResolvedSupportsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllResolvedSupportsQuery>({ query: GetAllResolvedSupportsDocument, ...options });
};
export const GetAllDismissedSupportsDocument = gql`
    query GetAllDismissedSupports($options: ConnectionArgs!) {
  getAllDismissedSupports(options: $options) {
    data {
      ...SupportFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${SupportFragmentFragmentDoc}`;

export function useGetAllDismissedSupportsQuery(options: Omit<Urql.UseQueryArgs<GetAllDismissedSupportsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllDismissedSupportsQuery>({ query: GetAllDismissedSupportsDocument, ...options });
};
export const GetSupportDocument = gql`
    query GetSupport($supportId: String!) {
  getSupport(supportId: $supportId) {
    ...SupportFragment
  }
}
    ${SupportFragmentFragmentDoc}`;

export function useGetSupportQuery(options: Omit<Urql.UseQueryArgs<GetSupportQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetSupportQuery>({ query: GetSupportDocument, ...options });
};
export const ReplyToSupportDocument = gql`
    mutation ReplyToSupport($supportId: String!, $input: SupportAdminInput!) {
  replyToSupport(supportId: $supportId, options: $input) {
    ...SupportFragment
  }
}
    ${SupportFragmentFragmentDoc}`;

export function useReplyToSupportMutation() {
  return Urql.useMutation<ReplyToSupportMutation, ReplyToSupportMutationVariables>(ReplyToSupportDocument);
};
export const GetAllTaxesDocument = gql`
    query GetAllTaxes($options: ConnectionArgs!) {
  getAllTaxes(options: $options) {
    data {
      ...TaxFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${TaxFragmentFragmentDoc}`;

export function useGetAllTaxesQuery(options: Omit<Urql.UseQueryArgs<GetAllTaxesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllTaxesQuery>({ query: GetAllTaxesDocument, ...options });
};
export const GetTaxDocument = gql`
    query GetTax($taxId: String!) {
  getTax(taxId: $taxId) {
    ...TaxFragment
  }
}
    ${TaxFragmentFragmentDoc}`;

export function useGetTaxQuery(options: Omit<Urql.UseQueryArgs<GetTaxQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetTaxQuery>({ query: GetTaxDocument, ...options });
};
export const AddTaxDocument = gql`
    mutation AddTax($input: NewTaxInput!) {
  addTax(options: $input) {
    ...TaxFragment
  }
}
    ${TaxFragmentFragmentDoc}`;

export function useAddTaxMutation() {
  return Urql.useMutation<AddTaxMutation, AddTaxMutationVariables>(AddTaxDocument);
};
export const EditTaxDocument = gql`
    mutation EditTax($taxId: String!, $input: NewTaxInput!) {
  editTax(taxId: $taxId, options: $input) {
    ...TaxFragment
  }
}
    ${TaxFragmentFragmentDoc}`;

export function useEditTaxMutation() {
  return Urql.useMutation<EditTaxMutation, EditTaxMutationVariables>(EditTaxDocument);
};
export const DeleteTaxDocument = gql`
    mutation DeleteTax($taxId: String!) {
  deleteTax(taxId: $taxId) {
    ...TaxFragment
  }
}
    ${TaxFragmentFragmentDoc}`;

export function useDeleteTaxMutation() {
  return Urql.useMutation<DeleteTaxMutation, DeleteTaxMutationVariables>(DeleteTaxDocument);
};
export const GetAllUsersDocument = gql`
    query GetAllUsers($options: ConnectionArgs!) {
  getAllUsers(options: $options) {
    data {
      ...UserListDetails
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${UserListDetailsFragmentDoc}`;

export function useGetAllUsersQuery(options: Omit<Urql.UseQueryArgs<GetAllUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllUsersQuery>({ query: GetAllUsersDocument, ...options });
};
export const GetAllAdminsDocument = gql`
    query GetAllAdmins($options: ConnectionArgs!) {
  getAllAdmins(options: $options) {
    data {
      ...UserListDetails
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${UserListDetailsFragmentDoc}`;

export function useGetAllAdminsQuery(options: Omit<Urql.UseQueryArgs<GetAllAdminsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllAdminsQuery>({ query: GetAllAdminsDocument, ...options });
};
export const GetUserDocument = gql`
    query GetUser($userId: String!) {
  getUser(id: $userId) {
    ...UserDetails
  }
}
    ${UserDetailsFragmentDoc}`;

export function useGetUserQuery(options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserQuery>({ query: GetUserDocument, ...options });
};
export const GetUserSummaryCountsDocument = gql`
    query GetUserSummaryCounts($userId: String!) {
  getUserSummaryCounts(userId: $userId) {
    totalBiolinks
    totalShortenedLinks
    totalReferralCodes
    totalPayed
  }
}
    `;

export function useGetUserSummaryCountsQuery(options: Omit<Urql.UseQueryArgs<GetUserSummaryCountsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUserSummaryCountsQuery>({ query: GetUserSummaryCountsDocument, ...options });
};
export const CreateUserDocument = gql`
    mutation CreateUser($input: NewUserInput!) {
  addNewUser(options: $input) {
    ...UserDetails
  }
}
    ${UserDetailsFragmentDoc}`;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const EditUserDocument = gql`
    mutation EditUser($userId: String!, $input: NewUserInput!) {
  editUser(id: $userId, options: $input) {
    ...UserDetails
  }
}
    ${UserDetailsFragmentDoc}`;

export function useEditUserMutation() {
  return Urql.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument);
};
export const DeleteUserDocument = gql`
    mutation DeleteUser($userId: String!) {
  deleteUser(id: $userId) {
    ...UserDetails
  }
}
    ${UserDetailsFragmentDoc}`;

export function useDeleteUserMutation() {
  return Urql.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument);
};
export const GetAllUsernamesDocument = gql`
    query GetAllUsernames($options: ConnectionArgs!) {
  getAllUsernames(options: $options) {
    data {
      ...UsernameFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${UsernameFragmentFragmentDoc}`;

export function useGetAllUsernamesQuery(options: Omit<Urql.UseQueryArgs<GetAllUsernamesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllUsernamesQuery>({ query: GetAllUsernamesDocument, ...options });
};
export const GetAllPremiumUsernamesDocument = gql`
    query GetAllPremiumUsernames($options: ConnectionArgs!) {
  getAllPremiumUsernames(options: $options) {
    data {
      ...UsernameFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${UsernameFragmentFragmentDoc}`;

export function useGetAllPremiumUsernamesQuery(options: Omit<Urql.UseQueryArgs<GetAllPremiumUsernamesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllPremiumUsernamesQuery>({ query: GetAllPremiumUsernamesDocument, ...options });
};
export const GetAllTrademarkUsernamesDocument = gql`
    query GetAllTrademarkUsernames($options: ConnectionArgs!) {
  getAllTrademarkUsernames(options: $options) {
    data {
      ...UsernameFragment
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${UsernameFragmentFragmentDoc}`;

export function useGetAllTrademarkUsernamesQuery(options: Omit<Urql.UseQueryArgs<GetAllTrademarkUsernamesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllTrademarkUsernamesQuery>({ query: GetAllTrademarkUsernamesDocument, ...options });
};
export const GetUsernameDocument = gql`
    query GetUsername($usernameId: String!) {
  getUsername(usernameId: $usernameId) {
    ...UsernameFragment
  }
}
    ${UsernameFragmentFragmentDoc}`;

export function useGetUsernameQuery(options: Omit<Urql.UseQueryArgs<GetUsernameQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUsernameQuery>({ query: GetUsernameDocument, ...options });
};
export const AddUsernameDocument = gql`
    mutation AddUsername($input: NewUsernameInput!) {
  addUsername(options: $input) {
    ...UsernameFragment
  }
}
    ${UsernameFragmentFragmentDoc}`;

export function useAddUsernameMutation() {
  return Urql.useMutation<AddUsernameMutation, AddUsernameMutationVariables>(AddUsernameDocument);
};
export const EditUsernameDocument = gql`
    mutation EditUsername($usernameId: String!, $input: NewUsernameInput!) {
  editUsername(usernameId: $usernameId, options: $input) {
    ...UsernameFragment
  }
}
    ${UsernameFragmentFragmentDoc}`;

export function useEditUsernameMutation() {
  return Urql.useMutation<EditUsernameMutation, EditUsernameMutationVariables>(EditUsernameDocument);
};
export const DeleteUsernameDocument = gql`
    mutation DeleteUsername($usernameId: String!) {
  deleteUsername(usernameId: $usernameId) {
    ...UsernameFragment
  }
}
    ${UsernameFragmentFragmentDoc}`;

export function useDeleteUsernameMutation() {
  return Urql.useMutation<DeleteUsernameMutation, DeleteUsernameMutationVariables>(DeleteUsernameDocument);
};
export const GetAllPendingVerificationsDocument = gql`
    query GetAllPendingVerifications($options: ConnectionArgs!) {
  getAllPendingVerifications(options: $options) {
    data {
      ...VerificationListDetails
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${VerificationListDetailsFragmentDoc}`;

export function useGetAllPendingVerificationsQuery(options: Omit<Urql.UseQueryArgs<GetAllPendingVerificationsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllPendingVerificationsQuery>({ query: GetAllPendingVerificationsDocument, ...options });
};
export const GetAllVerifiedVerificationsDocument = gql`
    query GetAllVerifiedVerifications($options: ConnectionArgs!) {
  getAllVerifiedVerifications(options: $options) {
    data {
      ...VerificationListDetails
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${VerificationListDetailsFragmentDoc}`;

export function useGetAllVerifiedVerificationsQuery(options: Omit<Urql.UseQueryArgs<GetAllVerifiedVerificationsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllVerifiedVerificationsQuery>({ query: GetAllVerifiedVerificationsDocument, ...options });
};
export const GetAllRejectedVerificationsDocument = gql`
    query GetAllRejectedVerifications($options: ConnectionArgs!) {
  getAllRejectedVerifications(options: $options) {
    data {
      ...VerificationListDetails
    }
    cursor {
      beforeCursor
      afterCursor
    }
  }
}
    ${VerificationListDetailsFragmentDoc}`;

export function useGetAllRejectedVerificationsQuery(options: Omit<Urql.UseQueryArgs<GetAllRejectedVerificationsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllRejectedVerificationsQuery>({ query: GetAllRejectedVerificationsDocument, ...options });
};
export const GetVerificationDocument = gql`
    query GetVerification($verificationId: String!) {
  getVerification(verificationId: $verificationId) {
    ...VerificationDetails
  }
}
    ${VerificationDetailsFragmentDoc}`;

export function useGetVerificationQuery(options: Omit<Urql.UseQueryArgs<GetVerificationQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetVerificationQuery>({ query: GetVerificationDocument, ...options });
};
export const ChangeVerificationStatusDocument = gql`
    mutation ChangeVerificationStatus($verificationId: String!, $input: VerificationStatusInput!) {
  changeVerificationStatus(verificationId: $verificationId, options: $input) {
    ...VerificationDetails
  }
}
    ${VerificationDetailsFragmentDoc}`;

export function useChangeVerificationStatusMutation() {
  return Urql.useMutation<ChangeVerificationStatusMutation, ChangeVerificationStatusMutationVariables>(ChangeVerificationStatusDocument);
};
export const DeleteVerificationDocument = gql`
    mutation DeleteVerification($verificationId: String!) {
  deleteVerification(verificationId: $verificationId) {
    ...VerificationDetails
  }
}
    ${VerificationDetailsFragmentDoc}`;

export function useDeleteVerificationMutation() {
  return Urql.useMutation<DeleteVerificationMutation, DeleteVerificationMutationVariables>(DeleteVerificationDocument);
};