<script>
	import { applyAction, deserialize } from '$app/forms';
	import { invalidateAll } from '$app/navigation';

	export let data;

	let toggle = false;

	function handleToggle() {
		toggle = !toggle;
	}

	async function handleSubmit(event: Event) {
		const data = new FormData(this);
		const res = await fetch(this.action, {
			method: 'POST',
			body: data
		});
		const result = deserialize(await res.text());
		if (result.type === 'success') {
			await invalidateAll();
		}
		applyAction(result);
	}
</script>

<section>
	<div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
		<div
			class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
			aria-hidden="true"
		>
			<div
				class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
				style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
			></div>
		</div>
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
				Contact
			</h2>
			<p class="mt-2 text-lg/8 text-gray-600">
				Aute magna irure deserunt veniam aliqua magna enim voluptate.
			</p>
		</div>
		<form action="/contact?/actions" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
			<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
				<div>
					<label for="first-name" class="block text-sm/6 font-semibold text-gray-900"
						>First name</label
					>
					<div class="mt-2.5">
						<input
							type="text"
							name="first-name"
							id="first-name"
							autocomplete="given-name"
							class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
						/>
					</div>
				</div>
				<div>
					<label for="last-name" class="block text-sm/6 font-semibold text-gray-900"
						>Last name</label
					>
					<div class="mt-2.5">
						<input
							type="text"
							name="last-name"
							id="last-name"
							autocomplete="family-name"
							class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
						/>
					</div>
				</div>
				<div class="sm:col-span-2">
					<label for="company" class="block text-sm/6 font-semibold text-gray-900">Company</label>
					<div class="mt-2.5">
						<input
							type="text"
							name="company"
							id="company"
							autocomplete="organization"
							class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
						/>
					</div>
				</div>
				<div class="sm:col-span-2">
					<label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
					<div class="mt-2.5">
						<input
							type="email"
							name="email"
							id="email"
							autocomplete="email"
							class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
						/>
					</div>
				</div>
				<div class="sm:col-span-2">
					<label for="phone-number" class="block text-sm/6 font-semibold text-gray-900"
						>Phone number</label
					>
					<div class="mt-2.5">
						<div
							class="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600"
						>
							<div class="grid shrink-0 grid-cols-1 focus-within:relative"></div>
							<input
								type="text"
								name="phone-number"
								id="phone-number"
								class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
								placeholder="123-456-7890"
							/>
						</div>
					</div>
				</div>
				<div class="sm:col-span-2">
					<label for="message" class="block text-sm/6 font-semibold text-gray-900">Message</label>
					<div class="mt-2.5">
						<textarea
							name="message"
							id="message"
							rows="4"
							class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
						></textarea>
					</div>
				</div>
				<div class="flex gap-x-4 sm:col-span-2">
					<div class="flex h-6 items-center">
						<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->

						<button
							type="button"
							class={`flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${toggle ? 'bg-blue-300' : 'bg-[#fefefe]'}`}
							role="switch"
							aria-checked={toggle}
							aria-labelledby="switch-1-label"
							on:click={handleToggle}
						>
							<span class="sr-only">Agree to policies</span>
							{#if toggle}
								<span
									aria-hidden="true"
									class="size-4 translate-x-3.5 transform rounded-full bg-blue-500 shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
								></span>
							{:else}
								<span
									class="size-4 translate-x-0 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
								></span>
							{/if}
						</button>
					</div>
					<label class="text-sm/6 text-gray-600" id="switch-1-label">
						By selecting this, you agree to our
						<a href="" class="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
					</label>
				</div>
			</div>
			<div class="mt-10">
				<button
					type="submit"
					class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>Let's talk</button
				>
			</div>
		</form>
	</div>
</section>
