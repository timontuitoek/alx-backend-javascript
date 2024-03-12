function updateUniqueItems(itemsMap) {
  if (!(itemsMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Use the map method to update quantities for items with an initial quantity of 1
  const updatedMap = new Map(Array.from(itemsMap,
    ([item, quantity]) => [item, quantity === 1 ? 100 : quantity]));

  return updatedMap;
}

export default updateUniqueItems;
