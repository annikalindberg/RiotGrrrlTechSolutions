import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'h91nkogw',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
});
