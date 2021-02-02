// import React, { Component } from 'react'
// import { connect } from 'react-redux';
// import * as actions from '../actions/contentaction'

//  class UploadFile extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             file: null,
//             caption:'',
//             user_id:''
//         }
//         this.file = React.createRef();
//         this.user_id = React.createRef();
//         this.caption = React.createRef();  
//     }
//     // handleFile(e){
//     //     //let file= e.target.files[0];
//     //     this.setState({file:e.target.files})
//     // }
//     handleUpload(event){
//         let formData= new FormData();
//         formData.append("file", this.file.files)
//        // console.log(event.target.files[0])
//         formData.append("caption", this.caption.type)
//         formData.append("user_id", this.user_id.text)
//         console.log(formData);
//         // let input = {
//         //     file : formData,
//         //     caption: this.caption.current.value,
//         //     user_id: this.user_id.current.value
//         // }
//         // let file=this.state.file;
//         // formData.append("image", file )
//         // console.log(this.state, "this state is");
//         // this.props.onAddContent(this.props.file, this.props.caption, this.props.user_id);
//         this.props.onAddContent(formData)
//         event.preventDefault();
//     }

//     // onFileChangeHandler = (e) => {
//     //     this.setState({
//     //         selectedFile : e.target.files[0]
//     //         // caption : e.target.caption,
//     //         // user_id : e.target.user_id    
//     //     });
//     //     const formData = new FormData();
//     //     formData.append('file', this.state.selectedFile);
//     //     formData.append('caption', this.state.caption);
//     //     formData.append('user_id', this.state.user_id);

//         // fetch('http://localhost:8080/api/upload/' + formData , {
//         //     method: 'POST',
//         //   //  data: formData,
//         //     headers: {'Content-Type': 'multipart/form-data' }
//         //     //body: formData
//         // }).then(res => {
//         //     if(res.ok) {
//         //         console.log(res.data);
//         //         alert("File uploaded successfully.")
//         //     }
//     //     });
//     // };

//     render() {
//         return (
//             <div>
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='card col-md-6 offset-md-3 offset-md-3'>
//                             <h3 className='text-center'>Content</h3>
//                             <div className='card-body'>
//                                 <form>
//                                     <div className='form-group'>
//                                         <div class="mb-3">
//                                             <label for="formFileMultiple" class="form-label">Select File</label>
//                                             <input class="form-control" type="file" ref={this.file}  id="formFileMultiple"  name="file" onChange={this.handleFile} multiple />
//                                         </div>
//                                         <div className="mb-3">
//                                             <label forname="exampleFormControlInput1" className="form-label">Caption</label>
//                                             <input type="textarea" name="caption"  ref={this.caption} className="form-control" id="exampleFormControlInput1"  placeholder="Enter caption" />
//                                         </div>
//                                         <div className="mb-3">
//                                             <label forname="exampleFormControlInput2" className="form-label">User Id</label>
//                                             <input type="text" name="user_id"  ref={this.user_id}   className="form-control" id="exampleFormControlInput2"  placeholder="Enter User Id" />
//                                         </div>
//                                         <button type="button" onClick={(event) => this.handleUpload(event)} className="btn btn-dark">Upload</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 </div>

//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         file: state.contentreducer.file,
//         caption: state.contentreducer.caption,
//         user_id: state.contentreducer.user_id

//         //message: state.message,
//         //  file: ownProps.match.params.file,
//         //  caption: ownProps.match.params.caption,
//         //  user_id: ownProps.match.params.user_id
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAddContent: (payload) => dispatch(actions.addContent(payload))
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(UploadFile);
