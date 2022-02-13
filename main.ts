//% color="#ff0808"
namespace Targeting {
    //% block="Find First Sprite Along Path: Kind $spriteKind Distance $range From Sprite $input "
    //% spriteKind.shadow="spritekind"
    export function FindFirstSpriteOfKind(spriteKind: number, range: number, input: Sprite): any {
        let completionvar = 0
        let sprite = null
        let value = null
        let isinrange = false
        for (let value of spriteutils.getSpritesWithin(spriteKind, range, input)) {
            if (scene.spritePercentPathCompleted(value) > completionvar) {
                isinrange = true
                completionvar = scene.spritePercentPathCompleted(value)
            }
            for (let value of sprites.allOfKind(spriteKind)) {
                if (scene.spritePercentPathCompleted(value) >= completionvar && spriteutils.distanceBetween (value, input) <= range && isinrange) {
                return value
                }
            completionvar = 0
            }
        }
    }
}