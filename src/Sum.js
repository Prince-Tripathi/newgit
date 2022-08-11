function MissingNo(a, n) {
  
    let total = Math.floor( (n + 1) * (n + 2) / 2);
    for (let i = 0; i < n; i++)
        total -= a[i];
    return total;
}
let arr = [ 1, 2, 3, 4, 5, 7, 8, 9];
    let N = arr.length;
    let miss = MissingNo(arr, N);
    console.log(miss);