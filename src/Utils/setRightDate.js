const setRightDate = (date) => {
  let data = date.slice(0,10).split('-');
  return data[2] + '.' + data[1] + '.' + data[0]
}

export default setRightDate;