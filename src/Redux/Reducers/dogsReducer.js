export default (state = [], { type, payload }) => {
  switch (type) {
    case 'SET_DOGS':
      return payload;
    case 'DELETE_DOG':
      return deleteDog(state, payload);
    default:
      return state;
  }
};

function deleteDog(arrOfDogs, oneDog) {
  return [...arrOfDogs].filter(dog => dog.id !== oneDog.id);
}
