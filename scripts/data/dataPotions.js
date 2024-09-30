"use strict";

define([''], function () {
  //*******************************************************************************************************************
  // ** Potion Data
  //*******************************************************************************************************************
  var potions = [//* Put tests here
  // [{effect:'customStat',   params:[{stats:[['lch', -4], ['hpr', 2]]}], icon:153, tooltip:'-4 LEECH\n+2 REGEN'}, {effect:'customStat',   params:[{stats:[['lch', 4], ['hpr', -2]]}], icon:154, tooltip:'-2 REGEN\n+4 LEECH'}, {effect:'experience',    params:[2000], icon:145, tooltip:'+1200 EXP'}],
  //* Potions
  // Will - Test multiple stat potions
//  [{
  //  effect: 'multipleStat',
 //   params: [{
   //   positive: ['dmg', 'arm'],
  //    negative: ['mhp']
   // }]
//  }],
  // Will - End test multiple stat potions
  [{
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'customStat',
    params: [{
      stats: [['mhp', 25], ['arm', 10]]
    }]
  }], [{
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'customStat',
    params: [{
      stats: [['dmg', 20], ['arm', 20]]
    }],
    tooltip: '+20 ATK/DEF'
}], [{
  effect: 'multipleStat',
  params: [{
    positive: ['dmg', 'arm'],
    negative: []
    }]
}, {
  effect: 'multipleStat',
  params: [{
    positive: ['mhp', 'arm'],
    negative: []
    }]
}, {
  effect: 'multipleStat',
  params: [{
    positive: ['dmg', 'mhp'],
    negative: []
    }]
}], [{
    effect: 'experience',
    params: [150],
    icon: 144,
    tooltip: '+150 EXP'
  }], [{
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'customStat',
    params: [{
      stats: [['iml', 2]],
      multis: [['mhp', 1.05]]
    }],
    icon: 146
  }, {
    effect: 'customStat',
    params: [{
      stats: [['cri', 10]],
      multis: [['dmg', 1.05]]
    }],
    icon: 150
  }, {
    effect: 'customStat',
    params: [{
      multis: [['arm', 1.15], ['mhp', 0.9]],
    }],
    icon: 149
  }], [{
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'customStat',
    params: [{
      stats: [['mhp', 30], ['dmg', 30]]
    }],
    tooltip: '+30 HP/ATK'
}], [{
  effect: 'multipleStat',
  params: [{
    positive: ['arm'],
    negative: ['dmg']
    }]
}, {
  effect: 'multipleStat',
  params: [{
    positive: ['mhp'],
    negative: ['dmg']
    }]
}, {
  effect: 'randomStat',
    params: ['dmg']
}], [{
    effect: 'unlockArchery',
    params: [],
    tooltip: 'Unlocks Archery',
    icon: 152
  }], [{
    effect: 'randomStat',
    params: []
  }], [{
  effect: 'multipleStat',
  params: [{
    positive: ['mhp', 'dmg', 'arm'],
    negative: []
  }, {
  effect: 'multipleStat',
  params: [{
    positive: ['mhp', 'dmg', 'arm'],
    negative: []
  }, {
  effect: 'multipleStat',
  params: [{
    positive: ['mhp', 'dmg', 'arm'],
    negative: []
  }], [{
    effect: 'customStat',
    params: [{
      stats: [['hpr', 1]]
    }],
    icon: 147
  }, {
    effect: 'customStat',
    params: [{
      stats: [['lch', 2]]
    }],
    icon: 148
  }], [{
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'customStat',
    params: [{
      stats: [['hpr', 1], ['iml', 1]]
    }],
    icon: 147
  }, {
    effect: 'customStat',
    params: [{
      stats: [['lch', 2], ['slm', 5]]
    }],
    icon: 148
  }], [{
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'randomStat',
    params: ['dmg']
  }, {
    effect: 'randomStat',
    params: ['mhp']
  }, {
    effect: 'randomStat',
    params: ['arm']
  }], [{
    effect: 'customStat',
    params: [{
      stats: [['iml', 2]],
      multis: [['mhp', 1.05]]
    }],
    icon: 146
  }, {
    effect: 'customStat',
    params: [{
      stats: [['cri', 10]],
      multis: [['dmg', 1.05]]
    }],
    icon: 150
  }, {
    effect: 'customStat',
    params: [{
      multis: [['arm', 1.15], ['mhp', 0.9]]
    }],
    icon: 149
  }], [{
    effect: 'skillPoint',
    params: [1],
    icon: 151,
    tooltip: '+1 Skill Point'
  }], [{
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'experience',
    params: [600],
    icon: 145,
    tooltip: '+600 EXP'
  }], [{
    effect: 'customStat',
    params: [{
      stats: [['mhp', 200], ['arm', 200]]
    }],
    tooltip: '+200 HP/DEF'
  }], [{
    effect: 'randomStat',
    params: []
  }, {
    effect: 'randomStat',
    params: []
  }, {
    effect: 'randomStat',
    params: []
  }, {
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'customStat',
    params: [{
      stats: [['dmg', 400]]
    }]
  }, {
    effect: 'customStat',
    params: [{
      stats: [['mhp', 1000]]
    }]
  }, {
    effect: 'customStat',
    params: [{
      stats: [['arm', 600]]
    }]
  }], [{
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'customStat',
    params: [{
      stats: [['lch', -4], ['hpr', 2]]
    }],
    icon: 153,
    tooltip: '-4 LEECH\n+2 REGEN'
  }, {
    effect: 'customStat',
    params: [{
      stats: [['lch', 4], ['hpr', -2]]
    }],
    icon: 154,
    tooltip: '-2 REGEN\n+4 LEECH'
  }, {
    effect: 'experience',
    params: [2000],
    icon: 145,
    tooltip: '+2000 EXP'
  }], [{
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'randomStat',
    params: []
  }, {
    effect: 'randomStat',
    params: []
  }, {
    effect: 'randomStat',
    params: []
  }, {
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'customStat',
    params: [{
      multis: [['dmg', 1.1]]
    }],
    icon: 149
  }, {
    effect: 'customStat',
    params: [{
      multis: [['mhp', 1.1]]
    }],
    icon: 149
  }, {
    effect: 'customStat',
    params: [{
      multis: [['arm', 1.1]]
    }],
    icon: 149
  }], [{
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'randomStat',
    params: []
  }, {
    effect: 'randomStat',
    params: []
  }, {
    effect: 'randomStat',
    params: []
  }, {
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'experience',
    params: [2000],
    icon: 145,
    tooltip: '+2000 EXP'
  }], [{
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'randomStat',
    params: []
  }, {
    effect: 'randomStat',
    params: []
  }, {
    effect: 'randomStat',
    params: []
  }, {
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'randomStat',
    params: []
  }], [{
    effect: 'experience',
    params: [3000],
    icon: 145,
    tooltip: '+3000 EXP'
  }], [{
    effect: 'customStat',
    params: [{
      multis: [['dmg', 1.15]]
    }],
    icon: 149
  }, {
    effect: 'customStat',
    params: [{
      multis: [['mhp', 1.15]]
    }],
    icon: 149
  }, {
    effect: 'customStat',
    params: [{
      multis: [['arm', 1.15]]
    }],
    icon: 149
  }], [{
    effect: 'randomStat',
    params: []
  }]];
  return potions;
});
