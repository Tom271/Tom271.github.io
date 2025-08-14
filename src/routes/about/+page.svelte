<script>
	import myImage from '$lib/assets/Tom.jpg';
</script>

<svelte:head>
	<title>About - Tom Hodgson</title>
</svelte:head>

<div class="about-header">
	<div class="about-content">
		<h1>About</h1>
		<div class="about-image mobile-image">
			<img src={myImage} alt="Tom" class="profile-image" />
		</div>
		<p>
			Before this I did a PhD in mathematics supervised by Michela Ottobre and Kevin Painter, working on invariant measures of interacting particle systems, both analytically and numerically.
		</p>
	</div>
	<div class="about-image desktop-image">
		<img src={myImage} alt="Tom" class="profile-image" />
	</div>
</div>

<style>
	.about-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: 2rem;
		position: relative;
		min-height: 320px; /* Ensure enough space for the image + top padding */
	}

	.about-content {
		flex: 1;
		max-width: calc(100% - 280px); /* Leave space for image + margin */
	}

	.desktop-image {
		flex-shrink: 0;
		position: absolute;
		right: 0;
		top: 2rem; /* Add padding from top */
	}

	.mobile-image {
		display: none;
		text-align: center;
		margin: 1.5rem 0;
	}

	.profile-image {
		width: 240px;
		height: 264px;
		object-fit: cover;
		border-radius: 50% / 45%;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	/* Style paragraph text within about-content */
	.about-content p {
		line-height: 1.6;
		margin-top: 1rem;
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.about-header {
			flex-direction: column;
			text-align: left;
			gap: 0;
			justify-content: center;
			min-height: auto;
		}

		.about-content {
			max-width: 100%;
		}

		.desktop-image {
			display: none;
		}

		.mobile-image {
			display: block;
		}

		.mobile-image .profile-image {
			width: 180px;
			height: 198px;
		}
	}

	@media (max-width: 480px) {
		.mobile-image .profile-image {
			width: 150px;
			height: 165px;
		}
	}
</style>
