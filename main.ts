//% color="#83de8a"
namespace Targeting {
    //% block="Find First Sprite Along Path: Type $spriteKind Distance $range From Sprite $input "
    //% spriteKind.shadow="spritekindPicker"
    export function FindFirstSpriteOfType(spriteKind: true, range: number, input: Sprite): any {
        let completionvar = 0
        let sprite = null
        let value = null
        let isanysprites = false
        for (let value of spriteutils.getSpritesWithin(SpriteKind.Enemy, range, input)) {
            if (scene.spritePercentPathCompleted(value) > completionvar) {
                completionvar = scene.spritePercentPathCompleted(value)
                isanysprites = true
            }
            for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                if (scene.spritePercentPathCompleted(value) >= completionvar) {
                if (isanysprites) {
                return value    
                } else {
                return null
                }
                completionvar = 0
                isanysprites = false
                }
            }
        }
    }
}