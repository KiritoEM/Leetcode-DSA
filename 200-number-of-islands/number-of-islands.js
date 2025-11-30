/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const n = grid.length;
    const m = grid[0].length;

    let visited = Array.from({ length: n }, () => Array(m).fill(false));

    const dfs = (i, j) => {
        visited[i][j] = true;

        const directions = [[i, j - 1], [i - 1, j], [i + 1, j], [i, j + 1]];

        for (let dir of directions) {
            if (isLandAndSafe(dir[0], dir[1], visited, grid)) {
                dfs(dir[0], dir[1]);
            }
        }
    }

    let islandCount = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === "1" && !visited[i][j]) {
                dfs(i, j);
                islandCount++;
            }
        }
    }

    return islandCount;
};

const isLandAndSafe = (i, j, visited, grid) => {
    const n = grid.length;
    const m = grid[0].length;

    return i >= 0 && i < n && j >= 0 && j < m && grid[i][j] === "1" && !visited[i][j];
}