const utils = {
  sortArray: (data, property) => {
    return data.sort((a, b) => -(+a[property] - +b[property]));
  },
};

export default utils;
