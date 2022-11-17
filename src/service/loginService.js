import { adminUsers } from "../data/adminUser";
import { v4 as uuidv4 } from "uuid";
// ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export const loginService = {
  loginControl: (email, password) => {
    let adminUser = adminUsers.find(
      (q) => q.email == email && q.password == password
    );

    if (adminUser) {
      let token = uuidv4();
      return {
        token: token,
        adminUser: adminUser,
      };
    } else {
      return null;
    }
  },
};
