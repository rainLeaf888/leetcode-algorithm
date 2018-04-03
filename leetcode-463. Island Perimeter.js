// https://leetcode.com/problems/island-perimeter/description/
/**
 * @param {number[][]} grid
 * @return {number}
 利用land相邻land会少两个边计算
 */
var islandPerimeter = function(grid) {
    var lands = 0
    var neighbours = 0
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            let cell = grid[i][j]
            if (cell === 1){
              lands++  
              // 是land正下角的类型, 需要判断当前cell是否为最后一行
              if (i+1 < grid.length && grid[i+1][j] ===1) neighbours++
              // 是land右边相邻块的类型，需要判断当前cell是否为一行最后一个cell
              if(j+1 < grid[i].length && grid[i][j+1] === 1) neighbours++
                
            } 
            
        }
    }
    return lands * 4 - neighbours*2
};
var param = [[
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]
]]
islandPerimeter.apply(null, param[0])