<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/style.scss';
	// import { preloadCode, preloadData } from '$app/navigation';
	// preloadCode('/blog', '/about', '/blog/*');
</script>

<Header />
<main>
	<slot />
</main>
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/themes/prism-okaidia.min.css"
	integrity="sha512-mIs9kKbaw6JZFfSuo+MovjU+Ntggfoj8RwAmJbVXQ5mkAX5LlgETQEweFPI18humSPHymTb5iikEOKWF7I8ncQ=="
	crossorigin="anonymous"
	referrerpolicy="no-referrer"
/>

<footer class="footer">
	<div class="footer-container">
		<!-- Navigation Links -->
		<nav>
			<a href="/about">About</a>
			<!-- <a href="/services">Services</a> -->
			<!-- <a href="/faq">FAQ</a> -->
		</nav>

		<!-- Social Links -->
		<div class="social-links">
			<a aria-label="My Github Profile" href="https://github.com/tom271" target="_blank"
				><i class="fa-brands fa-github"></i></a
			>
			<a
				aria-label="My LinkedIn Profile"
				href="https://linkedin.com/in/thomasmhodgson"
				target="_blank"><i class="fa-brands fa-linkedin"></i></a
			>
		</div>

		<!-- Copyright Notice -->
		<div class="copyright">&copy; T. M. Hodgson</div>
	</div>
</footer>
