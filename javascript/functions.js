export const isDuplicate = (searchTerm, target) => {
    let letters = [...target];
    return letters.includes(searchTerm);
};