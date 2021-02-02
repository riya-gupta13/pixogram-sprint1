import React, { Component } from "react";
import { Link } from "react-router-dom";
import UploadService from "../Service/UploadFilesService";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.user_id = React.createRef();
    this.caption = React.createRef();   
    this.selectFile = this.selectFile.bind(this);
    this.upload = this.upload.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      caption: "",
      user_id: [],
      progress: 0,
      message: "",
      fileInfos: [],
    };
  }


  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data
      });
    });
  }

  selectFile(event) {
    this.setState({
     selectedFiles: event.target.files,
     //selectedFiles: URL.createObjectURL(event.target.selectedFile[0]),
      caption : this.caption.current.value,
      user_id : localStorage.getItem('user_id')
    });
  }

  upload() {
    let currentFile = this.state.selectedFiles[0];
    let caption = this.caption.current.value;
    let user_id = localStorage.getItem('user_id')
    
   
    this.setState({
      progress: 0,
      currentFile: currentFile,
      caption: caption,
      user_id: user_id
    });
    console.log(typeof (caption));
    console.log(typeof (user_id));
   
    console.log(caption)
    console.log(user_id)
    
    UploadService.upload(currentFile, caption, user_id, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total)
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
          caption: response.data.caption,
          user_id: response.data.user_id
        });
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
        });
      });

    this.setState({
      selectedFiles: undefined,
    });
  }

  render() {
    console.log(this)
    const {
      selectedFiles,
      currentFile,
      progress,
      message,
      fileInfos,
      user_id
    } = this.state;

    return (
      <div>
        {currentFile && (
          <div className="progress">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: progress + "%" }}
            >
              {progress}%
            </div>
          </div>
        )}
        <div className='container'>
          <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
              <h3 className='text-center'>Content</h3>
              <div className='card-body'>
                <form>
                  <div className='form-group'>
                    <div class="mb-3">
                      <label for="formFileMultiple" class="form-label"><i class="fa fa-file" aria-hidden="true"></i> Select File</label>
                      <input class="form-control" type="file" id="formFileMultiple" name="file" onChange={this.selectFile} multiple />
                      {/* <img src={this.state.selectedFiles} height='10' width='300' /> */}
                    </div>
                    <div className="mb-3">
                      <label forname="exampleFormControlInput1" className="form-label"><i class="fa fa-keyboard-o" aria-hidden="true"></i> Caption</label>
                      <input type="textarea" name="caption" ref={this.caption}  className="form-control" id="exampleFormControlInput1" placeholder="Enter Caption" />
                    </div>
                    <div className="mb-3">
                      <label forname="exampleFormControlInput2" className="form-label">User Id</label>
                      <input type="text" name="user_id" value={user_id} disabled ref={this.user_id} className="form-control" id="exampleFormControlInput2" placeholder="Enter User Id" />
                    </div>
                   
                    <button className="btn btn-success" disabled={!selectedFiles} onClick={this.upload}><i class="fa fa-upload" aria-hidden="true"></i> UPLOAD</button>
                  </div>
                </form>

              </div>
            </div>
          </div>

</div>
          <div className="alert alert-light" role="alert">
            {this.state.message}
          </div>

          {/* <div className="card">
            <div className="card-header">List of Files
            </div>
            <ul className="list-group list-group-flush">
              {fileInfos &&
                fileInfos.map((file, index) => (
                  <li className="list-group-item" key={index}>
                    <a href={file.url}>{file.filename}</a>
                    <Link to={'/uploads/' + file.filename}>{file.filename}</Link>
                  </li>
                ))}
            </ul>
          </div> */}
        </div>
    );
  }
}