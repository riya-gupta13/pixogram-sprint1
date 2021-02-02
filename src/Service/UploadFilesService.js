import http from "../http-common";

class UploadFilesService {
  upload(file, caption, user_id, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);
    formData.append("caption", caption);
    formData.append("user_id", user_id);

    return http.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/api/uploadsall");
  }
}

export default new UploadFilesService();