import User from "../models/User";

export function serializeUsers(users: User[]): string {
  return JSON.stringify(
    users.map((user) => ({
      id: user.ID,
      name: user.Name,
      email: user.Email,
      excludeListIDs: user.ExcludeList.map((user) => user.ID),
    }))
  );
}

export function deserializeUsers(serializeUsers: SerializedUser[]): User[] {
  const idsMap = new Map<string, User>();
  // keep it basic, create all users, then add excluded
  for (const s of serializeUsers) {
    idsMap.set(s.id, new User(s.id, s.name, s.email));
  }
  return serializeUsers.map(({ id, excludeListIDs }) => {
    const user = idsMap.get(id);
    user.ExcludeList = excludeListIDs.map((id) => idsMap.get(id));
    return user;
  });
}
