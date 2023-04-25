export function createFixture<T>(item: T) {
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

  /**
     * Creates a unique array of objects from a fixture.
     *
     * Usage: To use, pass in your desired fixture
     * to the parent builder function, then pass in
     * your desired overrides to the creatUniArray function.
     *
     * @param props Generic array of objects
     * @returns Generic array of objects with overrides
     *
     */
  const createUniArray = (props: Partial<T>[]): T[] => {
    const array: T[] = []

    props.forEach((entry) => {
      array.push({ ...item, ...entry })
    })

    return array
  }

  return {
    create,
    createArray,
    createUniArray,
  }
}
