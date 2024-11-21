type IntegrationApp = "Printer" | "BBL" | "MailChimp";

export interface UpdatePrinterIntegrationInput {
  value: string;
}
export interface Integration {
  id?: string;
  app: IntegrationApp;
  description: string;
  setting: UpdatePrinterIntegrationInput;
  shopId?: string;
  enabled?: boolean;
  imageUrl?: string;
}

export interface CreateIntegrationRequest extends Integration {}
export interface UpdateIntegrationRequest extends Integration {
  integrationId: string;
}
export interface GetIntegrationRequest {
  shopId?: string;
}

export interface CreateIntegrationForm extends CreateIntegrationRequest {
  settingValue?: string;
}
export interface UpdateIntegrationForm extends UpdateIntegrationRequest {
  settingValue?: string;
}
