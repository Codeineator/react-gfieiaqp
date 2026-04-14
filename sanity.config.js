import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import service from './src/schemas/service.js'

export default defineConfig({
  name: 'default',
  title: 'Gearhouse India Admin',
  basePath: '/studio', 
  projectId: 'efr4il2n', 
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: [service],
  },
})
