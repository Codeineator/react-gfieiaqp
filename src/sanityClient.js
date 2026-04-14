import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'efr4il2n',
  dataset: 'production',
  useCdn: true, 
  apiVersion: '2024-03-14', 
})
