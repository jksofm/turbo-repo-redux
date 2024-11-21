export interface FormBranding {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image?: any;
  imageUrl?: string;
  address: string;
  email: string;
  phone: string;
  instagramLink: string;
  facebookLink: string;
  twitterLink: string;
  pinterestLink: string;
  privacyPolicyLink: string;
  submissionOptInMessage: string;
  formTitle: string;
  successMessage: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
}
export interface FormBrandingEdit extends FormBranding {
  shopId?: string;
}

export interface FormBrandingRequest {
  shopId?: string;
}
