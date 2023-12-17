function parse_ini(str) {
	const result = {}
	let section = result;
	const lines = str.split(/\n+/);
	
	for (const line of lines) {
		if (/.*?\;.*/gm.test(line)) continue;
		else if (/\[(.*)\]/gm.test(line)) {
			const [_, key] = /\[(.*)\]/gm.exec(line.trim());
			result[key] = {};
			section = result[key];
			continue;
		}
		else if (/^(.*?)=(.*)$/gm.test(line)) {
		const [_, key, value] = /^(.*?)=(.*)$/gm.exec(line.trim());
		section[key] = value;
		continue;
		}
		else throw new SyntaxError(`Invalid Syntax: ${line}`)
	}
	
	return result;
	
}

ini_content = `searchengine=https://duckduckgo.com/?q=$1
spitefulness=9.7

; comments are preceded by a semicolon...
; each section concerns an individual enemy
[larry]
fullname=Larry Doe
type=kindergarten bully
website=http://www.geocities.com/CapeCanaveral/11451

[davaeorn]
fullname=Davaeorn
type=evil wizard
outputdir=/home/marijn/enemies/davaeorn`

console.log(parse_ini(ini_content))
