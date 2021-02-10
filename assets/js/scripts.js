var initializedCarousels = []
$(document).ready(function () {
	$("#banner").owlCarousel({
		navigation: false,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		pagination: true,
		items: 1,
	})

	initialize_owl($("#lubricant-slider"))

	let tabs = [
		{target: "#nav-lubricants", owl: "#lubricant-slider"},
		{target: "#nav-fuel", owl: "#fuel-slider"},
		{target: "#nav-lpg", owl: "#lpg-slider"},
	]

	// Setup 'bs.tab' event listeners for each tab
	tabs.forEach((tab) => {
		$(`a[href="${tab.target}"]`).on("shown.bs.tab", () =>
			initialize_owl($(tab.owl))
		)
		// .on("hide.bs.tab", () => destroy_owl($(tab.owl)))
	})

	$("#our-partners").owlCarousel({
		loop: true,
		margin: 10,
		pagination: true,
		items: 4,
	})
})

function initialize_owl(el) {
	el.owlCarousel({
		margin: 0,
		items: 3,
	})
}

function destroy_owl(el) {
	el.data("owlCarousel").destroy()
}
