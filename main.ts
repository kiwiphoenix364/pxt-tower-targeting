//% color="#83de8a"
namespace Targeting {
    //% block
    export function FindFirstSpriteOfType(spritetype: true, range: number, input: Sprite): any {
        let competionvar = 0
        let sprite = null
        let sprite2 = null
        let sprite3 = null
        let value = null
        for (let value of spriteutils.getSpritesWithin(SpriteKind.Enemy, range, input)) {
            if (scene.spritePercentPathCompleted(value) > competionvar) {
                competionvar = scene.spritePercentPathCompleted(value)
                sprite2 = value
            }
        return sprite2}
    }
}