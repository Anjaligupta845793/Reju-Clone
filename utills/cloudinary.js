import cloudinary from "cloudinary";

export default cloudinary.v2.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.cloud_apikey,
  api_secret: process.env.cloud_apisecret,
  secure: true,
  timeout: 600000,
});
