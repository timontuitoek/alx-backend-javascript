function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const rooms = roomSizes.map((size) => new ClassRoom(size));
  return rooms;
}

export default initializeRooms;
