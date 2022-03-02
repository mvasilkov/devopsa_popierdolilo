import { Body } from './Body.js'
import { constraints, register0 } from './main.js'
import { Vec2 } from './node_modules/natlib/out/Vec2.js'
import { Point } from './Point.js'

export class Constraint {
    parent: Body
    v0: Point
    v1: Point
    p0: Vec2
    p1: Vec2
    length: number
    stiffness: number
    isBoundary: boolean

    constructor(parent: Body, v0: Point, v1: Point, stiffness: number, isBoundary: boolean = false) {
        this.parent = parent
        this.v0 = v0
        this.v1 = v1
        this.p0 = v0.position
        this.p1 = v1.position
        this.length = this.p0.distanceSquared(this.p1) ** 0.5
        this.stiffness = stiffness
        this.isBoundary = isBoundary

        parent.constraints.push(this)
        if (isBoundary) parent.edges.push(this)
        constraints.push(this)
    }

    solve() {
        register0.setSubtract(this.p0, this.p1)

        const length = register0.length()
        if (length) {
            register0.scale(this.stiffness * (this.length - length) / length)

            this.p0.add(register0)
            this.p1.subtract(register0)
        }
    }
}
