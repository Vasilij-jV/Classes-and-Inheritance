export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10 || (type !== 'Bowman' && type !== 'Swordsman' && type !== 'Magician' && type !== 'Daemon' && type !== 'Undead' && type !== 'Zombie')) {
      throw new Error('Ошибка');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = null;
    this.defence = null;
  }
}
