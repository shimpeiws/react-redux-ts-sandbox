import { Action } from 'redux';

enum ActionNames {
  OPEN = 'fileUpload/open',
  OPEN_BASE64 = 'fileUpload/openBase64',
  UPLOAD = 'fileUpload/upload'
}

interface OpenAction extends Action {
  type: ActionNames.OPEN;
  file: File;
}
export const open = (file: File): OpenAction => ({
  type: ActionNames.OPEN,
  file: file
});

interface OpenBase64Action extends Action {
  type: ActionNames.OPEN_BASE64;
  file: string;
}
export const openBase64 = (base64Data: string): OpenBase64Action => ({
  type: ActionNames.OPEN_BASE64,
  file: base64Data
});

interface UploadAction extends Action {
  type: ActionNames.UPLOAD;
}

export const upload = (): UploadAction => ({
  type: ActionNames.UPLOAD
});

export interface FileUploadState {
  base64Image: string;
  file: File | null;
}

export type FileUploadActions = OpenAction | UploadAction | OpenBase64Action;

const initialState: FileUploadState = { base64Image: '', file: null };

export default function reducer(
  state: FileUploadState = initialState,
  action: FileUploadActions
): FileUploadState {
  switch (action.type) {
    case ActionNames.OPEN:
      return { ...state, file: action.file };
    case ActionNames.OPEN_BASE64:
      return { ...state, base64Image: action.file };
    case ActionNames.UPLOAD:
      return state;
    default:
      return state;
  }
}
