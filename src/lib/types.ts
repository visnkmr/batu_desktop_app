export interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: string;
  lastModelUsed: string;
  branchedFrom: {
    chatId: string;
    messageId: string;
    timestamp: string;
  } | null;
}

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  model: string;
}

export interface BranchPoint {
  originalChatId: string;
  messages: Message[];
  branchedFromMessageId: string;
  timestamp: string;
}

export interface FileItem {
  name: string;
  path: string;
  is_dir: boolean;
  size: number;
  rawfs: number;
  lmdate: number;
  timestamp: number;
  foldercon: number;
  ftype: string;
  parent: string;
}
export interface ModelRow {
  id: string
  context_length:number
  model: string
  cost: {
      prompt_token: number
      completion_token: number
  }
  supported_parameters:string[]
}