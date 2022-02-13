//% color="#ff0808"
namespace Targeting {
    //% block="Find First Sprite Along Path: Kind $spriteKind Max Distance $range From Sprite $input "
    //% spriteKind.shadow="spritekind"
    export function FindFirstSpriteOfKind(spriteKind: number, range: number, input: Sprite): any {
        let completionvar = 0
        let sprite = null
        let value = null
        for (let value of spriteutils.getSpritesWithin(spriteKind, range, input)) {
            if (scene.spritePercentPathCompleted(value) >= completionvar) {
                completionvar = scene.spritePercentPathCompleted(value)
            }
            for (let value of spriteutils.getSpritesWithin(spriteKind, range, input)) {
                if (scene.spritePercentPathCompleted(value) >= completionvar && completionvar > 1 && completionvar < 100) {
                return value
                }
            completionvar = 0
            }
        }
    }
    //% block="Set Sprite $input Velocity Towards First Sprite On Path Of Kind $spriteKind With Speed $speed Max Distance $range From Sprite $tower"
    //% spriteKind.shadow="spritekind"
    export function VelocityTowards(spriteKind: number, range: number, input: Sprite, tower: Sprite, speed: number) {
        let completionvar = 0
        let sprite = null
        let value = null
        for (let value of spriteutils.getSpritesWithin(spriteKind, range, tower)) {
            if (scene.spritePercentPathCompleted(value) >= completionvar) {
                completionvar = scene.spritePercentPathCompleted(value)
            }
            for (let value of spriteutils.getSpritesWithin(spriteKind, range, tower)) {
                if (scene.spritePercentPathCompleted(value) >= completionvar && completionvar > 1 && completionvar < 100) {
                spriteutils.setVelocityAtAngle(input, spriteutils.angleFrom(input, value), speed)
                }
                completionvar = 0
            }
        }
    }
}