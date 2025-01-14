import { jwtVerify } from "jose";

const getUserData = async (request) => {
  const token = await request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }

  const decoded = await jwtVerify(
    token,
    new TextEncoder().encode(process.env.jwt_secret)
  );

  // Attach user data to request object if needed
  const userId = decoded.payload.id;
  return userId;
};

export default getUserData;
