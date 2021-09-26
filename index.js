function process(config = {}) {
	const content = [];

	if (typeof config === 'object' && config) {
		if (Array.isArray(config)) {
			for (let index = 0, length = config.length; index < length; index++) {
				content.push(...process(config[index]));
			}
		} else {
			const { tag, attributes, children } = config;

			const openTag = [tag];
			if (attributes) {
				if (typeof attributes === 'object') {
					if (Array.isArray(attributes)) {
						openTag.push(...attributes);
					} else {
						for (const key in attributes) {
							if (attributes[key] === null) {
								openTag.push(key);
							} else {
								openTag.push(`${key}="${attributes[key]}"`);
							}

						}
					}
				} else {
					openTag.push(attributes);
				}
			}
			content.push(`<${openTag.join(' ')}>`);

			if (children) {
				content.push(...process(children));
				content.push(`</${tag}>`);
			}
		}
	} else {
		content.push(config);
	}

	return content;
}

export default function(config) {
	return process(config).join('');
}

export function tag(tag, attributes, children) {
	return { tag, attributes, children };
}
