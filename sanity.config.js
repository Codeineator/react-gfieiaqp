import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import service from './src/schemas/service'

export default defineConfig({
  name: 'default',
  title: 'Gearhouse India Admin',

  // This is where you access the dashboard
  basePath: '/studio', 

  // Replace 'your_id_here' with your actual Sanity Project ID
  projectId: 'efr4il2n', 
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: [service],
  },
})
