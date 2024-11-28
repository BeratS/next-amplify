import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplify-next-drive',
  isDefault: true,
  access: (allow) => ({
    "public/*": [
      allow.guest.to(["read", "write"]),
      allow.authenticated.to(["read", "write", "delete"]),
    ],
    "private/*": [
      allow.authenticated.to(["read", "write"]),
    ]
  })
});
