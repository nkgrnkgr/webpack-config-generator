class Utils {
    static find(o, key, separator) {
        this.__loop(key, separator, (k, i, keys) => {
            o = o[k] ? o[k] : null;
        });
        return o;
    };

    static update(o, key, value, separator) {
        this.__loop(key, separator, (k, i, keys) => {
            if (i === keys.length - 1) {
                o[k] = value;
                return;
            };
            o = o[k] ? o[k] : null;
        });
    };

    static __loop(key, separator, callback) {
        const keys = key.split(separator);
        keys.forEach((k, i, keys) => {
            callback(k, i, keys);
        });
    };
}

export default Utils;


// const get = (o, key, separator) => {
//
//     const keys = key.split(separator);
//     for (let k of keys) {
//         o = o[k] ? o[k] : null;
//     }
//     return o;
// };
//
// const set = (o, key, value, separator) => {
//
//     const keys = key.split(separator);
//     for (let i = 0; i < keys.length; i++) {
//         let k = keys[i];
//
//         if (i === keys.length - 1) {
//             o[k] = value;
//             return;
//         }
//         o = o[k] ? o[k] : null;
//     }
// };
//
//
// const get2 = (o, key, separator) => {
//     const keys = key.split(separator);
//     keys.map((k, i) => {
//         o = o[k] ? o[k] : null;
//     });
//     return o;
// };
//
// const set2 = (o, key, value, separator) => {
//     const keys = key.split(separator);
//     keys.map((k, i) => {
//         if (i === keys.length - 1) {
//             o[k] = value;
//             return;
//         }
//         o = o[k] ? o[k] : null;
//     });
// };


