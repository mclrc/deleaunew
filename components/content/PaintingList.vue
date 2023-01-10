<template>
	<ul id="paintings">
		<li v-for="painting of data" :key="painting.title">
			<div class="painting">
				<img :src="painting.image" loading="lazy" />
				<ul class="painting-info">
					<li>
						<label>Name</label>
						<p>{{painting.title}}</p>
					</li>
					<li>
						<label>Entstehungsjahr</label>
						<p>{{new Date(painting.date).getFullYear()}}</p>
					</li>
					<li>
						<label>Technik</label>
						<p>{{painting.technique}}</p>
					</li>
					<li>
						<label>Maße</label>
						<p>{{painting.dimensions}} cm</p>
					</li>
					<li v-if="painting.description">
						<label>Beschreibung</label>
						<p>{{painting.description}}</p>
					</li>
				</ul>
			</div>
		</li>
	</ul>
</template>

<script lang="ts" setup>
const { data, pending, error, refresh } = await useAsyncData(
	'paintings',
	async () => (await queryContent('/_paintings/').find()).sort((a, b) => new Date(b.date) - new Date(a.date))
)
</script>

<style lang="scss" scoped>
#paintings {
	list-style: none;
	margin: 0;
	padding: 0;
}
.painting {
	margin-bottom: 3rem;
	> * {
		display: block;
	}
	img {
		width: 100%;
		display: block;
	}
}
.painting-info {
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
	li {
		margin-top: 1rem;
	}
	li:not(:last-child) {
		margin-right: 2rem;
	}
	label {
		font-size: .9em;
		margin: 0;
		font-weight: bold;
	}
	h3, p {
		font-size: 1em;
		margin: 0;
	}
}
</style>
