import { Action } from 'redux';

enum ActionNames {
  OPEN = 'fileUpload/open',
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

export type FileUploadActions = OpenAction | UploadAction;

const initialState: FileUploadState = { base64Image: '', file: null };

export default function reducer(
  state: FileUploadState = initialState,
  action: FileUploadActions
): FileUploadState {
  switch (action.type) {
    case ActionNames.OPEN:
      console.info('action.file', action.file.name)
      return { ...state, file: action.file };
    case ActionNames.UPLOAD:
      return state;
    default:
      return state;
  }
}
