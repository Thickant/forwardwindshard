"use strict";

define([''], function () {
  //*******************************************************************************************************************
  // ** Passive Tree Data
  //*******************************************************************************************************************
  var skills = [// Page 1
  {
    icon: 32,
    multis: [['mhp', 1.25], ['arm', 0.95]],
    tooltip: '25% more HP. but 5% less DEF'
  }, {
    icon: 33,
    stats: [['lch', 6], ['psn', 3]],
    tooltip: '6% LEECH. but gain 3% POISON'
  }, {
    icon: 34,
    stats: [['bsh', 50]],
    multis: [['arm', 1.10]],
    tooltip: '50% chance to perform\nSHIELD Strike:\nAdds 30% of DEF to ATK\nwhen calculating damage. \nthe attack animation is faster \nGives 10% more DEF'
  }, {
    icon: 35,
    stats: [['iml', 5]],
    tooltip: '5% BURN.'
  }, {
    icon: 36,
    multis: [['dmg', 1.20]],
    stats: [['cri', 15], ['psn', 2]],
    tooltip: '20% more ATK.\n15% CRIT\n2% POISON'
  }, {
    icon: 37,
    stats: [['grd', 1]],
    tooltip: 'Grants GUARD Spell:\nClick on your character to gain\n50% DEF and -50% POISON\nfor 6 seconds.'
  }, {
    icon: 38,
    stats: [['hpr', 4]],
    multis: [['dmg', 0.95]],
    tooltip: '4% REGEN.\n5% less ATK',
  }, {
    icon: 39,
    stats: [['cri', 25]],
    tooltip: '25% CRIT.'
  }, {
    icon: 40,
    multis: [['arm', 1.40], ['dmg', 0.85]],
    tooltip: '40% more DEF.\nbut 15% less ATK'
  }, {
    icon: 41,
    multis: [['mhp', 1.3], ['dmg', 0.8]],
    stats: [['iml', 2]],
    tooltip: '30% more HP.\n20% less ATK.\n2% BURN'
  }, {
    icon: 42,
    stats: [['cri', 40]],
    multis: [['arm', 0.9], ['mhp', 0.9]],
    tooltip: '40% CRIT.\n10% less DEF and HP.'
  }, {
    icon: 43,
    stats: [['frz', 1]],
    tooltip: 'Grants FREEZE Spell:\nClick on enemy to freeze\nit for 2.5 seconds.'
  }, // Page 2
  {
    icon: 47,
    stats: [['frz', 1], ['arr', -2], ['fbm', 2.5]],
    tooltip: '-2 ARROWS.\nGrants an additional FREEZE Spell.\nFrozen enemies take 2.5x\ndamage from BURN.'
  }, {
    icon: 45,
    stats: [['lch', 10], ['psn', 5], ['slm', -30]],
    tooltip: '10% LEECH, 5% POISON.\nCRITICAL and SHIELD Strikes\nleech 30% less.'
  }, {
    icon: 46,
    stats: [['arr', -1], ['bsh', 50], ['slm', 10]],
    tooltip: '-1 ARROW.\nAdditional 50% chance to\nperform SHIELD Strike.\nCRITICAL and SHIELD Strikes\n leech 10% more'
  }, {
    icon: 44,
    stats: [['abs', 12]],
    tooltip: 'Take 12% less damage.'
  }, {
    icon: 48,
    stats: [['arr', 1]],
    multis: [['dmg', 0.95]],
    tooltip: '1 ARROW.\n 5% less ATK'
  }, {
    icon: 49,
    stats: [['are', 1], ['hnt', 1]],
    tooltip: 'All spent ARROWS are recovered\nwhen you use GUARD Spell.\nDamage of ARROWS is calculated\non DEF instead of ATK, but at\n30% of the value.'
  }, {
    icon: 50,
    stats: [['arf', 20]],
    tooltip: '20% of HP is added to\nATK when calculating\nARROW damage.'
  }, {
    icon: 51,
    stats: [['crm', 50]],
    multis: [['dmg', 0.80]],
    tooltip: '20% less ATK.\nCRITICAL Strikes deal 200%\ninstead of 150% damage.'
  }, {
    icon: 52,
    stats: [['iml', -5]],
    multis: [['dmg', 1.05], ['arm', 1.05]],
    tooltip: '-5% BURN.\n5% more ATK.\n5% more DEF.'
  }, {
    icon: 53,
    multis: [['mhp', 1.10], ['dmg', 1.04], ['arm', 1.08]],
    tooltip: '10% more HP.\n4% more ATK.\n8% more DEF.'
  }, {
    icon: 54,
    stats: [['rag', 0.5]],
    tooltip: 'Gain 0.5% more ATK\nwhen you are hit.\nStacks additively.'
  }, {
    icon: 55,
    stats: [['gbs', 150]],
    tooltip: 'LEECH and REGEN are\nincreased by 50% while under\nGUARD Spell.'
  }, // Page 3
  {
    icon: 176,
    stats: [['frz', 1], ['arr', -2], ['fbm', 2.5]],
    tooltip: '-2 ARROWS.\nGrants an additional FREEZE Spell.\nFrozen enemies take 2.5x\ndamage from BURN.'
  }, {
    icon: 177,
    stats: [['lch', 10], ['psn', 5], ['slm', -30]],
    tooltip: '10% LEECH, 5% POISON.\nCRITICAL and SHIELD Strikes\nleech 30% less.'
  }, {
    icon: 178,
    stats: [['arr', -1], ['bsh', 50], ['slm', 10]],
    tooltip: '-1 ARROW.\nAdditional 50% chance to\nperform SHIELD Strike.\nCRITICAL and SHIELD Strikes\n leech 10% more'
  }, {
    icon: 179,
    stats: [['abs', 12]],
    tooltip: 'Take 12% less damage.'
  }, {
    icon: 180,
    stats: [['arr', 1]],
    multis: [['dmg', 0.95]],
    tooltip: '1 ARROW.\n 5% less ATK'
  }, {
    icon: 181,
    stats: [['are', 1], ['hnt', 1]],
    tooltip: 'All spent ARROWS are recovered\nwhen you use GUARD Spell.\nDamage of ARROWS is calculated\non DEF instead of ATK, but at\n30% of the value.'
  }, {
    icon: 182,
    stats: [['arf', 20]],
    tooltip: '20% of HP is added to\nATK when calculating\nARROW damage.'
  }, {
    icon: 183,
    stats: [['crm', 50]],
    multis: [['dmg', 0.80]],
    tooltip: '20% less ATK.\nCRITICAL Strikes deal 200%\ninstead of 150% damage.'
  }, {
    icon: 184,
    stats: [['iml', -5]],
    multis: [['dmg', 1.05], ['arm', 1.05]],
    tooltip: '-5% BURN.\n5% more ATK.\n5% more DEF.'
  }, {
    icon: 185,
    multis: [['mhp', 1.10], ['dmg', 1.04], ['arm', 1.08]],
    tooltip: 'Gain 50% sword range\ndoes not apply to SHIELD Strike'
  }, {
    icon: 186,
    stats: [['abs', 10]],
    multis: [['dmg', 0.9]],
    tooltip: 'Take 10% less damage\nLose 10% ATK'
  }, {
    icon: 187,
    stats: [['gbs', 150]],
    tooltip: 'All Enemies\nGain 20% more health\nLose -10% damage'
  }];
  return skills;
});
