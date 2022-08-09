import {
    Mesh,
    BoxGeometry,
    MeshStandardMaterial
} from 'three'
import EXP from "../EXP"
import Environment from './Environment'

export default class World implements IWorld{
    exp : IExp
    scene: THREE.Scene
    environment: IEnvironment

    constructor(){
        this.exp = EXP.getInstance()
        this.scene = this.exp.scene

        // Test Mesh
        const textMesh = new Mesh(
            new BoxGeometry(1, 1, 1),
            new MeshStandardMaterial()
        )
        this.scene.add(textMesh)

        // Setup
        this.environment = new Environment()
    }
}