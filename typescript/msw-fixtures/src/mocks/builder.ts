export const builder = <T>(item: T) => {
    const create = (props?: Partial<T>): T => {
        return { ...item, ...props }
    }

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