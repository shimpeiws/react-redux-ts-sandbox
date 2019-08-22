import { FileUpload } from './FileUpload';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ReduxAction, ReduxState } from '../store';
import { open, openBase64, openFileWithSignedUrl, setPresignedUrl } from './module';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

export class ActionDispatcher {
  dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  public open(file: File) {
    this.dispatch(open(file));
  }

  public openBase64(file: File) {
    const reader = new FileReader();
    reader.onload = e => {
      console.info('base64', reader.result);
      const base64Data = reader.result;
      if (!base64Data || base64Data instanceof ArrayBuffer) {
        return;
      }
      const splited = base64Data.split(',');
      console.info('splited', splited);
      this.dispatch(openBase64(splited[1]));
    };
    reader.readAsDataURL(file);
  }

  public async upload(file: File): Promise<void> {
    let params = new FormData();
    params.append('uploadFile', file);
    try {
      const response = await axios.post('http://localhost:8080/fileUpload', params);
      console.info('upload succeed: ', response);
    } catch (e) {
      console.info('upload failed: ', e);
    }
  }

  public async uploadBase64(base64Image: string): Promise<void> {
    try {
      const params = {
        image: base64Image
      };
      const response = await axios.post('http://localhost:8080/base64', params);
      console.info('upload succeed: ', response);
    } catch (e) {
      console.info('upload failed: ', e);
    }
  }

  public async getSignedUrl(file: File): Promise<void> {
    try {
      const type = file.name.split('.')[1];
      const uuidKey = uuid();
      console.info('key', `${uuidKey}.${type}`);
      const params = {
        key: `${uuidKey}.${type}`
      };
      this.dispatch(openFileWithSignedUrl(file));
      const response = await axios.post('http://localhost:8080/presigned', params);
      console.info('getSignedUrl succeed: ', response.data.url);
      const url = response.data.url;
      this.dispatch(setPresignedUrl(url));
    } catch (e) {
      console.info('getSignedUrl failed: ', e);
    }
  }

  public async uploadFileWithSignedUrl(file: File, signedUrl: string): Promise<void> {
    try {
      const options = {
        headers: { 'Content-Type': 'image/png' }
      };
      console.info('upload', signedUrl);
      const response = await axios.put(signedUrl, file, options);
      console.info('uploadFileWithSignedUrl succeed: ', response);
    } catch (e) {
      console.info('uploadFileWithSignedUrl failed: ', e);
    }
  }
}

export default connect(
  (state: ReduxState) => ({ value: state.fileUpload }),
  (dispatch: Dispatch<ReduxAction>) => ({ actions: new ActionDispatcher(dispatch) })
)(FileUpload);
