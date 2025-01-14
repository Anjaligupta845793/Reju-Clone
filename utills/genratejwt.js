import { SignJWT } from "jose";

export const generateJwt = async (id) => {
  try {
    // Make sure we have a secret
    if (!process.env.jwt_secret) {
      throw new Error("JWT secret is not defined");
    }

    // Create and encode the secret
    const secret = new TextEncoder().encode(process.env.jwt_secret);

    // Create and sign the JWT
    const token = await new SignJWT({ id })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("15d")
      .sign(secret);

    return token;
  } catch (error) {
    console.error("JWT Generation Error:", error);
    throw error; // Re-throw to handle it in the calling function
  }
};
