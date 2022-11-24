namespace SpriteKind {
    export const NPC = SpriteKind.create()
    export const uhh = SpriteKind.create()
    export const nonNPC = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    BunnyPlayer.setImage(img`
        ......................
        ......................
        ......................
        .....d11........11d...
        .....d1.1.1111.1.1d...
        .....dd..111111..dd...
        .........111111.......
        .........dd11dd.......
        ..........dddd........
        ..........1111........
        .........111111.......
        ....dd..11111111...dd.
        ....ddd.d1111111d.ddd.
        .....ddddd11111ddddd..
        ......ddddddddddddd...
        .......dd.......dd....
        ......................
        ......................
        ......................
        ......................
        ......................
        ......................
        `)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    level = 2
    NextLevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC, function (sprite, otherSprite) {
    otherSprite.sayText("Sorry, i couldn't find any food. if you haven't already, check with the others!", 5000, false)
    otherSprite.setKind(SpriteKind.nonNPC)
    info.changeScoreBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    BunnyPlayer.setImage(img`
        ......................
        ...1..................
        ......ddd.............
        .....1.d1ddd..........
        .....1..1.dd..........
        ......1111............
        .....111111...........
        ....f11f111...........
        .....b11111...........
        .....111111...........
        .....d1111111111......
        ......ddddd11111.dd...
        .........d111111.dd...
        .........d111111d.....
        ........ddddddd1d.....
        ........d.....ddd.....
        ..............d.......
        ..........ddddd.......
        ......................
        ......................
        ......................
        ......................
        `)
})
info.onCountdownEnd(function () {
    game_win = true
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffff555fffffffffffffffffffffffffffffffffffffffffffffff5fffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff5fff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff5fffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffff5ffffffffffffffffffffffff5fffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111fffffffffffffffffffffffff11111dfffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffff111111ddfff1111fffffffffffffffffffffffffffffffffff555fffffffffffffffffff
        fffffffffffffffffffffffffff555ffffffffffffffffffffffffffff111111fffffffffffffffffffffff111111dddff1111ddffffffffffffffffffffffffffffffffff555fffffffffffffffffff
        fffffffffffffffffffffffffff555ffffffffffffffffffffffffff11111111fffffffffffffffffffffff11111ddddf1111dddfffffffffffffffffffffffff555fffffffffffffffffffffff5ffff
        fffffffffffffffffffffffffff555fffffffffffffffffffffffff111111111ffffffffffffffffffffff111111ffddf111ddddfffffffffffffffffffffffff555ffffffffffffffffffffffffffff
        ffffffffff5fffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffff1111fffff111dddddfffffffffffffffffffffffff555ffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111fffffffffffffffffffffff1111fffff111fffddffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111fffffffffffffffffffffff111fffff111ffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111fffffffffffffffffffffff111fffff11fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111fffffffffffffffffffffffff11ffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffffffffffff11111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff111111111111111fffffffffffffffffffffffffff111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff5fffffffffffffffff1111111111111111ffffffffffffffffffffff11111111111111ffffffffffffffffffffffffffffffffffffffffff555fffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff111111111111111111fffffffffffffffffd11111111111111111ffffffffffff5ffffffffffffffffffffffffffff5555fffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff111111111111111111ffffffffffffffffdd11111111111111111fffffffffffffffffffffffffffffffffffffff5ff555fffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111ffffffffffffffdddd11111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffddddd11111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffdd1111111111111111111fffffffffffdddddd1111111111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffdd1111111111111111111ffffffffffddddddddd11111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffff5ffffffffffffffffffffffffffffdd11111111111111111111fffffffffddddddddddddddddddffffffffffffffffffff5ffffffffffffffffffff5ffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffddd111111111111111111111fffffffdddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffddd111111111111111111111fffffffdddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff5ffffffffffffdddd111111111111111111111ffffffdddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffddddd1111111111111111111111ffffddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffdddddd11111111111111111111111ffddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffdddddd111111111111111111111111fddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff5ffffffffffffffffffffddddddd111111111111111111111111ddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffddddddd111111111111111111111111111ddddddddddddffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffdddddddd11111111111111111111111111111dddddddddffffffffffffffffffffffdffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffddddddddd1111111111111111111111111111111dddddffffffffffffffffffffffddffffffffffffffffffffffffffffffffffffffff5fffffff
        fffffffffffffffffffffffffffffffffffffffffffdddddddddd11111111111111111111111111111111ddfffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffddddddddddd11111111111111111111111111111111dffffffffffffffffffffdddddffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff5ffffffffffffffffddddddddddddd111111111111111111111111111111111111fffffffffffffdddddddffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff5fffffffffddddddddddddddd11111111111111111111111111111111111111111111111dddddddffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffddddddddddddddddd111111111111111111111111111111111111111111111dddddddffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffdddddddddddfffffffdf1111f11ffffff1111111111111111111111111111ddddddddffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffddddddddddddddfddddfdd11f11f11111111111111111111111111111111dddddddddffffffffffffffffffffffffffffffffffffffffff5fffff
        fffffffffffffffffffffffffff5ff5ffffffffffffddddddddddddddfddddffffffd1ffffff11111111111111111111111111ddddddddddffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffddddddddddddddfddddfddddfddf11111111111111111111111111111ddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffddddddddddddddfddddfddddfddffffff1111111111111111111111ddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddd11111111111111111ddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffff5ffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff5fffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffff5ffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddffffffddffdddfddffffffdddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddfdddddddfdfddfddfdddddfdddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffbddddddddddddddddffffffddfddfdfddfdddddfdddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffbbbddddddddddddddfdddddddfdddffddfdddddfddddddddddddddddddddddfffffffffffffffffffffffffffff5ffffffffffffffffffffff
        ff5ffffffffffffffffffffffffffffffffffffffffffffbbddddddddddddddffffffddfddddfddffffffdddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffff555ffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffff555ffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffff555ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffbbbbdddddddddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffff5ffffffffffffffffffffffffffffffffff
        ffffffffffffff5fffffffffffffffffff5fffffffffffffffffbbbbbdddddddddddddddddddddddddddddddddddddddddddbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbddddddddddddddddddddddddddddddddddddddbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbdddddddddddddddddddddddddddddddddddbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbddddddddddddddddddddddddddddddbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbddddddddddddddddddddddddbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffff
        ffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbbbbbbbbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffff
        fffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffff555ffffffffffffffff5
        fffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555fffffff5fffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffff555fffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffff5fffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff555ffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffff5ffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    tiles.setCurrentTilemap(tilemap`level7`)
    pause(5000)
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    BunnyPlayer.setImage(assets.image`Hori Bunny`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.stopCountdown()
    scene.cameraShake(4, 500)
    info.startCountdown(30)
})
info.onScore(0, function () {
    level = 3
})
function NextLevel () {
    if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level2`)
        elder.x = 90
        elder.y = 90
        BunnyPlayer.x = 70
        BunnyPlayer.y = 70
        info.setScore(3)
    }
    if (level == 2) {
        elder.destroy()
        tiles.setCurrentTilemap(tilemap`level3`)
        fox = sprites.create(img`
            ......................
            ......................
            .......4..4...........
            .......14.1...........
            .......14.14......1...
            ......444444....1111..
            ......f4f4444..11111..
            ......4444444..111114.
            .....f4444444..411144.
            .....44444444..444444.
            .......114444...44444.
            ........1144444.44444.
            ........1114444..4444.
            .........1144444.4444.
            .......441441444.4444.
            .......4114114444444..
            ........11114444444...
            .....44411144444......
            .........4444.........
            ......................
            ......................
            ......................
            `, SpriteKind.NPC)
        fox.x = 100
        fox.y = 200
        monke = sprites.create(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d c c d d 3 d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `, SpriteKind.NPC)
        monke.x = 220
        monke.x = 220
        ducky = sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.NPC)
        ducky.y = 350
        ducky.x = 134
    }
    if (level == 3) {
        pause(2000)
        game.splash("the creatures failed to find any food...what will they do now?")
        tiles.setCurrentTilemap(tilemap`level4`)
        BunnyPlayer.x = 70
        BunnyPlayer.y = 70
        fire = sprites.create(img`
            2..............222.......
            ..2222..222...2.222..2...
            ..4222222222.....222.....
            ....222222222.222.222....
            .42.22242222222222222....
            ..22.2224222244422222....
            ..22222244442244422422...
            ..22242224442244444442...
            .b22244224444224445442...
            .bbb2442444442444554bb...
            bbbb244424444255455bbbb..
            bbbc224444444454455bbbbb.
            ccccc2554444555555bbbbbc.
            .cbbb44554455555bbbbbbbc.
            ..bbb225555555bbbbbbbbcc.
            .bbbbbbb5bbbbbbbbbbccccc.
            .bbbbbbbbbbbbbccbbccccc..
            .ccbbbbcbbbbbbbccccc.....
            ..ccccccbbbbbbcccccc.....
            ..ccccc.bbcbbcccccc......
            ........ccccccc..........
            .........ccccc...........
            .........................
            .........................
            .........................
            `, SpriteKind.Enemy)
        fire.x = 130
        fire.y = 50
        fox.x = 150
        fox.y = 30
        ducky.x = 120
        ducky.y = 20
        elder2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 1 1 1 1 1 b f . . . . 
            . . . f 1 b b b b b 1 b f . . . 
            . . . f b b f f f f b b f . . . 
            . . . f b f d d d d f b f . . . 
            . . f b f f f d d f f f b f . . 
            . . . f f d d d d d d f f . . . 
            . . . . . f d f f d f . . . . . 
            . . . . f 5 f f f f 5 f . . . . 
            . . f f d 5 5 5 5 5 5 d f f . . 
            . . f d d f 5 5 5 5 f d d f . . 
            . . . f f 5 5 5 5 5 5 f f . . . 
            . . . . . 5 5 5 5 5 5 . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.nonNPC)
        elder2.x = 90
        elder2.y = 70
        pause(1000)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    BunnyPlayer.setImage(img`
        ......................
        ......................
        ......................
        ......................
        ......................
        ......................
        ....111.......111.....
        ....11.1.....1.11.....
        ....1...11111...1.....
        .......1111111........
        .....111f111f111......
        ....11d111b111d11.....
        ....11dd11111dd11.....
        ......ddddddddd.......
        .......11ddd11........
        .......11...11........
        ......................
        ......................
        ......................
        ......................
        ......................
        ......................
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.uhh, function (sprite, otherSprite) {
    elder.sayText("oh, hello rabbit!", 2000, false)
    pause(2000)
    elder.sayText("I'm afraid we have a problem", 2000, false)
    pause(2000)
    elder.sayText("we've run out of food!", 2000, false)
    pause(2000)
    elder.sayText("I need you to go down and check with the others to see if they've found any food", 5000, false)
    pause(5000)
    elder.sayText("the amount of people you still have to check with will be displayed in the TOP RIGHT", 5000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    pause(500)
    game.splash("so, rabbit, you jumped into the fire to save your friends. your sacrifice will not be forgotten. you will ascend to the moon and be immortal.")
    tiles.setCurrentTilemap(tilemap`level5`)
    moon_phase = true
    BunnyPlayer.x = 70
    BunnyPlayer.y = 70
    sprites.destroyAllSpritesOfKind(SpriteKind.nonNPC)
    fire.destroy()
    info.startCountdown(30)
})
let projectile: Sprite = null
let moon_phase = false
let elder2: Sprite = null
let fire: Sprite = null
let ducky: Sprite = null
let monke: Sprite = null
let fox: Sprite = null
let BunnyPlayer: Sprite = null
let elder: Sprite = null
let game_win = false
let level = 0
level = 1
game_win = false
elder = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f 1 1 1 1 1 b f . . . . 
    . . . f 1 b b b b b 1 b f . . . 
    . . . f b b f f f f b b f . . . 
    . . . f b f d d d d f b f . . . 
    . . f b f f f d d f f f b f . . 
    . . . f f d d d d d d f f . . . 
    . . . . . f d f f d f . . . . . 
    . . . . f 5 f f f f 5 f . . . . 
    . . f f d 5 5 5 5 5 5 d f f . . 
    . . f d d f 5 5 5 5 f d d f . . 
    . . . f f 5 5 5 5 5 5 f f . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.uhh)
BunnyPlayer = sprites.create(assets.image`Hori Bunny`, SpriteKind.Player)
scene.cameraFollowSprite(BunnyPlayer)
controller.moveSprite(BunnyPlayer, 100, 100)
scene.cameraFollowSprite(BunnyPlayer)
NextLevel()
game.onUpdateInterval(500, function () {
    if (moon_phase == true) {
        if (game_win == false) {
            projectile = sprites.createProjectileFromSide(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . b d d d . . . . . . 
                . . . . d d d d d d d . . . . . 
                . . . b d d b d d d d b b . . . 
                . b b b d d d b d b d d b . . . 
                . b b d d b d d d b b b b b . . 
                . b d d d d d d d b b b b b . . 
                . b b d d d b b b b b b b c . . 
                . . b b b b b b b b b b c c . . 
                . . b b b b b c c b c c c . . . 
                . . c b b c c c c c c c c . . . 
                . . c c b c c c . . . . . . . . 
                . . . c c c . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, 0, 50)
            projectile.x = randint(0, 300)
        }
    }
})
