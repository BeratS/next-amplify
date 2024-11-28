import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplify-next-drive',
  isDefault: true,
  access: (allow) => ({
    'public/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'private/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write'])
    ]
  })
});
