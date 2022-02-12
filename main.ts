//% color="#83de8a"
namespace Targeting {
    //% block="type $type"
    //% type.shadow="kindPicker"
    export function FindFirstSpriteOfType(spritetype: true, range: number): any {
        let competionvar = 0
        let sprite = null
        let sprite2 = null
        let sprite3 = null
        let value = null
        for (let value of spriteutils.getSpritesWithin(SpriteKind.Enemy, range, sprite2)) {
            if (scene.spritePercentPathCompleted(value) > competionvar) {
                competionvar = scene.spritePercentPathCompleted(value)
                return sprite
            }
        }
    }
}