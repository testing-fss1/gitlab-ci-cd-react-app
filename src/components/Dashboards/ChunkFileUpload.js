import React from 'react';
import FileUploader from 'devextreme-react/file-uploader';

class ChunkFileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chunks: [] };
    this.onUploadProgress = this.onUploadProgress.bind(this);
    this.onUploadStarted = this.onUploadStarted.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <FileUploader 
          name="file" 
          accept="image/*" 
          uploadUrl="https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/ChunkUpload"
          chunkSize={500000} 
          onUploadStarted={this.onUploadStarted} 
          onProgress={this.onUploadProgress} 
        />       
      </React.Fragment>
    );
  }

  onUploadProgress(e) {
    const chunk = {
      segmentSize: e.segmentSize,
      bytesLoaded: e.bytesLoaded,
      bytesTotal: e.bytesTotal
    };
    this.setState({ chunks: [...this.state.chunks, chunk] });
  }

  onUploadStarted() {
    this.setState({ chunks: [] });
  }
}

export default ChunkFileUpload;
