module.exports = function createDreamTeam(members) {

  
  return !Array.isArray(members) ? false : members
                                                  .filter(item => typeof(item) === 'string')
                                                  .map(item => item
                                                                   .trim()
                                                                   .toUpperCase()[0])
                                                  .sort()
                                                  .join('')
};
