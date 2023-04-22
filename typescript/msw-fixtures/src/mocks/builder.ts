export const builder = <T>(item: T) => {
    // create a generic object
    const create = (props?: Partial<T>): T => {
        return { ...item, ...props }
    }

    // create an array of generic objects
    const createArray = (count: number, props?: Partial<T>): T[] => {
       return Array(count).fill(count).map(() => {
            return {
                ...item,
                ...props,
            }
        })
    }

    return {
        create,
        createArray
    }
}