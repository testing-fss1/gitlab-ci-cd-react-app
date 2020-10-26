export const authorizationChecks = (authRoles) => {
  const userData = JSON.parse(localStorage.getItem('user_data'));
  const userPrivilegesList = userData.user_privileges_list;
  if(authRoles == userPrivilegesList) {
    return true;
  }
  else {
    return false;
  }
};