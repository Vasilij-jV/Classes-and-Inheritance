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
  ['bowmanbowman'],
  ['b'],
  [43],
])('checking for an exception1', (name) => {
  function wrapper() {
    new Character(name, 'Bowman');
  }

  expect(wrapper).toThrowError(/^Переменная name не может иметь такого значения$/);
});

test('checking for an exception2', () => {
  function wrapper() {
    new Character('bowman', 'bowman');
  }

  expect(wrapper).toThrowError(/^Переменная type не может иметь такого значения$/);
});
