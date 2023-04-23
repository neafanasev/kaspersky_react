const getButtonValue = (e) => {
  const itemType = e.target.tagName;
  let value;

  switch (itemType) {
    case ('polygon'):
      value = e.target.parentElement.parentElement.parentElement.value;
      break;
    case ('svg'):
      value = e.target.parentElement.parentElement.value;
      break;
    case ('SPAN'):
      value = e.target.parentElement.value;
      break;
    case ('BUTTON'):
      value = e.target.value;
      break;
    default:
      break;
  }

  return value;
};

export default getButtonValue;