const randomID = () =>
  Math.random().toString(36).substring(2, 9);

const assignId = obj => ({
  ...obj, id: randomID()
});

export default assignId;
