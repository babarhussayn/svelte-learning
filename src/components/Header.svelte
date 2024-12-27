<script>
	const navItems = [
		{
			name: 'Home',
			link: '/'
		},
		{
			name: 'About',
			link: '/about'
		},
		{
			name: 'Contact',
			link: '/contact'
		},
		{
			name: 'Services',
			link: '/services'
		},
		{
			name: 'Products',
			link: '/products'
		}
	];
</script>

<div class="flex items-center justify-center gap-6 bg-[#f57171] p-4">
	{#each navItems as item}
		<div>
			<ul>
				<li class="hover:text-[#fefefe] hover:underline">
					<a href={item.link}>{item.name}</a>
				</li>
			</ul>
		</div>
	{/each}
</div>
