/**
 * An old king wants to divide his kingdom between his two sons. He is well known for his justness and wisdom, and he plans to make a good use of both of these attributes while dividing his kingdom.

The kingdom is administratively split into square boroughs that form an N × M grid. Some of the boroughs contain gold mines. The king knows that his sons do not care as much about the land as they do about gold, so he wants both parts of the kingdom to contain exactly the same number of mines. Moreover, he wants to split the kingdom with either a horizontal or a vertical line that goes along the borders of the boroughs (splitting no borough into two parts).

The goal is to count how many ways he can split the kingdom.

Write a function:

function solution(N, M, X, Y);

that, given two arrays of K integers X and Y, denoting coordinates of boroughs containing the gold mines, will compute the number of fair divisions of the kingdom.

For example, given 

N = 5, 
M = 5, 
X = [0, 4, 2, 0]
Y = [0, 0, 1, 4], 
the function should return 3. The king can divide his land in three different ways shown on the picture below. 

-----------------------------------------
|   G   |       |       |       |   G   |
|       |       |       |       |       |
-----------------------------------------
|       |       |       |       |       |
|       |       |   G   |       |       |
-----------------------------------------
|       |       |       |       |       |
|       |       |       |       |       |
-----------------------------------------
|       |       |       |       |       |
|       |       |       |       |       |
-----------------------------------------
|       |       |       |       |       |
|   G   |       |       |       |       |
-----------------------------------------



[
  [ 'G', '#', '#', '#', 'G' ],
  [ '#', '#', '#', '#', '#' ],
  [ '#', 'G', '#', '#', '#' ],
  [ '#', '#', '#', '#', '#' ],
  [ 'G', '#', '#', '#', '#' ] 
]




*/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function buildGrid(rows, cols, nextFn) {
    let grid = [];
    
    for (let i=0; i<rows; i++) {
        let row = [];
        
        for (let j=0; j<cols; j++) {
            row.push('#');    
        }
        
        grid.push(row);
    }
    
    return (XCoors, YCoors) =>  nextFn(grid, XCoors, YCoors);
}


function addGolds(grid, XCoors, YCoors) {
    
    for (let i=0; i<XCoors.length; i++) {
        const x = XCoors[i];
        const y = YCoors[i];
        
        grid[x][y] = 'G';
    }
    
    return grid;
}

function findHorizontalDivisions(grid, goldsLength) {
  let goldsLimit = goldsLength / 2;
  let divisions = 0;
  
  for (let cols=0; cols<grid.length; cols++) {
      let golds = 0;
      for (let rows=0; rows<grid[cols].length; rows++) {
          
          if (grid[cols][rows] === 'G') {
            golds++;    
          }
      }
      
      if (golds >= goldsLimit) {
          divisions++;
      }
  }
  
  return  divisions;
}

function findVerticalDivisions(grid, goldsLength) {
  let goldsLimit = goldsLength / 2;
  let divisions = 0;
  
  for (let cols=0; cols<grid.length; cols++) {
      let golds = 0;
      for (let rows=0; rows<grid[cols].length; rows++) {
          
          if (grid[cols][rows] === 'G') {
            golds++;    
          }
      }
      
      if (golds >= goldsLimit) {
          divisions++;
      }
  }
  
  return  divisions;
}


function solution(N, M, X, Y) {
    // write your code in JavaScript (Node.js 8.9.4)
    const grid = buildGrid(N, M, addGolds)(X, Y);
    const horizontalDivisions = findHorizontalDivisions(grid, X.length);
    
    
    
}