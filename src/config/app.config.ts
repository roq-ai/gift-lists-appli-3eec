interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Admin', 'Team Member'],
  tenantName: 'Team',
  applicationName: 'Gift Lists Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage team_gift_list', 'Manage gift_list', 'Manage gift_item', 'Manage user', 'Manage team'],
  getQuoteUrl: 'https://app.roq.ai/proposal/94fdb8da-33a3-4a94-b003-fc47004b32ef',
};
