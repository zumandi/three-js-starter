import {
    DirectionalLight
} from 'three'
import EXP from "../EXP"

export default class Environment implements IEnvironment{
    exp: IExp;
    scene: THREE.Scene;
    sunLight: THREE.DirectionalLight;

    constructor(){
        this.exp = EXP.getInstance()
        this.scene = this.exp.scene

        this.setSunLight()
    }

    setSunLight(){
        this.sunLight = new DirectionalLight('#ffff00', 4)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 15
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(3.5, 2, - 1.25)
        this.scene.add(this.sunLight)
    }
}