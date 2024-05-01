// import { NextApiRequest, NextApiResponse } from "next";

// // Define custom middleware type
// type CustomMiddleware = (
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) => Promise<void> | void;

// // Define your custom middleware function
// const customMiddleware: CustomMiddleware = async (req, res) => {
//   // Execute any logic here if needed
// };

// export default customMiddleware;

export {default} from "next-auth/middleware"
export const config = { matcher: ["/codiac/nodes"]}