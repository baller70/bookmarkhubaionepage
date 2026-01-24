import { Langfuse } from 'langfuse'

// Server-side LangFuse client for LLM observability
// Use this in API routes and server components
export const langfuse = new Langfuse({
  secretKey: process.env.LANGFUSE_SECRET_KEY,
  publicKey: process.env.LANGFUSE_PUBLIC_KEY,
  baseUrl: process.env.LANGFUSE_BASE_URL || 'https://us.cloud.langfuse.com',
})

// Helper to create a trace for AI operations
export const createAITrace = (name: string, userId?: string, metadata?: Record<string, unknown>) => {
  return langfuse.trace({
    name,
    userId,
    metadata,
  })
}

// Helper to track AI generation/completion
export const trackAIGeneration = async ({
  traceName,
  model,
  input,
  output,
  userId,
  metadata,
}: {
  traceName: string
  model: string
  input: string | object
  output: string | object
  userId?: string
  metadata?: Record<string, unknown>
}) => {
  const trace = createAITrace(traceName, userId, metadata)
  
  trace.generation({
    name: traceName,
    model,
    input,
    output,
    metadata,
  })

  // Flush to ensure data is sent
  await langfuse.flushAsync()
  
  return trace
}

// Shutdown handler - call this when the app is shutting down
export const shutdownLangfuse = async () => {
  await langfuse.shutdownAsync()
}
