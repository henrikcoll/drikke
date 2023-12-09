<template>
	<button :class="buttonClasses" class="px-4 py-2 text-sm font-medium tracking-wide">
		<slot />
	</button>
</template>

<script>

const types = {
	primary: "bg-blue-700 hover:bg-blue-600 text-white",
	secondary: "bg-gray-500 hover:bg-gray-700 text-white",
	success: "bg-green-500 hover:bg-green-700 text-white",
	danger: "bg-red-500 hover:bg-red-700 text-white",
	warning: "bg-yellow-500 hover:bg-yellow-700 text-white",
	info: "bg-blue-500 hover:bg-blue-700 text-white",
	light: "bg-gray-200 hover:bg-gray-400 text-gray-800",
	dark: "bg-gray-800 hover:bg-gray-900 text-white"
};

export default {
	props: {
		type: {
			type: String,
			default: "primary"
		},
		fontBold: {
			type: Boolean,
			default: true
		},
		rounded: {
			type: Boolean,
			default: true
		},
		class: {
			type: String,
			default: ""
		}
	},
	computed: {
		buttonClasses() {
			return [
				this.class,
				types[this.type],
				{
					"font-bold": this.fontBold,
					"rounded-md": this.rounded
				}
			];
		}
	}
}
</script>
