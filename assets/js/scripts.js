var initializedCarousels = []
$(document).ready(function () {
	$("#banner").owlCarousel({
		navigation: false,
		loop: true,
		autoplay: true,
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

// // Select all links with hashes
// $('a[href*="#"]')
// 	// Remove links that don't actually link to anything
// 	.not('[href="#"]')
// 	.not('[href="#0"]')
// 	.click(function (event) {
// 		// On-page links
// 		if (
// 			location.pathname.replace(/^\//, "") ==
// 				this.pathname.replace(/^\//, "") &&
// 			location.hostname == this.hostname
// 		) {
// 			// Figure out element to scroll to
// 			var target = $(this.hash)
// 			target = target.length
// 				? target
// 				: $("[name=" + this.hash.slice(1) + "]")
// 			// Does a scroll target exist?
// 			if (target.length) {
// 				// Only prevent default if animation is actually gonna happen
// 				event.preventDefault()
// 				$("html, body").animate(
// 					{
// 						scrollTop: target.offset().top - 106,
// 					},
// 					1000,
// 					function () {
// 						// Callback after animation
// 						// Must change focus!
// 						var $target = $(target)
// 						$target.focus()
// 						if ($target.is(":focus")) {
// 							// Checking if the target was focused
// 							return false
// 						} else {
// 							$target.attr("tabindex", "-1") // Adding tabindex for elements not focusable
// 							$target.focus() // Set focus again
// 						}
// 					}
// 				)
// 			}
// 		}
// 	})
$(window).scroll(function () {
	var scroll = $(window).scrollTop()

	if (scroll >= 500) {
		$("nav").addClass("solidify")
	} else {
		$("nav").removeClass("solidify")
	}
})
