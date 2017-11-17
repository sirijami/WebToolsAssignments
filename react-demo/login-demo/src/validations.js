const validations = {
  register: ({username, password, confirm}) => {
    const errors = [];
    if(!username) { errors.push('username is required'); }
    if(username.toLowerCase().replace(/[a-z_0-9]*/, '')) {
      errors.push('username must contain only letters, numbers, and _');
    }
    if(!password) { errors.push('password is required'); }
    if(password !== confirm) { errors.push('passwords do not match'); }
    return errors;
  },
  item: ({name, desc}) => {
    const errors = [];
    if(!name) { errors.push('Name is required'); }
    return errors;
  }
};
export default validations;
