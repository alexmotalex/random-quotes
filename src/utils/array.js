// Mutates array by removing one object with specific id
function removeObjectFromArrayById(arr, id) {
  arr.splice(
    arr.findIndex((el) => el.id === id),
    1
  );
}

export {removeObjectFromArrayById};
