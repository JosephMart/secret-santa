class User {
  private _id: string = "";
  private _name: string = "";
  private _email: string = "";
  private _excludeList: User[] = [];
  private _match: User;

  constructor(id = "", name = "", email = "") {
    this._id = id === "" ? User.generateID() : id;
    this._name = name;
    this._email = email;
    this._excludeList = [];
    return;
  }

  static generateID(): string {
    const S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    );
  }

  updateProp(prop: string, value: string) {}

  get ID(): string {
    return this._id;
  }

  get Name(): string {
    return this._name;
  }
  set Name(value: string) {
    this._name = value;
  }

  get Email(): string {
    return this._email;
  }
  set Email(value: string) {
    this._email = value;
  }

  get ExcludeList(): User[] {
    return this._excludeList;
  }
  set ExcludeList(value: User[]) {
    this._excludeList = value;
  }

  get Match(): User {
    return this._match;
  }
  set Match(value: User) {
    this._match = value;
  }
}

export default User;
