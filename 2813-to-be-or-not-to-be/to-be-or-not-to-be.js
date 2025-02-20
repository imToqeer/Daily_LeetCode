/**
 * @param {any} val
 * @return {Object}
 */
var expect = function (val) {

    return {
        toBe: (val2) => {
            if (val !== val2) { throw new Error("Not Equal"); }
            return true;
        },
        notToBe: (val2) => {
            if (val === val2) { throw new Error("Equal"); }
            return true;
        }
    };

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
