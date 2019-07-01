const utils = {
  sortArray: (data, property) => {
    return data.slice(0).sort((a, b) => {
      if (property === 'release_date') {
        return +b[property].substring(0, 4) - +a[property].substring(0, 4);
      }
      return b[property] - a[property];
    });
  },
};

export default utils;
