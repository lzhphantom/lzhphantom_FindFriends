import { generateService } from '@umijs/openapi'
generateService({
  requestLibPath: "import request from '@/request.js'",
  schemaPath: 'http://localhost:8012/api/v2/api-docs',
  serversPath: './src',
})
