//% color="#ff0808"
namespace Targeting {
    //% block="Find First Sprite Along Path: Kind $spriteKind Max Distance $range From Sprite $input "
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
                if (scene.spritePercentPathCompleted(value) >= completionvar && spriteutils.distanceBetween (value, input) <= range) {
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
        for (let value of spriteutils.getSpritesWithin(spriteKind, range, input)) {
            if (scene.spritePercentPathCompleted(value) >= completionvar) {
                completionvar = scene.spritePercentPathCompleted(value)
            }
            for (let value of sprites.allOfKind(spriteKind)) {
                if (scene.spritePercentPathCompleted(value) >= completionvar && spriteutils.distanceBetween(value, tower) <= range) {
                spriteutils.setVelocityAtAngle(input, spriteutils.angleFrom(input, value), speed)
                }
                completionvar = 0
            }
        }
    }
}