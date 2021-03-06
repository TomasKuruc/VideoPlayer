export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state: any) => {
    try {
        const trimmedState = {...state};
        delete trimmedState["ajaxLoading"];
        const serializedState = JSON.stringify(trimmedState);
        localStorage.setItem("state", serializedState);
    } catch (err) {
        // ignore write errors
    }
};