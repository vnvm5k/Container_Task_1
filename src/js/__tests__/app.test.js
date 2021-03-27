import Team from '../app';

const swordsman = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const bowman = {
  name: 'лучник',
  health: 9,
  level: 1,
  attack: 70,
  defence: 30,
};

const character = new Team();
const teams = new Team();

test('add', () => {
  character.add(swordsman);
  expect(character.members.has(swordsman)).toBe(true);
});

test('addError', () => {
  character.add(swordsman);
  expect(() => {
    character.add(swordsman);
  }).toThrow('Выбранный персонаж уже в команде!');
});


test('addAll', () => {
  teams.addAll(swordsman, bowman);
  expect(teams.members.size).toBe(2);
});

test('addAllError', () => {
  teams.addAll(swordsman, bowman);
  expect(() => {
    teams.addAll(swordsman, bowman);
  });
  expect(teams.members.size).toBe(2);
});


test('toArray', () => {
  teams.addAll(swordsman, bowman);
  const test = teams.toArray();
  expect(test).toEqual([
    {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    },
    {
      name: 'лучник',
      health: 9,
      level: 1,
      attack: 70,
      defence: 30,
    },
  ]);
});
