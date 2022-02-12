//% color="#83de8a"
namespace Targeting {
    //% block="Find First Sprite Along Path: Type $spriteKind Distance $range From Sprite $input "
    export function FindFirstSpriteOfType(spriteKind: true, range: number, input: Sprite): any {
        let completionvar = 0
        let sprite = null
        let value = null
        for (let value of spriteutils.getSpritesWithin(SpriteKind.Enemy, range, input)) {
            if (scene.spritePercentPathCompleted(value) > completionvar) {
                completionvar = scene.spritePercentPathCompleted(value)
            }
            for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
                if (scene.spritePercentPathCompleted(value) >= completionvar) {
                return value
                let completionvar = 0    
                }
            }
        }
    }
}