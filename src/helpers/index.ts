export function getValidParams(args): Object {
    let filter = {};
    Object.keys(args).map(key => {
        if (args[key])
            filter = { ...filter, [key]: args[key] };
    })
    return filter;
}