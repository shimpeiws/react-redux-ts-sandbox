import { Action } from "redux";

enum ActionNames {
  OPEN = "fileUpload/open",
  OPEN_BASE64 = "fileUpload/openBase64",
  UPLOAD = "fileUpload/upload",
  OPEN_FILE_WITH_SIGNED_URL = "fileUpload/openFileWithSignedUrl",
  SET_PRESIGNED_URL = "fileUpload/setPresignedUrl"
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

interface OpenFileWithSignedUrl extends Action {
  type: ActionNames.OPEN_FILE_WITH_SIGNED_URL;
  fileWithSignedUrl: File;
}

export const openFileWithSignedUrl = (file: File): OpenFileWithSignedUrl => ({
  type: ActionNames.OPEN_FILE_WITH_SIGNED_URL,
  fileWithSignedUrl: file
});

interface SetPresignedUrl extends Action {
  type: ActionNames.SET_PRESIGNED_URL;
  presignedUrl: string;
}

export const setPresignedUrl = (url: string): SetPresignedUrl => ({
  type: ActionNames.SET_PRESIGNED_URL,
  presignedUrl: url
});

export interface FileUploadState {
  base64Image: string;
  file: File | null;
  fileWithSignedUrl: File | null;
  preSignedUrl: string;
}

export type FileUploadActions =
  | OpenAction
  | UploadAction
  | OpenBase64Action
  | OpenFileWithSignedUrl
  | SetPresignedUrl;

const initialState: FileUploadState = {
  base64Image: "",
  file: null,
  fileWithSignedUrl: null,
  preSignedUrl: ""
};

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
    case ActionNames.OPEN_FILE_WITH_SIGNED_URL:
      return { ...state, fileWithSignedUrl: action.fileWithSignedUrl };
    case ActionNames.SET_PRESIGNED_URL:
      return { ...state, preSignedUrl: action.presignedUrl };
    default:
      return state;
  }
}
