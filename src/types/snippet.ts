export interface SnippetInput {
  name: string;
  prefix: string;
  description: string;
  scope: string;
  spacesPerTab: number;
  sourceCode: string;
}

export interface VSCodeSnippet {
  [key: string]: {
    prefix: string;
    body: string[];
    description: string;
    scope: string;
  };
}