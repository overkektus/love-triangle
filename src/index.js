/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  if(preferences) {
    const graph = [];
    
    for(let i = 0; i < preferences.length + 1; i++) {
      graph.push(new Array(preferences.length + 1));
    }

    for(let i = 0; i < graph.length; i++) {
      for(let j = 0; j < graph[i].length; j++) {
        graph[i][j] = 0;
      }
    }
    
    preferences.forEach((i, j) => {
      graph[i][j+1] = 1;
      graph[j+1][i] = 1;
    });

    let count = 0;
    const n = graph.length;
    for(let a = 0; a < n; a++) {
      for(let b = a + 1; b < n; b++) {
        for(let c = b + 1; c < n; c++) {
          if(graph[a][b] !== 0 && graph[b][c] !== 0 && graph[a][c] !== 0) {
            count++;
          }
        }
      }
    }
    return count;
  } else {
    return 0; 
  }
};