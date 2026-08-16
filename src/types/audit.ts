// Mirrors AuditSignals in api/audit.ts Kept as a separate client-safe type
// so src/ code never imports from api/ (different tsconfig, server-only runtime)
export interface AuditSignals {
  finalUrl: string;
  isHttps: boolean;
  responseTimeMs: number;
  pageWeightKb: number;
  hasViewportMeta: boolean;
  hasMetaDescription: boolean;
  titleLength: number;
  h1Count: number;
  hasSemanticLandmarks: boolean;
  hasStructuredData: boolean;
  imageCount: number;
  imagesMissingAlt: number;
  hasMediaQueries: boolean;
  hasOpenGraph: boolean;
}