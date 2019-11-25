export const search = (mrak, model, body, drive_unit) => {
    return{
        type: 'SEARCH',
        mrak,
        model,
        body,
        drive_unit
    }
}