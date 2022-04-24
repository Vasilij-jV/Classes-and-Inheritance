/* eslint-disable no-new */
import Bowman from '../bowman';
import Swordsman from '../swordsman';
import Magician from '../magician';
import Daemon from '../daemon';
import Undead from '../undead';
import Zombie from '../zombie';
import Character from '../charcter';

test('determine belonging to the prototype', () => {
  expect(new Bowman('name', 'Bowman')).toBeInstanceOf(Character);
  expect(new Swordsman('name', 'Swordsman')).toBeInstanceOf(Character);
  expect(new Magician('name', 'Magician')).toBeInstanceOf(Character);
  expect(new Daemon('name', 'Daemon')).toBeInstanceOf(Character);
  expect(new Undead('name', 'Undead')).toBeInstanceOf(Character);
  expect(new Zombie('name', 'Zombie')).toBeInstanceOf(Character);
});

test.each([
  ['bowmanbowman', 'Bowman'],
  ['b', 'Bowman'],
  ['bowman', 'bowman'],
])('checking for an exception', (name, type) => {
  function wrapper() {
    new Character(name, type);
  }

  expect(wrapper).toThrowError(/^Ошибка$/);
});
