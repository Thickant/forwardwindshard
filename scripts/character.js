define([
    'game', 
    'sat', 
    'stats', 
    'entity', 
    'dataSkills', 
    'dataRelics', 
    'dataActions', 
    'action'
], function (game, SAT, Stats, Entity, DataSkills, DataRelics, DataActions, Action) {

    // Player Character Definition
    var Character = /*#__PURE__*/ (function (_Entity) {
        _inherits(Character, _Entity);

        var _super = _createSuper(Character);

        function Character(x, y) {
            var _this;

            _classCallCheck(this, Character);

            _this = _super.call(this, x, y);
            _this.image = 'char_m';
            _this.timers.wait = 0;
            _this.timers.phasing = 0;
            _this.timers.relish = 0;
            _this.collided = false;
            _this.defaultPos = { x: 0, y: 0 };
            _this.level = 1;
            _this.experience = 0;
            _this.items = [];
            _this.equips = [];
            _this.attributes = [];
            _this.rage = 0;
            _this.lastEnemyHit = null;
            _this.skillPoints = 0;
            _this.relicIndex = 0;
            _this.affectable = ['guard'];
            _this.frame = 'idle:0';

            _this.adjustShape();
            _this.initializeStats();
            _this.initializeSkills();
            _this.initializeRelics();
            _this.rest();

            return _this;
        }

        // Adjust shape
        _createClass(Character, [
            {
                key: "adjustShape",
                value: function adjustShape() {
                    var horizontal = Math.floor(18 / 2);
                    var vertical = Math.floor(24 / 2);
                    this.shape = new SAT.Polygon(
                        new SAT.Vector(this.x, this.y),
                        [
                            new SAT.Vector(horizontal, vertical),
                            new SAT.Vector(-horizontal, vertical),
                            new SAT.Vector(-horizontal, -vertical),
                            new SAT.Vector(horizontal, -vertical)
                        ]
                    );
                    this.initializeBounds();
                }
            },
            {
                key: "updateSpecific",
                value: function updateSpecific() {
                    if (this.timers.wait == 0) {
                        this.updateAction();
                    }

                    this.updateHealth();
                    this.updateImmolation();
                }
            },
            // Update player actions
            {
                key: "updateAction",
                value: function updateAction() {
                    var _this2 = this;

                    var walking = this.action && this.action.data == DataActions['autoWalk'].data;

                    if ((!this.action || this.action.done || walking) && this.timers.relish == 0) {
                        this.updateDirection();
                        var actions = ['bashStrike', 'critStrike', 'jump', 'charAttack', 'jumpWalk', 'autoWalk'];
                        actions.forEach(function (name) {
                            if (DataActions[name].condition(game, _this2) &&
                                (!_this2.action || _this2.action.done || (walking && name != 'autoWalk'))) {
                                _this2.action = new Action(_this2, DataActions[name]);
                                walking = _this2.action.data == DataActions['autoWalk'].data;
                            }
                        });
                    }

                    if (this.action) {
                        this.action.update();
                    }
                }
            },
            // Adjust player direction
            {
                key: "updateDirection",
                value: function updateDirection() {
                    var _this3 = this;

                    var dir = this.mir ? -1 : 1;
                    var enemyBehind = game.entities.aliveEnemies().find(function (e) {
                        return e.x * dir < _this3.x * dir && Math.abs(e.y - _this3.y) < 16 && Math.abs(e.x - _this3.x) < 96;
                    });
                    var currentEnemyDead = this.lastEnemyHit == null || this.lastEnemyHit.x * dir < this.x * dir;

                    if (currentEnemyDead && enemyBehind) {
                        dir *= -1;
                    }

                    this.direction = dir;
                }
            },
            {
                key: "updateHealth",
                value: function updateHealth() {
                    var regen = this.mhp * this.hpr / 100 / 60;
                    this.hp = Math.min(this.hp + regen, this.mhp);
                }
            },
            // Updated Immolation logic with distance scaling by Burn stat
            {
                key: "updateImmolation",
                value: function updateImmolation() {
                    var _this4 = this;

                    if (this.iml) {
                        var baseDistance = 50;
                        var burnRangeIncrease = this.burn * 0.05;  // Increase range by 5% for each point of burn
                        var distance = baseDistance + baseDistance * burnRangeIncrease;

                        var nearby = game.entities.aliveEnemies().filter(function (e) {
                            return Math.abs(e.x - _this4.x) <= distance && Math.abs(e.y - _this4.y) <= distance;
                        });

                        nearby.forEach(function (enemy) {
                            var freezeMultiplier = _this4.fbm && enemy.ice ? _this4.fbm : 1;
                            var damage = _this4.mhp * _this4.iml / 100 / 60 * freezeMultiplier;
                            enemy.applyDamage(damage, _this4);
                        });
                    }
                }
            },
            // Take a hit logic
            {
                key: "takeHit",
                value: function takeHit(collidor) {
                    var projectile = collidor.constructor.name == 'Projectile' ? collidor : null;
                    var attacker = projectile ? projectile.caster : collidor;
                    var mods = projectile ? projectile.mods : attacker.hitMods;
                    var damage = attacker.dmg - Math.floor(attacker.dmg * 1 / Math.pow(2, attacker.dmg / this.arm));
                    damage *= mods.dmgMulti !== undefined ? mods.dmgMulti : 1;
                    damage *= this.abs ? 1 - this.abs / 100 : 1;

                    if (mods.reaction) {
                        this.addReaction(mods.reaction);
                    }

                    if (damage) {
                        if (this.rag) {
                            this.rage += this.rag;
                            this.refreshStats();
                        }

                        game.audio.playSfx('hit');
                    }

                    if (mods.sfx) {
                        game.audio.playSfx(mods.sfx);
                    }

                    this.hp = this.hp - damage;

                    if (this.hp <= 0 && !this.destroyed) {
                        this.destroy();
                        this.fade();
                    }
                }
            },
            // Additional character logic...
            // The rest of your class methods go here...
        ]);

        return Character;
    }(Entity));

    return Character;
});
