export function getProperty(className: any): string[] {
  return Object.getOwnPropertyNames(className).filter((prop) => {
    return typeof className[prop] !== 'function'
  })
}
