export function createAction(type: any, payload:any = undefined, error = false, meta = null) {
    return {
        type,
        payload,
        error,
        meta,
    };
}