module.exports = {
  conversion(au) {
    const auInKm = 149587870
    let unitInKm = au * auInKm
    return unitInKm
  }
}