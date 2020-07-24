import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  const {
    body: { name, email },
  } = req;
  const [password1, password2] = req.body.password;
  if (password1 !== password2) {
    res.status(400);
    res.render("join", { pageTotle: "Join" });
  } else {
    // To Do: Register User
    // To Do: Log User In
    res.redirect(routes.home);
  }
  res.render("join", { pageTitle: "Join" });
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};

export const logout = (req, res) => {
  // To Do: Process Log Out
  res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });

export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
