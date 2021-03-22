import Team from '../app';

const swordsman = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40
};

const team = [
  {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
  },
  {
    name: 'лучник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40
  }
];
let character = new Team();
let teams = new Team();

test('add', () => {

  let test = character.add(swordsman);
  expect(test).toEqual({"attack": 80, "defence": 40, "health": 10, "level": 2, "name": "мечник"})
});

test('addError', () => {
  let test = character.add(swordsman);
  expect(test).toThrowError(Error);
});


test('addAll', () => {

  let test = teams.addAll(team);
  expect(test).toEqual({"attack": 80, "defence": 40, "health": 10, "level": 2, "name": "мечник"}, {"attack": 80, "defence": 40, "health": 10, "level": 2, "name": "лучник"});
});

test('toArray', () => {
  let test = teams.toArray();
  expect(test).toEqual([
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40
    },
    {
      name: 'лучник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40
    }
  ]);
});