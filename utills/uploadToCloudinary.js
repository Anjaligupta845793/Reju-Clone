import cloudinary from "cloudinary";
export default cloudinary.v2.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_apikey,
  api_secret: process.env.cloud_apisecret,
  secure: true,
  timeout: 600000,
});

export const uploadImage = async (file, folder) => {
  const buffer = await file.arrayBuffer();
  const bytes = Buffer.from(buffer);
  return new Promise((resolve, reject) => {
    cloudinary.v2.uploader
      .upload_stream(
        { resource_type: "auto", folder: folder },
        (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        }
      )
      .end(bytes);
  });
};
