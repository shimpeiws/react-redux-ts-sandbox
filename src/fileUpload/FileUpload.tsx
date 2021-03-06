import * as React from "react";
import { FileUploadState } from "./module";
import { ActionDispatcher } from "./Container";

interface Props {
  value: FileUploadState;
  actions: ActionDispatcher;
}

export class FileUpload extends React.Component<Props, {}> {
  handleChangeFile(e: any) {
    console.info("e.target", e.target.files.item(0));
    const file: File = e.target.files.item(0);
    this.props.actions.open(file);
  }
  handleUploadFile(file: File | null) {
    if (!file) {
      return;
    }
    this.props.actions.upload(file);
  }
  handleChangeFileBase64(e: any) {
    console.info("e.target", e.target.files.item(0));
    const file: File = e.target.files.item(0);
    this.props.actions.openBase64(file);
  }
  handleUploadFileBase64(base64Image: string) {
    this.props.actions.uploadBase64(base64Image);
  }
  handleChangeFileWithSignedUrl(e: any) {
    console.info("e.target", e.target.files.item(0));
    this.props.actions.getSignedUrl(e.target.files.item(0));
  }
  handleUploadFileWithSignedUrl() {
    const file = this.props.value.fileWithSignedUrl;
    if (!file) {
      return;
    }
    const url = this.props.value.preSignedUrl;
    this.props.actions.uploadFileWithSignedUrl(file, url);
    console.info("handleChangeFileWithSignedUrl", url);
  }
  render() {
    return (
      <div>
        <div>
          <p>File Upload</p>
          <input type="file" onChange={e => this.handleChangeFile(e)} />
          <button onClick={() => this.handleUploadFile(this.props.value.file)}>
            upload
          </button>
        </div>
        <div>
          <p>Base 64</p>
          <input type="file" onChange={e => this.handleChangeFileBase64(e)} />
          <button
            onClick={() =>
              this.handleUploadFileBase64(this.props.value.base64Image)
            }
          >
            upload
          </button>
        </div>
        <div>
          <p>SignedUrl</p>
          <p>{this.props.value.preSignedUrl}</p>
          <input
            type="file"
            onChange={e => this.handleChangeFileWithSignedUrl(e)}
          />
          <button onClick={() => this.handleUploadFileWithSignedUrl()}>
            upload
          </button>
        </div>
      </div>
    );
  }
}
