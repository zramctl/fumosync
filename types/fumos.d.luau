declare loadstringEnabled: boolean
declare _VERSION: string

declare owner: Player

declare arguments: any

declare isolatedStorage: {
    get: (name: string) -> any,
    set: (name: string, value: any?) -> ()
}

declare immediateSignals: boolean

declare require: (module: ModuleScript | number) -> any

declare loadstring: (source: string, chunkName: string) -> (() -> any, string)

declare NLS: (source: string, parent: Instance?) -> LocalScript

declare requireM: (moduleName: string) -> any

declare LoadAssets: (assetId: number) -> {
    Get: (asset: string) -> Instance,
    Exists: (asset: string) -> boolean,
    GetNames: () -> {string},
    GetArray: () -> {Instance},
    GetDictionary: () -> {[string]: Instance}
}