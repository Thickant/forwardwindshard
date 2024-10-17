"use strict";

define([''], function () {
  //*******************************************************************************************************************
  // ** Monster Data
  //*******************************************************************************************************************
  var stats = [{
    name: 'mhp',
    real: 'HP',
    tooltip: 'Your maximum hit points.'
  }, {
    name: 'dmg',
    real: 'ATK',
    tooltip: 'Used to calculate attack damage.'
  }, {
    name: 'arm',
    real: 'DEF',
    tooltip: 'Used to calculate damage reduction\nagainst enemy attacks.'
  }, {
    name: 'cri',
    real: 'CRIT',
    percent: true,
    tooltip: 'Chance to perform CRITICAL Strike:\nDeals 150% damage.'
  }, {
    name: 'hpr',
    real: 'REGEN',
    percent: true,
    tooltip: 'Percentage of HP\nrestored per second.'
  }, {
    name: 'lch',
    real: 'LEECH',
    percent: true,
    tooltip: 'Percentage of melee damage\ndealt gained back as HP.'
  }, {
    name: 'iml',
    real: 'BURN',
    percent: true,
    tooltip: 'Percentage of your max HP\ndealt as damage per second\nto nearby enemies.\nFor every % of burn you have\nyou gain 5% more burn range.\nStacks Additively'
  }, {
    name: 'arr',
    real: 'ARROWS',
    tooltip: 'Number of arrows you can shoot.'
  }, {
    name: 'psn',
    real: 'POISON',
    percent: true,
    tooltip: 'Percentage of HP taken\nas health per second\nYou can not be killed from Poison'
  }, {
    name: 'slm',
    real: 'SLM',
    tooltip: 'Determines how much SHIELD Strike\nand CRITICAL Strikes LEECH'
  }, {
    name: 'frz',
    real: 'Freezes'
  }, {
    name: 'grd',
    real: 'Guards'
  }, {
    name: 'bsh',
    real: 'Shield Strike Chance'
  }, {
    name: 'bpw',
    real: 'Bow Power'
  }, {
    name: 'fbm',
    real: 'Freeze Burn Multiplier'
  }, {
    name: 'arf',
    real: 'HP added to ARROW damage'
  }, {
    name: 'crm',
    real: 'Crit Multiplier'
  }, {
    name: 'gbs',
    real: 'Multiplies LEECH and REGEN while guarded'
  }, {
    name: 'abs',
    real: 'Damage Absorbtion'
  }, {
    name: 'rag',
    real: 'Rage ATK Bonus'
  }, {
    name: 'hnt',
    real: 'Hunter FLAG: Arrows are based on DEF instead of ATK'
  }, {
    name: 'bld',
    real: 'BLEED',
    percent: true,
    tooltip: 'Percentage of enemies health\nthat they lose per second'
  }, {
    name: 'mhpMod',
    real: 'Max Health Modifer for Enemies'
  }, {
    name: 'dmgMod',
    real: 'Damage Modifer for Enemies'
  }, {
    name: 'armMod',
    real: 'Armor Modifer for Enemies'
  }, {
    name: 'exp',
    real: 'multiplier for experience'
  }, {
    name: 'are',
    real: 'Arrows recovery FLAG: Regain arrows when using guard spell'
  }, // {name:'shp', real:'Starting HP Percentage'},
  {
    name: 'jmp',
    real: 'Jump'
  }, {
    name: 'swl',
    real: 'Showel'
  }, {
    name: 'mir',
    real: 'Mirror Movevement'
  }, {
    name: 'pek',
    real: 'Peek'
  }, {
    name: 'lfj',
    real: 'Leaf Jump'
  }, {
    name: 'arc',
    real: 'Abyss Reach'
  }, {
    name: 'ask',
    real: 'Abyss Sink'
  }, {
    name: 'agz',
    real: 'Abyss Gaze'
  }, {
    name: 'ice',
    real: 'Frozen'
  }];
  return stats;
});
