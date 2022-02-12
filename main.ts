//% color="#83de8a"
namespace Targeting {
    //% block
    export function FindFirstSpriteOfType(spritetype: true, range: number, input: Sprite): any {
        let competionvar = 0
        let sprite = null
        let value = null
        for (let value of spriteutils.getSpritesWithin(SpriteKind.Enemy, range, input)) {
            if (scene.spritePercentPathCompleted(value) > competionvar) {
                competionvar = scene.spritePercentPathCompleted(value)
                sprite = value
            }
        return sprite
        let completionvar = 0
        sprite = null
        }
    }
}