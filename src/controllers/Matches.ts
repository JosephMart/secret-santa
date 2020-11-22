import User from "../models/User";

export default function HandleMatches(users: User[]): GenerateResult {
  // matrix[i].edges[j] === 1 => matrix[i].parent can match with users[j]
  const matrix = [...users].map((parent) => ({
    parent,
    edges: [...users].map((child) =>
      parent.ExcludeList.includes(child) || child === parent ? 0 : 1
    ),
  }));

  console.log(matrix.map(({ edges }) => edges));
  // sort so that least amount of options go first
  matrix.sort(
    (i, j) =>
      i.edges.reduce((a, b) => a + b, 0) - j.edges.reduce((a, b) => a + b, 0)
  );

  // matrix.forEach(({ parent, edges }) => {
  for (const { parent, edges } of matrix) {
    // Get possible index options to randomize over
    const indexOptions = [];
    for (let j = 0; j < edges.length; j++) {
      if (edges[j] === 1) {
        indexOptions.push(j);
      }
    }
    console.log(indexOptions.length === 0);
    if (indexOptions.length === 0) {
      return { success: false, msg: "No possible configuration." };
    }

    // Pick a random number out of possible indexes
    const matchIndex =
      indexOptions[Math.floor(Math.random() * indexOptions.length)];
    parent.Match = users[matchIndex];

    // Zero that index
    matrix.forEach(({ edges }) => {
      edges[matchIndex] = 0;
    });
  }

  // send emails
  return { success: true, msg: "done matching" };
}
