/*******************************task with CODEWARS JS ***********************************/
//fibonacci
function nthFibo(n) {
  let [prev, curr] = [0, 1];
  
  for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
  
  return prev;
}

nthFibo(10)

//the algorithm returns the maximum number of cakes that can be baked
function cakes(recipe, available) {
  const response = {}
  for (const key in recipe) {
    if(!(key in available)) return 0
  } 
  for(const re in available) {
    if(!(re in recipe)) continue
    if(recipe[re] <= available[re]) {
      response[re] = Math.floor((available[re] / recipe[re]))
    }
    else {
      return 0
    }
  }
  return Object.values(response).sort((a, b)=> a - b)[0]
  }