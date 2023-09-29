const mapping: Record<string, string> = {
  'gift-items': 'gift_item',
  'gift-lists': 'gift_list',
  teams: 'team',
  'team-gift-lists': 'team_gift_list',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
