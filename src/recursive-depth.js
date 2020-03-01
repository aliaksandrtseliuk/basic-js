module.exports = class DepthCalculator {
    calculateDepth(arr) { 
    let innerDepths = arr.filter(Array.isArray).map(item => this.calculateDepth(item))
    return innerDepths.length ? Math.max(...innerDepths) + 1 : 1
    }
};
