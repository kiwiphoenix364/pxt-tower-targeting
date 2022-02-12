//% color="#ff0808"
namespace Targeting {
    //% block="Find First Sprite Along Path: kind $spriteKind Distance $range From Sprite $input "
    //% spriteKind.shadow="spritekind"
    export function FindFirstSpriteOfKind(spriteKind: number, range: number, input: Sprite): any {
        let completionvar = 0
        let sprite = null
        let value = null
        for (let value of spriteutils.getSpritesWithin(spriteKind, range, input)) {
            if (scene.spritePercentPathCompleted(value) > completionvar) {
                completionvar = scene.spritePercentPathCompleted(value)
            }
            for (let value of sprites.allOfKind(spriteKind)) {
                if (scene.spritePercentPathCompleted(value) >= completionvar) {
                return value
                completionvar = 0
                }
            }
        }
    }
}