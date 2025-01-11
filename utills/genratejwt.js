import jwt from "jsonwebtoken";
export const generateJwt = async (id) => {
  const token = jwt.sign({ id }, process.env.jwt_secret, { expiresIn: "15d" });
  return token;
};
