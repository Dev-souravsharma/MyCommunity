function isUserName(value) {
  if (value < 4) {
    return false;
  } else {
    return true;
  }
}
function isPassword(value) {
  if (value < 6) {
    return false;
  } else {
    return true;
  }
}

export {isUserName, isPassword};
