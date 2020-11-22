/// <reference types="next" />
/// <reference types="next/types/global" />
type setUserPropType = (
  index: number,
  prop: string,
  value: string | string[]
) => void;

type SerializedUser = {
  name: string;
  email: string;
  id: string;
  excludeListIDs: string[];
};

type GenerateResult = {
  success: boolean;
  msg: string;
};
