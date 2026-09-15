export type Block = { kind: 'html'; html: string } | { kind: 'image'; src: string; alt: string } | { kind: 'note'; text: string };
export interface Question { title: string; options: string[]; solution: string[]; feedback: string[]; type: string; matches?: string[] }
export interface Lesson { id: string; title: string; blocks: Block[]; questions: Question[]; sourceBlocks: number }
export interface Course { title: string; description: string; format: string; lessons: Lesson[]; warnings: string[]; filename: string; sourceBlocks: number }
export interface ExportOptions { title: string; images: boolean; questions: boolean; solutions: boolean; cover: boolean; selected: Set<string> }
