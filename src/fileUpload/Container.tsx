import { FileUpload } from './FileUpload';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ReduxAction, ReduxState } from '../store';
import { open } from './module';
import axios from 'axios';

export class ActionDispatcher {
  dispatch: (action: any) => any;

  constructor(dispatch: (action: any) => any) {
    this.dispatch = dispatch;
  }

  public open(file: File) {
    this.dispatch(open(file));
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
}

export default connect(
  (state: ReduxState) => ({ value: state.fileUpload }),
  (dispatch: Dispatch<ReduxAction>) => ({ actions: new ActionDispatcher(dispatch) })
)(FileUpload);
