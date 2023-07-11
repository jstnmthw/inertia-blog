export default function classNames(
    ...args: string[] | { [key: string]: boolean }[]
) {
    // Initialize the classes array.
    const classes: string[] = []

    // Iterate over the arguments and add the classes to the array.
    for (const arg of args) {
        if (typeof arg === 'string') {
            classes.push(arg)
        } else if (typeof arg === 'object') {
            for (const key of Object.keys(arg)) {
                if (arg[key]) {
                    classes.push(`${key}=${arg[key]}`)
                }
            }
        }
    }

    // Return the space-separated string of classes.
    return classes.join(' ')
}
