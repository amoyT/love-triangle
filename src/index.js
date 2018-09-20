/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var k = 0;
  for (var i = 0; i < preferences.length; i++){
    if (i+1 !== preferences[i] && preferences[i]!==-1 && i + 1 === preferences[preferences[preferences[i]-1]-1]){
      k++;
      preferences[i]=preferences[preferences[i]-1]=preferences[preferences[preferences[i]-1]-1]=-1;
    }
  }
  return k;
};