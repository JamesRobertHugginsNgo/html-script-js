const sentences = [
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Nunc interdum pellentesque elit, vel volutpat nunc viverra auctor.',
	'Nunc volutpat rutrum nisi eu blandit.',
	'Etiam et turpis facilisis, mattis neque id, dictum mi.',
	'Curabitur rhoncus maximus mauris a congue.',
	'Maecenas maximus a neque ac tincidunt.',
	'Nullam blandit posuere ipsum, quis faucibus massa ullamcorper at.',
	'Etiam condimentum lorem sed mi venenatis dictum.',
	'Nulla velit ex, dictum ac mauris sed, ultricies imperdiet enim.',
	'Sed sed cursus lacus.',
	'Fusce ante justo, eleifend id aliquet vitae, viverra ac odio.',
	'Nam non varius diam.',
	'In nec diam a dolor vehicula porta.',
	'Morbi sollicitudin dapibus erat, ac rutrum nulla pharetra id.',
	'Ut eu odio tincidunt massa finibus dapibus sed eget diam.',
	'Aenean sed sapien sit amet sapien vehicula bibendum ut sit amet nisi.',
	'Mauris dictum arcu vitae purus eleifend, quis dignissim purus imperdiet.',
	'Donec hendrerit ipsum sed ante euismod feugiat.',
	'Nunc sapien dolor, pulvinar in felis eget, rhoncus fringilla arcu.',
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
	'Phasellus consequat a ante ut fermentum.',
	'Aenean imperdiet sit amet nisi elementum hendrerit.',
	'In mattis porta nulla, eu bibendum nunc mattis quis.',
	'Pellentesque laoreet enim vel dolor mollis iaculis.',
	'Quisque gravida turpis vel diam aliquet scelerisque.',
	'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
	'Quisque leo quam, cursus eu ligula a, posuere iaculis enim.',
	'Duis ut sem mi.',
	'Mauris nec libero luctus, facilisis nisl ac, congue turpis.',
	'Sed sed nunc euismod, commodo mauris at, condimentum erat.',
	'Phasellus facilisis a neque eget tempor.',
	'Aliquam erat volutpat.',
	'Integer gravida id diam ac facilisis.',
	'Donec pellentesque ipsum risus, ut feugiat ante dignissim at.',
	'Maecenas pretium tortor libero, quis imperdiet justo viverra eget.',
	'Curabitur ac tincidunt dolor, quis rutrum enim.',
	'Aenean et magna auctor, dictum mauris eget, vulputate ligula.',
	'Sed diam nunc, vulputate at dui in, cursus lacinia leo.',
	'Phasellus at pretium tortor.',
	'Nullam tempor mattis pretium.',
	'Vivamus dapibus est risus, vel maximus dui facilisis sodales.',
	'Fusce consectetur ut arcu et ornare.',
	'Nulla facilisi.',
	'Donec cursus rutrum sagittis.',
	'In mattis magna sed elit maximus, eget accumsan nisl fringilla.',
	'Donec eget neque sed magna molestie fermentum fermentum eget metus.',
	'Nam vitae lorem laoreet, dictum orci id, consequat est.',
	'Aliquam convallis, quam et blandit semper, ante purus condimentum lacus, nec rutrum nisi tortor quis est.',
	'Aliquam erat volutpat.',
	'Fusce velit arcu, sollicitudin sed velit non, scelerisque dictum leo.',
	'Integer malesuada turpis in rutrum pellentesque.',
	'Nullam eleifend elit eget ligula placerat mattis.',
	'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
	'Fusce est urna, dictum vel dui nec, malesuada dictum sem.',
	'Phasellus ultricies sagittis cursus.',
	'Nunc malesuada metus a metus varius, sit amet sagittis eros ultrices.',
	'Maecenas porttitor egestas nibh.',
	'Praesent pulvinar libero quam, a pharetra tortor dapibus vel.',
	'Maecenas condimentum purus dui, non posuere massa consequat vitae.',
	'Nam at felis nunc.',
	'Nunc viverra, risus vitae condimentum pretium, ipsum sapien fringilla eros, id imperdiet ipsum justo in dolor.',
	'Nullam mauris sem, finibus vel ultricies ut, convallis eu nibh.',
	'Curabitur suscipit, elit ut aliquam euismod, leo tortor viverra elit, vitae pellentesque massa est a nisl.',
	'Curabitur ut varius massa, nec pulvinar lacus.',
	'Duis ut elit accumsan, vestibulum enim ac, tincidunt ante.',
	'Nunc a dictum elit.',
	'Quisque eu enim euismod, molestie quam vel, volutpat massa.',
	'Fusce eu nulla id nunc fermentum porttitor.',
	'Suspendisse at consequat tortor.',
	'Sed eget ultrices leo.',
	'Integer ut metus nec velit fermentum commodo.',
	'Pellentesque tempus ante id volutpat efficitur.',
	'Fusce lacinia auctor elit, at rhoncus turpis pretium non.',
	'Praesent lorem eros, sodales sit amet purus a, luctus efficitur felis.',
	'Morbi tortor dolor, porta id massa vel, elementum malesuada enim.',
	'In iaculis auctor lorem, sed sagittis arcu malesuada id.',
	'Cras eget accumsan justo.',
	'Integer faucibus sem sit amet ornare blandit.',
	'Nam magna magna, porttitor vitae felis vel, lobortis pellentesque magna.',
	'Etiam pretium, nunc euismod cursus euismod, justo lacus auctor mauris, laoreet sodales urna enim id neque.',
	'Nulla id tempor leo.',
	'Pellentesque at urna non ligula accumsan blandit.',
	'Donec porttitor ante eu libero mattis fermentum.',
	'Morbi et suscipit ipsum.',
	'Nunc pharetra leo in mi ullamcorper tempus.',
	'Nam et venenatis odio, in pretium arcu.',
	'Aliquam eleifend, tortor non sollicitudin auctor, dui elit iaculis lectus, sit amet dictum mi erat ac mi.',
	'In tempor sapien id nisl pellentesque porta.',
	'Donec et enim cursus, tempus lectus et, aliquet urna.',
	'Nunc sed nisl sed metus iaculis accumsan.',
	'Quisque nulla tortor, dapibus sed posuere sit amet, ornare ac sapien.',
	'Nam sed dictum nunc.',
	'Mauris ante enim, lacinia eget ipsum sit amet, malesuada vulputate urna.',
	'Praesent leo quam, pharetra nec metus blandit, pharetra interdum sem.',
	'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
	'Phasellus consequat rutrum vehicula.',
	'Suspendisse in tellus massa.',
	'Sed viverra augue at leo placerat bibendum.',
	'Donec sem ligula, congue quis lacus vel, bibendum commodo augue.',
	'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
	'Sed ut felis nibh.',
	'Cras at purus faucibus, accumsan ipsum ac, eleifend turpis.',
	'Mauris eget nunc sed tellus molestie hendrerit.',
	'Sed sollicitudin consectetur mi, nec iaculis felis convallis nec.',
	'Pellentesque ornare ligula nec ante sagittis fringilla.',
	'Proin aliquet est vitae quam suscipit, rutrum sollicitudin metus facilisis.',
	'Suspendisse nunc massa, sodales molestie magna sit amet, dictum rhoncus justo.',
	'Aenean vitae quam in nisl posuere eleifend.',
	'Etiam sit amet lectus elementum, ultricies mauris eu, tempor odio.'
];

let index = 0;

export default function(total = 1) {
	const content = [];

	const length = sentences.length;

	for (let count = 1; count <= total; count++) {
		content.push(sentences[index]);
		index = index + 1;
		if (index === length) {
			index = 0;
		}
	}

	return content.join(' ');
}
