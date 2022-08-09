interface IEventEmitter {
    on? : Function
    off? : Function
    trigger? : Function
}

interface ISizes extends IEventEmitter {
    width: number
    height: number
    pixelRatio: number
}

interface ICamera {
    exp: IExp
    sizes: ISizes
    scene: THREE.Scene
    canvas: HTMLCanvasElement
    instance: THREE.PerspectiveCamera
    // @ts-ignore
    controls: THREE.OrbitControls
    resize: Function
    update: Function
}

interface IExp {
    sizes: ISizes
    time: ITime
    scene: THREE.Scene
    canvas: HTMLCanvasElement
    camera: ICamera
    renderer: IRenderer
    world: IWorld
}

interface IRenderer {
    exp: IExp
    canvas: HTMLCanvasElement
    sizes: ISizes
    scene: THREE.Scene
    camera: ICamera
    instance: THREE.WebGLRenderer
    resize: Function
    update: Function
}

interface ITime extends IEventEmitter {
    start: number
    current: number
    elapsed: number
    delta: number
}

interface IWorld {
    exp : IExp
    scene: THREE.Scene
    environment: IEnvironment
}

interface IEnvironment {
    exp: IExp
    scene: THREE.Scene
    sunLight: THREE.DirectionalLight
}