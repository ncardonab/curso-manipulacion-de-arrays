const team = [
  {
    name: "Nicolas",
    age: 12
  },
  {
    name: "Andrea",
    age: 8
  },
  {
    name: "Zulema",
    age: 2
  },
  {
    name: "Santiago",
    age: 18
  }
];

const areAllTeamMembersMinorThan15 = team.every((member) => member <= 15);
console.log(areAllTeamMembersMinorThan15);
