import { Action } from 'redux';

enum ActionNames {
  OPEN = 'fileUpload/open',
  OPEN_BASE64 = 'fileUpload/openBase64',
  UPLOAD = 'fileUpload/upload',
  SET_FILE_UUID = 'fileUpload/setFileUUID'
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

interface SetFileUUID extends Action {
  type: ActionNames.SET_FILE_UUID;
  uuid: string;
}

export const setFileUUID = (uuid: string): SetFileUUID => ({
  type: ActionNames.SET_FILE_UUID,
  uuid
});

export interface FileUploadState {
  base64Image: string;
  file: File | null;
  uuid: string;
}

export type FileUploadActions = OpenAction | UploadAction | OpenBase64Action | SetFileUUID;

const initialState: FileUploadState = { base64Image: '', file: null, uuid: '' };

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
    case ActionNames.SET_FILE_UUID:
      return { ...state, uuid: action.uuid };
    default:
      return state;
  }
}
