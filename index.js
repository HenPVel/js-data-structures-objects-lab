// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue (driver, key, value) {
    return Object.assign({}, driver, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

let deleteFromDriverByKey = (driver, key) => {
    const driver2 = Object.assign({}, driver)
    delete driver2[key]
    return driver2
}

let destructivelyDeleteFromDriverByKey = (driver, key) => {
    delete driver[key]
    return driver
}