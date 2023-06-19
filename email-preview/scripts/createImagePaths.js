const { get, set } = require("lodash");
const map = require("map-stream");
const vfs = require("vinyl-fs");

const obj = {};

const getPath = (file, cb) => {
    const { cwd, basename, path } = file;
    const workingPath = path.split("public")[1];
    const parts = workingPath.split("/");
    const [, , , color = "", style, size] = parts;
    const colorFamily = color.toLowerCase();

    const urls = get(obj, `${colorFamily}.${style}.${size}`, []);
    urls.push(workingPath);
    set(obj, `${colorFamily}.${style}.${size}`, urls);
    cb(null, file);
};

async function main() {
    vfs.src("./public/icons/**/*.png")
        .pipe(map(getPath))
        .on("end", () => {
            console.log(JSON.stringify(obj, null, "\t"));
        });
}

main().catch(err => console.log(err));
