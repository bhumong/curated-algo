
const Path = require("path");
const FS = require("fs");
const minimist = require("minimist");
const argv = minimist(process.argv.slice(2));
const path = argv.path || argv.p;
if (!path) {
    console.log("path not found");
    process.exit(1);
}

let Files = [];
let Match = [];

function ThroughDirectory(Directory) {
    let files = [];
    function innerThroughDirectory(Directory) {
        FS.readdirSync(Directory).forEach(File => {
            const Absolute = Path.join(Directory, File);
            if (FS.statSync(Absolute).isDirectory()) {
                return innerThroughDirectory(Absolute);
            } else {
                if (Absolute.endsWith('.php')) {
                    return files.push(Absolute);
                }
            }
        });
    }
    innerThroughDirectory(Directory);
    return files;
}

Files = ThroughDirectory(path);

Files.forEach(file => {
    const fileContent = (FS.readFileSync(file)).toString('utf-8').split(/\r?\n/);
    fileContent.forEach((line, index) => {
        if (line.match(/__\(/g)) {
            Match.push({
                file,
                index: index + 1,
                value: line
            });
        }
    });
});

FS.writeFile('language.json', JSON.stringify(Match), 'utf8', err => {
    if (err) throw err;

    console.log('complete');
}); 