import React, { Component } from "react";
import {ProgressBar} from 'react-bootstrap';
import axiosInstance from "util/Api";

class UserCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadPercentage: 0,
      file_content: "",
      uploadedFile: ""
    }    
  }

  uploadFile = ({ target: { files } }) => {
    console.log( files[0] ); 
    this.setState({ uploadedFile: files[0]})
    var reader = new FileReader();
    reader.readAsDataURL(files[0])
    reader.onload = () => {
      const base64Code = reader.result;
      console.log("base64Code : ", base64Code) 
      this.setState({ file_content: base64Code })
    };
  }

  handleUpload = () => {
    const options = {
      onUploadProgress: (progressEvent) => {
        const {loaded, total} = progressEvent;
        let percent = Math.floor( (loaded * 100) / total )
        console.log( `${loaded}kb of ${total}kb | ${percent}%` );
        if( percent < 100 ){
          this.setState({ uploadPercentage: percent })
        }
      }
    }
    const body = {
      org_id: 1,
      file_content : this.state.file_content,
      original_filename : this.state.uploadedFile.name,
      ip_address: "157.48.2.203" ,
    }
    axiosInstance.post("https://api-dev.aznotify.com/rest/audio-file/upload", body, options).then(res => { 
        console.log(res)
        this.setState({ uploadPercentage: 100 }, ()=>{
          setTimeout(() => {
            this.setState({ uploadPercentage: 0 })
          }, 1000);
        })
    })
  }

  render() {
    const {uploadPercentage} = this.state;
    return (
      <div>          
        <input type="file" className="form-control profile-pic-uploader" onChange={this.uploadFile} />
        <button onClick={this.handleUpload}>Upload</button>
        { uploadPercentage > 0 && 
          <>
            <div style={{"color": "blue", "background-color": "blue", "width": uploadPercentage*5}}>%</div> 
            <span>{uploadPercentage}%</span>
          </>
        }      
      </div>
    );
  }
}

export default UserCard;

/* const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
    const body = {
      org_id: 1,
      file_content : "",
      original_filename : "",
      ip_address: "123.22.345" ,
    }
    axios.post('https://api-dev.aznotify.com/rest/audio-file/upload',
      {headers: headers}, 
      {body: body}
    )
    .then(data => data)
    .catch(error => {
      return error.response;
    }); */