// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import HandleMatches from "../../src/controllers/Matches";
import { deserializeUsers } from "../../src/controllers/Serialization";

export default (req: NextApiRequest, res: NextApiResponse<GenerateResult>) => {
  res.statusCode = 200;
  const data = deserializeUsers(req.body as SerializedUser[]);
  const result = HandleMatches(data);
  res.json(result);
};
